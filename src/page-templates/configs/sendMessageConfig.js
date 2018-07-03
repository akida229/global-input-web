const sendMessageConfig={
   menu:{
      link:"/global-input-app/send-message",
      linkText:"Send Message",
      backLink:"/?scrollTo=sendMessage",
      bookmark:"sendMessage"
    },
    title:"Form Automation via Mobile",
    appSubtitle:"Form Automation via Mobile",
    content:["An application may require user details in order to operate, so users may have to fill in a long form at the beginning. But the privacy laws may not permit the application to own the user data for a long time.",
          "Global Input App allows the user to store his/her own user details in the app’s storage encrypted, and then push the data to the application when it is needed, in some cases eliminating the need for the application to store the user details. For example, a media application may need to personalise the user experience using the user data, this data be can stored as part of the authentication in Global Input App, and the user may choose to send the data to the application to get the personalized experience, thus eliminating the need for the application to store the user data on the server. This makes the application’s privacy policy much simpler. See how an application can define a form declaratively receive UI elements from the demo"
    ],
    advert:{
        duration:8000,
        items:[{
          title:"Store Content Encrypted in Your Device",
          content:["Content Stays Encrypted Even in Memory",
                  "Decrypted Only When Needed"],
        },{
          title:"Own Your Data and Encryption",
          content:["Create, Manage Encryption Keys",
                  "Export, Share, Import Encryption Keys"],
        },{
          title:"Create Encrypted QR Codes",
          content:["Encrypt Content with Encryption Keys",
                  "Backup and Share Credentials"],
        },{
          title:"Scan to Decrypt the Content",
          content:["Transfer Encrypted Content via QR Code",
                  "Share Encryption Keys Securely"],
        },{
          title:"End-to-End Encrypted Data Transfer",
          content:["Transfer Content Between Devices",
                  "Scan to Start the Data Transfer"],
        },{
          title:"No Subscription, No Database on the Cloud",
          content:["Everything Stored Encrypted in Your Device",
                  "Share Content Between Your Devices"],
        },{
          title:"Automate Sign In & Forms",
          content:["Store and Manage Credentials",
                  "Transfer to Other Device Applications When Needed"],
        },{
          title:"Single Mobile App",
          content:["Mobile Input & Control for Device and Web Applications",
                  "Second Screen Experience for Media Applications"],
        },{
          title:"Implementing Mobile Control",
          content:["Enabling IoT, Smart TV and Web Applications",
                   "Single Mobile App Solution for Multiple Devices"],
        }],
    },



    connecting:{
          title:"Contact Data Transfer",
          content:"Connecting..."
        },
        connected:{
            title:"Contact Data Transfer",
            content:"Scan the QR Code with your Global Input App.",
            backButton:"Back"
        },
        senderConnected:{
            cancelButton:"Cancel",
            content:"Please use your mobile to operate on the form.",
            nextButton:"Send Message to us",

        },
    contactForm:{
        id:"###company_name###@contacts",
        title:"Our Contact Details",
        label:"contacts",
        companyname:{
                      id:"company_name",
                      type:"text",
                      nLines:1,
                      label:"Company Name",
                      value:"Iterative Solution",
                      fieldIndex:0
                    },

        address:{
                    id:"address",
                    type:"text",
                    nLines:5,
                    label:"Address",
                    value:"Iterative Solution Limited \n 10 Greycoat \n London SW1P 1SB",
                    fieldIndex:1
                },
        phone:{
                            id:"phone",
                            type:"text",
                            nLines:1,
                            label:"Phone",
                            value:"020 3290 6278",
                            fieldIndex:2
         },
         email:{
                             id:"email",
                             type:"text",
                             nLines:1,
                             label:"Email",
                             value:"info@iterativesolution.co.uk",
                             fieldIndex:3
          },
          info:{
                type:"info",
                value:["Please press the \"Save\" button to save our contact info, and then press the \"Continue\" button below to send a message to us"],
                index:4
          },
          nextButton:{
                            label:"Continue",
                            type:"button",
                            fieldIndex:5
          },
          cancelButton:{
                            label:"Cancel",
                            type:"button",
                            fieldIndex:6
          }

      },
      messageForm:{
          id:"iterativesolution@mymessages",
          title:"Sending a Message",
          label:"My Messages",
          first_name:{
                        id:"first_name",
                        type:"text",
                        nLines:1,
                        label:"First Name",
                        value:"",
                        fieldIndex:0
                      },

          last_name:{
                      id:"last_name",
                      type:"text",
                      nLines:1,
                      label:"Last Name",
                      value:"",
                      fieldIndex:1
                  },
          email:{
                              id:"email",
                              type:"text",
                              nLines:1,
                              label:"Email",
                              value:"",
                              fieldIndex:2
           },
           phone:{
                               id:"phone",
                               type:"text",
                               nLines:1,
                               label:"Phone",
                               value:"",
                               fieldIndex:3
            },
            message:{
                                id:"message",
                                type:"text",
                                nLines:5,
                                label:"Your Message",
                                value:"",
                                fieldIndex:4
             },
            sendButton:{
                              label:"Send Now",
                              type:"button",
                              fieldIndex:5
            },
            cancelButton:{
                              label:"Cancel",
                              type:"button",
                              fieldIndex:6
            }

        },
        api:{
            url:"https://iterativesolution.co.uk/wp-json/contact-form-7/v1/contact-forms/283/feedback"
        },
        sendingMessage:{
              title:"Sending",
              content:"Sending the message"
            },
        messageSent:{
                  title:"Message Sent",
                  content:"Message is sent successfully"
                },
        startButton:"Try It",
        cancelButton:"Back"
}
export default sendMessageConfig;