"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInvitation } from "@/components/providers/InvitationProvider";
import { Reveal } from "@/components/ui/Reveal";

const STAR_POSITIONS = [
  { top: "8%", left: "50%" },
  { top: "23%", left: "78%" },
  { top: "50%", left: "91%" },
  { top: "77%", left: "76%" },
  { top: "92%", left: "50%" },
  { top: "77%", left: "24%" },
  { top: "50%", left: "9%" },
];

export function SaptapadiSection() {
  const { t } = useInvitation();
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const vow = t.saptapadi.vows[active];

  return (
    <section
      id="saptapadi"
      className="relative flex min-h-[88svh] items-center overflow-hidden bg-[#030303] px-5 py-16 text-ivory sm:min-h-[92svh] sm:py-20"
      aria-label={t.saptapadi.title}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(192,148,63,0.13),transparent_34%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.025),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-[51%] h-px bg-[linear-gradient(90deg,transparent,rgba(210,178,108,0.22),transparent)]" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-[35rem]">
          <Reveal>
            <div className="text-center lg:text-left">
              <p className="label-caps text-[0.58rem] tracking-[0.3em] text-[#c7ab70]">{t.saptapadi.eyebrow}</p>
              <h2 className="display-name mt-4 max-w-xl text-[2.15rem] leading-[1.02] text-[#f5ecd9] sm:text-4xl lg:text-5xl">{t.saptapadi.title}</h2>
              <p className="mt-4 max-w-md text-[0.9rem] leading-[1.75] text-ivory/55 sm:text-base">{t.saptapadi.instruction}.</p>
            </div>
          </Reveal>

          <div className="relative mx-auto mt-8 aspect-square w-full max-w-[23rem] sm:mt-10 sm:max-w-[25rem]">
            <motion.div
              className="absolute inset-[14%] rounded-full border border-[#c9a968]/20"
              animate={reduce ? undefined : { rotate: 360 }}
              transition={{ duration: 38, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-[26%] rounded-full border border-[#c9a968]/11"
              animate={reduce ? undefined : { rotate: -360 }}
              transition={{ duration: 54, repeat: Infinity, ease: "linear" }}
            />
            <div className="absolute inset-[38%] rounded-full bg-[radial-gradient(circle,rgba(191,145,57,0.16),rgba(191,145,57,0.035)_45%,transparent_70%)] blur-xl" />

            <motion.div
              className="absolute left-1/2 top-1/2 flex h-[5.75rem] w-[5.75rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-[#d1b16f]/35 bg-[#0a0907]/70 shadow-[0_0_55px_rgba(196,151,67,0.12)] backdrop-blur-sm sm:h-28 sm:w-28"
              animate={reduce ? undefined : { scale: [1, 1.018, 1] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="text-center">
                <div className="display-name text-2xl text-[#d8b976] sm:text-3xl">K &amp; T</div>
                <div className="label-caps mt-1 text-[0.42rem] tracking-[0.22em] text-ivory/40">Saptapadi</div>
              </div>
            </motion.div>

            {STAR_POSITIONS.map((pos, i) => {
              const selected = i === active;
              return (
                <button
                  key={i}
                  type="button"
                  aria-label={`${i + 1}. ${t.saptapadi.vows[i].title}`}
                  aria-pressed={selected}
                  onClick={() => setActive(i)}
                  className="group absolute -translate-x-1/2 -translate-y-1/2 rounded-full p-2.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e3c889]"
                  style={pos}
                >
                  <span className="absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap text-[0.46rem] uppercase tracking-[0.2em] text-[#c8b78f]/35 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    Step {i + 1}
                  </span>
                  <span
                    className={`relative block h-9 w-9 rounded-full border transition-all duration-500 sm:h-11 sm:w-11 ${selected ? "border-[#ead196] bg-[#c49b50]/12 shadow-[0_0_30px_rgba(220,177,91,0.34)]" : "border-[#c9a968]/28 bg-black/20 hover:border-[#dbc48b]/55 hover:bg-[#c49b50]/7"}`}
                  >
                    <span className={`absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#e2c582] transition-shadow duration-500 ${selected ? "shadow-[0_0_18px_rgba(226,197,130,0.95)]" : "shadow-[0_0_10px_rgba(226,197,130,0.6)]"}`} />
                    <span className={`label-caps absolute inset-x-0 -bottom-4 text-center text-[0.4rem] tracking-[0.16em] transition-colors ${selected ? "text-[#e4c987]" : "text-ivory/28"}`}>{String(i + 1).padStart(2, "0")}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <Reveal delay={0.15}>
            <div className="mx-auto mt-4 flex w-fit items-center gap-3 rounded-full border border-[#c9a968]/15 bg-white/[0.02] px-4 py-2 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e2c582] shadow-[0_0_10px_rgba(226,197,130,0.7)]" />
              <p className="text-[0.56rem] uppercase tracking-[0.2em] text-[#d5c49c]/58">{t.saptapadi.instruction}</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <article className="relative mx-auto w-full max-w-xl overflow-hidden rounded-sm border border-[#c9a968]/18 bg-[linear-gradient(145deg,rgba(22,19,14,0.86),rgba(7,7,6,0.94))] p-6 shadow-[0_32px_90px_-40px_rgba(0,0,0,0.98)] sm:p-9 lg:p-10">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.025),transparent_28%,transparent_72%,rgba(210,175,103,0.035))]" />
            <div className="relative flex items-center justify-between border-b border-[#c9a968]/14 pb-4">
              <p className="label-caps text-[0.56rem] tracking-[0.24em] text-[#c8a864]">Step {String(active + 1).padStart(2, "0")} / 07</p>
              <span className="text-[0.5rem] uppercase tracking-[0.2em] text-ivory/30">Tap a star</span>
            </div>

            <motion.div
              key={active}
              className="relative"
              initial={reduce ? undefined : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <p className="mt-7 font-serif text-[1.35rem] leading-tight text-[#ead7ae] sm:text-2xl">{vow.sanskrit}</p>
              <p className="mt-2 text-[0.58rem] uppercase tracking-[0.2em] text-ivory/38">{vow.transliteration}</p>
              <div className="mt-8 h-px w-14 bg-[#d3b77a]/35" />
              <h3 className="display-name mt-5 text-3xl text-[#f7efde] sm:text-4xl">{vow.title}</h3>
              <p className="mt-4 max-w-lg text-[0.98rem] leading-[1.8] text-ivory/62 sm:text-[1.05rem]">{vow.meaning}</p>
            </motion.div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
