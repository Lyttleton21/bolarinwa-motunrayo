import About from "@/components/about";
import LessonNote from "@/components/LessonNote";
import { Button } from "@/components/ui/button";
import {
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  Drawer,
} from "@/components/ui/drawer";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <About />
      <div className="flex justify-evenly mb-2">
        <Link href={"/"}>
          <Button className="cursor-pointer" title="Home Page">
            Previous
          </Button>
        </Link>
        <Drawer>
          <DrawerTrigger asChild className="cursor-pointer">
            <Button>Next</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>LESSON NOTE</DrawerTitle>
              <LessonNote />
            </DrawerHeader>
            {/* <DrawerFooter>
                    <DrawerClose>
                      <Button variant="outline">Close</Button>
                    </DrawerClose>
                  </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
