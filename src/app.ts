import express from 'express';
import mongoose from 'mongoose';
import"dotenv/config";


const uri:string | any = process.env.MONGO_URI;
const app = express();
app.set("port", process.env.PORT);

app.get('/', (req:any, res:any) => {
  res.send('Hello World!');
});

app.listen(app.get("port"), () => {
  return console.log(`Express is listening at http://localhost:%d`, app.get("port"));
});

mongoose
  .connect(uri)
  .then(() => {
    console.log(
      '|******Database connected successful!!!******|'
    );
  })
  .catch((error) => {
    console.log('Database Not Connected');
    console.log({ Error_Message: error });
  })


