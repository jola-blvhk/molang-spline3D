import Spline from "@splinetool/react-spline/next";
import Image from "next/image";
import SplineImage from "/public/spline.png";
import CloudImage from "/public/cloud.png";
export default function Home() {
  return (
    <main className={`relative h-screen`}>
      <div className="absolute grid justify-center items-center top-36 lg:right-72 w-60 h-40 xl:right-[560px] ">
        <Image src={CloudImage} fill objectFit="contain" alt="cloud image" />
        <p className="text-center z-[100] w-fit my-auto text-[#FF7661]">Hover to <br /> interact</p>
      </div>
      <div className=" absolute  top-96 left-20  space-y-8">
        <h1 className="font-bold font-poppins  text-6xl text-[#FF9585]">
          Hi! I’m Molang{" "}
        </h1>
        <h2 className="font-medium  text-3xl text-[#FF7661] ">
          3D Model and animation created
          <br /> on spline by Ojuolape Bello
        </h2>
        <Image src={SplineImage} width={100} height={100} alt="spline image" />
      </div>
      <Spline scene="https://prod.spline.design/wsxc8rGYlBFWzzhG/scene.splinecode" />
    </main>
  );
}
