const User=require("../model/register.model")
const bcrypt=require("bcryptjs");
const jwt =require("jsonwebtoken");


// //simple register without encrypt password
// exports.register = (req, res) => {
//   User.findOne({ email: req.body.email })
//     .then((userData) => {
//       if (userData) {
//         res.jsonp({ message: "user is already register" });
//       } else {
//         const userData = new User(req.body);
//         userData
//           .save()     
//           .then((resData) => {
//             res.jsonp({
//               message: "User registered successfully",
//               status: true,
//               result: resData,
//             });
//           })
//           .catch((error) => {
//             res.jsonp({ message: "Unable to register user", status: false });
//           });
//       }
//     })
//     .catch((error) => {
//       console.log("Unable to get User");
//     });
// };



//password encryption register
const register =  (req, res) => 
{
    User.findOne({ email: req.body.email })
      .then((userData) => 
      {
        if (userData) {
          res.jsonp({ message: "user is already register" });
        } else
        {
          //password encrypt start
             bcrypt.hash(req.body.password,10,(err,hash)=>
            {
               if(err)
               {
                 return res.status(500).jsonp({error:err})
               }
               else
              {
                //register logic
                const userData = new User({
                      username : req.body.username,
                      password : hash,
                      email : req.body.email,
                      phoneNO:req.body.phoneNO
                });
                
                // token generation start
                  console.log("the success part "+ User);
                 const token  =  userData.generateAuthToken();
                  console.log("the token part "+ token);
                // token generation end
               
                userData
                  .save()
                  .then((resData) => {
                    console.log(resData);
                    res.jsonp({
                      message: "User registered successfully",
                      status: true,
                      result: resData
                    
                    });
                  })
                  .catch((error) => {
                    res.jsonp({ message: "Unable to register user", status: false });
                  })
              }
            })
          //password encrypt end
        } 
      })
      .catch((error) => {
        console.log("Unable to get User");
      });
}
// password encryption register end

  
// function for login using bcrypt

const login = function(req,res){
  User.findOne({email:req.body.email})
  .then(async(userData)=>{
    if(userData){
      const isMatch=await bcrypt.compare(req.body.password,userData.password);
      // jwt used
      const token  =  userData.generateAuthToken();
      console.log("the token part "+ token);
      // jwt 
      if(isMatch){
        res.jsonp({
          message:"User logged in successfully "});
      }
      else{
        res.jsonp({message:"Invalid Password"});
      }
    }
    else{
      res.jsonp({
        message:"you are not registered with us, please register"});
    }
  })
  .catch((error) => {
    res.jsonp({message:"unable to find user"});
  })
}


//function to get all user from database
const getAllUsers = (req, res) => {
  User.find()
    .then((resData) => {
      res.jsonp({
        message: "User fetched Successfully ",
        status: true,
        result: resData,
      });
    })
    .catch((error) => {
      res.jsonp({ message: "Unable to fetch user ", status: false });
    });
}



//get profile by id

  const getProfileById = (req, res) => {
    User.findOne({ _id: req.params.id })
      .then((resData) => {
        //resolve
        res.jsonp({
          message: "Profile fetched successfully",
          status: true,
          result: resData,
        });
      })
      .catch((error) => {
        // reject
        res.jsonp({
          message: "Unable to fetch Profile",
          status: false,
        });
      });
  };


  // update Profile by id
  const updateProfileById = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then((resData) => {
        //resolve
        res.jsonp({
          message: "Product updated successfully",
          status: true,
        result:resData
        })
      })
       .catch((error) => {
        // reject
        res.jsonp({
          message: "Unable to update product",
          status: false,
        });
      });
  }


// delete Profile by id
const deleteProfileById = (req, res) => {
  User.findOneAndDelete({ _id: req.params.id })
    .then((resData) => {
      //resolve
      res.jsonp({
        message: "Product Deleted successfully",
        status: true,
      });
    })
    .catch((error) => {
      // reject
      res.jsonp({
        message: "Unable to delete product",
        status: false,
      });
    });
};


const registerController={
  login,
  register,
  getAllUsers,
  getProfileById,
  getAllUsers,
  updateProfileById,
  deleteProfileById,
}

module.exports=registerController;