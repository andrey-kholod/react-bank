import { LuSettings2 } from "react-icons/lu"
import Box from "../components/Box"
import Container from "../components/Container"
import {MTabComponent} from "../components/TabComponent"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import ExpensesPerDay from "../components/ExpensesPerDay"
import { expenses } from "../data/expenses"

const FinancialAnalyticsPage = () => {

    const animationVariants = {
        hidden: {
            x: 100,
            opacity: 0,
        },
        visible: (custom: any) => ({
            x: 0,
            opacity: 1,
            transition: {delay: custom * 0.15}
        })
    }

    return (
        <Container>
            <div className="flex justify-between items-center">
                <h2 className="text-gray-800 font-bold text-xl mt-6 mb-5">Финансовая аналитика</h2>
                <MdOutlineKeyboardArrowRight size={30} style={{marginTop: '3px', color: 'rgb(176 184 199)', cursor: 'pointer'}}/>

            </div>
            <Box>
                <div className="flex flex-col gap-3">
                    <p className="text-gray-800 font-bold text-lg">Апрель</p>
                    <div className="flex justify-between font-medium text-gray-500 text-sm">
                        <p>Поступления</p>
                        <p>Списания</p>
                    </div>
                    <div className="w-full h-1.5 rounded overflow-hidden flex">
                        <div className="h-1.5 w-4/6 bg-green-500"></div>
                        <div className="h-1.5 w-2/6 bg-red-500"></div>
                    </div>
                    <div className="flex justify-between font-bold">
                        <p>41 405 ₽</p>
                        <p>25 405, 81 ₽</p>
                    </div>
                </div>
            </Box>
            <h2 className="text-gray-800 font-bold text-xl mt-14 mb-6">Исполненные платежи</h2>
            <Box type="input" placeholder="Контрагент или назначение">
                {/* <p className="text-gray-500"></p> */}
            </Box>
            <div className="btn-box mx-1.5 mt-5 mb-9 flex items-center gap-2">
                <MTabComponent custom={1} variants={animationVariants} initial="hidden" animate="visible">
                    <LuSettings2 size={20}/>
                </MTabComponent>
                <MTabComponent custom={2} variants={animationVariants} initial="hidden" animate="visible">Входящие</MTabComponent>
                <MTabComponent custom={3} variants={animationVariants} initial="hidden" animate="visible">Исходящие</MTabComponent>
            </div>

            <div className="expenses-block mx-1.5">
                <ExpensesPerDay date="8 апреля, пн" expenses={expenses}/>
                <ExpensesPerDay date="8 апреля, пн" expenses={expenses}/>
            </div>

            
        </Container>
    )
}

export default FinancialAnalyticsPage