
import { motion } from "framer-motion";
import { FC, ReactNode, Ref, useEffect, useState } from "react";
import { forwardRef } from "react";
import { getMainContext } from "../context/expensesContext";

interface Props {
    children: string | ReactNode;
    appointment: 'incoming' | 'outgoing' | 'none'
    index: number
    changeTheIndex: (i: number) => void
    activeTab: number
}

const TabComponent: FC<Props> = forwardRef(({ children, appointment, index, changeTheIndex, activeTab }, ref: Ref<HTMLButtonElement>) => {
    const [active, setActive] = useState(false)
    const [_, __, incoming, outgoing] = getMainContext()

    useEffect(() => {
        if (appointment === 'incoming') {
            incoming(active)
        } else if (appointment === 'outgoing') {
            outgoing(active)
        }
    }, [active])
    
    const activeHandleClick = () => {
        changeTheIndex(index === activeTab ? 0 : index)
        setActive(!active)
    }

    return (
        <button ref={ref} className={`${activeTab === index || activeTab === 0 ? 'block' : 'hidden'} bg-zinc-100 rounded-lg px-3 py-1.5 font-medium ${active ? 'bg-zinc-300 animate-tab' : ''}`} onClick={activeHandleClick}>
            {children}
        </button>
    )
})

export const MTabComponent = motion(TabComponent)