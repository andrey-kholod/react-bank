export interface TExpense {
    amount: number
    desc: string
    cause: string
} 

export const expenses: TExpense[] = [
    {
        amount: 3907, 
        desc: 'Общество с ограниченной ответственностью. Общество с ограниченной ответственностью. Общество с ограниченной ответственностью. Общество с ограниченной ответственностью. Общество с ограниченной ответственностью. Общество с ограниченной ответственностью. ', 
        cause: 'Причина'
    },
    {
        amount: -5500, 
        desc: 'Общество с ограниченной ответственностью.', 
        cause: 'Причина'
    },
    {
        amount: 3542, 
        desc: 'Общество с ограниченной ответственностью.', 
        cause: 'Причина'
    },
]