import React from "react";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import tunrayoImage from "@/public/Tunrayo_AI.jpg";
import { GraduationCap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export default function About() {
  return (
    <main className="py-10">
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
            <p className="leading-7 ">
              <strong>Email:</strong> motunrayobolarinwa8@gmail.com <br />{" "}
              <strong>Matric Number:</strong> 235543 <br />
              <strong>Department:</strong> Early Childhood and Educational
              Foundations <br /> <strong>Faculty:</strong> Faculty of Education{" "}
              <br />
              <strong>Institution:</strong> University of Ibadan
            </p>
          </div>
        </div>
        <hr className="my-3" />
        <div className="my-5">
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">Profile</h3>
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
          <hr className="my-3" />
          <div className="my-5 md:w-9/12 lg:w-1/2">
            <h3 className="text-2xl font-semibold tracking-tight mb-2.5">
              Education
            </h3>
            <div className="flex justify-between">
              <div>
                <GraduationCap />
              </div>
              <div>
                <p className="md:text-xl">
                  B.Ed. Early Childhood Education <br />
                  <small className="text-muted-foreground">(In progress)</small>
                </p>
              </div>
            </div>
          </div>
          <hr className="my-3" />
          <div>
            <h3 className="text-2xl font-semibold tracking-tight mb-2.5">
              Skills
            </h3>
            <div className="mb-5">
              <div className="flex justify-between">
                <div>
                  <p>Curriculum development and analysis</p>
                </div>
                <div>
                  <small className="text-muted-foreground">90%</small>
                </div>
              </div>
              <Progress value={90} />
            </div>
            <div className="mb-5">
              <div className="flex justify-between">
                <div>
                  <p>Child-centered teaching methods</p>
                </div>
                <div>
                  <small className="text-muted-foreground">80%</small>
                </div>
              </div>
              <Progress value={80} />
            </div>
            <div className="mb-5">
              <div className="flex justify-between">
                <div>
                  <p>Public speaking and presentation</p>
                </div>
                <div>
                  <small className="text-muted-foreground">85%</small>
                </div>
              </div>
              <Progress value={85} />
            </div>
            <div className="mb-5">
              <div className="flex justify-between">
                <div>
                  <p>Reflective teaching practices</p>
                </div>
                <div>
                  <small className="text-muted-foreground">95%</small>
                </div>
              </div>
              <Progress value={95} />
            </div>
            <div className="mb-5">
              <div className="flex justify-between">
                <div>
                  <p>Microsoft Office Suite (Word, PowerPoint, Excel)</p>
                </div>
                <div>
                  <small className="text-muted-foreground">95%</small>
                </div>
              </div>
              <Progress value={95} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
