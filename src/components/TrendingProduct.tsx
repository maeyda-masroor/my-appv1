import ProductCard from '../components/ProductCard';
import DiscountAd from '../components/DiscountAd';
export default function TrendingProduct(){
    return <section className="space-y-4 lg:pr-50 lg:pl-50 pt-20 sm:pr-20 sm:pl-20 overflow-x-hidden ">
    <div className="text-center">
    <h1 className="text-3xl font-semibold">Trending Products</h1>
    </div>
    <div className="">
        <ProductCard/>
        <DiscountAd/>    
    </div>
  </section>
}