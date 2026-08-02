'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Activity,
  Award,
  Briefcase,
  Compass,
  Globe,
  LayoutGrid,
  MessageCircle,
  Palette,
  Shield,
  Sparkles,
  Target,
  Zap,
} from 'lucide-react';

const navLinks = ['Services', 'Work', 'Process', 'About', 'Contact'];

const stats = [
  { value: '100+', label: 'Brands Helped' },
  { value: '250+', label: 'Projects Completed' },
  { value: '10M+', label: 'Marketing Impressions' },
  { value: '98%', label: 'Client Satisfaction' },
];

const serviceGroups = [
  {
    title: 'Brand Identity',
    items: ['Logo Design', 'Brand Guidelines'],
  },
  {
    title: 'Social Media',
    items: ['Instagram', 'Facebook', 'LinkedIn', 'Content Strategy'],
  },
  {
    title: 'Paid Advertising',
    items: ['Meta Ads', 'Google Ads', 'Lead Generation'],
  },
  {
    title: 'Web Experience',
    items: ['Business Websites', 'Landing Pages', 'E-Commerce'],
  },
  {
    title: 'Creative Content',
    items: ['Graphic Design', 'Motion Graphics', 'Short-form Videos', 'Photography'],
  },
  {
    title: 'Business Growth',
    items: ['Marketing Consultation', 'Funnels', 'Automation'],
  },
];

const whyCards = [
  { icon: Compass, title: 'Creative Strategy', description: 'Luxury-first campaigns built for measurable growth.' },
  { icon: Palette, title: 'Premium Design', description: 'Refined visual systems with compelling brand storytelling.' },
  { icon: Target, title: 'Data Driven', description: 'Performance tracking that maximizes every media dollar.' },
  { icon: Zap, title: 'Fast Delivery', description: 'Agile execution without sacrificing quality or craft.' },
  { icon: Shield, title: 'Long-Term Partnership', description: 'A collaborative relationship designed to scale.' },
];

const processSteps = ['Discovery', 'Strategy', 'Design', 'Launch', 'Scale'];

const featuredWork = [
  { title: 'Jharoka Resort', label: 'Hospitality', accent: 'Brand Growth' },
  { title: 'Cloudy Stays', label: 'Travel', accent: 'Audience Engagement' },
  { title: '4 Beans Coffee Shop', label: 'Food & Beverage', accent: 'Meta Ads' },
  { title: 'Noor Events', label: 'Lifestyle', accent: 'Launch Performance' },
];

const testimonials = [
  {
    quote: 'Working with Continental Luxe Marketing was the difference between a nice-looking brand and one that actually moves the needle. Amjad helped us reshape Jharoka Resort’s digital identity, and the first campaign delivered stronger bookings with lower spend.',
    name: 'Amjad Ali',
    role: 'CEO, Jharoka Resort',
    result: 'Meta ads, branding, content & social management',
  },
  {
    quote: 'The team brought modern storytelling and performance discipline to Cloudy Stays. Our social campaigns felt premium, the content cut through the market, and we saw meaningful website traffic from day one.',
    name: 'Nabeel',
    role: 'CEO, Cloudy Stays',
    result: 'Meta ads, content creation & social media management',
  },
  {
    quote: 'Continental Luxe Marketing scaled our café presence using Meta ads in a way that actually felt authentic. Zohaib and the team delivered a clear return while raising our local brand profile.',
    name: 'Zohaib',
    role: 'Owner, 4 Beans Coffee Shop',
    result: 'Meta ads with measurable lift',
  },
];

