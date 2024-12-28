import { Cpu, Server, Database, Cloud } from 'lucide-react'
import { t } from '../i18n/translations'

interface Technology {
  name: string;
  level: 'Advanced' | 'Intermediate' | 'Beginner' | 'Familiar';
}

interface TechTableProps {
  title: string;
  icon: React.ElementType;
  techs: Technology[];
}

const technologies: Record<string, Technology[]> = {
  frontend: [
    { name: 'JavaScript/TypeScript', level: 'Advanced' },
    { name: 'React & Vue', level: 'Advanced' },
    { name: 'CSS/Tailwind', level: 'Advanced' }
  ],
  backend: [
    { name: 'Node.js', level: 'Advanced' },
    { name: 'API Design', level: 'Intermediate' }
  ],
  infrastructure: [
    { name: 'Docker', level: 'Intermediate' },
    { name: 'Azure', level: 'Familiar' }
  ]
}

const experienceLevels = [
  { level: 'Advanced', description: '2000+ hours', color: 'text-green-400', bgColor: 'bg-green-400/20' },
  { level: 'Intermediate', description: '500-2000 hours', color: 'text-yellow-400', bgColor: 'bg-yellow-400/20' },
  { level: 'Beginner', description: '100-500 hours', color: 'text-blue-400', bgColor: 'bg-blue-400/20' },
  { level: 'Familiar', description: '<100 hours', color: 'text-purple-400', bgColor: 'bg-purple-400/20' }
]

export function TechnicalSpecs({ locale }: { locale: 'en' | 'es' }) {
  return (
    <div className="panel h-full flex flex-col">
      <div className="panel-header">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Cpu className="text-[var(--accent)]" size={16} />
            <span className="header-text">{t('tech.specs', locale)}</span>
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col gap-8 flex-grow">
        <div className="data-display bg-black/40 p-4">
          <div className="flex flex-wrap gap-4 justify-around">
            {experienceLevels.map((level) => (
              <div key={level.level} className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${level.bgColor}`}></div>
                <div className="flex items-center gap-1">
                  <span className={`text-xs font-bold ${level.color}`}>{level.level}</span>
                  <span className="text-xs text-gray-400">({level.description})</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-grow">
          <TechTable 
            title={t('frontend', locale)} 
            icon={Server} 
            techs={technologies.frontend} 
          />
          <TechTable 
            title={t('backend', locale)} 
            icon={Database} 
            techs={technologies.backend} 
          />
          <TechTable 
            title={t('infrastructure', locale)} 
            icon={Cloud} 
            techs={technologies.infrastructure} 
          />
        </div>
      </div>
    </div>
  )
}

function TechTable({ title, icon: Icon, techs }: TechTableProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Icon size={14} className="text-[var(--accent)]" />
        <h3 className="header-text">{title}</h3>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-left text-xs text-[var(--accent)] pb-4">{t('system', 'en')}</th>
            <th className="text-right text-xs text-[var(--accent)] pb-4 min-w-[100px]">{t('status', 'en')}</th>
          </tr>
        </thead>
        <tbody className="space-y-4">
          {techs.map((tech) => (
            <tr key={tech.name} className="border-b border-[var(--border)]">
              <td className="py-4 pr-4">{tech.name}</td>
              <td className="py-4 text-right whitespace-nowrap">
                <span className={`px-3 py-1.5 rounded text-xs ${
                  tech.level === 'Advanced' ? 'bg-green-400/20 text-green-400' :
                  tech.level === 'Intermediate' ? 'bg-yellow-400/20 text-yellow-400' :
                  tech.level === 'Beginner' ? 'bg-blue-400/20 text-blue-400' :
                  'bg-purple-400/20 text-purple-400'
                }`}>
                  {tech.level}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

