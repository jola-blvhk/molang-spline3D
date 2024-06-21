import Spline from "@splinetool/react-spline/next";



export default function Home() {
  return (
    <main className={`relative ${poppins.variable}`}>
      <div className="text-3xl absolute">Hi, my name is Molang</div>
      <Spline scene="https://prod.spline.design/wsxc8rGYlBFWzzhG/scene.splinecode" />
    </main>
  );
}
