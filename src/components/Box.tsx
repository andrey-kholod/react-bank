import { FC, ReactNode, useState } from "react"
import { motion } from "framer-motion"
import { getMainContext } from "../context/expensesContext";


interface Props {
    children?: ReactNode;
    type?: 'input' | 'div';
    placeholder?: string
    index?: number
}

const Box: FC<Props> = ({ children, type = 'div', placeholder, index }) => {
    if (type === 'div') {
        return (
            <motion.div className="bg-zinc-100 rounded-xl px-4 py-4 mx-1.5 cursor-pointer" initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4 }}>
                {children}
            </motion.div>
        )
    } else {
        const [value, setValue] = useState('')
        const [_, handleSearch] = getMainContext()
        return (
            <input value={value} onChange={(e) => {
                const val = e.target.value
                setValue(val)
                handleSearch(val, index)
            }} className="bg-zinc-100 rounded-xl px-4 py-4 mx-1.5 w-full outline-none transition-colors duration-300 focus:bg-zinc-200" placeholder={placeholder} type="text" />
        )
    }
}

export default Box