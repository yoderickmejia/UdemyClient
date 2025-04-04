// models/User.ts

import mongoose, { Schema, Document } from 'mongoose';

// Define la interfaz para el tipo de documento
interface IUser extends Document {
  name: string;
  email: string;
  password: string; // Añade el campo de contraseña
}

// Define el esquema de Mongoose
const UserSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },  // Campo de email único
  password: { type: String, required: true },  // Campo de contraseña
});

// Define el modelo de Mongoose y lo exporta
const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);

export default User ;
