import { Hero, MenuIcons, LocationHours, FollowSocial, DesktopMenu } from "@/app/components";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Hero />
      <MenuIcons />
      <DesktopMenu />

      <div className="wrapper py-4 md:py-8">
        <Image src="/neon-bars/purple-neon-slim.svg" alt="Horizontal purple neon bar" width={1920} height={10} />
      </div>

      <FollowSocial />

      <div className="wrapper py-4 md:py-8">
        <Image src="/neon-bars/green-neon-slim.svg" alt="Horizontal green neon bar" width={1920} height={10} />
      </div>

      <LocationHours />

    </div>
  );
}
