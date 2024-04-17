
import { FC, ReactNode, createContext, useContext, useState } from 'react'
import alpha from './Альфа выписка.json'

export interface TExpense {
    "Column8": string
    "Банк (БИК и наименование)": string
    "ВО": string
    "Дата Платежа": string
    "Назначение платежа": string
    "Поступление": number
    "Списание": number
    "Счет": string
    "№ документа": string
}

export interface MainContext {
    [key: string]: TExpense[]
}

type context = [MainContext, ((searchText: string, activeTab?: number) => void), ((bool: boolean) => void), ((bool: boolean) => void)]

const mainContext = createContext<context>([{}, () => null, () => null, () => null] as context)

export const getMainContext = () => {
    return useContext(mainContext)
}

export const makeInitialValue = (): MainContext => {
    const mainContext: MainContext = {}
    for (let i = alpha.length - 1; i >= 0; i--) {
        const date = alpha[i]["Дата Платежа"]
        if (date && mainContext[date]) {
            mainContext[date] = [...mainContext[date], alpha[i] as TExpense]
        } else if (date && !mainContext[date]) {
            mainContext[date] = [alpha[i] as TExpense]
        }
    }
    return mainContext
}

interface Props {
    children: ReactNode
}

export const ExpensesProvider: FC<Props> = ({ children }) => {
    const initialExpenses = makeInitialValue()
    const [stateExpenses, setStateExpenses] = useState(initialExpenses)

    const incoming = (bool: boolean) => {
        if (!bool) {
            setStateExpenses(initialExpenses)
            console.log('here')
        } else {
            const filteredExpenses: MainContext = {}
            Object.keys(initialExpenses).forEach(date => {
                const filteredData = initialExpenses[date].filter(expense =>
                    expense["Поступление"]
                )
                if (filteredData.length > 0) {
                    filteredExpenses[date] = filteredData
                }
            })
            setStateExpenses(filteredExpenses)
        }
    }

    const outgoing = (bool: boolean) => {
        if (!bool) {
            setStateExpenses(initialExpenses)
        } else {
            const filteredExpenses: MainContext = {}
            Object.keys(initialExpenses).forEach(date => {
                const filteredData = initialExpenses[date].filter(expense =>
                    expense["Списание"]
                )
                if (filteredData.length > 0) {
                    filteredExpenses[date] = filteredData
                }
            })
            setStateExpenses(filteredExpenses)
        }
    }


    const handleSearch = (searchText: string, activeTab?: number) => {
        if (searchText === '' && activeTab === 2) {
            incoming(true)
        } else if (searchText === '' && activeTab === 3) {
            outgoing(true)
        } else if (searchText === '') {
            setStateExpenses(initialExpenses)
        } else {
            const filteredExpenses: MainContext = {}
            Object.keys(stateExpenses).forEach(date => {
                const filteredData = stateExpenses[date].filter(expense =>
                    expense["Банк (БИК и наименование)"].toLowerCase().includes(searchText.trim().toLowerCase()) ||
                    expense["Назначение платежа"].toLowerCase().includes(searchText.trim().toLowerCase())
                )
                if (filteredData.length > 0) {
                    filteredExpenses[date] = filteredData
                }
            })
            setStateExpenses(filteredExpenses)
        }
    }

    return (
        <mainContext.Provider value={[stateExpenses, handleSearch, incoming, outgoing ]}>
            {children}
        </mainContext.Provider>
    )
}
