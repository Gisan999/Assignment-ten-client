import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BrandSection from "../BrandSection/BrandSection";

const Home = () => {

    const brand = useLoaderData();

    return (
        <div className="">

           <div>
           <Banner/>
           </div>

          <div className="max-w-screen-xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold  py-6">Shop by Brand</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {
                brand?.map(brand => <BrandSection key={brand.id} brand={brand}></BrandSection>)
            }
           </div>
          </div>
          

        </div>
    );
};

export default Home;