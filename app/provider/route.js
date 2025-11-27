import { NextResponse } from "next/server"
const BASE_URL_CHAR = 'https://thesimpsonsapi.com/api'

export async function GET(req) {
    const { searchParams } = new URL(req.url)
    const page = searchParams.get('page') || 1
    try {
        const response = await fetch (`${BASE_URL_CHAR}/characters?page=${page}`, {cache: 'force-cache'})
        if (!response.ok) {
            return NextResponse.json ({ error: 'Failed to fetch' }, { status: response.status })
        }
        const data = await response.json()
        return NextResponse.json ({ reply: data })
    }
    catch (error) {
        console.log (error)
        return NextResponse.json ({ error: 'Internal server error' }, { status: 500 })
    }
}