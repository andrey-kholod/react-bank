import { LuSettings2 } from "react-icons/lu"
import Box from "../components/Box"
import Container from "../components/Container"
import { MTabComponent } from "../components/TabComponent"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import ExpensesPerDay from "../components/ExpensesPerDay"
import { getMainContext } from "../context/expensesContext"
import { currentSpendings } from "../ulits/utils"
import { FC, useState } from "react"
import { Link, Navigate } from "react-router-dom"
import Header from "../components/Header"
import Menu from "../components/Menu"

interface Props {
    authorized: boolean
}

const FinancialAnalyticsPage: FC<Props> = ({ authorized }) => {
    const [activeTab, setActiveTab] = useState(0)

    const [earned, spent] = currentSpendings()
    const [mainContextExpenses] = getMainContext()

    const allMoney = Math.abs(spent) + earned

    const animationVariants = {
        hidden: {
            x: 30,
            opacity: 0,
        },
        visible: (custom: any) => ({
            x: 0,
            opacity: 1,
            transition: { delay: custom * 0.15 }
        })
    }

    if (!authorized) {
        return <Navigate to="/lockscreen" />
    } else {
        return (
            <>
                <Header />
                <Container>
                    <div className="flex justify-between items-center">
                        <h2 className="text-gray-800 font-bold text-xl mt-6 mb-5">Финансовая аналитика</h2>
                        <Link to="/schedule"><MdOutlineKeyboardArrowRight size={30} style={{ marginTop: '3px', color: 'rgb(176 184 199)', cursor: 'pointer' }} /></Link>
                    </div>
                    <Box>
                        <Link to="/schedule" className="flex flex-col gap-3">
                            <p className="text-gray-800 font-bold text-lg">Апрель</p>
                            <div className="flex justify-between font-medium text-gray-500 text-sm">
                                <p>Поступления</p>
                                <p>Списания</p>
                            </div>
                            <div className="w-full h-1.5 rounded overflow-hidden flex">
                                <div className="h-1.5 bg-green-500 transition-all duration-500" style={{ width: `${(earned / allMoney * 100).toFixed(1)}%` }}></div>
                                <div className="h-1.5 bg-red-500 transition-all duration-500" style={{ width: `${(Math.abs(spent) / allMoney * 100).toFixed(1)}%` }}></div>
                            </div>
                            <div className="flex justify-between font-bold">
                                <p>{earned.toLocaleString('ru-RU')} ₽</p>
                                <p>{Math.abs(spent).toLocaleString('ru-RU')} ₽</p>
                            </div>
                        </Link>
                    </Box>
                    <h2 className="text-gray-800 font-bold text-xl mt-14 mb-6">Исполненные платежи</h2>
                    <Box type="input" placeholder="Контрагент или назначение" index={activeTab}>
                    </Box>
                    <div className="btn-box mx-1.5 mt-5 mb-9 flex items-center gap-2">
                        <MTabComponent custom={1} variants={animationVariants} initial="hidden" animate="visible" appointment="none" index={1} changeTheIndex={setActiveTab} activeTab={activeTab}>
                            <LuSettings2 size={20} />
                        </MTabComponent>
                        <MTabComponent custom={2} variants={animationVariants} initial="hidden" animate="visible" appointment="incoming" index={2} changeTheIndex={setActiveTab} activeTab={activeTab}>Входящие</MTabComponent>
                        <MTabComponent custom={3} variants={animationVariants} initial="hidden" animate="visible" appointment="outgoing" index={3} changeTheIndex={setActiveTab} activeTab={activeTab}>Исходящие</MTabComponent>
                    </div>

                    <div className="expenses-block mx-1.5">
                        {Object.keys(mainContextExpenses).map((e, i) => (
                            <ExpensesPerDay date={e} expenses={mainContextExpenses[e]} key={i} />
                        ))}
                    </div>
                </Container>
                <Menu />
            </>
        )
    }

}

export default FinancialAnalyticsPage