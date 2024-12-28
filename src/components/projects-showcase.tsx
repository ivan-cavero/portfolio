import { FolderGit2, GitBranch, GitCommit } from 'lucide-react'
import { t } from '../i18n/translations'

const projects = [
  {
    name: 'ERP System',
    type: 'Enterprise',
    status: 'Active Development',
    commits: 234,
    branches: 5
  },
  {
    name: 'Dashboard UI',
    type: 'Frontend',
    status: 'Completed',
    commits: 156,
    branches: 3
  },
  {
    name: 'API Gateway',
    type: 'Backend',
    status: 'Maintenance',
    commits: 89,
    branches: 2
  }
]

export function ProjectsShowcase({ locale }: { locale: 'en' | 'es' }) {
  return (
    <div className="panel col-span-full fade-in">
      <div className="panel-header">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FolderGit2 className="text-[var(--accent)]" size={16} />
            <span className="header-text">{t('projects.showcase', locale)}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div 
              key={project.name}
              className="panel grid-pattern p-4 slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-bold text-sm">{project.name}</h3>
                  <p className="text-xs text-[var(--accent)]">{project.type}</p>
                </div>
                <span className="technical-readout text-xs">
                  {project.status}
                </span>
              </div>
              <div className="flex gap-4 text-xs">
                <div className="flex items-center gap-1">
                  <GitCommit size={12} className="text-[var(--accent)]" />
                  <span>{project.commits} {t('commits', locale)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitBranch size={12} className="text-[var(--accent)]" />
                  <span>{project.branches} {t('branches', locale)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

