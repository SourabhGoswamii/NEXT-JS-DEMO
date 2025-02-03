import { NextRequest,NextResponse } from "next/server";
import { connectodb } from "@/lib/db";
import User from "@/models/User";

export async function POST(request :NextRequest){
    try {
        const {email,password} = await request.json();

        if (!email || !password) {
            return NextResponse.json({error :"email and password are required"},{status:400});
        }
        await connectodb();

        const extisting =await User.findOne({email});

        if (extisting) {
            return NextResponse.json({error :"Already Registered"},{status:400});
        };

        await User.create({email,password});

            return NextResponse.json({message :"sucessfully registered"  },{status:200});
        } catch (error) {
            return NextResponse.json({error: "An error occurred"},{status:500});
    }
}