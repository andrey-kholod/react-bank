import { FC } from "react"
import { PiHouseFill } from "react-icons/pi";
import { GrSchedulePlay } from "react-icons/gr";
import { Link, useLocation,} from "react-router-dom";

const Menu: FC = () => {
    const location = useLocation();

    return (
        <div className="fixed bottom-0 w-full bg-white py-2 border-t border-t-gray-300">
            <div className="container mx-auto px-4 max-w-4xl flex items-center justify-between">
                <Link to="/" className="flex flex-col items-center gap-0.5 cursor-pointer">
                    <PiHouseFill size={27} color={`${location.pathname === '/' ? 'red' : 'rgb(75 85 99)'}`} />
                    <span className={`text-xs ${location.pathname === '/' ? 'text-red-500' : 'text-gray-600'}`}>Главный</span>
                </Link>
                <Link to="/schedule" className="flex flex-col items-center gap-0.5 cursor-pointer">
                    <GrSchedulePlay size={25} color={`${location.pathname === '/schedule' ? 'red' : 'rgb(75 85 99)'}`} />
                    <span className={`text-xs ${location.pathname === '/schedule' ? 'text-red-500' : 'text-gray-600'}`}>Графики</span>
                </Link>
            </div>
        </div>
    )
}

export default Menu