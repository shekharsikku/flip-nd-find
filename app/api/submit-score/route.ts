import connect from "@/lib/db";
import { User } from "@/model/user";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connect();
    const { name, score, timeTaken, timeLeft, isWin } = await req.json();
    const user = await User.create({ name, score, timeTaken, timeLeft, isWin });
    return NextResponse.json({ user });
  } catch (error: any) {
    console.error(`Error: ${error.message}`);
    return NextResponse.json(
      { error: "Failed to submit score!" },
      { status: 500 },
    );
  }
}
