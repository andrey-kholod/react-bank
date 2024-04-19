import { FC } from "react"
import { PiHouseFill } from "react-icons/pi";
import { Link, useLocation, } from "react-router-dom";
import { BiRuble, BiSolidMessageRounded } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";

const Menu: FC = () => {
    const location = useLocation();

    return (
        <div className="fixed bottom-0 w-full bg-white pt-2.5 pb-2 border-t border-t-gray-300">
            <div className="container mx-auto px-4 max-w-4xl flex items-center justify-between">
                <Link to="/" className="flex flex-col items-center cursor-pointer">
                    <PiHouseFill size={29} color={`${location.pathname === '/' ? 'red' : 'rgb(107 114 128)'}`} />
                    <span className={`text-xs ${location.pathname === '/' ? 'text-red-500' : 'text-gray-600'}`}>Главный</span>
                </Link>
                <Link to="/payments" className="flex flex-col items-center gap-0.5 cursor-pointer">
                    <div className="ruble">
                        <BiRuble color="#fff" className={`p-0.5 w-6 h-6 rounded-sm mb-0.5 ${location.pathname === '/payments' ? 'bg-red-500' : 'bg-gray-500'}`} size={1} />
                    </div>
                    <span className={`text-xs ${location.pathname === '/payments' ? 'text-red-500' : 'text-gray-500'}`}>Платежи</span>
                </Link>
                <div className="services flex flex-col items-center gap-0.5 cursor-pointer" >
                    <div className="block-icon mb-0.5">
                        <div className="rounded-tl-sm"></div>
                        <div className="rounded-tr-sm"></div>
                        <div className="rounded-bl-sm"></div>
                        <div className="rounded-br-sm"></div>
                    </div>
                    <span className='text-xs text-gray-600'>Сервисы</span>
                </div >
                <div className="flex flex-col items-center cursor-pointer gap-0.5" >
                    <BiSolidMessageRounded size={30} className="text-gray-500 -mt-1" />
                    <span className='text-xs text-gray-600'>Сообщения</span>
                </div>
                <div className="flex flex-col items-center cursor-pointer gap-0.5" >
                    <BsPersonFill size={31} className="text-gray-500 -mt-1" />
                    <span className='text-xs text-gray-600'>Профиль</span>
                </div>
            </div>
        </div>
    )
}

export default Menu