import { CiBookmark, CiShare2 } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

const NewsContent = ({ news }) => {
    const { _id, author, details, image_url, title, total_view, rating, } = news

    return (
        <div className="space-y-5">
            <div className="space-y-4 border rounded shadow-lg p-5">
                <div className="flex justify-between  bg-[#F3F3F3] p-2">
                    <div className="flex items-center gap-2">
                        <img className="w-10 h-10 rounded-full" src={author.img} alt="" />
                        <div className="">
                            <h3>{author.name}</h3>
                            <p>{author.published_date}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <p className="text-xl"><CiBookmark /></p>
                        <p className="text-xl"><CiShare2 /></p>
                    </div>
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <img src={image_url} alt="" />
                {
                    details.length > 200 ? <p className="text-[#706F6F]">{details.slice(0, 200)}... <Link
                    to={`/news/${_id}`}
                    ><span className="btn btn-link">Read more</span></Link> </p> 
                        : <p className="text-[#706F6F]">{details}</p>
                }
                <hr />
                <div className="flex justify-between">
                    <div>
                        <p>{rating.number}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <p><FaEye></FaEye></p>
                        <p>{total_view}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};
NewsContent.propTypes = {
    news: PropTypes.object
}

export default NewsContent;