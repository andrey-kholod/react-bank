import { Route, Routes } from "react-router"
import Header from "./components/Header"
import Menu from "./components/Menu"
import FinancialAnalyticsPage from "./pages/FinancialAnalyticsPage"
import SchedulePerMonth from "./pages/SchedulePerMonth"

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<FinancialAnalyticsPage />} />
        <Route path="/schedule" element={<SchedulePerMonth />} />
      </Routes>
      <Menu />
    </>
  )
}

export default App
