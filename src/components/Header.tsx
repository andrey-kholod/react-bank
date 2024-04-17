import { FC } from "react";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface Props {
    name?: string;
}

const Header: FC<Props> = ({ name = 'ИП ВАШЕ ИМЯ' }) => {
    return (
        <header className="bg-gray-900 w-full">
            <div className="container mx-auto px-4 max-w-4xl text-gray-400 uppercase py-2.5">
                <div className="flex justify-between items-center gap-2">
                    <div className="text-white text-xs bg-red-500 flex justify-center items-center py-2 px-3 rounded-full cursor-pointer"><span>A</span></div>
                    <div className="flex items-center cursor-pointer">
                        <span className="truncate font-light">{name}</span>
                        <MdOutlineKeyboardArrowDown size={16} color="fff" />
                    </div>
                    <FaRegBell size={19} cursor='pointer' />
                </div>
            </div>
        </header>
    )
}

export default Header