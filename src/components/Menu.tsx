import { FC } from "react"
import { PiHouseFill } from "react-icons/pi";
import { IoPerson } from "react-icons/io5";

const Menu: FC = () => {
    return (
        <div className="sticky bottom-0 w-full bg-white py-2 border-t border-t-gray-300">
            <div className="container mx-auto px-4 max-w-4xl flex items-center justify-between">
                <div className="flex flex-col items-center gap-0.5 cursor-pointer">
                    <PiHouseFill size={27} color="red"/>
                    <span className="text-xs text-red-500">Главный</span>
                </div>
                <div className="flex flex-col items-center gap-0.5 cursor-pointer">
                    <IoPerson size={25} color="rgb(75 85 99)"/>
                    <span className="text-xs text-gray-600">Профиль</span>
                </div>
            </div>
        </div>
    )
}

export default Menu