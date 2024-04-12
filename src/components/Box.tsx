import { FC, ReactNode } from "react"
import { motion } from "framer-motion"


interface Props {
    children?: ReactNode;
    type?: 'input' | 'div';
    placeholder?: string
}

const Box: FC<Props> = ({children, type = 'div', placeholder}) => {
    if (type === 'div') {
        return (
            <motion.div className="bg-zinc-100 rounded-xl px-4 py-4 mx-1.5 cursor-pointer" initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                {children}
             </motion.div>
        )   
    } else {
        return (
            <input className="bg-zinc-100 rounded-xl px-4 py-4 mx-1.5 w-full outline-none transition-colors duration-300 focus:bg-zinc-200" placeholder={placeholder} type="text"/>
        )
    }
}

export default Box