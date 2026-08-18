"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInvitation } from "@/components/providers/InvitationProvider";
import { Reveal } from "@/components/ui/Reveal";

const STAR_POSITIONS = [
  { top: "12%", left: "50%" },
  { top: "25%", left: "77%" },
  { top: "50%", left: "89%" },
  { top: "75%", left: "74%" },
  { top: "88%", left: "50%" },
  { top: "74%", left: "25%" },
  { top: "49%", left: "11%" },
];

export function SaptapadiSection() {
  const { t } = useInvitation();
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const vow = t.saptapadi.vows[active];
  const activeIndex = useMemo(() => active + 1, [active]);

  return (
    <section
      id="saptapadi"
      className="relative flex min-h-[118svh] items-center overflow-hidden bg-[#050504] px-5 py-24 text-ivory"
      aria-label={t.saptapadi.title}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(178,133,49,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(255,255,255,0.035),transparent_45%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-[linear-gradient(90deg,transparent,rgba(210,178,108,0.25),transparent)]" />
      <div className="pointer-events-none absolute inset-y-[16%] left-1/2 w-px -translate-x-1/2 bg-[linear-gradient(180deg,transparent,rgba(210,178,108,0.18),transparent)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-[31rem]">
          <Reveal>
            <div className="text-center lg:text-left">
              <p className="label-caps text-[0.62rem] tracking-[0.28em] text-[#c6a866]">{t.saptapadi.eyebrow}</p>
              <h2 className="display-name mt-5 max-w-xl text-4xl leading-[0.98] text-[#f6edda] sm:text-5xl lg:text-6xl">{t.saptapadi.title}</h2>
              <p className="mt-5 max-w-lg text-[0.96rem] leading-[1.8] text-ivory/65 sm:text-base">{t.saptapadi.instruction}.</p>
            </div>
          </Reveal>

          <div className="relative mx-auto mt-12 aspect-square w-full max-w-[26rem]" aria-label={t.saptapadi.instruction}>
            <motion.div
              className="absolute inset-[17%] rounded-full border border-[#c9a968]/20"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-[28%] rounded-full border border-[#c9a968]/12"
              animate={reduce ? undefined : { rotate: -360 }}
              transition={{ duration: 46, repeat: Infinity, ease: "linear" }}
            />

            <div className="absolute left-1/2 top-1/2 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#c9a968]/35 bg-[radial-gradient(circle,rgba(190,145,61,0.12),transparent_68%)] shadow-[0_0_70px_rgba(196,151,67,0.12)] sm:h-32 sm:w-32">
              <div className="text-center">
                <div className="display-name text-3xl text-[#d8b976]">K &amp; T</div>
                <div className="label-caps mt-1 text-[0.48rem] tracking-[0.2em] text-ivory/45">Saptapadi</div>
              </div>
            </div>

            {STAR_POSITIONS.map((pos, i) => {
              const selected = i === active;
              return (
                <button
                  key={i}
                  type="button"
                  aria-label={`${i + 1}. ${t.saptapadi.vows[i].title}`}
                  aria-pressed={selected}
                  onClick={() => setActive(i)}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e3c889]"
                  style={pos}
                >
                  <span
                    className={`relative block h-10 w-10 rounded-full border transition-all duration-500 sm:h-12 sm:w-12 ${selected ? "border-[#e6cb8c] bg-[#c49b50]/10 shadow-[0_0_28px_rgba(220,177,91,0.3)]" : "border-[#c9a968]/30 bg-black/10"}`}
                  >
                    <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#e2c582] shadow-[0_0_14px_rgba(226,197,130,0.75)]" />
                    <span className="label-caps absolute inset-x-0 -bottom-5 text-center text-[0.43rem] tracking-[0.18em] text-ivory/40">{String(i + 1).padStart(2, "0")}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <Reveal delay={0.18}>
            <p className="mt-4 text-center text-[0.6rem] uppercase tracking-[0.24em] text-[#c7b58e]/50">{t.saptapadi.interactionHint}</p>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <article className="relative mx-auto w-full max-w-xl border border-[#c9a968]/20 bg-[linear-gradient(145deg,rgba(21,18,13,0.86),rgba(7,7,6,0.94))] p-7 shadow-[0_30px_80px_-35px_rgba(0,0,0,0.95)] sm:p-10">
            <div className="flex items-center justify-between border-b border-[#c9a968]/15 pb-4">
              <p className="label-caps text-[0.58rem] tracking-[0.24em] text-[#c8a864]">Step {String(activeIndex).padStart(2, "0")} / 07</p>
              <span className="h-px w-16 bg-[#c9a968]/25" />
            </div>

            <motion.div
              key={active}
              initial={reduce ? undefined : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <p className="mt-8 font-serif text-2xl text-[#ead7ae] sm:text-3xl">{vow.sanskrit}</p>
              <p className="mt-2 text-[0.62rem] uppercase tracking-[0.2em] text-ivory/40">{vow.transliteration}</p>
              <h3 className="display-name mt-10 text-4xl text-[#f7efde] sm:text-5xl">{vow.title}</h3>
              <p className="mt-6 max-w-md text-[1.02rem] leading-[1.95] text-ivory/65 sm:text-lg">{vow.meaning}</p>
            </motion.div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
