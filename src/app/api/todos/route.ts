import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../prisma/client";

export async function GET(request: NextRequest) {

    const todos = await db.todos.findMany();

    if (!todos) return NextResponse.json({ success: false, "error": "Error Occured!" }, { status: 400 })

    return NextResponse.json({ success: true, data: todos });
}

export async function POST(request: NextRequest, params: any) {
    const body = await request.json();
    try {

        const todo = await db.todos.create({
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