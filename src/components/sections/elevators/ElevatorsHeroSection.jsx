import { LuArrowRight } from "react-icons/lu";

export default function ElevatorsHeroSection() {
  return (
    <section className="grid min-h-screen bg-[#0F2B45] text-white lg:grid-cols-[.82fr_1.18fr]">
      <div className="flex flex-col justify-center px-[clamp(28px,7vw,112px)] pb-20 pt-[150px]">
        <p className="m-0 text-[11px] font-semibold uppercase tracking-[.2em] text-[#EB9B34]">
          Elevator manufacturer &amp; service partner
        </p>
        <h1 className="mb-0 mt-5 text-[clamp(62px,7vw,108px)] font-medium leading-[.87] tracking-[-.06em]">
          Safer lifts.
          <br />
          <em className="font-light text-[#EB9B34]">Smarter</em>
          <br />
          journeys.
        </h1>
        <p className="mb-0 mt-9 max-w-[590px] text-[17px] leading-[1.72] text-white/70">
          Home, panoramic, commercial and goods elevators backed by 31+ years of
          experience, 2,700+ installations and connected safety technology.
        </p>
        <a
          href="#elevator-types"
          className="editorial-cta editorial-cta--light mt-9"
        >
          Explore elevator solutions{" "}
          <span aria-hidden="true">
            <LuArrowRight />
          </span>
        </a>
      </div>
      <figure className="relative m-[18px] ml-0 min-h-[720px] overflow-hidden rounded-[36px] max-lg:m-3 max-lg:min-h-[620px]">
        <img
          src="/images/unique/tatva-panoramic-eac7575b.webp"
          alt="Panoramic glass lift in a multi-level residence"
          className="absolute inset-0 size-full object-cover"
        />
        <figcaption className="absolute bottom-6 right-6 max-w-[320px] rounded-[20px] border border-white/25 bg-[#0F2B45]/85 p-5 backdrop-blur-xl">
          <span className="text-[10px] uppercase tracking-[.15em] text-[#EB9B34]">
            Engineered around your building
          </span>
          <p className="mb-0 mt-2 text-[14px] leading-[1.5] text-white/80">
            Passenger safety, smart monitoring and performance specified for
            each application.
          </p>
        </figcaption>
      </figure>
    </section>
  );
}
