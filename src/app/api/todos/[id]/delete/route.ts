import { NextRequest, NextResponse } from "next/server";
import { db } from "../../../../../../prisma/client";


export async function GET(request: NextRequest, params: any) {
try{

    const todo = await db.todos.delete({
        where: {
            id: parseInt(params.params.id)
        }
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