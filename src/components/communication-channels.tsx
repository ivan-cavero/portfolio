import { AlertTriangle, Mail, Linkedin, Github, Download } from 'lucide-react'
import { t } from '../i18n/translations'

export function CommunicationChannels({ locale }: { locale: 'en' | 'es' }) {
  return (
    <div className="panel col-span-2 lg:col-span-1">
      <div className="panel-header bg-red-500/20 border-red-500/50">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <AlertTriangle className="text-red-500 animate-pulse" size={16} />
            <span className="header-text !text-red-500">{t('contact.channels', locale)}</span>
          </div>
          <div className="text-red-500 text-xs animate-pulse">ALERT</div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          <div className="data-display bg-red-500/5 border-red-500/30">
            <div className="flex items-center justify-between">
              <span className="text-xs">{t('alert.status', locale)}</span>
              <span className="text-red-500 text-xs animate-pulse">{t('urgent.contact', locale)}</span>
            </div>
          </div>

          <div className="space-y-2">
            <a 
              href="mailto:ivangonzalezcavero@gmail.com"
              className="flex items-center gap-2 p-3 bg-black/30 hover:bg-[var(--accent)]/10 transition-colors w-full"
            >
              <Mail size={16} className="text-[var(--accent)]" />
              <span className="text-sm">ivangonzalezcavero@gmail.com</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/ivangonzalezcavero/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-black/30 hover:bg-[var(--accent)]/10 transition-colors w-full"
            >
              <Linkedin size={16} className="text-[var(--accent)]" />
              <span className="text-sm">LinkedIn Profile</span>
            </a>
            
            <a 
              href="https://github.com/ivan-cavero"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 p-3 bg-black/30 hover:bg-[var(--accent)]/10 transition-colors w-full"
            >
              <Github size={16} className="text-[var(--accent)]" />
              <span className="text-sm">GitHub Profile</span>
            </a>
          </div>

          <div className="space-y-2">
            <a
              href="/Ivan-Gonzalez-CV-EN.pdf"
              download
              className="flex items-center justify-center gap-2 p-3 bg-black/30 hover:bg-[var(--accent)]/10 transition-colors hover:text-[var(--accent)] w-full"
            >
              <Download size={16} className="text-[var(--accent)]" />
              {t('download.cv.en', locale)}
            </a>
            <a
              href="/Ivan-Gonzalez-CV-ES.pdf"
              download
              className="flex items-center justify-center gap-2 p-3 bg-black/30 hover:bg-[var(--accent)]/10 transition-colors hover:text-[var(--accent)] w-full"
            >
              <Download size={16} className="text-[var(--accent)]" />
              {t('download.cv.es', locale)}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

