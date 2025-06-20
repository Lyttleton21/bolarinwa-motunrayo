import React from "react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import tunrayoImage from "@/public/tunrayo-img.jpg";

export default function About() {
  return (
    <main className="p-5">
      <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
        About Me
      </h1>
      <div className="md:mx-20 mx-4 md:p-6 ">
        <div className="flex flex-col items-center justify-center">
          <div>
            <Avatar className="w-[128px] h-[128px]">
              <AvatarImage src={tunrayoImage.src} alt="Avatar" />
              <AvatarFallback>BMD</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight first:mt-0">
              Bolarinwa Motunrayo Deborah
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              <strong>Email:</strong> motunrayobolarinwa8@gmail.com <br />{" "}
              <strong>Matric Number:</strong> 235543 <br />
              <strong>Department:</strong> Early Childhood and Educational
              Foundations <br /> <strong>Faculty:</strong> Faculty of Education{" "}
              <br />
              <strong>Institution:</strong> University of Ibadan
            </p>
          </div>
        </div>
        <div className="my-5">
          <div>
            <p className="text-muted-foreground text-xl">
              I am an aspiring educator deeply passionate about early childhood
              education and curriculum development. I am committed to nurturing
              young minds through innovative and responsive teaching strategies.
              As a future teacher, I believe in shaping learners holistically,
              laying solid foundations through love, structure, and creativity.
              My academic journey has sharpened my analytical skills and given
              me a voice to address social issues, especially those affecting
              access to education in Nigeria.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
