
import { FC } from "react"
import { MdSell } from "react-icons/md"
import { TExpense } from "../context/expensesContext"

const Expense: FC<TExpense> = (oneExpense) => {
    return (
        <div className="flex py-1.5 items-center gap-5 cursor-pointer transition-colors duration-300 hover:bg-zinc-100 rounded-xl px-1">
            <div className={`${oneExpense['Поступление'] > 0 ? 'bg-blue-500' : 'bg-red-400'} rounded-3xl p-3.5 flex items-center justify-center`}><MdSell color="fff" size={27} /></div>
            <div className="flex flex-col text-gray-500 truncate gap-0.5">
                <span className={`${oneExpense['Поступление'] > 0 ? "text-green-500" : "text-red-500"} font-bold text-lg`}>{oneExpense['Поступление'] > 0 ? '+' : '-'}{oneExpense['Поступление'] ? oneExpense['Поступление'].toLocaleString('ru-RU') : oneExpense['Списание'].toLocaleString('ru-RU') }<span className={`${oneExpense['Поступление'] > 0 ? "text-green-500" : "text-red-500"} font-medium text-lg`}> ₽</span></span>
                <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{oneExpense['Банк (БИК и наименование)']}</span>
                <span className="text-sm truncate">{oneExpense["Назначение платежа"]}</span>
            </div>
        </div>
    )
}

export default Expense