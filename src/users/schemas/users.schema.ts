import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});
