import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {

  try {

    const body = await req.json();

    const { nid, name, email, contact, password } = body;

    // password validation
    if (
      password.length < 6 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password)
    ) {
      return NextResponse.json({
        error: "Password must have 6 chars, uppercase, lowercase",
      });
    }

    const collection = await dbConnect("users");

    const existing = await collection.findOne({ email });

    if (existing) {
      return NextResponse.json({
        error: "User already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await collection.insertOne({

      nid,
      name,
      email,
      contact,
      password: hashedPassword,

      createdAt: new Date(),

    });

    return NextResponse.json({
      success: true,
    });

  } catch (error) {

    return NextResponse.json({
      error: error.message,
    });

  }

}