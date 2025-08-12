import connect from "@/lib/db";
import { User } from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    await connect();
    const searchParams = request.nextUrl.searchParams;
    const name = searchParams.get("name") || "";
    const user = await User.findOne({ name });
    if (user) {
      return NextResponse.json({ unique: false });
    }
    return NextResponse.json({ unique: true });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return NextResponse.json(
      { error: "Failed to check unique name!" },
      { status: 500 },
    );
  }
}
