// pages/index.js
import TabsComponent from './TabDiscount';
export default function Home() {
  return (
    <section className="space-y-4 lg:pr-56 lg:pl-56 pt-20 sm:pr-20 sm:pl-20 mx-auto overflow-x-hidden">
    <div className="text-center">
        <h1 className="text-3xl font-semibold">Discounted Items</h1>
    </div>
    <div>
    <TabsComponent />
    </div>
    </section>
  );
}