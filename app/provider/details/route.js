import { NextResponse } from "next/server";
const BASE_URL = 'https://thesimpsonsapi.com/api/characters/'

export async function GET (req) {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    if (!id) {
        return NextResponse.json ({ error: 'Missing id parameter'}, { status: 400 })
    }
    try {
        const res = await fetch (`${BASE_URL}${id}`, {cache:'force-cache'})
        if (!res.ok) {
            return NextResponse.json ({ error: 'Failed to fetch' }, { status: res.status })
        }
        const data = await res.json()
        return NextResponse.json ({ reply: data })
    }
    catch (error) {
        console.log (error)
        return NextResponse.json ({ error: 'Internal server error' }, { status: 500 })
    }
}