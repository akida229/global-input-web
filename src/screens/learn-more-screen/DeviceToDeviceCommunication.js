import React from 'react';
import {Link} from 'react-router-dom';
import {styles,images} from './styles';
import examples from '../examples';


export default class DeviceToDeviceCommunication extends React.Component{

  static menu={
        id:"deviceToDevice",
        label:"Device-to-Device Communication",
        title:"Device-to-Device Communication"
  }
  render(){
    return(
      <div style={styles.chapter.container.get()} id={DeviceToDeviceCommunication.menu.id}>
          <div style={styles.chapter.title}>
                {DeviceToDeviceCommunication.menu.title}
          </div>
          <div style={styles.chapter.content}>
                <div style={styles.chapter.paragraph}>
                Global Input App provides applications with a device-to-device communication secured with end-to-end encryption supported by an <b>Encrypted QR Code</b>.
              </div>
              <div style={styles.chapter.paragraph}>
              The QR Code contains a <b>one-time-use encryption key</b> for initiating the the end-to-end encrypted communication. The Global Input App <b>scans the QR</b> code to obtain the encryption key, which is generated by the application on-the-fly. This means that they key is captured via camera instead of transferring electronically. Hence, even if the HTTPS communication is compromised by using a compromised CA (Certificate Authority) and an active MitM (man-in-the-middle) attack, the communication will be still secure.
              </div>
              <div style={styles.chapter.paragraph}>
                The QR code also contains <b>channel information</b> for reaching the application. For example, the URL to a WebSocket proxy server, which is responsible for routing the encrypted messages to the target. You can run your own <b>open-source WebSocket server</b> or use our instances for free.
              </div>
              <div style={styles.chapter.paragraph}>
              This mechanism allows you to <b>implement the integration logic</b> across multiple device applications within the client device application without adding any extra server-side business logic, and the communication is secured with device-to-device encryption, initiated by scanning an encrypted QR code.
              </div>

          </div>



      </div>
    );
  }


}
