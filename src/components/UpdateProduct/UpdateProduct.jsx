import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';
import bg from '../../assets/bg.jpg'


const UpdateProduct = () => {

    const product = useLoaderData();
    console.log(product);



    
    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;

        const updateFormData = { image, name, brandName, type, price, shortDescription, rating }

        console.log(updateFormData);


        fetch(`http://localhost:5000/product/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(updateFormData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    position: 'center',
                    title:'Product updated successfully',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        })


    };


    const { image, brandName, name, price, rating, type, shortDescription, _id } = product;

    return (
        <div>
            <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
            className=" px-5 lg:px-0">
            <div className="max-w-screen-xl mx-auto p-5 bg-gray-300 bg-transparent backdrop-blur-lg pb-10 lg:py-24 border border-white">
                <div>
                    <h2 className='text-white text-3xl md:text-5xl font-bold font-mono text-center py-12'>Update Your Product</h2>
                </div>

                <form onSubmit={handleUpdate}>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                        <div className="mt-4">
                            <label className="block text-white text-sm font-bold mb-2">Image URL</label>
                            <input className="bg-gray-100 text-black font-medium focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="url"
                            defaultValue={image}
                                name='image'


                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-white text-sm font-bold mb-2">Name</label>
                            <input className="bg-gray-400 text-black font-medium focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text"
                                name='name'
                                defaultValue={name}


                            />
                        </div>
                        <div className="mt-4">
                            <label className="block text-white text-sm font-bold mb-2">Brand Name</label>
                            <select  defaultValue={brandName} required name='brandName' className=" bg-gray-400 text-white font-medium focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ">
                                <option value="" selected>Name Of Brand ?</option>
                                <option value="Apple">Apple</option>
                                <option value="Google">Google</option>
                                <option value="Huawei">Huawei</option>
                                <option value="Lenovo">Lenovo</option>
                                <option value="Oneplus">Oneplus</option>
                                <option value="Tesla">Tesla</option>
                            </select>
                        </div>


                        <div className="mt-4">
                            <label className="block text-white text-sm font-bold mb-2">Price</label>
                            <input className="bg-gray-100 text-black font-medium focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="number"
                                placeholder='$ ?'
                                name='price'
                                defaultValue={price}
                            />
                        </div>


                        <div className="mt-4">
                            <label className="block text-white text-sm font-bold mb-2">Type</label>

                            <select defaultValue={type} required name='type' className=" bg-gray-400 text-white font-medium focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none ">
                                <option value="" selected>Type Of Category ?</option>
                                <option value="Phone">Phone</option>
                                <option value="Computer">Computer</option>
                                <option value="Headphone">Headphone</option>
                                <option value="Smart Watch">Smart Watch</option>
                                <option value="Bluetooth">Bluetooth</option>
                                <option value="Tablets">Tablets</option>
                            </select>

                        </div>



                        <div className="mt-4">
                            <label className="block text-white text-sm font-bold mb-2">Short Description</label>
                            <input className="bg-gray-100 text-black font-medium focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text"
                                name='shortDescription'
                                defaultValue={shortDescription}
                            />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-white text-sm font-bold mb-2">Rating</label>

                            </div>
                            <input className="bg-gray-100 text-black font-medium focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="number"
                                placeholder='How many out of 10?'
                                name='rating'
                                defaultValue={rating}
                            />
                        </div>
                        <div className="mt-8">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-3"></label>

                            </div>

                            <button className="bg-gray-500 text-white font-bold py-[10px] px-4 w-full rounded animate-bounce  hover:bg-gray-600">Submit</button>
                        </div>
                    </div>


                </form>
            </div>
        </div>
        </div>
    );
};

export default UpdateProduct;