import Carousel from "@/components/Carousel";
import Link from "next/link";

export default function Home() {

  return (
    <div className="flex flex-col gap-1">
      <div className="bg-black/50  flex flex-col gap-8 p-4 backdrop-blur-xs text-white bg-blend-overlay text-2xl font-stretch-75% rounded-2xl">
        <h2 className="text-2xl font-bold p-2 underline">
          Welcome to Ray's Kitchen
        </h2>
        <p className="text-2xl p-2">
          -- Ray’s Kitchen blends traditional Puerto Rican flavors with a modern
          twist. Fresh ingredients, bold spices, and comfort food vibes.
        </p>
        <p>Check out the the Menu</p>
        <p className="font-thin ">Since we are just starting, we are offering a limited menu for now. 5 items or less per order.</p>
        <ul className="flex gap-4 underline decoration-solid">
          <li className="hover:underline decoration-solid hover:text-blue-200">
            <Link href={"/lunch"}>Lunch</Link>
          </li>
          <li className="hover:underline decoration-solid  hover:text-blue-200">
            <Link href={"/desserts"}>Desserts</Link>
          </li>
        </ul>
      </div>
      <div className="">
        <Carousel />
      </div>
    </div>
  );
}
