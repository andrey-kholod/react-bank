import { getMainContext } from "../context/expensesContext"

export const currentSpendings = (currentMonth: number = new Date().getMonth() + 1): [number, number] => {
    // const currentMonth = new Date().getMonth() + 1
    const [context] = getMainContext()
    let totalAmountOfReplenishment = 0
    let totalAmountSpent = 0

    for (let month in context) {
        if (month.includes(`.${currentMonth > 10 ? '' : '0'}${currentMonth}.`)) {
            for (let i = 0; i < context[month].length; i++) {
                totalAmountOfReplenishment += context[month][i].Поступление
                totalAmountSpent -= context[month][i].Списание
            }
        }
    }
    return [totalAmountOfReplenishment, totalAmountSpent]
}
