/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Product from "../Product/Product";
import pic from '../../assets/watch.png'

const BrandDetails = () => {
    const [selected, setSelected] = useState([]);
    const details = useLoaderData()
    console.log(details.brand);
    const { photo4, photo2, photo3 } = details;

    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                // console.log(details.brand);
                const selectItem = data?.filter(item => item.brandName === details.brand)
                setSelected(selectItem);
            })
    }, [])

    console.log(selected);



    return (
        <div>
            <div className='container mx-auto'>
                <div className="carousel h-[600px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={photo4} className="w-full " />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={photo2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={photo3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>
            </div>
         


            <div className="flex mt-9">
                <div className="max-w-screen-xl mx-auto">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg: lg:grid-cols-3 gap-5">

                        {
                            selected?.map(data => <Product key={data._id} product={data} selected={selected}></Product>)
                        }
                    </div>


                </div>
            </div>
            <div className="max-w-screen-xl mx-auto my-8">
        <img className="w-full" src={pic} alt="" />
      </div>

        </div>
    );
};

export default BrandDetails;