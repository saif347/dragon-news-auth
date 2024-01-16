import Header from "../../components/Header/Header";
import RightNav from "../../components/RightNav/RightNav";
import Navbar from "../../components/navbar/Navbar";


const NewsDetail = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
          <div className="grid grid-cols-4 ">
            <div className="col-span-3">
                    <h2>news details</h2>
            </div>
            <div>
                <RightNav></RightNav>
            </div>

          </div>
        </div>
    );
};

export default NewsDetail;