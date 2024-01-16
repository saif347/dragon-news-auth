import { useEffect, useState } from "react";
import NewsContent from "../news/NewsContent";

const Content = () => {
    const [localNews, setLocalNews]=useState([])

    useEffect(()=>{
        fetch('news.json')
        .then(res=> res.json())
        .then(data => setLocalNews(data))
    },[])
    return (
        <div>
            <h1 className="text-xl font-semibold mb-5">Dragon News Home</h1>

            <div>
                {
                    localNews.map(news => <NewsContent key={news._id} news={news}></NewsContent>)
                }
            </div>
        </div>
    );
};

export default Content;