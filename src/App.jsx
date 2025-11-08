import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsCerts from './components/SkillsCerts';
import ResearchContact from './components/ResearchContact';

function SEO() {
  useEffect(() => {
    document.title = 'Aniket Gupta | Cybersecurity Fresher—VAPT, AppSec, Secure Coding';

    const metaDesc = document.querySelector('meta[name="description"]') || document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    metaDesc.setAttribute(
      'content',
      'Cybersecurity fresher with hands-on VAPT, OWASP Top 10 testing, RBAC hardening, and clear reporting with PoC. Open to internships and entry-level roles.'
    );
    if (!metaDesc.parentElement) document.head.appendChild(metaDesc);

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Aniket Gupta',
      jobTitle: 'Cybersecurity Fresher',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dadar, Mumbai',
        addressCountry: 'IN'
      },
      sameAs: ['https://www.linkedin.com/in/aniket-gupta-366662257']
    });
    document.head.appendChild(script);

    return () => {
      if (script && script.parentElement) script.parentElement.removeChild(script);
    };
  }, []);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO />
      <Navbar />
      <Hero />

      <section id="about" className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">About</h2>
          <p className="mt-3 max-w-3xl text-slate-700">
            Highly motivated cybersecurity enthusiast with foundation in secure web development and VAPT. Comfortable with Burp, Nmap, Metasploit; experienced writing clear reports (Description, Impact, Recommendation, PoC).
          </p>
        </div>
      </section>

      <Experience />
      <Projects />
      <SkillsCerts />
      <section id="research-anchor" className="sr-only">Research</section>
      <ResearchContact />
    </div>
  );
}
