import { Terminal, MapPin, Brain, Target, Rocket } from 'lucide-react'
import { t } from '../i18n/translations'

export function CommanderProfile({ locale }: { locale: 'en' | 'es' }) {
  return (
    <div className="panel col-span-2 fade-in">
      <div className="panel-header">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="text-[var(--accent)]" size={16} />
            <span className="header-text">{t('mission.status', locale)}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="status-indicator active bg-green-500" />
          </div>
        </div>
      </div>

      <div className="p-6 grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="slide-in">
            <h1 className="text-4xl font-bold mb-2">Ivan González</h1>
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={14} className="text-[var(--accent)]" />
              <span>Valencia, España</span>
            </div>
          </div>

          <div className="space-y-4 slide-in" style={{ animationDelay: '0.2s' }}>
            <div className="data-display">
              <h2 className="text-[var(--accent)] mb-2 text-sm">MISSION OBJECTIVES:</h2>
              <div className="space-y-2 text-sm">
                <p>"Full Stack Developer passionate about creating innovative solutions and pushing technological boundaries."</p>
                <p>"Constantly learning and evolving, with a special focus on frontend excellence and user experience."</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 slide-in" style={{ animationDelay: '0.3s' }}>
            <div className="data-display bg-green-500/10 border-green-500/30">
              <div className="text-green-500 text-xs mb-2 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                Live Mission
              </div>
              <div className="text-sm">Tech Lead @ Solaris</div>
            </div>
            <div className="data-display">
              <div className="text-[var(--accent)] text-xs mb-2">Experience</div>
              <div className="text-sm">3+ Years Active</div>
            </div>
          </div>
        </div>

        <div className="data-display slide-in" style={{ animationDelay: '0.4s' }}>
          <h2 className="text-[var(--accent)] mb-4 text-sm">COMMANDER ATTRIBUTES</h2>

          <div className="space-y-4">
            <div>
              <h3 className="text-[var(--accent)] text-xs mb-2">Core Skills</h3>
              <div className="grid grid-cols-2 gap-2">
                <div className="data-display text-center text-sm">Problem Solver</div>
                <div className="data-display text-center text-sm">Quick Learner</div>
                <div className="data-display text-center text-sm">Team Leader</div>
                <div className="data-display text-center text-sm">Innovator</div>
              </div>
            </div>

            <div>
              <h3 className="text-[var(--accent)] text-xs mb-2">Mission Focus</h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                  <span>Frontend Excellence</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                  <span>Performance Optimization</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-[var(--accent)]" />
                  <span>Team Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

