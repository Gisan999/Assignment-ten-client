



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
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 md:p-8 h-screen animate-pulse bg-gradient-to-br from-purple-400 to-indigo-900">
      <div className="max-w-md bg-white p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-40">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Product Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="text-gray-700">Image:</label>
          <input
            type="text"
            name="image"
          
            className="mt-1 p-2 border border-gray-300 block w-full rounded-md"
          />
          <label className="text-gray-700">Name:</label>
          <input
            type="text"
            name="name"
        
            className="mt-1 p-2 border border-gray-300 block w-full rounded-md"
          />
          <label className="text-gray-700">Brand Name:</label>
          <input
            type="text"
            name="brandName"
          
            className="mt-1 p-2 border border-gray-300 block w-full rounded-md"
          />
          <button
            type="submit"
            className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Add
          </button>
        </form>
      </div>
      <div className="max-w-md bg-white p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-lg bg-opacity-40">
        <h2 className="text-3xl font-bold mb-6 text-center text-white">Product Description</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="text-gray-700">Type:</label>
          <input
            type="text"
            name="type"
           
            className="mt-1 p-2 border border-gray-300 block w-full rounded-md"
          />
          <label className="text-gray-700">Price:</label>
          <input
            type="text"
            name="price"
          
            className="mt-1 p-2 border border-gray-300 block w-full rounded-md"
          />
          <label className="text-gray-700">Short Description:</label>
          <input
            type="text"
            name="shortDescription"
          
            className="mt-1 p-2 border border-gray-300 block w-full rounded-md"
          />
          <label className="text-gray-700">Rating:</label>
          <input
            type="text"
            name="rating"
          
            className="mt-1 p-2 border border-gray-300 block w-full rounded-md"
          />
          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Add
          </button>
        </form>
      </div>
    </div>
        </div>
    );
};

export default AddProduct;