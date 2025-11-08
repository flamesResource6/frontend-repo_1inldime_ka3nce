import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);

  return (
    <section id="home" ref={ref} className="relative min-h-[100vh] flex items-center overflow-hidden">
      {/* 3D Spline Background */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/N8g2VNcx8Rycz93J/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        {/* Soft gradient to ensure foreground text readability. Keep it non-blocking for interactions. */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/80" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 w-full">
        <motion.div style={{ y, opacity }} className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full border border-teal-100 shadow-sm/10 backdrop-blur"
          >
            Security Through Actionable Testing
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.05 }}
            className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 leading-tight"
          >
            Cybersecurity fresher with hands-on VAPT, RBAC hardening, and secure coding—focused on turning findings into fixes.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.12 }}
            className="mt-4 text-slate-700 text-base sm:text-lg"
          >
            Identified and remediated XSS/SQLi, enforced RBAC, and delivered structured pentest reports.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.18 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-md bg-teal-600 px-5 py-2.5 text-white shadow-sm hover:bg-teal-700 transition-colors"
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-md border border-slate-300 px-5 py-2.5 text-slate-800 hover:bg-slate-50 transition-colors"
            >
              Download Résumé
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.24 }}
            className="mt-6 text-sm text-slate-600"
          >
            Dadar, Mumbai •{' '}
            <a href="mailto:ganiket25201001@gmail.com" className="underline decoration-dotted">
              ganiket25201001@gmail.com
            </a>{' '}
            •{' '}
            <a href="tel:+919082112970" className="underline decoration-dotted">
              +91-9082112970
            </a>{' '}
            •{' '}
            <a
              href="https://www.linkedin.com/in/aniket-gupta-366662257"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-dotted"
            >
              LinkedIn
            </a>
          </motion.div>
        </motion.div>

        {/* Smooth scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: 'easeOut' }}
          className="absolute left-1/2 -bottom-2 sm:bottom-6 -translate-x-1/2"
        >
          <div className="h-10 w-6 rounded-full border border-slate-300/80 flex items-start justify-center p-1 bg-white/60 backdrop-blur">
            <motion.span
              animate={{ y: [0, 18, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
              className="h-2 w-2 rounded-full bg-slate-600"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
