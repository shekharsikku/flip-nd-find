import { connect } from "mongoose";

type ConnectionState = {
  state?: number;
};

const current: ConnectionState = {};

async function mongodb(): Promise<void> {
  if (current.state === 1) {
    console.log("Already connected to database!");
    return;
  }

  try {
    const { connection } = await connect(process.env.MONGODB_URI!);
    current.state = connection.readyState;
    console.log("Database connected successfully!");
  } catch (error: any) {
    console.log("Database connection failed!", error.message);
    throw new Error("Failed to connect to database!");
  }
}

export default mongodb;
