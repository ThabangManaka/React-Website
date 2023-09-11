import {NextResponse} from 'next/server'

const DATA_SOURCE_URL = "https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/"

export async function GET() {
    const res = await fetch(DATA_SOURCE_URL)
    
    const cases: Case[] = await res.json()

    return NextResponse.json(cases)
}