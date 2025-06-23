import { HeroGeometric } from "@/components/hero-gallery-scroll-animation";
import { CarouselDemo } from "@/components/project";

export default function Home() {
  return (
    <>
      <HeroGeometric
        badge="About Me"
        title1="Bolarinwa Motunrayo"
        title2="Deborah"
      />

      <h3 className="scroll-m-20 text-center text-4xl font-bold tracking-tight text-balance my-1.5">
        Programmed Learning Paradigm
      </h3>
      <CarouselDemo />
    </>
  );
}
