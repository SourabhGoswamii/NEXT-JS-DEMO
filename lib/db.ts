import mongoose from 'mongoose';


const MONGOSB_URI= "mongodb+srv://sourabhgoswami2211:sourabh@sample.dqsc7.mongodb.net/sample/USER";

if (!MONGOSB_URI) {
  console.log('No MongoDB connection string. Set MONGODB_URI environment variable.');
};

let cashed = global.mongoose;


if (!cashed){
  cashed = global.mongoose = {conn: null, promise: null}; 
}

export async function connectodb (){
  if (cashed.conn){
    return cashed.conn;
  }
  if(!cashed.promise){
    const ops={buffercommand : true ,
      maxPoolSize :10,
      bufferPoolSize :0
    }
    
    cashed.promise =mongoose.connect(MONGOSB_URI,ops).then (()=>{mongoose.connection});
  }
  try{
    cashed.conn = await cashed.promise
  }catch(error) {
    cashed.promise=null
    throw error
  }


  return cashed.conn;
}



