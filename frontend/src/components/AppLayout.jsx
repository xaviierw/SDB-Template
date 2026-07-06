import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function AppLayout() {
  return (
    <div className="app-shell d-lg-flex">
      <Navbar />
      <main className="flex-grow-1 p-3 p-md-4">
        <div className="container-fluid">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AppLayout
