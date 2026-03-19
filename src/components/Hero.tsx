import Image from "next/image";
import { MapPin, ArrowDownRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="font-sans min-h-screen flex items-center px-6 md:px-10 pt-16"
    >
      <div className="max-w-6xl mx-auto w-full py-10 grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10 items-center">
        {/* ════════════════════════════════
            Left — Text Content
        ════════════════════════════════ */}
        <div className="space-y-5 order-2 lg:order-1 lg:col-span-2">
          {/* Greeting */}
          <p className="text-sm md:text-base text-neutral-500 font-medium tracking-widest uppercase">
            Hi, I&apos;m Hlaing Hpone.
          </p>

          <h1 className="text-[clamp(2rem,4.5vw,3.75rem)] font-bold text-black leading-tight tracking-tight">
            Next.js
            <span className="text-neutral-200 mx-2 font-thin">|</span>
            TypeScript
            <span className="text-neutral-200 mx-2 font-thin">|</span>
            <br />
            Frontend Developer
          </h1>

          {/* Divider */}
          <div className="w-12 h-px bg-black" />

          {/* Sub-headline */}
          <p className="text-base md:text-lg text-neutral-500 font-normal max-w-md leading-relaxed">
            Building scalable, responsive web applications with modern UI
            frameworks.
          </p>

          {/* Location Tag */}
          <div className="flex items-center gap-1.5 text-sm text-neutral-400 font-medium tracking-wide">
            <MapPin className="w-4 h-4 shrink-0" strokeWidth={1.75} />
            <span>Yangon, Myanmar</span>
          </div>

          {/* Scroll nudge */}
          <a
            href="#about"
            className="inline-flex items-center gap-2 pt-1 text-xs text-neutral-300 hover:text-neutral-500 font-medium tracking-widest uppercase transition-colors duration-150"
          >
            <span>Scroll to explore</span>
            <ArrowDownRight className="w-4 h-4" strokeWidth={1.5} />
          </a>
        </div>

        {/* ════════════════════════════════
            Right — Photo
        ════════════════════════════════ */}
        <div className="order-1 lg:order-2 lg:col-span-1 flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 translate-x-3 translate-y-3 bg-neutral-100 rounded-sm" />

            {/* Photo frame */}
            <div className="relative w-56 h-64 md:w-72 md:h-88 lg:w-80 lg:h-[26rem] overflow-hidden rounded-sm border border-neutral-200 bg-neutral-50">
              <Image
                src="/mine.jpg"
                alt="Hlaing Hpone — Frontend Developer"
                fill
                sizes="(max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
                className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                priority
              />

              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-black/20 pointer-events-none" />
              <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-black/20 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
