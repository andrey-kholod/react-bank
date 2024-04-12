import { FC, ReactNode } from "react"

interface Props {
    children: ReactNode
}

const Container: FC<Props> = ({children}) => {
    return (
        <div className="container mx-auto px-4 max-w-4xl pb-14 overflow-hidden">
            {children}
        </div>
    )
}

export default Container