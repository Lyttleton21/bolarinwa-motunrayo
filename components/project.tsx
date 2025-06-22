"use client";

import { Carousel } from "@/components/carousel";

export function CarouselDemo() {
  const slideData = [
    {
      title: "Science",
      src: "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNoaWxkaG9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Course Outline",
      src: "https://plus.unsplash.com/premium_photo-1663088600032-bc05c474ef79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNoaWxkaG9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Curriculum development",
      src: "https://images.unsplash.com/photo-1460788150444-d9dc07fa9dba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNoaWxkaG9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Reflective teaching practices",
      src: "https://images.unsplash.com/photo-1591776353202-aed91f04fb81?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNoaWxkaG9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
