



const AddProduct = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const image = form.image.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const type = form.type.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const rating = form.rating.value;
        const formData = {
            image,
            name,
            brandName,
            type,
            price,
            shortDescription,
            rating
        }

        console.log(formData);
    };

    return (
        <div>
         
         <form onSubmit={handleSubmit}>
                           <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
                                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text"
                                name='name'
                                required

                                />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Photo URL</label>
                                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text"
                                name='photo'
                                required />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email"
                                name='email'
                                required />
                            </div>
                            <div className="mt-4">
                                <div className="flex justify-between">
                                    <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                   
                                </div>
                                <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password"
                                name='password'
                                required />
                            </div>
                            <div className="mt-8">
                                <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Registration</button>
                            </div>

                           </form>
        </div>
    );
};

export default AddProduct;