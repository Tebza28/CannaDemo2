import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LOGO = 'https://horizons-cdn.hostinger.com/91bf9f7e-675c-4a7b-b31d-c22e85f06dfe/ed36cc6dca6c7f3a0e0b37adde931b96.jpg';

export default function AgeGate({ children }) {
  const [state, setState] = useState('asking');

  useEffect(() => {
    if (sessionStorage.getItem('cg-age-ok') === 'yes') setState('open');
  }, []);

  useEffect(() => {
    document.body.style.overflow = state === 'open' ? '' : 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [state]);

  const allow = () => {
    sessionStorage.setItem('cg-age-ok', 'yes');
    setState('open');
  };

  if (state === 'open') return children;

  return (
    <AnimatePresence>
      {state !== 'open' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-background/98 haze px-6"
        >
          <div className="absolute inset-0 grid-floor opacity-60 pointer-events-none" />
          <div className="relative w-full max-w-lg text-center">
            <img src={LOGO} alt="Canna Gate logo" className="mx-auto mb-8 w-64 rounded-2xl glow-ring" />
            {state === 'asking' ? (
              <>
                <p className="font-display text-xs tracking-[0.4em] text-primary/80 uppercase">private members club</p>
                <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight glow-text">You need to be 18 years or older to step through the gate.</h1>
                <p className="mx-auto mt-4 max-w-sm text-sm text-muted-foreground">
                  Canna Gate is a private cannabis members club. Come chill, but be sensible. Bring your ID or driver&apos;s licence for a free sign up
                </p>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <button
                    onClick={allow}
                    className="rounded-full bg-primary px-8 py-3 font-display text-sm font-semibold tracking-widest text-primary-foreground transition active:scale-[0.98] hover:brightness-110 glow-ring"
                  >
                    KNOCK
                  </button>
                  <button
                    onClick={() => setState('denied')}
                    className="rounded-full border border-border px-8 py-3 font-display text-sm tracking-widest text-muted-foreground transition hover:text-foreground active:scale-[0.98]"
                  >
                    I&apos;M NOT
                  </button>
                </div>
                <p className="mt-6 text-xs text-muted-foreground/70">
                  By entering you confirm your age. We don&apos;t keep this past your session.
                </p>
              </>
            ) : (
              <>
                <h1 className="font-display text-4xl font-bold glow-text-warm">Catch you later.</h1>
                <p className="mx-auto mt-4 max-w-sm text-sm text-muted-foreground">
                  You must be 18 or older to enter Canna Gate. The door stays open for when the time comes.
                </p>
                <button
                  onClick={() => setState('asking')}
                  className="mt-8 font-display text-xs tracking-[0.3em] text-primary underline underline-offset-8"
                >
                  BACK
                </button>
              </>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
