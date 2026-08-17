import React, { useState, useRef, useEffect } from 'react';
import Helmet from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Sparkles, Users, Gift, ShieldCheck, Cigarette, Baby, Car, Eye, BookOpen, Ban, Phone, MessageCircle, X } from 'lucide-react';
import Reveal from '@/components/Reveal';
import Seo from '@/components/Seo';

const LOGO_MARK = 'https://horizons-cdn.hostinger.com/91bf9f7e-675c-4a7b-b31d-c22e85f06dfe/cd433e696259705f8930cc3dcaf958d3.jpg';
const LOGO_WIDE = 'https://horizons-cdn.hostinger.com/91bf9f7e-675c-4a7b-b31d-c22e85f06dfe/ed36cc6dca6c7f3a0e0b37adde931b96.jpg';
const LOUNGE = 'https://images.hostinger.com/6178db6c-4a4d-41fd-acfc-3cbda352c307.png';
const JAR = 'https://images.hostinger.com/2f0a6da7-601d-4b12-a6fd-2eb2a6594aee.png';
const CREW = 'https://images.hostinger.com/cf126965-430f-4fc7-8c07-3ffb13cc7c28.png';
const POSTER_GLASS = 'https://horizons-cdn.hostinger.com/91bf9f7e-675c-4a7b-b31d-c22e85f06dfe/3750e21434300912cf90096fc875f1cc.png';
const POSTER_KUSH = 'https://horizons-cdn.hostinger.com/91bf9f7e-675c-4a7b-b31d-c22e85f06dfe/3806f8fcc43aa1eefa77e5d8ef7c8250.jpg';
const SIGNS = 'https://horizons-cdn.hostinger.com/91bf9f7e-675c-4a7b-b31d-c22e85f06dfe/489652d2f971b4d0e1d62743b86e65d9.jpg';

// Contact details for the club
const CLUB_PHONE_DISPLAY = '+27 60 123 4567';
const CLUB_PHONE_TEL = '+27601234567';
const CLUB_WHATSAPP = '27601234567';

const strains = [
  {
    name: 'Glass',
    type: 'Sativa-dominant hybrid',
    thc: '21%',
    blurb: 'A nice cerebral lift with a sweet, faintly fruity flavour profile. The one to spark the conversation.',
    effects: ['Uplifted', 'Talkative', 'Happy'],
    helps: ['Depression', 'Stress', 'Anxiety'],
  },
  {
    name: 'Sour Jack',
    type: 'Sativa',
    thc: '20%',
    blurb: 'A spark of energy that shrugs off body fatigue. Great for staying active and beating the slump.',
    effects: ['Energetic', 'Focused', 'Creative'],
    helps: ['Fatigue', 'Low mood'],
  },
  {
    name: 'LA Kush Cake',
    type: 'Hybrid',
    thc: '23%',
    blurb: 'Dessert-sweet and heavy-handed. Full-body ease that settles you into the couch for the long stream.',
    effects: ['Relaxed', 'Euphoric', 'Sleepy'],
    helps: ['Pain', 'Insomnia', 'Appetite'],
  },
];

const rules = [
  { icon: Ban, title: 'No dealing', text: 'Do not sell cannabis. Sharing between members only, always.' },
  { icon: Car, title: 'Never drive high', text: 'Do not drive or operate a vehicle under the influence of cannabis.' },
  { icon: Baby, title: 'Away from kids', text: 'Keep your cannabis away from children. No exceptions.' },
  { icon: Eye, title: 'Keep it discreet', text: 'Conceal your cannabis in public spaces. Respect the neighbours.' },
  { icon: BookOpen, title: 'Know your rights', text: 'Understand the law, and help us educate other members.' },
  { icon: ShieldCheck, title: 'Enter at own risk', text: 'Private members only. 18+. Be sensible, look after each other.' },
];

