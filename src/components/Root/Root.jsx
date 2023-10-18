import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


const Root = () => {
    return (
        <div>
            <Navbar />
            <div className="mt-6">
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Root;