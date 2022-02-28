import React from 'react'
import { Outlet,useParams } from 'react-router-dom'


export default function State() {
  let prms = useParams()
  return (
    <div>State {prms.stateId}
      <Outlet/>
    </div>
  )
}
