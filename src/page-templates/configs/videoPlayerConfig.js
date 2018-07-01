const PLAY_PAUSE_BUTTON_STATUS={
    CAN_PLAY:0,
    CAN_PAUSE:1
}

const videoPlayerConfig={
    PLAY_PAUSE_BUTTON_STATUS,
    title:"Second Screen Input & Control",
    appSubtitle:"Second Screen input & Control",

    menu:{
        link:"/global-input-app/video-player",
        linkText:"Video Player",
        backLink:"/?scrollTo=videoPlayer",
        bookmark:"videoPlayer"
    },
    content:[
    "Global Input App provides a unique solution for applications to achieve the second screen input & control, plus some user experience without affecting the existing logic and architecture of the application.  This is possible because the business logic for the second screen can be implemented within the application itself following its own functional flows and business logic. The applications declares the UI elements for the second screen and use the callback functions to receive mobile events. On top of this, Global Input App’s encrypted data storage allows user to store operational data to automate the input operations. This makes it possible for the application to implement personalized user experience without actually storing the user details and data in the application database, greatly simplifying the user privacy policy.",
    "Here an simple example is provided to show how to implement declaratively define a set of UI elements for media player control."],

    advert:{
            duration:8000,
            items:[{
              title:"A Unique Mobile Solution for Media Applications",
              content:["Mobile Input & Mobile Control",
                      "Second Screen User Experience"]
            },{
              title:"A Single Mobile App Solution for Multiple Media Applications",
              content:["User Subscription, User Sign In via Mobile Device",
                      "Mobile Input, Mobile Control & Second Screen User Experience"]
            }]
    },
    form:{
        title:"Video Player",
        videoTitle:{
            type: "info",
            id:"videoTitle",
            value:{
                type:"text",
                content:"Big Buck Bunny",
                style:{
                    fontSize:18,
                    marginTop:20,

                }
            },
        },
        playStatus:{
            type:"info",
            id:"playerStatus",
            value:{
                      type:"view",
                      style:{
                        borderColor:"#rgba(72,128,237,0.5)",
                        borderWidth:1,
                        marginTop:5,
                        minWidth:80,
                        minHeight:80,
                      },
                      content:[{
                          type:"text",
                          content:"",
                          style:{
                              fontSize:14
                          }
                        },{
                            type:"text",
                            content:"",
                            style:{
                                fontSize:14
                            }
                          }]

            }

        },
        currentTimeSlider:{
            type:"range",
            id:"currentTime",
            min:0,
            max:100,
            value:0,
            step:1
        },
        ffButton:{
            label:"FF",
            type:"button",
            icon:"ff",
            viewId:"row1",
            id:"ffButton",
        },
        playButton:{
            label:"Play",
            type:"button",
            icon:"play",
            viewId:"row1",
            value:0,
            id:"playPauseButton",
            options:[{value:PLAY_PAUSE_BUTTON_STATUS.CAN_PLAY,label:"Play",icon:"play"},{value:PLAY_PAUSE_BUTTON_STATUS.CAN_PAUSE,label:"Pause",icon:"pause"}]
        },
        rwButton:{
            label:"RW",
            type:"button",
            icon:"rw",
            viewId:"row1",
            id:"rwButton",
        },
        skipToBeginButton:{
            label:"Begin",
            type:"button",
            icon:"skip-to-begin",
            viewId:"row2",
            id:"skipToBeginButton",
        },
        skipToEndButton:{
            label:"End",
            type:"button",
            icon:"skip-to-end",
            viewId:"row2",
            id:"skipToEndButton",
        },



    },

    connecting:{
        title:"Video Player",
        content:"Loading..."
    },
    connected:{
      title:"Video Player",
      content:"Scan the QR Code below with your Global Input App"
    },
    senderConnected:{
        title:"Video Player",
        content:"You can use your Global Input App to Control the video player."
    },

    startButton:"Start",
    cancelButton:"Back",
    finishButton:"Back"
}
export default videoPlayerConfig;
