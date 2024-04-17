import { FC } from "react"
import Expense from "./Expense"
import { TExpense } from "../context/expensesContext"

interface Props {
    date: string
    expenses: TExpense[]
}

interface Periods {
    months: { [key: string]: string }
    days: { [key: number]: string }
}

export const periods: Periods = {
    months: {
        "01": "января",
        "02": "февраля",
        "03": "марта",
        "04": "апреля",
        "05": "мая",
        "06": "июня",
        "07": "июля",
        "08": "августа",
        "09": "сентября",
        "10": "октября",
        "11": "ноября",
        "12": "декабря"
    },
    days: {
        0: "вс",
        1: "пн",
        2: "вт",
        3: "ср",
        4: "чт",
        5: "пт",
        6: "сб",
    }
}

const getCorrectDate = (date: string): string => {
    const arrayDate: string[] = date.split('.')
    const arrayDateNum: number[] = arrayDate.map(e => +e)
    const currentYear = new Date().getFullYear()

    const fullDate: number = new Date(arrayDateNum[2], arrayDateNum[1] - 1, arrayDateNum[0]).getDay()

    return `${arrayDateNum[0]} ${periods.months[arrayDate[1]]}, ${periods.days[fullDate]} ${currentYear === arrayDateNum[2] ? '' : arrayDateNum[2]}`
}

const ExpensesPerDay: FC<Props> = ({ date, expenses }) => {
    return (
        <div className="daily-expenses">
            <p className="text-gray-800 font-bold text-lg my-6">{getCorrectDate(date)}</p>
            <div className="flex flex-col gap-2">
                {expenses.map((e, i) => (<Expense {...e} key={i} />))}
            </div>
        </div>
    )
}

export default ExpensesPerDay