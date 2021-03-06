import {styleMatchingScreenSize} from '../screen-media';
var fontFamily="Tisa-Sans-Pro, Elysio-Light, Helvetica, Arial, sans-serif";
export const styles={
  topnavContainer:{
    desktop:{
      display:"flex",
      flexDirection: "column",
      width:"100%",
      justifyContent: "flex-start",
      alignItems:"flex-start",
      position:"fixed",
      zIndex:100,
      top:0,
      left:0,
      paddingTop:5,
      paddingRight:50,
      borderBottomColor:'#EEEEEE',
      borderBottomStyle:"solid",
      borderBottomWidth:1,
      boxShadow: "0 -5px 5px -5px #333",
      backgroundColor:"white",
    },
    mobile:{
      display:"flex",
      flexDirection: "column",
      width:"100%",
      justifyContent: "flex-start",
      alignItems:"flex-start",
      position:"fixed",
      zIndex:100,
      top:0,
      left:0      
    }
    
  },

  topnav:{
    desktop:{
      paddingRight:30,
      position:"static",
      paddingTop:10,
      width:"100%",
      display:"flex",
      flexDirection: "row",
      justifyContent: "space-between",    
      alignItems: "center",
    },
    mobile:{
      paddingRight:30,      
      paddingTop:10,
      width:"100%",
      display:"flex",
      flexDirection: "row",
      justifyContent: "space-between",    
      alignItems: "center",
      backgroundColor:"white",
      borderBottomColor:'#EEEEEE',
      borderBottomStyle:"solid",
      borderBottomWidth:2,
      
      
    }
    
  },
  appTitleContainer:{
    marginLeft:0    
  },

  appDesktopTitle:{
    fontSize: 20,
    color: "#5291CD",
    whiteSpace: "nowrap",
    fontWeight: 300,
    paddingLeft:10,
    fontFamily:fontFamily
  },
  appMobileTitle:{
    fontSize: 20,
    color: "#5291CD",
    whiteSpace: "nowrap",
    fontWeight: 300,
    fontFamily:fontFamily,
    
  },
  appVersion:{
    fontFamily: fontFamily,
    fontSize: 12,
    color: "#5291CD",
    marginLeft:10
  },
  subtitleDesktopContaier:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"flex-end",
      fontFamily: fontFamily,
      color: "#5291CD",
      fontSize: 12,
  },
  subtitleMobileContaier:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
    fontFamily: fontFamily,
    color: "#5291CD",
    fontSize: 12,
  },
  userinfo:{
    position:"absolute",
    right:0,
    top:10,
    marginRight:20,
    color: "#80ccff",
  },
  mobileMenu:{

    marginLeft:20
  },
  mobileMenuIcon:{
    fontWeight: 'normal',
    fontSize:40,
    color: "#5291CD",
    fontStyle: 'normal',
  },
  mobileMenuOverlay:{
      width:"100%",
      height:1000
  },
  menuItemsDesktop:{
    display:"flex",
    flexDirection:"row",
    right:0,
    top:24,
    width:"100%",
    display:"flex",
    flexDirection:"row",
    justifyContent:"flex-end",
    paddingRight:"10vw"
  },
  menuItemsMobile:{
    display:"flex",
    flexDirection:"column",
    backgroundColor:"rgba(0,0,0,0)",
    width:"100%",
    

  },


  menuItem:{
    get:styleMatchingScreenSize,
    default:{
      float: "left",
      display: "block",
      textAlign: "center",
      padding: "8px 16px",
      textDecoration: "none",
      fontSize: 15,
      marginBottom: 0,
      color: "#5291CD",
      whiteSpace:"nowrap",
      fontWeight:300
    },
    desktop:{
        borderTopRightRadius:10,
        borderTopLeftRadius:10,
        marginBottom:10,
        fontSize: 12,
        color:"#5291CD"
    },
    smallScreen:{
        fontSize: 15,
    },
    
    mobile:{
        textAlign:"left",
        backgroundColor:"#FFFFFF",
        borderBottomColor:'#BBBBBB',
        borderBottomStyle:"solid",
        borderBottomWidth:1
    },
    selected:{
        color:"#002080",
        fontWeight:500
    },
    hover:{
        color:"#66ccff",
        fontWeight:300,
        textDecoration:"underline"
    }
  },
  content:{
    position:"absolute",
    marginTop:90,
    width:"100%",
    padding:20
  },

  logo:{
    maxWidth:80,
    marginLeft:20,
    marginBottom:4
  },

};
