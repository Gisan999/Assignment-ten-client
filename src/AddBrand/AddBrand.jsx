

const AddBrand = () => {


    const handleRegistration = e => {
        e.preventDefault();

        const form = e.target;
        const brand = form.brand.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const photo2 = form.photo2.value;
        const photo3 = form.photo3.value;
        const photo4 = form.photo4.value;
        const check = { brand, category, photo, photo2, photo3, photo4}

        fetch('https://assignment-ten-server-lyart.vercel.app/brand', {
            method:"POST",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(check)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })


    }

    return (
        <div>
            <div className="">
                <div className="hero min-h-screen ">
                    <div className="hero-content flex-col ">
                        <div className="text-center lg:text-left">
                            <h1 className="text-5xl font-bold ">REGISTRATION</h1>

                        </div>
                        <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                            <form onSubmit={handleRegistration}
                                className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" 
                                        name="brand"
                                        className="input input-bordered pr-32 md:pr-48" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" 
                                        name="category"
                                        className="input input-bordered pr-32 md:pr-48" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" 
                                        name="photo"
                                        className="input input-bordered pr-32 md:pr-48" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" 
                                        name="photo2"
                                        className="input input-bordered pr-32 md:pr-48" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text"
                                        name="photo3"
                                       className="input input-bordered pr-32 md:pr-48" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <div className="relative">
                                        <input type="text"
                                            name="photo4"
                                            className="input input-bordered pr-32 md:pr-48" required />
                                       
                                    </div>
                                   
                                </div>
                                <div className="form-control mt-4">
                                    <button

                                        className="btn  bg-teal-400 ">REGISTER</button>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
                {/* <ToastContainer></ToastContainer> */}
            </div>
        </div>
    );
};

export default AddBrand;