const perks = [
  { icon: Sparkles, title: 'Free sign up', text: 'Membership costs nothing. Bring your ID or driver\u2019s licence and you\u2019re in.' },
  { icon: Users, title: 'The lounge', text: 'Couches, big screens, streams and gaming. Hang as long as you like.' },
  { icon: Gift, title: 'Member-only drops', text: 'First dibs on new arrivals, Strain of the Week and member pricing.' },
  { icon: Cigarette, title: 'Expert advice', text: 'Tell us the vibe you want and our team will match the flower to it.' },
];

const ticker = ['Strain of the Week', 'Free Sign Up', 'Private Members Club', 'Ikageng Gate', 'Flowers \u00b7 Edibles \u00b7 Concentrates', 'Share & Reap'];

function HollaAtUs() {
  const [open, setOpen] = useState(false);
  const [pulse, setPulse] = useState(false);
  const ref = useRef(null);

  // Idle pulse to draw the eye back to the button
  useEffect(() => {
    if (open) return;
    const t = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 900);
    }, 4200);
    return () => clearInterval(t);
  }, [open]);

  // Close on outside click / escape
  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('mousedown', onDown);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDown);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const waLink = `https://wa.me/${CLUB_WHATSAPP}?text=${encodeURIComponent("Yo Canna Gate \uD83C\uDF3F — I've got a question about the club / menu.")}`;

  return (
    <div ref={ref} className="relative mt-8 inline-block w-full max-w-[20rem]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={`group relative flex w-full items-center justify-center gap-3 rounded-full border border-primary/50 bg-primary/10 px-7 py-4 font-display text-sm font-semibold tracking-[0.25em] text-primary transition active:scale-[0.98] hover:bg-primary/20 hover:glow-ring ${pulse ? 'glow-ring scale-[1.02]' : ''}`}
      >
        <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
        HOLLA AT US
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            role="menu"
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute left-1/2 top-full z-30 mt-3 w-72 -translate-x-1/2 overflow-hidden rounded-2xl border border-border/80 bg-card/95 p-2 shadow-2xl backdrop-blur-xl glow-ring"
          >
            <div className="flex items-center justify-between px-3 py-2">
              <span className="font-display text-xs tracking-[0.3em] text-accent uppercase">Pick a line</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close"
                className="rounded-full p-1 text-muted-foreground transition hover:text-foreground"
              >
                <X className="h-4 w-4" strokeWidth={2} />
              </button>
            </div>

            <a
              role="menuitem"
              href={`tel:${CLUB_PHONE_TEL}`}
              className="group flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-primary/15"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <Phone className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="flex flex-col">
                <span className="font-display text-sm font-semibold tracking-wide">Call the club</span>
                <span className="text-xs text-muted-foreground">{CLUB_PHONE_DISPLAY}</span>
              </span>
            </a>

            <a
              role="menuitem"
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-xl px-3 py-3 transition hover:bg-accent/15"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent transition group-hover:bg-accent group-hover:text-accent-foreground">
                <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <span className="flex flex-col">
                <span className="font-display text-sm font-semibold tracking-wide">WhatsApp us</span>
                <span className="text-xs text-muted-foreground">Chat instantly · usually quick replies</span>
              </span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Section({ id, children, className = '' }) {
  return (
    <section id={id} className={`relative px-6 ${className}`}>
      {children}
    </section>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      <Helmet>
        <title>Canna Gate | Private Cannabis Members Club in Potchefstroom</title>
        <meta name="description" content="Canna Gate is a private cannabis members club at Ikageng Gate, Potchefstroom. Premium flower, edibles and concentrates, a lounge to hang out and watch streams, free sign up with your ID." />
      </Helmet>
      <Seo
        title="Canna Gate | Private Cannabis Members Club"
        description="Premium cannabis, a friendly lounge and free membership at Ikageng Gate, Potchefstroom."
        image={LOGO_WIDE}
        siteName="Canna Gate"
      />

      {/* Header */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-6 py-3">
          <a href="#top" className="flex items-center gap-3">
            <img src={LOGO_MARK} alt="Canna Gate leaf logo" className="h-10 w-10 rounded-lg object-cover" />
            <span className="font-display text-lg font-bold tracking-wide glow-text">CANNA GATE</span>
          </a>
          <nav className="hidden items-center gap-7 font-display text-xs tracking-[0.2em] text-muted-foreground md:flex">
            <a href="#strains" className="transition hover:text-primary">STRAINS</a>
            <a href="#club" className="transition hover:text-primary">CLUB</a>
            <a href="#rules" className="transition hover:text-primary">HOUSE RULES</a>
            <a href="#referral" className="transition hover:text-primary">REFER</a>
            <a href="#visit" className="transition hover:text-primary">VISIT</a>
          </nav>
          <a
            href="#visit"
            className="rounded-full bg-primary px-5 py-2.5 font-display text-xs font-semibold tracking-widest text-primary-foreground transition active:scale-[0.98] hover:brightness-110 glow-ring"
          >
            FREE SIGN UP
          </a>
        </div>
      </header>

      {/* Hero */}
      <div id="top" className="relative flex min-h-[100dvh] items-center overflow-hidden pt-24">
        <img src={LOUNGE} alt="The Canna Gate members lounge with green neon lighting" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
        <div className="absolute inset-0 grid-floor opacity-40" />
        <div className="absolute inset-0 haze" />
        <div className="relative mx-auto w-full max-w-[72rem] px-6 py-20">
          <motion.img
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            src={LOGO_WIDE}
            alt="Canna Gate Private Members Club"
            className="w-full max-w-xl rounded-3xl glow-ring"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12, ease: 'easeOut' }}
            className="mt-10 max-w-3xl font-display text-4xl font-bold leading-[1.05] sm:text-6xl"
          >
            Pull up a couch. <span className="glow-text text-primary">This is home</span> with better flower.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22, ease: 'easeOut' }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Canna Gate is a private members club in Ikageng, Potchefstroom. Premium flower, edibles and
            concentrates, honest advice, and a lounge where members hang out and watch streams all afternoon.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a href="#visit" className="rounded-full bg-primary px-8 py-4 font-display text-sm font-semibold tracking-widest text-primary-foreground transition active:scale-[0.98] hover:brightness-110 glow-ring">
              JOIN FREE TODAY
            </a>
            <a href="#strains" className="rounded-full border border-primary/40 px-8 py-4 font-display text-sm tracking-widest text-foreground transition hover:border-primary hover:text-primary active:scale-[0.98]">
              SEE THE MENU
            </a>
          </motion.div>
          <div className="mt-12 flex flex-wrap gap-x-10 gap-y-3 font-display text-xs tracking-[0.2em] text-muted-foreground">
            <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" strokeWidth={1.75} />OPEN 11:00 – 19:00</span>
            <span className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" strokeWidth={1.75} />SHOP 6, 11 ZINN ST</span>
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-primary" strokeWidth={1.75} />18+ MEMBERS ONLY</span>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div className="relative overflow-hidden border-y border-primary/25 bg-secondary/40 py-4">
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap font-display text-sm tracking-[0.3em] text-primary/80">
          {[...ticker, ...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              {t.toUpperCase()}<span className="text-accent">/</span>
            </span>
          ))}
        </div>
      </div>

      {/* Strains */}
      <Section id="strains" className="py-24 sm:py-32">
        <div className="mx-auto max-w-[72rem]">
          <Reveal>
            <p className="font-display text-xs tracking-[0.4em] text-accent uppercase">strain of the week &amp; friends</p>
            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold sm:text-5xl">
              What&apos;s on the shelf, and <span className="glow-text text-primary">what it does</span>
            </h2>
          </Reveal>
          <div className="mt-14 space-y-6">
            {strains.map((s, i) => (
              <Reveal key={s.name} delay={i * 0.08}>
                <article className="group grid gap-8 border-t border-border/70 pt-8 md:grid-cols-[1fr_1.4fr] md:items-start">
                  <div className="flex items-baseline gap-5">
                    <span className="font-display text-sm text-muted-foreground/60">0{i + 1}</span>
                    <div>
                      <h3 className="font-display text-3xl font-bold transition group-hover:glow-text sm:text-4xl">{s.name}</h3>
                      <p className="mt-2 font-display text-xs tracking-[0.25em] text-accent uppercase">{s.type} · THC {s.thc}</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-base leading-relaxed text-muted-foreground">{s.blurb}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {s.effects.map((e) => (
                        <span key={e} className="rounded-full border border-primary/40 px-4 py-1.5 font-display text-xs tracking-widest text-primary">{e.toUpperCase()}</span>
                      ))}
                      {s.helps.map((h) => (
                        <span key={h} className="rounded-full bg-secondary px-4 py-1.5 font-display text-xs tracking-widest text-muted-foreground">HELPS · {h.toUpperCase()}</span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 grid gap-5 sm:grid-cols-3">
            {[
              { src: POSTER_GLASS, alt: 'Canna Gate Strain of the Week poster for Glass' },
              { src: JAR, alt: 'Jar of premium cannabis flower under green neon light' },
              { src: POSTER_KUSH, alt: 'Canna Gate Strain of the Week poster for LA Kush Cake' },
            ].map((img, i) => (
              <Reveal key={img.src} delay={i * 0.08}>
                <img src={img.src} alt={img.alt} className="h-72 w-full rounded-2xl object-cover glow-ring transition duration-300 hover:-translate-y-1" />
              </Reveal>
            ))}
          </div>
          <Reveal>
            <p className="mt-10 text-sm text-muted-foreground">
              Beyond flower we stock edibles, concentrates, pre-rolls and accessories. Ask at the counter —
              tell us the feeling you&apos;re after and we&apos;ll match it.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Club / membership */}
      <Section id="club" className="border-y border-border/60 bg-secondary/25 py-24 sm:py-32">
        <div className="mx-auto grid max-w-[80rem] gap-14 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <img src={CREW} alt="Members hanging out on couches watching a stream at Canna Gate" className="h-[26rem] w-full rounded-3xl object-cover glow-ring" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-display text-xs tracking-[0.4em] text-accent uppercase">private members club</p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
              A club that feels like <span className="glow-text text-primary">someone&apos;s living room</span>
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              People come to Canna Gate for the flower and stay for the company. Grab a seat, put the stream on,
              meet the regulars. No pressure, no rush, no judgement — just a safe, welcoming space for
              like-minded people.
            </p>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {perks.map((p) => (
                <div key={p.title} className="rounded-2xl border border-border/70 bg-card/70 p-5 transition hover:border-primary/50">
                  <p.icon className="h-5 w-5 text-primary" strokeWidth={1.75} />
                  <h3 className="mt-3 font-display text-base font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Rules */}
      <Section id="rules" className="py-24 sm:py-32">
        <div className="mx-auto max-w-[80rem]">
          <div className="grid gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-start">
            <div>
              <Reveal>
                <p className="font-display text-xs tracking-[0.4em] text-accent uppercase">basic club rules</p>
                <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
                  House rules, <span className="glow-text-warm text-accent">kept simple</span>
                </h2>
                <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
                  These keep the club open and everyone welcome. Break them and you&apos;re out — respect them and
                  the door&apos;s always open.
                </p>
              </Reveal>
              <div className="mt-10 divide-y divide-border/70 border-y border-border/70">
                {rules.map((r, i) => (
                  <Reveal key={r.title} delay={i * 0.05}>
                    <div className="flex items-start gap-5 py-5">
                      <r.icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                      <div>
                        <h3 className="font-display text-lg font-semibold">{r.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={0.15}>
              <img src={SIGNS} alt="Canna Gate club signage: private members only, enter at own risk, basic club rules" className="w-full rounded-3xl object-cover glow-ring" />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Referral */}
      <Section id="referral" className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-[72rem] overflow-hidden rounded-3xl border border-primary/30 bg-card/70 p-8 sm:p-14 glow-ring">
          <Reveal>
            <p className="font-display text-xs tracking-[0.4em] text-accent uppercase">member referral program</p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">
              Share &amp; <span className="glow-text text-primary">Reap the Rewards</span>
            </h2>
            <p className="mt-5 max-w-2xl leading-relaxed text-muted-foreground">
              Share the love and get FREEBIES. Every successful referral gets reimbursed with free product —
              because around here, sharing really does pay off.
            </p>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { n: '1', t: 'Refer a friend', d: 'Tell someone about Canna Gate and send them our way.' },
              { n: '2', t: 'They sign up', d: 'They join free with their ID and make their first share.' },
              { n: '3', t: 'Get rewarded', d: 'We reimburse you with free products. Simple as that.' },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative border-t border-primary/30 pt-6">
                  <span className="font-display text-5xl font-bold text-primary/25">{s.n}</span>
                  <h3 className="mt-2 font-display text-xl font-semibold">{s.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Visit */}
      <Section id="visit" className="border-t border-border/60 bg-secondary/25 py-24 sm:py-32">
        <div className="mx-auto grid max-w-[72rem] gap-12 md:grid-cols-2">
          <Reveal>
            <p className="font-display text-xs tracking-[0.4em] text-accent uppercase">find the gate</p>
            <h2 className="mt-4 font-display text-3xl font-bold sm:text-5xl">Come through</h2>
            <div className="mt-8 space-y-2 text-lg leading-relaxed">
              <p className="flex items-start gap-3"><MapPin className="mt-1.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.75} />
                <span>Ikageng Gate, Shop 6, 11 Zinn St,<br />Potchindustria, Potchefstroom</span>
              </p>
            </div>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Sign up is completely free — just bring your ID or driver&apos;s licence. First visit? Say it&apos;s your
              first time and we&apos;ll walk you through the club and the menu.
            </p>
            <HollaAtUs />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border/70 bg-card/70 p-8">
              <h3 className="flex items-center gap-3 font-display text-xl font-semibold">
                <Clock className="h-5 w-5 text-primary" strokeWidth={1.75} /> Opening hours
              </h3>
              <dl className="mt-6 divide-y divide-border/70 font-display text-sm">
                {[
                  ['Monday – Friday', '11:00 – 19:00'],
                  ['Saturday', '11:00 – 15:00'],
                  ['Sunday', 'Closed'],
                ].map(([d, h]) => (
                  <div key={d} className="flex items-center justify-between py-4">
                    <dt className="text-muted-foreground tracking-wide">{d}</dt>
                    <dd className="text-primary">{h}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-6 text-xs tracking-[0.2em] text-muted-foreground uppercase">18+ · Private members only</p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Footer */}
      <footer className="border-t border-border/60 px-6 py-14">
        <div className="mx-auto flex max-w-[72rem] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <img src={LOGO_MARK} alt="Canna Gate logo" className="h-12 w-12 rounded-lg object-cover" />
            <p className="mt-4 font-display text-lg font-bold tracking-wide">CANNA GATE</p>
            <p className="mt-1 text-sm text-muted-foreground">Private Members Club · Ikageng Gate, Potchefstroom</p>
          </div>
          <div className="flex flex-col gap-2 font-display text-xs tracking-[0.2em] text-muted-foreground sm:items-end">
            <a href="#strains" className="transition hover:text-primary">STRAINS</a>
            <a href="#rules" className="transition hover:text-primary">HOUSE RULES</a>
            <a href="#visit" className="transition hover:text-primary">VISIT US</a>
            <p className="mt-4 normal-case tracking-normal text-muted-foreground/70">
              &copy; {new Date().getFullYear()} Canna Gate. 18+ only. Consume responsibly.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
