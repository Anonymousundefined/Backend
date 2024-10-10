const mongoose=require("mongoose");
require("dotenv").config();

const dbconnect =() =>{
    mongoose.connect(process.env.DATABASE_URL,
        )
        .then(() => console.log("DB Connected"))

        .catch((err) => {console.log(err);
            console.log("issue in db connection");
            process.exit(1);
        });
    }
module.exports=dbconnect;