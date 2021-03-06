import {styleMatchingScreenSize} from "../../../../components/screen-media";

export var styles={
  listContent:{
      default:{
        fontSize:14,
        marginTop:10,
        width:"auto",
        marginLeft:70,
        marginBottom:30,
      },
      smallScreen:{
        fontSize:14,
      },
      mobile:{
        fontSize:14,
        marginLeft:10,
        width:"100%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        alignItems:"center"
      },
      bigScreen:{
        fontSize:14,
      },

      get:styleMatchingScreenSize

    },
    itemRow:{
          tworows:{
            display:"block",
            marginBottom:5,
            marginLeft:"auto",
            marginRight:"auto",
            minWidth:300,
          },
          onerow:{
              get:styleMatchingScreenSize,
              default:{

              }

          }

  },



}
