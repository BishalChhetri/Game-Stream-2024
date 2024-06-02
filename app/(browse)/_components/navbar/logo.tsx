import Image from "next/image";
import Link from "next/link";
import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/" as="/">
      <div className="flex lg:flex items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white rounded-full p-2 mr-12 shrink-0 lg:mr-0 lg:shrink">
          <Image src="/logo.svg" alt="Gamestream" height="25" width="25" />
        </div>
        <div className={cn("hidden lg:block", font.className)}>
          <p className="text-lg font-semibold">Gamestream</p>
          <p className="text-xs text-muted-foreground">Let's play</p>
        </div>
      </div>
    </Link>
  );
};
