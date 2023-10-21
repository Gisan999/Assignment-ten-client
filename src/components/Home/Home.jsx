import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import BrandSection from "../BrandSection/BrandSection";
import ExtraSection from "../ExtraSection/ExtraSection";
import pic from '../../assets/watch.png'
import bg from '../../assets/discount-banner.jpg'
import { useEffect } from "react";
import Aos from 'aos'
import 'aos/dist/aos.css'
import style from '../../assets/style.png'
import style2 from '../../assets/style2.png'

const Home = () => {

  const brand = useLoaderData();

  useEffect(() => {
    Aos.init();
  }, [])


  return (
    <div className=" cursor-crosshair">

      <div data-aos="fade-up">
        <Banner />
      </div>
     

      <div data-aos="fade-up" className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold  py-6 pl-5">Shop by Brand</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {
            brand?.map(brand => <BrandSection key={brand._id} brand={brand}></BrandSection>)
          }
        </div>
      </div>
      <div data-aos="fade-up" className="max-w-screen-xl mx-auto my-8">
        <img className="w-full" src={pic} alt="" />
      </div>
      <div data-aos="fade-up">
        <ExtraSection />
      </div>


      <div data-aos="fade-up"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}>

        <div className="max-w-screen-xl mx-auto">

          <div className="flex justify-center">
            <div data-aos="fade-up" className="">
              <h2 className="text-5xl font-bold pt-16">Get <span className="text-green-500">20%</span> Off Discount Coupon  </h2>
              <p className="text-2xl font-serif italic text-center pt-5"> by Subscribe our Newsletter</p>
              <div className="flex justify-center mt-5">

                <div data-aos="fade-up">

                  <input type="text" className=" py-3 rounded-none file-input-success md:pr-24 lg:pr-32 pl-4" placeholder="Email Address " />
                  <button className="relative right-5 bottom-[1px]  bg-green-500 btn mb-12 rounded-none">Get the coupon</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-up" className="max-w-screen-xl mx-auto my-12">
        <div data-aos="fade-up" className="px-3 lg:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div data-aos="fade-up"><img className="w-full" src={style} alt="" /></div>
            <div data-aos="fade-up"><img className="w-full" src={style2} alt="" /></div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default Home;