import {styleMatchingScreenSize} from "../../../components/screen-media";
export var styles={
   row:{
     get:styleMatchingScreenSize,
     default:{
       display:"flex",
       flexDirection:"row",
       justifyContent:"space-around",

     },
     mobile:{
       flexDirection:"column",
       justifyContent:"center",
       alignItems:"center"
     }
   }
};
