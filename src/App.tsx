import { Route, Routes } from "react-router"
import FinancialAnalyticsPage from "./pages/FinancialAnalyticsPage"
import SchedulePerMonth from "./pages/SchedulePerMonth"
import LockScreen from "./pages/LockScreen"
import HomePage from "./pages/HomePage"
import { useState } from "react"

function App() {
  const [authorized, setAuthorized] = useState(false) 

  const setAuthorizedToTrue = () => {
    setAuthorized(true)
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage authorized={authorized}/>} />
        <Route path="/payments" element={<FinancialAnalyticsPage authorized={authorized}/>} />
        <Route path="/schedule" element={<SchedulePerMonth authorized={authorized}/>} />
        <Route path="/lockscreen" element={<LockScreen setAuthorizedToTrue={setAuthorizedToTrue}/>} />
      </Routes>
    </>
  )
}

export default App
