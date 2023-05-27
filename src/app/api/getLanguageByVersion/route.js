import { NextResponse } from 'next/server';
 
export async function GET(request) {
    const { searchParams } = new URL(request.url);
    const lng = searchParams.get('lng');

    //DB query

    let data = [2,3];
    return NextResponse.json({ 
                                data:data,
                                lng:lng
                            });
}