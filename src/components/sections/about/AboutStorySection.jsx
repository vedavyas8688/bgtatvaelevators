import { useEffect, useRef, useState } from "react";
import { LuArrowUpRight } from "react-icons/lu";

function TravellingNumber({ value, suffix = "+", className = "" }) {
  const numberRef = useRef(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const node = numberRef.current;
    if (!node) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      setDisplayValue(value);
      return undefined;
    }

    let animationFrame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        const startTime = performance.now();
        const duration = 1600;

        const travel = (currentTime) => {
          const progress = Math.min((currentTime - startTime) / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * easedProgress));

          if (progress < 1) animationFrame = requestAnimationFrame(travel);
        };

        animationFrame = requestAnimationFrame(travel);
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <span ref={numberRef} className={className} aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">
        {displayValue.toLocaleString("en-IN")}
        {suffix}
      </span>
    </span>
  );
}

export default function AboutStorySection() {
  return (
    <section className="grid bg-[#0F2B45] text-white lg:grid-cols-[1.08fr_.92fr]">
      <figure className="m-0 min-h-[660px] overflow-hidden max-lg:min-h-[460px] max-sm:min-h-[360px]">
        <img
          src="/images/unique/elevator-lobby-luxe-d9e5c502.webp"
          alt="Elevator integrated into a premium architectural lobby"
          loading="lazy"
          className="size-full object-cover"
        />
      </figure>
      <div className="flex flex-col justify-center px-[clamp(28px,4vw,68px)] py-[clamp(56px,6vw,96px)]">
        <TravellingNumber
          value={10}
          className="text-[72px] font-medium leading-none text-[#EB9B34]"
        />
        <p className="mb-0 mt-3 text-[11px] uppercase tracking-[.18em] text-white/45">
          Years of experience
        </p>
        <h2 className="mb-0 mt-10 max-w-[620px] text-[clamp(40px,3.5vw,56px)] font-medium leading-[1.04] tracking-[-.035em] max-sm:mt-8 max-sm:text-[38px]">
          Experience taught us where attention matters.
        </h2>
        <p className="mb-0 mt-7 max-w-[620px] text-[16px] leading-[1.8] text-white/70">
          In the coordination others overlook. In the sound of a closing door.
          In the light reflected from a control panel. And in being available
          when the building needs support.
        </p>
        <div className="mt-9 grid grid-cols-2 gap-8 border-t border-white/15 pt-7">
          <div>
            <TravellingNumber
              value={2700}
              className="block text-[36px] font-medium"
            />
            <p className="mt-2 text-[12px] text-white/50">Lifts delivered</p>
          </div>
          <div>
            <TravellingNumber
              value={31}
              className="block text-[36px] font-medium"
            />
            <p className="mt-2 text-[12px] text-white/50">
              Years of experience
            </p>
          </div>
        </div>
        <a href="/projects" className="editorial-cta editorial-cta--light mt-9">
          View selected projects{" "}
          <span aria-hidden="true">
            <LuArrowUpRight />
          </span>
        </a>
      </div>
    </section>
  );
}
