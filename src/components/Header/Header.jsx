import { useEffect, useState } from "react";
import logo from '../../assets/logo.png'


const Header = () => {
    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval(intervalId);
    }, [])

    const formattedDate = time.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
        <div className="text-center space-y-3 my-10">
            <img className="mx-auto" src={logo} alt="" />
            <p className="text-[#706F6F] text-lg">Journalism Without Fear or Favour</p>
            <p className="text-[#706F6F]">{formattedDate}</p>

        </div>
    );
};

export default Header;