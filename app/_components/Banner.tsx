import { ArrowRight, MoreVertical, MousePointer, MousePointer2, StepForward, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Banner() {
  return (
    <section className="bg-[#161617] text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="mx-auto max-w-3xl text-center">
          {/** see what's new */}
          <div className="flex items-center justify-center mb-10">
            <h2 className="flex rounded-full bg-[#1f4462] px-5 py-2 text-[14px] items-center text-gray-200">See what&apos;s new <MoreVertical color="white" size={15} /> 
                <span className="flex items-center justify-center text-[12px] font-medium text-orange-500 cursor-pointer">AI Diagrams <StepForward size={14} /></span>
            </h2>
          </div>
          {/** main text */}
          <h1 className="bg-gradient-to-r from-sky-400 to-yellow-500 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
            Documents & Diagrams
            <br />
            for engineering teams.
          </h1>

          <p className="mx-auto mt-4 max-w-xl font-semibold sm:text-xl/relaxed">
            All-in-one markdown editor, collaborative canvas, and
            diagram-as-code builder
          </p>

          {/** button */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/"
              className="flex items-center justify-center"
            >
              <h2 className="flex items-center text-[14px] max-sm:text-[12px] text-gray-800 font-semibold bg-white hover:bg-gray-300 px-6 py-3 max-sm:px-5 max-sm:py-2 rounded-[5px] gap-1">
                Try DiagramDocs
                <ArrowRight size={20} />
              </h2>
            </Link>
          </div>
        </div>

        {/** absolute images */}
        <div className="absolute top-[200px] left-[150px] max-sm:left-[20px] max-md:left-[30px] max-sm:top-[150px] max-md:top-[140px] max-lg:left-[30px] max-lg:top-[150px]">
            <Image src='/image-one.svg' alt='abc' width={150} height={150} className="max-sm:w-[80px] max-md:w-[100px] max-lg:w-[120px]" />
        </div>
        <div className="absolute bottom-0 left-[20px] max-lg:bottom-[-40px]">
            <Image src='/image-two.svg' alt='abc' width={100} height={100} className="max-sm:w-[80px] max-md:w-[100px] max-lg:w-[120px]" />
        </div>
        <div className="absolute right-[50px] top-[300px] max-sm:right-0 max-md:right-[10px] max-sm:top-[200px] max-md:top-[180px] max-lg:right-0">
            <Image src='/image-three.svg' alt='abc' width={150} height={150} className="max-sm:w-[80px] max-md:w-[100px] max-lg:w-[120px]" />
        </div>

        {/** absolute color text */}
        <div className="absolute bg-orange-600 px-4 py-2 max-sm:px-3 max-md:px-[10px] max-sm:py-1 max-md:pt-0.5 rounded-[3px] left-[350px] top-[600px] max-sm:left-[30px] max-md:left-[40px] max-sm:top-[470px] max-md:top-[490px] max-lg:left-[200px]">
            <h2 className="text-white font-semibold text-[14px] max-sm:text-[10px] max-md:text-[12px]">Sahil A.</h2>
        </div>
        <div className="absolute bg-green-600 px-4 py-2 max-sm:px-3 max-sm:py-1 max-md:px-[10px] max-md:pt-0.5 rounded-[3px] right-[250px] top-[500px] max-sm:right-[20px] max-sm:top-[570px] max-md:right-[40px] max-md:top-[600px] max-lg:right-[70px] max-lg:top-[600px]">
            <h2 className="text-white font-semibold text-[14px] max-sm:text-[10px]">John D.</h2>
        </div>

        {/** colored icons */}
        <div className="absolute right-[340px] top-[480px] max-sm:right-[80px] max-sm:top-[550px] max-md:right-[120px] max-md:top-[570px] max-lg:right-[160px] max-lg:top-[580px]">
            <MousePointer2 color="green" size={25} />
        </div>
        <div className="absolute left-[440px] top-[580px] max-sm:left-[88px] max-sm:top-[450px] max-md:left-[100px] max-md:top-[470px] max-lg:left-[280px]">
            <TrendingUp size={25} color="orange" />
        </div>
      </div>

      {/** banner image */}
      <div className="mx-auto flex items-center justify-center max-sm:mt-[50px]">
        <Image src='/hero.webp' alt='banner' width={1300} height={1000} />
      </div>
    </section>
  );
}

export default Banner;
