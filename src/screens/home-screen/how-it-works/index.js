import React from 'react';
import {styles, images} from './styles';

export default class HowItWorks extends React.Component{

  render(){

    return(
        <div style={styles.container}>
                <div style={styles.title}>How It Works</div>
                <div style={styles.howItWorks.get()}>
                      <div style={styles.extension}>
                          <img src={images.extension}/>
                          <div style={styles.itemName}>Install Extension</div>
                      </div>
                      <div style={styles.qrcode}>
                          <img src={images.qrcode}/>
                          <div style={styles.itemName}>Scan QR Code</div>
                      </div>

                      <div style={styles.mobile}>
                          <img src={images.mobile}/>
                          <div style={styles.itemName}>Control with Device</div>
                      </div>
                </div>


        </div>
    );

  }
}
