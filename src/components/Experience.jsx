import { ShieldCheck, Lock, Bug, ClipboardList } from 'lucide-react';

function ExperienceCard({ title, role, period, bullets }) {
  return (
    <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-slate-900 font-semibold">{title}</h3>
          <p className="text-sm text-slate-600">{role} • {period}</p>
        </div>
      </div>
      <ul className="mt-3 space-y-2 text-sm text-slate-700 list-disc pl-5">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <ShieldCheck className="h-5 w-5 text-teal-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Experience</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <ExperienceCard
            title="CyberSmithSECURE Pvt. Ltd."
            role="Intern"
            period="Apr 2025–Sep 2025"
            bullets={[
              'Performed VAPT on live web apps; found XSS, IDOR, injection, clickjacking, broken access control aligned to OWASP Top 10.',
              'Reported auth/session issues: weak password policies, JWT mismanagement, cleartext credential exposure.',
              'Delivered structured reports with Description/Impact/Recommendation/PoC.'
            ]}
          />
          <ExperienceCard
            title="NIRF – University of Mumbai"
            role="Intern"
            period="Dec 2024–Mar 2025"
            bullets={[
              'Built PHP site for departments; fixed SQLi/XSS via validation, sanitization, escaping.',
              'Implemented RBAC for secure permissions.'
            ]}
          />
        </div>
      </div>
    </section>
  );
}
