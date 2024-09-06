import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Route = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Route;