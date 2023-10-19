import { useLoaderData } from "react-router-dom";
import headphone from '../assets/headphone.png'
import Swal from "sweetalert2";


const MyCart = () => {
    const cart = useLoaderData();

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: "DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })

        // fetch(`http://localhost:5000/cart/${_id}`,{
        //     method: "DELETE",
        // })
        // .then(res => res.json())
        // .then(data => {
        //     console.log(data);
        // })

    }

    return (
        <div className="max-w-screen-xl mx-auto ">
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className="bg-gray-400 text-white text-lg">

                                <th>Product</th>
                                <th>Price</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                cart?.map(data => <tr key={data._id}>

                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-28 h-28 ">
                                                    <img className="" src={data.image} alt="Avatar Tailwind CSS Component" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{data.name}</div>
                                                <div className="text-sm opacity-50">{data.brandName}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        ${data.price}
                                    </td>
                                    <td>{data.type}</td>
                                    <th>
                                        <button onClick={() => handleDelete(data._id)}
                                            className="btn btn-ghost animate-spin">X</button>
                                    </th>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="max-w-screen-xl mx-auto my-20">
                <div className="px-5 lg:px-0">
                    <img className="w-full hover:scale-75 transition duration-500 " src={headphone} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MyCart;