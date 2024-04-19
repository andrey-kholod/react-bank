import { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Loader from "../components/Loader"

interface Props {
    setAuthorizedToTrue: () => void
} 

const LockScreen:FC<Props> = ({setAuthorizedToTrue}) => {
    const [password, setPassword] = useState(0)
    const [active, setActive] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
        if (password === 4) {
            setTimeout(() => {
                setActive(true)
            }, 500)
            setTimeout(() => {
                setAuthorizedToTrue()
                navigate('/')
            }, 1500)
        }
    }, [password])

    return (
        <>
            {active && <div className="w-full h-screen absolute flex items-center justify-center" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
                <Loader />
            </div>}
            <div className="container mx-auto px-4 max-w-4xl w-full h-screen flex items-center justify-center">
                <div className="flex flex-col items-center gap-7">
                    <h2 className="font-bold text-2xl">Здравствуйте, СЕРГЕЙ</h2>
                    <span className="font-medium text-gray-800 text-lg">Введите пин-код</span>
                    <div className="flex items-center justify-between gap-4">
                        <div className={`${password >= 1 ? 'bg-green-600 anim-pas' : ''} bg-gray-300 transition-colors rounded-full w-4 h-4`}></div>
                        <div className={`${password >= 2 ? 'bg-green-600 anim-pas' : ''} bg-gray-300 transition-colors rounded-full w-4 h-4`}></div>
                        <div className={`${password >= 3 ? 'bg-green-600 anim-pas' : ''} bg-gray-300 transition-colors rounded-full w-4 h-4`}></div>
                        <div className={`${password >= 4 ? 'bg-green-600 anim-pas' : ''} bg-gray-300 transition-colors rounded-full w-4 h-4`}></div>
                    </div>
                    <div className="grid grid-cols-3 grid-rows-4 font-medium text-4xl gap-y-5 gap-x-6">
                        <div className="active:bg-gray-400 cursor-pointer py-4 px-6 transition-colors duration-700 rounded-full" onClick={() => setPassword(p => p + 1)}>1</div>
                        <div className="active:bg-gray-400 cursor-pointer py-4 px-6 transition-colors duration-700 rounded-full" onClick={() => setPassword(p => p + 1)}>2</div>
                        <div className="active:bg-gray-400 cursor-pointer py-4 px-6 transition-colors duration-700 rounded-full" onClick={() => setPassword(p => p + 1)}>3</div>
                        <div className="active:bg-gray-400 cursor-pointer py-4 px-6 transition-colors duration-700 rounded-full" onClick={() => setPassword(p => p + 1)}>4</div>
                        <div className="active:bg-gray-400 cursor-pointer py-4 px-6 transition-colors duration-700 rounded-full" onClick={() => setPassword(p => p + 1)}>5</div>
                        <div className="active:bg-gray-400 cursor-pointer py-4 px-6 transition-colors duration-700 rounded-full" onClick={() => setPassword(p => p + 1)}>6</div>
                        <div className="active:bg-gray-400 cursor-pointer py-4 px-6 transition-colors duration-700 rounded-full" onClick={() => setPassword(p => p + 1)}>7</div>
                        <div className="active:bg-gray-400 cursor-pointer py-4 px-6 transition-colors duration-700 rounded-full" onClick={() => setPassword(p => p + 1)}>8</div>
                        <div className="active:bg-gray-400 cursor-pointer py-4 px-6 transition-colors duration-700 rounded-full" onClick={() => setPassword(p => p + 1)}>9</div>
                        <div className="active:bg-gray-400 cursor-pointer flex items-center justify-center w-14 h-14 transition-colors rounded-full text-xs text-center font-normal"><span>Забыли пин-код?</span></div>
                        <div className="active:bg-gray-400 cursor-pointer py-4 px-6 transition-colors duration-700 rounded-full" onClick={() => setPassword(p => p + 1)}>0</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LockScreen