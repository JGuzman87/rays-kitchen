import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-blue-600 flex flex-col gap-2 p-4 md:w-1/2  text-white bg-[url(/PRBG2.png)] bg-blend-overlay font-mono">
      <h2 className="text-2xl font-bold p-2 underline">
        Welcome to Ray's Kitchen
      </h2>
      <p className=" text-xl p-2">
        -- Ray’s Kitchen blends traditional Puerto Rican flavors with a modern
        twist. Fresh ingredients, bold spices, and comfort food vibes.
      </p>
      <p>Check out the the Menu</p>
      <ul className=" list-disc">
        <li className="hover:underline decoration-solid hover:text-blue-200">
          <Link href={"/menu/lunch"}>Lunch</Link>
        </li>
        <li className="hover:underline decoration-solid  hover:text-blue-200">
          <Link href={"/menu/desserts"}>Desserts</Link>
        </li>
      </ul>
    </div>
  );
}
