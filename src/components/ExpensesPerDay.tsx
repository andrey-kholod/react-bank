
import { FC } from "react"
import { TExpense } from "../data/expenses"
import Expense from "./Expense"

interface Props {
    date: string
    expenses: TExpense[]
}

const ExpensesPerDay: FC<Props> = ({date, expenses}) => {
    return (
        <div className="daily-expenses">
            <p className="text-gray-800 font-bold text-lg my-6">{date}</p>
            <div className="flex flex-col gap-4">
                {expenses.map((e, i) => (<Expense {...e} key={i}/>))}
            </div>
        </div>
    )
}

export default ExpensesPerDay