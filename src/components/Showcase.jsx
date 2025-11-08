import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Realtime Voice Demo',
    desc: 'Elegant input, live transcription, and expressive responses.',
    tag: 'Experience'
  },
  {
    title: 'Knowledge Grounding',
    desc: 'Connect your docs and keep responses verifiable and fresh.',
    tag: 'Knowledge'
  },
  {
    title: 'Brand Persona',
    desc: 'Dial in tone, rhythm, and attitude for your audience.',
    tag: 'Persona'
  },
];

export default function Showcase() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Show, don’t tell
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-white/70 max-w-2xl mx-auto"
          >
            A curated set of interactions that highlights speed and clarity.
          </motion.p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-fuchsia-500/10 via-purple-500/10 to-sky-500/10" />
              <div className="flex items-start justify-between">
                <span className="text-xs rounded-full border border-white/15 px-2 py-1 text-white/70">{item.tag}</span>
              </div>
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-white/70">{item.desc}</p>
              <div className="mt-6 inline-flex items-center text-sm text-white/80">
                Explore
                <svg viewBox="0 0 24 24" className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
