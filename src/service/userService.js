import { httpAxios } from "@/helper/httpHelper";
  // this method will call in the  api of the creatUser
export function  CreateUser(user){
   const result =httpAxios.post("/api/users", user).then((response)=>
        response.data);
     return result;
}

// this method will call in the  api of the login

export function LoginUser(loginData){
     const result= httpAxios.post("/api/login" , loginData).then((response)=>
     response.data);

     return result;
}


