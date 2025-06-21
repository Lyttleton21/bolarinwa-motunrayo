import {
  BentoCell,
  BentoGrid,
  ContainerScale,
  ContainerScroll,
} from "@/components/hero-gallery-scroll-animation";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CarouselDApiDemo } from "@/components/project";

const IMAGES = [
  "https://plus.unsplash.com/premium_photo-1686920245013-365ae71428a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbGRob29kfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1663088600032-bc05c474ef79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWxkaG9vZHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1460788150444-d9dc07fa9dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoaWxkaG9vZHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoaWxkaG9vZHxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1591776353202-aed91f04fb81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWxkaG9vZHxlbnwwfHwwfHx8MA%3D%3D",
];

export default function Home() {
  return (
    <>
      <ContainerScroll className="h-[350vh]">
        <BentoGrid className="sticky left-0 top-0 z-0 h-screen w-full p-4">
          {IMAGES.map((imageUrl, index) => (
            <BentoCell
              key={index}
              className="overflow-hidden rounded-xl shadow-xl"
            >
              <img
                className="size-full object-cover object-center"
                src={imageUrl}
                alt=""
              />
            </BentoCell>
          ))}
        </BentoGrid>

        <ContainerScale className="relative z-10 text-center">
          <h1 className="max-w-xl text-5xl font-bold tracking-tighter text-slate-800 ">
            Bolarinwa Motunrayo
          </h1>
          <p className="my-6 max-w-xl text-sm text-slate-700 md:text-base">
            Hello, i'm Bolarinwa-Motunrayo, an aspiring educator.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button className="bg-indigo-500 px-4 py-2 font-medium hover:bg-indigo-400">
              <Link href="/about">About Me</Link>
            </Button>
            <Button
              variant="link"
              className="bg-transparent px-4 py-2 font-medium"
            >
              Project
            </Button>
          </div>
        </ContainerScale>
      </ContainerScroll>

      <div className="w-full">
        <CarouselDApiDemo />
      </div>
    </>
  );
}
