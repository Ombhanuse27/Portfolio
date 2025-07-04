// src/app/page.js

import Image from "next/image";
import bg from "../../public/background/loki_tree.png";
import dynamic from "next/dynamic";
import RenderModel from "@/components/RenderModel";
import Navigation from "@/components/navigation";

const Loki = dynamic(() => import("@/components/models/Loki"), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        priority
        sizes="600vw"
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
        <Navigation />
        <RenderModel>
          <Loki />
        </RenderModel>
      </div>
    </main>
  );
}
