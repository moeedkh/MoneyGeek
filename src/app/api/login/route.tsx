import {NextRequest, NextResponse} from "next/server";
import { SignJWT, jwtVerify } from "jose"; // importing jose items


export const POST = async (request:NextRequest)=>{
    const user = await request.json();

    if (user.name == "afzal khan"){       // creating user object
        const secret = new TextEncoder().encode(  // this code is copied for signing in jwt website
            'ratan-lal-ki-deewani',  // this is our secret key
          )
          const alg = 'HS256'  
          
          const jwt = await new SignJWT(user)
            .setProtectedHeader({ alg })
            .setIssuedAt()
            .setExpirationTime('2h')
            .sign(secret)
          
          console.log(jwt)   // code copied from jwt website untill here

        const response =  NextResponse.json({success:true,user, jwt});
             response.cookies.set({  // this syntax is used to set cookies of token name and its value
             name:"token",
             value:jwt,
             httpOnly:true,
});
        return response ;

    }
    
    
    return NextResponse.json({success:false})  // false to be displayed if user not matched with database

};

export const GET = async (request : NextRequest) => {  // Get command to verify token
  try {   // try and catch to respond to unexpected errors of if loop

    const jwt  = await request.cookies.get("token");  // fetching token from cookies
    const secret = new TextEncoder().encode("ratan-lal-ki-deewani");  //secret key shared above
    if (jwt) {
        const {payload}= await jwtVerify(jwt.value, secret); //verifying token
        console.log(payload);
        if(payload.roll == "director"){  //verifying role inside the jwt token given out as payload upon verification payload
         return NextResponse.json("welcome");

        } else {
            return NextResponse.json("GoodBYe")
        }
    }

    return NextResponse.json("Must login first");
}  catch (error){
    return NextResponse.json("Better luck next time.")
}
  }



