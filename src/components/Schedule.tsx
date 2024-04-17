import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TExpense } from '../context/expensesContext';
import { FC } from 'react';

interface Props {
    data: TExpense[]
}

const Schedule: FC<Props> = ({ data }) => {

    const monthTickFormatter = (tick: string): string => {
        const arrayFromTick = tick.split('.')
        return +arrayFromTick[0] > 9 ? arrayFromTick[0] : arrayFromTick[0][1]
    };

    return (
        <div style={{width: '100%', height: '25vh'}}>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={800}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 2,
                        left: 2,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="Дата Платежа" tickFormatter={monthTickFormatter} stroke='rgb(153, 165, 182)' fontSize={14} />
                    <YAxis stroke='rgb(153, 165, 182)' fontSize={14} />
                    <Tooltip />
                    <Bar dataKey="Поступление" fill="rgb(34 197 94)" />
                    <Bar dataKey="Списание" fill="rgb(239 68 68)" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Schedule