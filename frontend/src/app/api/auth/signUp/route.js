import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

export async function POST(request) {
    try {
        const { name, email, password, role, goal } = await request.json();

        if (!process.env.BASE_URL) {
            throw new Error("BASE_URL environment variable is not defined");
        }

        const res = await fetch(`${process.env.BASE_URL}/user/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                username: name,
                useremail: email,
                userpasskey: password,
                role,
                goal,
            }),
        });

        let data;
        if (res.ok) {
            data = await res.json();
        } else {
            try {
                data = await res.json();
            } catch {
                data = { message: res.statusText || "No response body from backend" };
            }
        }

        return NextResponse.json(data, { status: res.status });
    } catch (error) {
        console.error("SignUp route error:", error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}

