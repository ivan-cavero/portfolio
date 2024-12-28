'use client'

import { Monitor, Activity, AlertTriangle } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { t } from '../i18n/translations'

export function DataVisualizer({ locale }: { locale: 'en' | 'es' }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const [hasStartedPlaying, setHasStartedPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handleCanPlay = () => {
        console.log('Video can play')
        setIsLoading(false)
        video.play().catch(error => {
          console.error("Error attempting to play video:", error)
          setHasError(true)
        })
      }

      const handleWaiting = () => {
        console.log('Video is waiting for more data');
        if (!hasStartedPlaying) {
          setIsLoading(true);
        }
      }

      const handlePlaying = () => {
        console.log('Video is playing')
        setIsLoading(false)
        setHasStartedPlaying(true);
      };

      const handleError = (e: Event) => {
        const target = e.target as HTMLVideoElement
        console.error("Error loading video:", target.error)
        setHasError(true)
        setIsLoading(false)
      }

      video.addEventListener('canplay', handleCanPlay)
      video.addEventListener('waiting', handleWaiting)
      video.addEventListener('playing', handlePlaying)
      video.addEventListener('error', handleError)

      // Preload video metadata
      video.preload = 'metadata'

      // Start loading the video
      video.load()

      return () => {
        video.removeEventListener('canplay', handleCanPlay)
        video.removeEventListener('waiting', handleWaiting)
        video.removeEventListener('playing', handlePlaying)
        video.removeEventListener('error', handleError)
      }
    }
  }, [])

  return (
    <div className="panel h-full flex flex-col">
      <div className="panel-header">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <Monitor className="text-[var(--accent)]" size={16} />
            <span className="header-text">{t('system.analytics', locale)}</span>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="text-[var(--accent)] animate-pulse" size={16} />
            <span className="text-xs text-[var(--accent)]">{t('live.feed', locale)}</span>
          </div>
        </div>
      </div>

      <div className="p-6 flex-grow">
        <div className="relative h-full w-full bg-black/50 rounded-lg overflow-hidden border border-[var(--border)]">
          {isLoading && !hasStartedPlaying && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 z-10">
              <div className="text-[var(--accent)] animate-spin">
                <Activity size={48} />
              </div>
            </div>
          )}

          {hasError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70 z-10">
              <AlertTriangle size={48} className="text-red-500 mb-4" />
              <p className="text-red-500 text-center">{t('video.error', locale)}</p>
            </div>
          )}

          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/interface-visualization.mp4" type="video/mp4" />
            {t('video.not.supported', locale)}
          </video>

          {/* Overlay effect */}
          <div className="absolute inset-0 bg-[var(--accent)]/5"></div>

          {/* Scan line effect */}
          <div className="absolute inset-0 bg-scan-lines pointer-events-none"></div>

          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-[var(--accent)]"></div>
          <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-[var(--accent)]"></div>
          <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-[var(--accent)]"></div>
          <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-[var(--accent)]"></div>
        </div>
      </div>
    </div>
  )
}

