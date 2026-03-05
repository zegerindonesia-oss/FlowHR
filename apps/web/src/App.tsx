import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Employees from './pages/Employees'
import Attendance from './pages/Attendance'
import Payroll from './pages/Payroll'
import Reports from './pages/Reports'
import Messages from './pages/Messages'
import Settings from './pages/Settings'
import Support from './pages/Support'
import Login from './pages/Login'

// Employee Mobile Pages
import Profile from './pages/employee/Profile'
import LeaveRequest from './pages/employee/LeaveRequest'
import Schedule from './pages/employee/Schedule'
import Payslip from './pages/employee/Payslip'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/support" element={<Support />} />

          {/* Employee Mobile Routes */}
          <Route path="/profile" element={<Profile />} />
          <Route path="/leave-request" element={<LeaveRequest />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/payslips" element={<Payslip />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
