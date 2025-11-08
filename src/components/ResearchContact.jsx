import { FileText, Mail, Phone, Linkedin } from 'lucide-react';

export default function ResearchContact() {
  return (
    <section id="research" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <FileText className="h-5 w-5 text-teal-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Research</h2>
            </div>
            <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
              <h3 className="font-semibold text-slate-900">HID Attack Prevention and Mitigation</h3>
              <p className="mt-2 text-sm text-slate-700">Explores threat models of Human Interface Device (HID) attacks such as Rubber Ducky payloads and BadUSB, evaluates detection strategies using USB event telemetry, and proposes layered mitigations including device whitelisting, endpoint hardening, and user-awareness drills.</p>
              <a href="#" className="mt-3 inline-flex text-teal-700 hover:text-teal-800">Read Paper</a>
            </div>
          </div>
          <div id="contact">
            <div className="flex items-center gap-2 mb-6">
              <Mail className="h-5 w-5 text-teal-600" />
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">Contact</h2>
            </div>
            <div className="rounded-xl border border-slate-200 p-5 bg-white shadow-sm">
              <form className="grid gap-4">
                <input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your name" type="text" required />
                <input className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Your email" type="email" required />
                <textarea className="w-full rounded-md border border-slate-300 px-3 py-2 h-28 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="Message" required />
                <button type="submit" className="inline-flex justify-center rounded-md bg-teal-600 px-5 py-2.5 text-white shadow-sm hover:bg-teal-700">Send</button>
              </form>
              <div className="mt-4 text-sm text-slate-700 space-y-1">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /><a href="mailto:ganiket25201001@gmail.com" className="underline decoration-dotted">ganiket25201001@gmail.com</a></p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /><a href="tel:+919082112970" className="underline decoration-dotted">+91-9082112970</a></p>
                <p className="flex items-center gap-2"><Linkedin className="h-4 w-4" /><a href="https://www.linkedin.com/in/aniket-gupta-366662257" target="_blank" rel="noreferrer" className="underline decoration-dotted">LinkedIn</a></p>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-16 rounded-xl border border-slate-200 p-6 bg-white shadow-sm text-center">
          <p className="text-slate-900 font-medium">Open to internships and entry-level cybersecurity roles. Let’s secure your apps.</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a href="mailto:ganiket25201001@gmail.com" className="inline-flex items-center justify-center rounded-md bg-teal-600 px-4 py-2 text-white hover:bg-teal-700">Email Me</a>
            <a href="https://www.linkedin.com/in/aniket-gupta-366662257" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50">View LinkedIn</a>
            <a href="/resume.pdf" target="_blank" rel="noopener" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-4 py-2 text-slate-800 hover:bg-slate-50">Download Résumé</a>
          </div>
        </footer>
      </div>
    </section>
  );
}
