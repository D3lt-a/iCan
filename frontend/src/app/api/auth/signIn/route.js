import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

const Post = async (req) => {
    const { email, password } = await req.json();

    const res = awaiat fetch(`${process.env.base_url}/api/auth/signIn`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    })

    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
}