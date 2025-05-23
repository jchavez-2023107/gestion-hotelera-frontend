import React from "react"
import {Sidebar} from '../components/Sidebar'
import { Hotels } from "../components/Hotels/Hotels"

export const MainPage = () => {
    return(
        <div className="d-flex" style={{ minHeight: '100vh', backgroundColor: '#F6F6F6' }}>
            <div className="bg-dark text-white p-3" style={{ width: '250px', position: 'sticky', top: 0 }}>
                <Sidebar />
            </div>
            <div className="flex-grow-1 p-4">
                <Hotels />
            </div>
        </div>
    )
}
