import { connect } from "mongoose";

type ConnectionState = { readyState: number };
const currentState: ConnectionState = { readyState: 0 };

async function connectDatabase(): Promise<void> {
  if (currentState.readyState === 1) {
    console.log("Already connected to database!");
    return;
  }

  try {
    const { connection } = await connect(process.env.MONGODB_URI!);
    currentState.readyState = connection.readyState;
    console.log("Database connected successfully!");
  } catch (error: any) {
    console.log("Database connection failed!\n", error.message);
    throw new Error("Failed to connect to database!");
  }
}

export default connectDatabase;
