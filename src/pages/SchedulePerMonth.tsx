import { IoIosInformationCircle } from "react-icons/io"
import { TExpense, makeInitialValue } from "../context/expensesContext"
import { useEffect, useState } from "react"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import Schedule from "../components/Schedule"
import { motion } from "framer-motion"

const SchedulePerMonth = () => {
    const [month, setMonth] = useState(new Date().getMonth() + 1)
    const [data, setData] = useState<TExpense[]>([])


    const animationVariants = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: (custom: any) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.3 }
        })
    }


    const currentSpendingsSchedule = (currentMonth: number = new Date().getMonth() + 1): [number, number] => {
        const context = makeInitialValue()
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

    const [replenishment, spent] = currentSpendingsSchedule(month)


    useEffect(() => {
        if (month <= 0) {
            setMonth(12 - month)
        }
        if (month === 13) {
            setMonth(1)
        }

        const expensesPerMonth = () => {
            const currentMonth = month

            const filteredExpenses: TExpense[] = []

            Object.keys(makeInitialValue()).forEach(date => {
                if (date.includes(`.${currentMonth > 10 ? '' : '0'}${currentMonth}.`)) {
                    filteredExpenses.push(...makeInitialValue()[date])
                }
            })
            setData(filteredExpenses)
        }
        expensesPerMonth()
    }, [month])

    const periodsMonths: { [key: number]: string } = {
        1: "Январь",
        2: "Февраль",
        3: "Март",
        4: "Апрель",
        5: "Май",
        6: "Июнь",
        7: "Июль",
        8: "Август",
        9: "Сентябрь",
        10: "Октябрь",
        11: "Ноябрь",
        12: "Декабрь"
    }

    return (
        <>
            <div className="shadow-month">
                <div className="container mx-auto p-4 max-w-4xl overflow-hidden text-lg  flex items-center justify-between">
                    <button disabled={month === 4} onClick={() => setMonth(prev => prev + 1)}><RiArrowLeftSLine size={27} color={month === 4 ? 'rgb(153 165 182)' : 'rgb(105 113 124)'} /></button>
                    <h3>{periodsMonths[month]} {month > 4 ? '2023' : '2024'}</h3>
                    <button disabled={month === 6} onClick={() => setMonth(prev => prev - 1)}><RiArrowRightSLine size={27} color={month === 6 ? 'rgb(153 165 182)' : 'rgb(105 113 124)'} /></button>
                </div>
            </div>
            <div className="container mx-auto p-4 pt-7 max-w-4xl overflow-hidden text-lg mb-20">
                <div className="flex items-center justify-between">
                    <motion.h2 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="text-gray-800 font-bold text-xl">Поступления и списания</motion.h2>
                    <IoIosInformationCircle size={25} color="rgb(153 165 182)" />
                </div>
                <div className="mt-4 text-base flex justify-between mb-5">
                    <span className="text-gray-500">Всего:</span>
                    <div className="flex flex-col items-end">
                        <motion.p className="text-green-500" custom={1} variants={animationVariants} initial="hidden" animate="visible" transition={{ delay: 1 }}>+{replenishment.toLocaleString('ru-RU')} ₽</motion.p>
                        <motion.p className="text-red-500" custom={2} variants={animationVariants} initial="hidden" animate="visible" transition={{ delay: 1 }}>{spent.toLocaleString('ru-RU')} ₽</motion.p>
                    </div>
                </div>
                <Schedule data={data} />
                {replenishment === 0 && spent === 0 && (<p className="text-center text-gray-500 py-4">Нет трат или пополнений...</p>)}
                <motion.h2 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="text-gray-800 font-bold text-xl">Исходящий остаток</motion.h2>
                <p className="text-gray-500 my-16 text-center px-14">За выбранный период нет информации об исходящем остатке</p>
                <div className="flex items-center justify-between">
                    <motion.h2 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="text-gray-800 font-bold text-xl">Рейтинг контрагентов</motion.h2>
                    <IoIosInformationCircle size={25} color="rgb(153 165 182)" />
                </div>
            </div>
        </>
    )
}

export default SchedulePerMonth