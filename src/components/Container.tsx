import { FC, ReactNode } from "react"

interface Props {
    children: ReactNode
}

const Container: FC<Props> = ({ children }) => {
    return (
        <div className="container mx-auto px-4 max-w-4xl pb-24 mt-12">
            {children}
        </div>
    )
}

export default Container