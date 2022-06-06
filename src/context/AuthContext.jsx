import React, { useReducer} from "react";

export const AuthContext = React.createContext();

// const initialstate={
//   isAuth:false,
//   token:null
// }
// function reducer(state,action){
//   switch(action.type){
//     case 'login':{
//       return{
//         ...state,
//         isAuth:true,
//   token:action.token,
//       }
//     }
//     case 'logout':{
//       return{
//         ...state,
//         isAuth:false,
//   token:action.token,
//       }
//     }
//   }
  

// }
export const AuthProvider = ({ children }) => {
 // const[state,dispatch]=useReducer(reducer,initialstate)
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
