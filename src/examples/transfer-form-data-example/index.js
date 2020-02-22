import React, { useReducer, useState, useRef, useEffect } from "react";

import {useGlobalInputApp} from 'global-input-react';


import { PageContainer,Title, P, A,DisplaySelectableFormField,TextAreaBox, TextButton,QRCodeContainer } from './app-layout';

import * as dataUtil from './dataUtil';






export default ({location}) => {
    const [form,setForm]=useState(()=>dataUtil.buildInitialForm({location}));
    const [visibility, setVisibility]=useState(()=>dataUtil.visibility.getDefaultOption());
    const [initData, setInitData]=useState(null)

    const globalInputApp = useGlobalInputApp({initData},[initData]);
    
     
    const onToggleShowHide=()=>{
        const nextVisibility=dataUtil.visibility.getNext(visibility);                
        setVisibility(nextVisibility);
        const {setters}=globalInputApp;
        if(setters&& setters.length){              
            setters[setters.length-1](nextVisibility.value);                    
        }
     };
     const onFormFieldValueChanged= (field,value) => {                
        setForm(dataUtil.updateField({form,field,value}));        
    }
  
 useEffect(()=>{    
      const initData=dataUtil.buildInitData(form,visibility);      
        setInitData(initData);                       
  },[]);


  useEffect(()=>{  
            if(!globalInputApp.field){
                return;
            }
            if(dataUtil.visibility.matchId(globalInputApp.field)){
                    onToggleShowHide();        
            }
            else{
                    onFormFieldValueChanged(globalInputApp.field,globalInputApp.field.value);    
            }       
  },[globalInputApp.field]);

  
  
  const {connectionMessage, WhenConnected,WhenDisconnected}=globalInputApp;   
  
      return (
        <PageContainer>          
            <Title>Mobile Form Automation and Mobile Authentication</Title>                        
            {connectionMessage}
            <WhenConnected>

                {form.fields.map((formField,index)=>(<DisplaySelectableFormField 
                      field={formField} 
                      key={formField.id} 
                hideValue={visibility.value===0} onChange={value=>{
                        onFormFieldValueChanged(formField,value);
                        const {setters}=globalInputApp;
                        if(setters && index<setters.length){              
                            setters[index](value);                    
                        }

                    }}/>))}              

                    <TextButton onClick={onToggleShowHide} label={visibility.label}/>
            </WhenConnected>
            <WhenDisconnected>
                <P>Disconnected, reload the page to try again</P>               
            </WhenDisconnected>

                     
            <P>This is an <a href="https://globalinput.co.uk/global-input-app/second-screen-experience">example application</a> demonstrating how web applications can use the <a href="https://github.com/global-input/global-input-react">Global Input App library</a> to implement <A href="https://globalinput.co.uk/global-input-app/mobile-content-transfer">mobile form operations such as mobile authentication.</A> 
            Its source code is available on <A href="https://github.com/global-input/transfer-form-data-example">GitHub</A></P>  
        </PageContainer>
      );    

};



