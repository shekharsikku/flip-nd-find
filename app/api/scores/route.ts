import connect from "@/lib/db";
import { User } from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connect();
    const searchParams = request.nextUrl.searchParams;
    const page = parseInt(searchParams.get("page") || "1", 10);
    const limit = parseInt(searchParams.get("limit") || "10", 10);
    const user = await User.find()
      .sort({ score: -1, timeTaken: 1, _id: 1 })
      .select("name score timeTaken")
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    return NextResponse.json(user);
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return NextResponse.json({ error: "Failed to fetch scores!" }, { status: 500 });
  }
}
