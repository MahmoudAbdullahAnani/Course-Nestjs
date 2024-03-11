import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        'mongodb+srv://emess8393:pQwo83qwz08T8Ljk@cluster0.uincvje.mongodb.net/',
      ),
  },
];
