import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Topic from "../../../../modules/topic";

export async function POST(request){
    //desctructure the items
    const {title,description} = await request.json();
    await connectMongoDB();
    await Topic.create({title,description});
return NextResponse.json({message:"Topic Created"},{status:200})
}

export async function GET(request){
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({topics})
}

export async function DELETE(request){
        const id = request.nextUrl.searchParams.get("id");
        await connectMongoDB();
        await Topic.findByIdAndDelete(id);
        return NextResponse.json({message:"Error Deleteing topic"},{status:200})
   
}

