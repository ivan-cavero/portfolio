import { History, GitBranch, Star, Link } from 'lucide-react'
import { t, type TranslationKey } from '../i18n/translations'

const missions = [
  {
    role: 'tech.lead' as TranslationKey,
    company: 'Solaris Developments',
    companyUrl: 'https://solarisdevelopments.com',
    period: 'Apr 2023 - Present',
    location: 'location' as TranslationKey,
    achievements: [
      'mission.achievement1',
      'mission.achievement2',
      'mission.achievement3',
      'mission.achievement4'
    ] as TranslationKey[],
    technologies: ['Vue.js', 'Node.js', 'Azure', 'Docker'],
    links: [
      {
        label: 'company.profile' as TranslationKey,
        url: 'https://linkedin.com/company/solaris-developments'
      }
    ]
  },
  {
    role: 'full.stack.developer' as TranslationKey,
    company: 'Martico',
    companyUrl: 'https://martico.com',
    period: 'May 2022 - Apr 2023',
    location: 'location' as TranslationKey,
    achievements: [
      'mission.achievement5',
      'mission.achievement6',
      'mission.achievement7'
    ] as TranslationKey[],
    technologies: ['Vue.js', 'Express', 'MySQL', 'Docker'],
    links: [
      {
        label: 'company.profile' as TranslationKey,
        url: 'https://linkedin.com/company/martico'
      }
    ]
  }
];

export function MissionLog({ locale }: { locale: 'en' | 'es' }) {
  return (
    <div className="panel col-span-full fade-in">
      <div className="panel-header">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <History className="text-[var(--accent)]" size={16} />
            <span className="header-text">{t('mission.history', locale)}</span>
          </div>
          <div className="flex items-center gap-4 text-xs text-[var(--accent)]">
            <div className="flex items-center gap-1">
              <GitBranch size={12} />
              <span>2+ {t('experience', locale)}</span>
            </div>
            <div className="flex items-center gap-1">
              <Star size={12} />
              <span>{t('multiple.missions', locale)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-6">
          {missions.map((mission, index) => (
            <div 
              key={mission.company}
              className={`data-display ${
                index === 0 ? 'border-[var(--accent)] bg-[var(--accent)]/5' : ''
              } slide-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-wrap justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold">{t(mission.role, locale)}</h3>
                  <a 
                    href={mission.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:underline flex items-center gap-1"
                  >
                    {mission.company}
                    <Link size={12} />
                  </a>
                  <p className="text-sm text-gray-400 mt-1">{t(mission.location, locale)}</p>
                </div>
                <div className="text-xs font-mono bg-black/30 px-2 py-1 rounded border border-[var(--border)]">
                  {mission.period.replace('Present', t('present', locale))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs text-[var(--accent)] mb-2">{t('achievements', locale)}</h4>
                  <div className="space-y-2">
                    {mission.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start gap-2 text-sm">
                        <div className="w-1 h-1 rounded-full bg-[var(--accent)] mt-2" />
                        <span>{t(achievement, locale)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs text-[var(--accent)] mb-2">{t('technologies', locale)}</h4>
                  <div className="flex flex-wrap gap-2">
                    {mission.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs px-2 py-1 bg-black/30 rounded border border-[var(--border)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {mission.links.length > 0 && (
                  <div>
                    <h4 className="text-xs text-[var(--accent)] mb-2">{t('related.links', locale)}</h4>
                    <div className="flex flex-wrap gap-2">
                      {mission.links.map((link) => (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs flex items-center gap-1 px-2 py-1 bg-black/30 rounded border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
                        >
                          {t(link.label, locale)}
                          <Link size={10} />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

