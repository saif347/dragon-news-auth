import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import RightNav from "../../components/RightNav/RightNav";
import Content from "../../components/content/Content";
import LeftNavbar from "../../components/leftNav/LeftNavbar";
import Marquee from "react-fast-marquee";
import Navbar from "../../components/navbar/Navbar";



const Home = () => {
    return (
        <div>
            <Header></Header>
            <div className="flex items-center gap-6 p-2 bg-gray-100 my-8">
                <h3 className=" px-4 btn btn-secondary text-white">Nova</h3>
                <Marquee>
                    <Link>hello nova ! how are you? do you know something ? you are both silly and amazing, lovely, sweet woman you know that? </Link>
                    <Link> hello nova ! how are you? do you know something ? you are both silly and amazing, lovely, sweet woman you know that? </Link>
                    <Link> hello nova ! how are you? do you know something ? you are both silly and amazing, lovely, sweet woman you know that? </Link>
                </Marquee>
            </div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mt-10">
                <div className="">
                    <LeftNavbar></LeftNavbar>
                </div>
                <div className="col-span-2">
                    <Content></Content>
                </div>
                <div className="">
                    <RightNav></RightNav>
                </div>
            </div>

        </div>
    );
};

export default Home;