export default function HomePage() {
  const [formState, setFormState] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: 'Brand Identity',
    message: '',
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const text = `Name: ${formState.name}%0ACompany: ${formState.company}%0AEmail: ${formState.email}%0APhone: ${formState.phone}%0AService: ${formState.service}%0AMessage: ${formState.message}`;
    const url = `https://wa.me/923708919799?text=${text}`;
    window.open(url, '_blank');
  };

  return (
    <main className="overflow-x-hidden">
      <header className="sticky top-0 z-40 border-b border-white/10 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Primary navigation">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.35em] text-white/90">
            Continental Luxe Marketing
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-sm text-white/70 transition hover:text-white">
                {link}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#contact" className="hidden rounded-full border border-white/15 bg-white/5 px-5 py-2 text-sm text-white transition hover:border-accent hover:text-accent md:inline-flex">
              Book Strategy Call
            </a>
            <a href="#contact" className="inline-flex items-center rounded-full bg-accent px-5 py-2 text-sm font-semibold text-black transition hover:bg-[#b6912d]">
              <span>Inquire</span>
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="relative overflow-hidden px-6 pb-20 pt-12 lg:px-8">
        <div className="absolute inset-x-0 top-0 h-80 bg-gradient-to-b from-white/5 to-transparent blur-3xl" aria-hidden="true" />
        <div className="mx-auto flex max-w-7xl flex-col gap-16 lg:flex-row lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-accent/90">Luxury Digital Marketing Agency</p>
            <h1 className="mt-6 text-5xl font-semibold leading-tight tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              We Build Brands That Scale.
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-muted sm:text-lg">
              Continental Luxe Marketing helps businesses grow through branding, social media, websites, paid advertising, content creation, and conversion-focused marketing strategies.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#contact" className="primary-button shadow-glow hover:scale-[1.01]">
                Book Free Strategy Call
              </a>
              <a href="#work" className="secondary-button shadow-glow hover:scale-[1.01]">
                View Our Work
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="glass-panel relative overflow-hidden rounded-[32px] border border-white/10 p-8 shadow-glow ring-1 ring-white/10">
              <div className="absolute -left-16 top-4 h-20 w-20 rounded-full bg-accent/15 blur-2xl" />
              <div className="absolute -right-10 top-20 h-28 w-28 rounded-full bg-white/5 blur-3xl" />
              <div className="relative grid gap-5">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/80 shadow-xl">
                  <div className="mb-4 flex items-center justify-between text-xs uppercase tracking-[0.26em] text-white/50">
                    <span>Brand</span>
                    <span>Snapshot</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span>Impressions generated</span>
                      <span className="font-semibold text-white">10M+</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-2 w-3/4 rounded-full bg-accent" />
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-black/70 p-5 shadow-xl">
                    <p className="text-sm uppercase tracking-[0.24em] text-white/50">Campaigns</p>
                    <p className="mt-4 text-3xl font-semibold text-white">High ROI</p>
                    <p className="mt-2 text-sm text-muted">Low spend, higher return on ad spend.</p>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-black/70 p-5 shadow-xl">
                    <p className="text-sm uppercase tracking-[0.24em] text-white/50">Creative</p>
                    <p className="mt-4 text-3xl font-semibold text-white">9.8/10</p>
                    <p className="mt-2 text-sm text-muted">Launch quality rating from clients.</p>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl">
                  <p className="text-sm uppercase tracking-[0.24em] text-white/50">Digital</p>
                  <div className="mt-4 flex items-center justify-between gap-4">
                    <span className="text-lg font-semibold text-white">Bespoke digital experience</span>
                    <span className="rounded-full border border-accent/40 px-3 py-1 text-xs uppercase tracking-[0.24em] text-accent">Ready</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-muted">An elevated website built for discerning luxury audiences.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-black/60 px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((item) => (
              <motion.article
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
              >
                <p className="text-5xl font-semibold text-white">{item.value}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/60">{item.label}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="text-sm uppercase tracking-[0.3em] text-accent/90">Services</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              Strategy, design, media, and content crafted for premium brands.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceGroups.map((group) => (
              <motion.div
                key={group.title}
                whileHover={{ y: -8 }}
                className="glass-panel rounded-[28px] border border-white/10 p-8 shadow-glow"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">{group.title}</h3>
                  <Sparkles className="h-5 w-5 text-accent" />
                </div>
                <ul className="mt-6 space-y-4 text-sm text-muted">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 block h-2 w-2 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="border-t border-white/10 bg-white/5 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent/90">Why choose us</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                A refined approach to luxury digital marketing.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                We combine elegant design, bold storytelling, and rigorous measurement to create campaigns that feel high-end and perform with clarity.
              </p>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {whyCards.map((item) => (
                <motion.article
                  key={item.title}
                  whileHover={{ scale: 1.02 }}
                  className="glass-panel rounded-[28px] border border-white/10 p-6 shadow-glow"
                >
                  <item.icon className="h-6 w-6 text-accent" aria-hidden="true" />
                  <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="process" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="text-sm uppercase tracking-[0.3em] text-accent/90">Our process</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              An elevated timeline designed for clarity and momentum.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
            {processSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="glass-panel rounded-[28px] border border-white/10 p-8 text-center shadow-glow"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-accent">
                  <span className="text-lg font-semibold">0{index + 1}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{step}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="work" className="border-t border-white/10 bg-black/60 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="text-sm uppercase tracking-[0.3em] text-accent/90">Featured work</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
              High-end campaigns with measurable outcomes.
            </h2>
          </motion.div>

          <div className="mt-12 grid gap-6 xl:grid-cols-2">
            <div className="grid gap-6 sm:grid-cols-2">
              {featuredWork.slice(0, 2).map((item) => (
                <motion.article
                  key={item.title}
                  whileHover={{ y: -10 }}
                  className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-glow"
                >
                  <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-white/50">
                    <span>{item.label}</span>
                    <span className="text-accent">{item.accent}</span>
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">A full launch package that elevated brand perception and scaled customer acquisition.</p>
                </motion.article>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              {featuredWork.slice(2).map((item) => (
                <motion.article
                  key={item.title}
                  whileHover={{ y: -10 }}
                  className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-glow"
                >
                  <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-white/50">
                    <span>{item.label}</span>
                    <span className="text-accent">{item.accent}</span>
                  </div>
                  <h3 className="mt-6 text-3xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-muted">A premium digital presence built to convert discerning customers at scale.</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent/90">Testimonials</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                Trusted by premium founders and ambitious teams.
              </h2>
            </div>
            <div className="grid gap-6">
              {testimonials.map((item) => (
                <motion.article
                  key={item.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-glow"
                >
                  <p className="text-lg leading-8 text-white">“{item.quote}”</p>
                  <div className="mt-8 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <p className="font-semibold text-white">{item.name}</p>
                      <p>{item.role}</p>
                    </div>
                    <p className="text-accent">{item.result}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0a0a0a] px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-white/10 bg-white/5 p-12 shadow-glow">
          <div className="flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent/90">Call to action</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                Let’s Build Something Exceptional.
              </h2>
            </div>
            <a href="#contact" className="primary-button shadow-glow hover:scale-[1.01]">
              Book Free Consultation
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-accent/90">Contact</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl">
                Start your project with a luxury marketing partner.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-8 text-muted">
                Share a few details and we’ll open a direct WhatsApp conversation with your project brief pre-filled.
              </p>
            </div>
            <motion.form
              onSubmit={handleSubmit}
              className="glass-panel rounded-[32px] border border-white/10 p-8 shadow-glow"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="space-y-2 text-sm text-white/80">
                  <span>Name</span>
                  <input
                    required
                    value={formState.name}
                    onChange={(event) => setFormState({ ...formState, name: event.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-accent"
                    placeholder="Your name"
                  />
                </label>
                <label className="space-y-2 text-sm text-white/80">
                  <span>Company</span>
                  <input
                    required
                    value={formState.company}
                    onChange={(event) => setFormState({ ...formState, company: event.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-accent"
                    placeholder="Company name"
                  />
                </label>
                <label className="space-y-2 text-sm text-white/80">
                  <span>Email</span>
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(event) => setFormState({ ...formState, email: event.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-accent"
                    placeholder="hello@brand.com"
                  />
                </label>
                <label className="space-y-2 text-sm text-white/80">
                  <span>Phone</span>
                  <input
                    required
                    value={formState.phone}
                    onChange={(event) => setFormState({ ...formState, phone: event.target.value })}
                    className="w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-accent"
                    placeholder="+92 370 8919799"
                  />
                </label>
              </div>
              <label className="mt-6 block text-sm text-white/80">
                <span>Service Interested In</span>
                <select
                  value={formState.service}
                  onChange={(event) => setFormState({ ...formState, service: event.target.value })}
                  className="mt-3 w-full rounded-2xl border border-white/10 bg-black/70 px-4 py-3 text-white outline-none transition focus:border-accent"
                >
                  {serviceGroups.map((group) => (
                    <optgroup key={group.title} label={group.title}>
                      {group.items.map((item) => (
                        <option key={item} value={item} className="bg-black text-white">
                          {item}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </label>
              <label className="mt-6 block text-sm text-white/80">
                <span>Message</span>
                <textarea
                  required
                  value={formState.message}
                  onChange={(event) => setFormState({ ...formState, message: event.target.value })}
                  rows={5}
                  className="mt-3 w-full rounded-3xl border border-white/10 bg-black/70 px-4 py-4 text-white outline-none transition focus:border-accent"
                  placeholder="Tell us about your goals, timeline, or project scope."
                />
              </label>
              <button type="submit" className="mt-8 primary-button w-full justify-center">
                Open WhatsApp Conversation
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-black/70 px-6 py-12 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <p className="text-sm uppercase tracking-[0.3em] text-accent/90">Continental Luxe Marketing</p>
            <p className="mt-6 text-sm leading-7 text-muted">
              A premium agency for ambitious brands seeking elegant growth, refined digital experiences, and sustained market leadership.
            </p>
          </div>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Quick Links</p>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                {navLinks.map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="transition hover:text-white">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Connect</p>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                <li>
                  <a href="#services" className="transition hover:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/continentalluxemarketing" target="_blank" rel="noreferrer" className="transition hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/continentalluxemarketing" target="_blank" rel="noreferrer" className="transition hover:text-white">
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/60">Contact</p>
              <ul className="mt-5 space-y-3 text-sm text-muted">
                <li>
                  <a href="mailto:support@continentalluxehosting.com" className="transition hover:text-white">
                    support@continentalluxehosting.com
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/923708919799" target="_blank" rel="noreferrer" className="transition hover:text-white">
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          © {new Date().getFullYear()} Continental Luxe Marketing. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
