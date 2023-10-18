/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const BrandDetails = () => {
    const [brand, setBrand] = useState([]);
    const detail = useLoaderData();
    const {id} = useParams();
    const inInt = parseInt(id);

    // console.log(detail);

    useEffect(()=>{
        const catchBrand = detail?.find(data => data.id === inInt);
        setBrand(catchBrand);

    },[])
    console.log(brand);
    const {slider1, slider2, slider3}= brand;


    return (
        <div>
             <div className='container mx-auto'>
                <div className="carousel h-[600px]">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={slider1} className="w-full " />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={slider2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={slider3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    {/* <div id="slide4" className="carousel-item relative w-full">
                        <img src={slider3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default BrandDetails;