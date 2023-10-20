import { useEffect } from 'react'
import extra from '../../assets/extra.png'
import extra2 from '../../assets/extra2.png'
import extra3 from '../../assets/extra3.png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const ExtraSection = () => {

    useEffect(() => {
        Aos.init();
    }, [])

    return (
        <div>
            <div className="max-w-screen-xl  mx-auto my-10">
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-3 lg:px-0'>
                    <div data-aos="fade-up" className='col-span-2 '>
                        <img className='w-full' src={extra} alt="" />
                    </div>

                    <div className='flex justify-center'>
                        <div className=' lg:space-y-11'>
                            <div data-aos="fade-up" className='pb-8 lg:pb-0'>
                                <img className='w-full h-80' src={extra2} alt="" />
                            </div>
                            <div data-aos="fade-up">
                                <img className='w-full h-80' src={extra3} alt="" />
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ExtraSection;