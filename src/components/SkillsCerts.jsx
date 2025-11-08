import { Wrench, Award, GraduationCap, Server, Network, TerminalSquare } from 'lucide-react';

export default function SkillsCerts() {
  return (
    <section id="skills" className="py-16 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-8">
          <Wrench className="h-5 w-5 text-teal-600" />
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Skills</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
            <h3 className="font-semibold text-slate-900">Testing & Analysis</h3>
            <p className="mt-2 text-sm text-slate-700">Burp Suite, Nmap, Wireshark, Metasploit, Kali, John the Ripper</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
            <h3 className="font-semibold text-slate-900">Programming & Scripting</h3>
            <p className="mt-2 text-sm text-slate-700">Python, Java, Bash, SQL</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
            <h3 className="font-semibold text-slate-900">Web & Frameworks</h3>
            <p className="mt-2 text-sm text-slate-700">HTML, CSS, Django, PHP (secure coding)</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
            <h3 className="font-semibold text-slate-900">Platforms & CLI</h3>
            <p className="mt-2 text-sm text-slate-700">Linux, Bash, Windows cmd</p>
          </div>
          <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
            <h3 className="font-semibold text-slate-900">Soft Skills</h3>
            <p className="mt-2 text-sm text-slate-700">Teamwork, leadership (Cultural Organizing Committee Head), dependability, ethical mindset</p>
          </div>
        </div>

        <div id="education" className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <GraduationCap className="h-5 w-5 text-teal-600" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Education</h2>
          </div>
          <ul className="space-y-3 text-sm text-slate-800">
            <li><span className="font-medium">M.S. Cybersecurity</span>, University of Mumbai — <em>Expected 2026</em></li>
            <li><span className="font-medium">B.Sc. IT</span>, Vidyalankar School of Information Technology — <em>2021–2024</em></li>
          </ul>
        </div>

        <div id="certifications" className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <Award className="h-5 w-5 text-teal-600" />
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Certifications</h2>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-800">
            <li>CCNA (RST Forms)</li>
            <li>Certified Network Security Practitioner (CNSP) — The SecOps Group</li>
            <li>Mastercard Cybersecurity Job Simulation — Forage</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
