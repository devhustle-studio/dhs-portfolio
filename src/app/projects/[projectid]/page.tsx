"use client"
import React from 'react'
import { useParams } from 'next/navigation' 
export default function Project() {
    const { projectid } = useParams()
  return (
    <div>custon {projectid}</div>
  )
}
