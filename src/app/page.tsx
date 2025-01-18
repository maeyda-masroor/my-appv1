import Image from "next/image";
import HeroSection from "@/components/Hero";
import Feature from '../components/FeatureProduct'
import LatestProduct from '../components/LatestProduct'
import Services from "@/components/Features";
import Sponser from "@/components/Sponsers";
import Category from "../components/Categories";
import DiscountedItem from '../components/DiscountedItem'
import TrendingProduct from "@/components/TrendingProduct";
import New from '../components/News' 
export default function Home() {
  return (
    <div>
      <HeroSection/>
      <Feature/>
      <LatestProduct/>
      <Services/>
      <New/>
      <TrendingProduct/>
      <DiscountedItem/>
      <Category/>
      <Sponser/>
    </div>
    );
}
