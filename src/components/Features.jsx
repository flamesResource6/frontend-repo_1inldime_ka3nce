import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Mic, Sparkles, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: 'Natural Voice',
    desc: 'Crisp, low-latency streaming with studio-grade clarity.'
  },
  {
    icon: Cpu,
    title: 'On-Device + Cloud',
    desc: 'Hybrid inference for speed and privacy wherever you are.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure by Default',
    desc: 'End-to-end encryption, role-based access, and audit trails.'
  },
  {
    icon: Sparkles,
    title: 'Adaptive Persona',
    desc: 'Tone, style, and behavior that match your brand.'
  },
];

export default function Features() {
  return (
    <section className="relative py-24">
      {/* Ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-16 -left-16 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute top-1/3 -right-24 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-purple-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold"
          >
            Designed for modern teams
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-3 text-white/70 max-w-2xl mx-auto"
          >
            Smooth, minimal, and delightful. Everything you need, without the noise.
          </motion.p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 hover:border-white/20 transition"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10 border border-white/10">
                  <f.icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold">{f.title}</h3>
              </div>
              <p className="mt-3 text-sm text-white/70">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
