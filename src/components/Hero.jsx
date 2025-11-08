import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/60 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100">Security Through Actionable Testing</p>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
            Cybersecurity fresher with hands-on VAPT, RBAC hardening, and secure coding—focused on turning findings into fixes.
          </h1>
          <p className="mt-4 text-slate-700 text-base sm:text-lg">
            Identified and remediated XSS/SQLi, enforced RBAC, and delivered structured pentest reports.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-teal-600 px-5 py-2.5 text-white shadow-sm hover:bg-teal-700">
              View Projects
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener" className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-slate-800 hover:bg-slate-50">
              Download Résumé
            </a>
          </div>
          <div className="mt-6 text-sm text-slate-600">
            Dadar, Mumbai • <a href="mailto:ganiket25201001@gmail.com" className="underline decoration-dotted">ganiket25201001@gmail.com</a> • <a href="tel:+919082112970" className="underline decoration-dotted">+91-9082112970</a> • <a href="https://www.linkedin.com/in/aniket-gupta-366662257" target="_blank" rel="noreferrer" className="underline decoration-dotted">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
}
