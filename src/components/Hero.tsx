import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";

const Hero = () => {
  return (
    <div>
      <div className='bg-[url("/bg.png")]s h-[200px] bg-accent bg-gradient-to-tl from-accent via-transparent to-primary/50 dark:to-accent flex flex-col items-end p-6 justify-start '>
        <p className="text-xl text-primary font-bold ">Welcome to</p>
        <h1 className="text-2xl  font-bold dark:text-white text-indigo-900 ">
          Women’s Empowerment hub
        </h1>
        <p className="text-xl text-gray-700 dark:text-gray-400  mb-8 w-[60%]s ">
          Empowering Women to Build a Brighter Future
        </p>
      </div>
      <div className="w-full flex  justify-center -mt-[50px] px-4 gap-6">
        <div className="md:w-[30%] hidden md:flex shadow-md flex-col p-2 md:p-4 bg-background min-h-[300px] rounded-lg -mt-[100px]">
          <h1 className="text-xl font-bold mb-2 border-b pb-1">
            Upcomming Event
          </h1>
          <div>
            <Image
              src={"/4.png"}
              alt="banner ads"
              className="w-full h-[150px] rounded-lg object-cover"
              width={1000}
              height={500}
            />
            <div className="space-y-1">
              <h2 className="text-sm text-muted-foreground mt-2">
                Women In tech Conference
              </h2>
              <h2 className="text-lg font-bold mt-2">
                Entrepreneurship training
              </h2>
              <p>May 25, 2025</p>
              <h2 className="font-bold text-md mt-2">
                Freetown Conference Hall
              </h2>
            </div>
          </div>

          {/* <Button className="rounded-full self-start mt-12">View all</Button> */}
        </div>
        <div className="md:w-[70%] w-full bg-background relative h-[200px] md:h-[300px] rounded-lg p-2 shadow-mdd overflow-hidden">
          <Carousel className="w-full h-full relative   overflow-hidden rounded-lg  ">
            <CarouselContent className="w-full h-full absolute ml-0  top-0 space-x-2 ">
              <CarouselItem className="h-full w-full p-0  ">
                <Card className="relative h-full w-full p-1 ">
                  <Image
                    src={"/3.png"}
                    alt="banner ads"
                    className="w-full h-full rounded-lg object-cover"
                    width={1000}
                    height={500}
                  />
                </Card>
              </CarouselItem>
              <CarouselItem className="h-full w-full p-0  ">
                <Card className="relative h-full w-full p-1 ">
                  <Image
                    src={"/2.png"}
                    alt="banner ads"
                    className="w-full h-full rounded-lg object-cover"
                    width={1000}
                    height={500}
                  />
                </Card>
              </CarouselItem>
              <CarouselItem className="h-full w-full p-0  ">
                <Card className="relative h-full w-full p-1 ">
                  <Image
                    src={"/1.png"}
                    alt="banner ads"
                    className="w-full h-full rounded-lg object-cover"
                    width={1000}
                    height={500}
                  />
                </Card>
              </CarouselItem>
              <CarouselItem className="h-full w-full p-0  ">
                <Card className="relative h-full w-full p-1 ">
                  <Image
                    src={"/4.png"}
                    alt="banner ads"
                    className="w-full h-full rounded-lg object-cover"
                    width={1000}
                    height={500}
                  />
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="md:ml-[60px] bg-primary text-white " />
            <CarouselNext className="md:mr-[60px] bg-primary text-white " />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Hero;
