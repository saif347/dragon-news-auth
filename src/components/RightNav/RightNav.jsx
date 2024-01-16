import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'

const RightNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-4">
                <h2 className="text-2xl font-semibold mb-4">Login With</h2>
                <button className=" btn btn-outline btn-info w-full text-xl hover:text-white">
                    <FaGoogle /> Google
                </button>
                <button className=" btn btn-outline btn-default w-full text-xl hover:text-white">
                    <FaGithub /> GitHub
                </button>
            </div>
            <div className="p-4">
                <h2 className="text-2xl font-semibold mb-6">Find us on</h2>
                <a className="text-[#706F6F] text-lg flex items-center gap-2 p-4 border rounded-t-lg" href="https://www.facebook.com/safi.sarfaraj">
                    <FaFacebook className="text-blue-800" /> Facebook
                </a>
                <a className="text-[#706F6F] text-lg flex items-center gap-2 p-4 border-x" href="https://www.instagram.com/sakhawat_saif/">
                    <FaInstagram className="text-amber-700" /> Instagram
                </a>
                <a className="text-[#706F6F] text-lg flex items-center gap-2 p-4 border  rounded-b-lg" href="">
                    <FaTwitter className="text-blue-500" /> Tweeter
                </a>
            </div>
            <div className="p-4 mx-4 space-y-3 bg-[#F3F3F3]">
                <h2 className="text-2xl font-semibold mb-6">Q Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightNav;