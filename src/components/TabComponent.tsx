
import { motion } from "framer-motion";
import { FC, ReactNode, Ref } from "react";
import { forwardRef } from "react";

interface Props {
    children: string | ReactNode;
}

const TabComponent: FC<Props> = forwardRef(({children}, ref: Ref<HTMLButtonElement>) => {
    return (
        <button ref={ref} className="bg-zinc-100 rounded-lg px-3 py-1.5 font-medium">
            {children}
        </button>
    )
})

export const MTabComponent = motion(TabComponent)