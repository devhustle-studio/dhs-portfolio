import { ConnectDB } from "@/lib/connection"
import { NextResponse } from "next/server"

export function GET(){
    ConnectDB()
    return NextResponse.json({massage:"connect create"})
}