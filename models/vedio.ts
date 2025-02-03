import mongoose,{Schema,model,models} from 'mongoose';

export const  VEDIO_DIMENTIONS = {
    height: 1080,
    width: 1920,
  } as const;



export interface Ivedio{
    title: string;
    description: string;
    url: string;
    _id?: mongoose.Types.ObjectId;
    createdat?: Date;
    Updatedat?:Date;
    thumbnail : string;
    controller?: boolean;
    transformation?:{
        height : number;
        width : number ;
        Quality?: number;
    }

}


const vedioSchemna =new Schema<Ivedio>({
    title  : {type:String ,required:true},
    description :{type:String,required:true},
    url :{type:String,required:true},
    thumbnail : {type:String ,required:true},
    controller : {type:Boolean,default:true},
    transformation :{
        height : {type:Number,default:VEDIO_DIMENTIONS.height},
        width : {type:Number,default:VEDIO_DIMENTIONS.width},
        Quality : {type:Number,min :1 ,max:100}
    }
    },{timestamps:true})


    const vedio = models?.Vedio || model<Ivedio>("Vedio",vedioSchemna);

    export default vedio;