import React from 'react'
import {Outlet} from 'react-router-dom'
export default function Home() {
  return (
    <div>
        Home

        {/* 注册路由的子路由 */}
        <Outlet />
    </div>
  )
}
