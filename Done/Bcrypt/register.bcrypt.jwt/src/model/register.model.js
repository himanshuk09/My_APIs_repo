const mongoose=require("mongoose");
const jwt =require("jsonwebtoken"); 


const register = mongoose.Schema(
    {
    name:{
        type:String,
    },
    username:{
        type:String,
    },
    email:{
        type:String,
        unique:true
        
    },
    phoneNO:{
        type:Number,
    },
    password:{
        type:String
    },
    tokens:[{
        token:{
            type:String
        }
    }]
 });
  
// // generating tokens
register.methods.generateAuthToken = async function(){
    try{
        console.log(this._id);
        const token = jwt.sign({_id:this._id},"Apartfromcountingwordsandcharacter");
        this.tokens = this.tokens.concat({token:token});
        await this.save();
        return token;
    } catch(error){
         
        console.log("the error part"+error);
    }
}



module.exports=mongoose.model("register",register);