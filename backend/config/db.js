import mongoose from "mongoose";

export const connectDB = async () => {
      await mongoose.connect('mongodb+srv://YourName:YourPassword@cluster0.d8a2z.mongodb.net/mydatabase?retryWrites=true&w=majority');
      console.log('DB Connected');
  };

  //change
  
