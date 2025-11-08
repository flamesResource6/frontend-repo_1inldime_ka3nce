import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.4]);

  return (
    <section ref={ref} className="relative min-h-[100svh] flex items-center overflow-hidden">
      {/* Background 3D */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for depth */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/40 via-transparent to-[#0a0a0f]" />
        <div className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-[#0a0a0f]/40 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#0a0a0f]/30 to-transparent" />
      </div>

      {/* Foreground content */}
      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-6xl px-6 w-full">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="text-5xl md:text-6xl/[1.1] font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/60 drop-shadow-sm"
            >
              Conversational AI, elevated.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
              className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl"
            >
              A modern, minimal interface with a living 3D aura. Built for speed, clarity, and delightful motion.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#features"
                className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium border border-white/15 bg-white/10 hover:bg-white/15 transition-colors"
              >
                Get Started
                <svg viewBox="0 0 24 24" className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </a>
              <a
                href="#showcase"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium border border-white/10 hover:border-white/20"
              >
                View Showcase
              </a>
            </motion.div>
          </div>

          {/* Accent stats card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.25 }}
            className="lg:col-span-5"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { k: 'Latency', v: '35ms' },
                  { k: 'Sessions', v: '24k+' },
                  { k: 'Uptime', v: '99.9%' },
                ].map((item) => (
                  <div key={item.k} className="rounded-2xl p-4 bg-white/5 border border-white/10">
                    <div className="text-xs uppercase tracking-wide text-white/60">{item.k}</div>
                    <div className="mt-1 text-xl font-semibold">{item.v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-sm text-white/70">
                Real-time voice understanding powered by a responsive inference pipeline and a resilient edge network.
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 flex items-center gap-3 text-white/60"
        >
          <span className="inline-flex h-8 w-5 items-start justify-center rounded-full border border-white/20 p-1">
            <span className="h-2 w-1 rounded-full bg-white/80 animate-bounce" />
          </span>
          Scroll to explore
        </motion.div>
      </motion.div>
    </section>
  );
}
