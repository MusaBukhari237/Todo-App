import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../prisma/client";


export async function GET(request: NextRequest, params: any) {

    const todo = await db.todos.findUnique({
        where: {
            id: parseInt(params.params.id)
        }
    });

    if (!todo) return NextResponse.json({ success: false, error: "Error Occured!" }, { status: 400 })

    return NextResponse.json({
        success: true,
        ...todo
    });
}


export async function POST(request: NextRequest, params: any) {
    const body = await request.json();
    try {

        const todo = await db.todos.update({
            where: {
                id: parseInt(params.params.id)
            },
            data: body
        });

        if (!todo) return NextResponse.json({ success: false, error: "Error Occured!" }, { status: 400 })

        return NextResponse.json({
            success: true,
            ...todo
        });
    } catch (e) {
        return NextResponse.json({ success: false, error: "Error Occured!" }, { status: 400 });
    }
}