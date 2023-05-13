import {Outlet} from "react-router-dom";
import Header from "../components/Header";
import toast, {Toaster} from 'react-hot-toast';

const HomeLayout = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Toaster/>
        </div>
    );
};

export default HomeLayout;