"use client"
import { logout } from '@/app/login/actions'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <button onClick={() => logout()}>Logout</button>
    </div>
  )
}
