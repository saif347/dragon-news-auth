import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CiCalendarDate } from "react-icons/ci";


const LeftNavbar = () => {
    const [categories, setCategory] = useState([])
    const [newses, setNews]= useState([]) 
    const newsesSlice = newses.slice(8, 11)

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategory(data))

        fetch('news.json')
        .then(response => response.json())
        .then(newsData => setNews(newsData))
    }, [])
    return (
        <div className="space-y-4 p-2">
            <h3 className="text-xl font-semibold mb-4">All Category</h3>
            <div className=" space-y-4 px-6 card">
                {
                    categories.map(category => <NavLink
                        className='block text-xl text-[#9F9F9F] '
                        to={`/category/${category.id}`}
                        key={category.id}>
                        {category.name}
                    </NavLink>)
                }
            </div>
            <div>
                {
                    newsesSlice.map((news, index) => <div key={index} className="space-y-3 my-6" >
                        <img src={news.thumbnail_url} alt="" />
                        <h3 className="text-xl font-bold">{news.title}</h3>
                        <p className="flex items-center gap-2"> <CiCalendarDate /> {news.author.published_date}</p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;