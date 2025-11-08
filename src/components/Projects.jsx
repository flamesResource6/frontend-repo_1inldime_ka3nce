import { BadgeCheck, Code, FileSearch } from 'lucide-react';

function ProjectCard({ title, description, badges, cta }) {
  return (
    <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm flex flex-col">
      <div className="flex-1">
        <h3 className="text-slate-900 font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-slate-700">{description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {badges.map((b, i) => (
            <span key={i} className="text-xs px-2 py-1 rounded-full border border-slate-200 text-slate-700 bg-slate-50">{b}</span>
          ))}
        </div>
      </div>
      {cta && (
        <div className="mt-4">
          <a href={cta.href} target={cta.external ? '_blank' : undefined} rel={cta.external ? 'noreferrer' : undefined} className="inline-flex items-center gap-2 text-teal-700 hover:text-teal-800">
            <BadgeCheck className="h-4 w-4" /> {cta.label}
          </a>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <Code className="h-5 w-5 text-teal-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Projects</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="SMS Spam Detection App"
            description="Python + basic NLP; custom dataset; 90%+ detection accuracy; real-time spam blocking."
            badges={["Python", "NLP", "Accuracy 90%+", "Real-time"]}
          />
          <ProjectCard
            title="Personal Pentest Lab"
            description="DVWA, Juice Shop, Metasploitable on local VMs; used Burp Suite, Nmap, SQLMap; documented OWASP Top 10 findings with a clear pentest report."
            badges={["DVWA", "Juice Shop", "Burp", "Nmap", "SQLMap", "OWASP Top 10"]}
            cta={{ href: '#', label: 'View Pentest Report Sample', external: false }}
          />
        </div>
      </div>
    </section>
  );
}
