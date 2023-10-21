import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Root = () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme])

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark")
    }


    const { loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center mt-40"> <span className="loading loading-infinity loading-lg"></span></div>
    }
    return (
        <div className={`bg-white    dark:bg-gray-700
        ${theme === 'dark' ? "text-white" : ''}
        
        `}>
            <Navbar theme={theme} handle={handleThemeSwitch} />
            <div className="mt-6">
                <Outlet />
                <Footer />
            </div>
        </div>
    );
};

export default Root;