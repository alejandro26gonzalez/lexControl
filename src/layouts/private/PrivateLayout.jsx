import { Outlet } from "react-router-dom";

import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import useResetScrollPosition from "../../hooks/useResetScrollPosition";

const PrivateLayout = () => {
    useResetScrollPosition();

    return (
        <>
        <Navbar />

        <main>
            <Outlet />
        </main>

        <Footer />
        </>
    )
};
export default PrivateLayout;