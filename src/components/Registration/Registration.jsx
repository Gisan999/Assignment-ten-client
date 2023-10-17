import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Registration = () => {

    const handleRegistrationValue = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password);
    }

    return (
        <div>
            <div>
                <div className="py-16">
                    <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:container">
                        <div className="hidden lg:block lg:w-1/2 bg-cover"
                            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1546514714-df0ccc50d7bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80')` }}>
                        </div>
                        <div className="w-full p-12 lg:py-28 lg:w-1/2">
                            <div className='flex justify-center pb-5'>
                                <img src={logo} alt="" />
                            </div>

                            <div className="mt-4 flex items-center justify-between">
                                <span className="border-b w-1/5 lg:w-1/4"></span>
                                <a className="text-xs text-center text-gray-500 uppercase">Registration Here</a>
                                <span className="border-b w-1/5 lg:w-1/4"></span>
                            </div>


                            <form onSubmit={handleRegistrationValue}>
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

                            <div className="mt-4 flex items-center justify-between">
                                <span className="border-b w-1/5 md:w-1/4"></span>
                                <p className="text-xs text-gray-500 ">Click here to <Link className='text-lg text-center text-blue-400 font-medium hover:underline' to={'/login'}>Sign In</Link></p>
                                <span className="border-b w-1/5 md:w-1/4"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;