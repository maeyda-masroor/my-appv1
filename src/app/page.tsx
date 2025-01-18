import Image from "next/image";
import HeroSection from "@/components/Hero";
import Feature from '../components/FeatureProduct'
import LatestProduct from '../components/LatestProduct'
import Services from "@/components/Features";
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Feature/>
      <LatestProduct/>
      <Services/>
    </div>
    );
}
