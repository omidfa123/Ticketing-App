//  userModle
import { Document, Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';
const bcrypt = require('bcrypt');

export const UserSchema = new Schema({
  name: {
    type: String,
    required: [true, 'نام را وارد کنید'],
  },
  email: {
    type: String,
    required: [true, 'ایمیل را وارد کنید'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'رمز عبور را وارد کنید'],
  },
});

UserSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export const User = model<IUser & Document>('User', UserSchema);
