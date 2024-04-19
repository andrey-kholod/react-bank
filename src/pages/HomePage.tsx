import { BiRuble } from "react-icons/bi"
import Header from "../components/Header"
import Menu from "../components/Menu"
import { Link, Navigate } from "react-router-dom"
import Box from "../components/Box"
import { currentSpendings } from "../ulits/utils"
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { FC } from "react"
import { motion } from "framer-motion"

interface Props {
    authorized: boolean
}

const HomePage:FC<Props> = ({authorized}) => {
    const [earned, spent] = currentSpendings()
    const allMoney = Math.abs(spent) + earned
    const balance = earned - Math.abs(spent)

    if (!authorized) {
        return <Navigate to="/lockscreen" />
    } else {
    return (
        <>
            <Header />
            <div className="bg-zinc-800 pt-10 pb-10">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="flex items-start justify-between">
                        <div className="flex gap-4 items-start">
                            <motion.div className="ruble" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                                <BiRuble color="rgb(39 39 42)" className='p-0.5 w-6 h-6 rounded-sm mb-0.5 bg-gray-500' size={1} />
                            </motion.div>
                            <div className="flex flex-col text-white">
                                {/* <h3 className="font-medium mb-1.5 text-lg">15 375,19 ₽</h3> */}
                                <motion.h3 initial={{ opacity: 0, x: -100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="font-medium mb-1.5 text-lg">{Number(balance.toString().split('.')[0]).toLocaleString('ru-RU')}<span className="font-light">,{balance.toFixed(2).toString().split('.')[1]}₽</span></motion.h3>
                                <p className="mb-0.5">Расчётный <span className="text-sm">&#x2022;&#x2022;</span>0076</p>
                                <p className="text-gray-400 font-light">1 000, 00 ₽</p>
                            </div>
                        </div>
                        <motion.div initial={{ opacity: 0, x: 100 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3 }} className="bg-card card"></motion.div>
                    </div>
                </div>
            </div>
                <div className="container mx-auto px-4 max-w-4xl">
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
                        <div className="h-1.5 bg-green-500 transition-all duration-500" style={{width: `${(earned / allMoney * 100).toFixed(1)}%`}}></div>
                        <div className="h-1.5 bg-red-500 transition-all duration-500" style={{width: `${(Math.abs(spent) / allMoney * 100).toFixed(1)}%`}}></div>
                    </div>
                    <div className="flex justify-between font-bold">
                        <p>{earned.toLocaleString('ru-RU')} ₽</p>
                        <p>{Math.abs(spent).toLocaleString('ru-RU')} ₽</p>
                    </div>
                </Link>
            </Box>
                </div>
            <Menu />
        </>
    )
}
}

export default HomePage