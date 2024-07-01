import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import SplineImage from "/public/spline.png";
import CloudImage from "/public/cloud.png";
export default function Home() {
  return (
    <main className={`relative h-screen`}>
      <div className="absolute grid justify-center items-center top-40   w-64 h-40 right-[200px] lg:right-[580px] ">
        <Image
          src={CloudImage}
          fill
          objectFit="contain"
          alt="cloud image"
          className="w-[50%] h-[50%] md:w-[100%]"
        />
        <div className="text-center text-sm md:text-base  z-[100] w-fit my-auto text-[#FF7661]">
          <p className="">Hover to interact.</p>
          <p>Press and hold to orbit</p>
        </div>
      </div>
      <div className=" absolute  top-96 left-20  space-y-8">
        <h1 className="font-bold font-poppins text-4xl md:text-5xl lg:text-7xl text-[#FF9585]">
          Hi! I’m Molang{" "}
        </h1>
        <h2 className="font-medium text-xl md:text-2xl  lg:text-4xl text-[#FF7661] ">
          3D Model and animation created
          <br /> on spline by Ojuolape Bello
        </h2>
        <Image src={SplineImage} width={100} height={100} alt="spline image" />
      </div>
      <Spline scene="https://prod.spline.design/wsxc8rGYlBFWzzhG/scene.splinecode" />
    </main>
  );
}
