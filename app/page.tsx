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

      <CarouselDemo />
    </>
  );
}
