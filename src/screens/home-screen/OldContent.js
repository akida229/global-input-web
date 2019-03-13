import React, {Component} from 'react'
import {config,pagelinks, images} from "../../configs";
import {genericUtil} from "../../utils";


import {TopMenu,DisplayTextImage,BookMark,DisplayStaticContent,AutoPlayVideo,TextButton} from "../../components";


import {styles} from "./styles";

import {PageWithHeader,blockTextConfig,applicationPathConfig} from "../../page-templates";

import HeaderSection from "./header-section";
import TopHeaderSection from "../../top-header-section";



import MediaPlayerScreen from "../../screens/examples/media-player-screen";
import ContentTransferScreen from "../../screens/examples/content-transfer-screen";
import HowItWorks from "./how-it-works";
import FooterSection from '../../footer-section';
import CardSection from "./cards-section";


export  default class OldContent extends Component {
    static pagePath="/"
    static pagePaths=["/index.html","/global-input-app/app","/global-input-app/about"]
    constructor(props){
      super(props);
      this.onWindowResize=this.onWindowResize.bind(this);
    }
     componentDidMount() {
         window.addEventListener("resize", this.onWindowResize);

         genericUtil.processQueryParameters(this.props);

     }


     componentWillUnmount() {
         window.removeEventListener("resize", this.onWindowResize);
     }
     onWindowResize(){
        this.forceUpdate();
     }

render() {

    return (
        <React.Fragment>

          <div style={styles.itemSection}>
                <DisplayTextImage title={applicationPathConfig.videoPlayer.title}
                   content={applicationPathConfig.videoPlayer.content} image={images.videoPlayerScrollingText}
                   mobileImage={images.mobile.videoPlayerScrollingText}
                   video={config.videos.videoPlayer()}


                   buttonLabel={applicationPathConfig.videoPlayer.startButton}
                  buttonLink={MediaPlayerScreen.pagePath}/>
          </div>

          <BookMark bookmark={applicationPathConfig.chrome.menu.bookmark}/>

          <div style={styles.itemSection}>
                <DisplayTextImage title={blockTextConfig.chrome.title}
                   content={blockTextConfig.chrome.content} image={images.chromeExtension}
                   mobileImage={images.mobile.chromeExtension} reverse={true}
                   video={config.videos.signin()}/>
          </div>


          <BookMark bookmark={applicationPathConfig.gameExample.menu.bookmark}/>
          <div style={styles.itemSection}>
                <DisplayTextImage title={applicationPathConfig.gameExample.title}
                   content={applicationPathConfig.gameExample.content} image={images.gameScrollingText}
                   video={config.videos.game()}
                   mobileImage={images.mobile.gameScrollingText}
                   buttonLabel={applicationPathConfig.gameExample.startButton}
                  buttonLink={applicationPathConfig.gameExample.menu.link}/>
          </div>

          <BookMark bookmark={applicationPathConfig.sendMessage.menu.bookmark}/>
          <div style={styles.itemSection}>
                <DisplayTextImage title={applicationPathConfig.sendMessage.title}
                   content={applicationPathConfig.sendMessage.content} image={images.automateForm}
                   video={config.videos.sendMessage()}
                   mobileImage={images.mobile.automateForm} reverse={true}
                   buttonLabel={applicationPathConfig.sendMessage.startButton} buttonLink={applicationPathConfig.sendMessage.menu.link}/>
          </div>

          <BookMark bookmark={applicationPathConfig.formData.menu.bookmark}/>
          <div style={styles.itemSection}>
                <DisplayTextImage title={applicationPathConfig.formData.title}
                   content={applicationPathConfig.formData.content} image={images.transferForm}
                   video={config.videos.formTransfer()}
                   mobileImage={images.mobile.transferForm}
                   buttonLabel={applicationPathConfig.formData.startButton} buttonLink={applicationPathConfig.formData.menu.link}/>
          </div>





          <BookMark bookmark={applicationPathConfig.contentTransfer.menu.bookmark}/>

          <div style={styles.itemSection}>
                <DisplayTextImage title={applicationPathConfig.contentTransfer.title}
                video={config.videos.copyAndPaste()}
 reverse={true}
                   content={applicationPathConfig.contentTransfer.content} image={images.contentTransfer}
                   mobileImage={images.mobile.contentTransfer}
                   buttonLabel={applicationPathConfig.contentTransfer.startButton} buttonLink={ContentTransferScreen.pagePath}/>
          </div>



              <BookMark bookmark={applicationPathConfig.qrPrinting.menu.bookmark}/>

              <div style={styles.itemSection}>
                    <DisplayTextImage title={applicationPathConfig.qrPrinting.title}
                       content={applicationPathConfig.qrPrinting.content} image={images.encryptedQRCode}
                       video={config.videos.qrPrinting()}
                       mobileImage={images.mobile.encryptedQRCode}

                       buttonLabel={applicationPathConfig.qrPrinting.startButton} buttonLink={applicationPathConfig.qrPrinting.menu.link}/>

              </div>
</React.Fragment>




            );
  }

}