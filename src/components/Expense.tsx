
import { FC } from "react"
import { TExpense } from "../data/expenses"
import { MdSell } from "react-icons/md"

const Expense: FC<TExpense> = ({amount, desc, cause}) => {
    return (
        <div className="flex items-center gap-5">
            <div className="bg-blue-500 rounded-3xl p-3.5 flex items-center justify-center"><MdSell color="fff" size={27}/></div>
            <div className="flex flex-col text-gray-500 truncate gap-0.5">
                <span className={`${amount > 0 ? "text-green-500" : "text-red-500"} font-bold text-lg`}>{amount > 0 ? '+' : ''}{amount},<span className={`${amount > 0 ? "text-green-500" : "text-red-500"} font-medium text-lg`}>06 ₽</span></span>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{desc}</span>
                <span className="text-sm">{cause}</span>
            </div>
        </div>
    )
}

export default Expense