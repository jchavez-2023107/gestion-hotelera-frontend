import React, { useState } from 'react'
import { FaBars, FaHome } from 'react-icons/fa'

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className={`d-flex flex-column bg-dark text-white p-3 ${collapsed ? 'collapsed-sidebar' : ''}`} style={{ height: '100vh', width: collapsed ? '80px' : '250px', transition: 'all 0.3s' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        {!collapsed && <h4 className="mb-0" style={{ color: '#5CE1E6' }}>Hotel Admin</h4>}
        <FaBars onClick={() => setCollapsed(!collapsed)} role="button" />
      </div>
      <ul className="nav flex-column">
        <li className="nav-item mb-2">
          <a href="#" className="nav-link text-white d-flex align-items-center gap-2">
            <FaHome />
            {!collapsed && 'Inicio'}
          </a>
        </li>
      </ul>
    </div>
  )
}
