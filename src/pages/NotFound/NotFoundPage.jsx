/* import React from 'react'

export const NotFoundPage = () => {
  return (
    <>
        <h1>404</h1>
        <h3>Not Found</h3>
    </>
  )
} */

import React from "react"
import { Sidebar } from '../../components/Sidebar'
import { Hotels } from "../../components/Hotels/Hotels"

export const NotFoundPage = () => {
    return(
      <>
        <div className="d-flex" style={{ minHeight: '100vh', backgroundColor: '#F6F6F6' }}>
            <div className="bg-dark text-white p-3" style={{ width: '250px', position: 'sticky', top: 0 }}>
                <Sidebar />
            </div>
            <div className="flex-grow-1 p-4">
                <Hotels />
            </div>
        </div>
      </>
    )
}
