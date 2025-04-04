import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db"; // Asegúrate de que la ruta sea correcta
import User from "@/app/models/user";

// pages/api/users.ts


export async function GET() {
  try {
    await connectDB(); // Conectar a la base de datos
    const users = await User.find(); // Obtiene todos los usuarios
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    
    return NextResponse.json({ error: "Error al obtener los usuarios", details: error }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    await connectDB();
    const { name, email, password } = await req.json();
    const newUser = new User({ name, email, password });
    await newUser.save();
    return NextResponse.json({ message: "Usuario creado" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error al crear usuario",details: error }, { status: 500 });
  }
}
