import { Button } from "@/components/ui/button";
import Breaker from "@/components/ui/Custom/Landingpage/Breaker";
import DemoProducts from "@/components/ui/Custom/DemoProducts";
import Hero from "@/components/ui/Custom/Landingpage/Hero";
import HeroLanding from "@/components/ui/Custom/Landingpage/HeroLanding";

import ProjectShow from "@/components/ui/Custom/ProjectShow";
import Slider from "@/components/ui/Custom/Landingpage/Slider";
import ShuffleHero from "@/components/ui/Custom/Suffle";
import { Technology } from "@/components/ui/Custom/Landingpage/AnimatedClock"
import CallOut from "@/components/ui/Custom/Landingpage/CallOut";
export default function Home() {
  
  return (
    <main className="mx-auto max-w-screen-2xl">
      <HeroLanding /> 
      <DemoProducts />
      <Slider />
      <Hero />
      <CallOut />
      <ShuffleHero />
      <Technology />
      <Breaker>Services</Breaker>
      
    </main>
  );
}

// Herolanding 
// Slider 
// other ....
