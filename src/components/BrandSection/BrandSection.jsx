/* eslint-disable react/prop-types */
import './brand.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const BrandSection = ({ brand }) => {
    const { photo, name, _id } = brand;


    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div>
           <Link to={`/brandDetails/${_id}`}>
           <div
            data-aos="fade-up"
             className="relative flex flex-col text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg h-80 rounded-xl bg-clip-border hover06 ">
                    <img className="w-full h-full" src={photo} />
                </div>
                <div className="p-6 text-center">
                    <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                        {name}
                    </h4>

                </div>

            </div>
           </Link>

        </div>
    );
};

export default BrandSection;