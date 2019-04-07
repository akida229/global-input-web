import React from 'react';
import {externalsLinks,examplesLinks} from '../../links-components';
const {QrcodePrinting,QRCodePrintingListExample} = examplesLinks;

const ContentEncryption = props=>{
        const {P, Title,FirstSection,Concept, Code,NextSection}=props.theme;
        return(

          <React.Fragment>
              <FirstSection>
                 <Title>Mobile Content Encryption</Title>
                 </FirstSection>
                 <NextSection>

<P>
  Just like you are carrying a key ring in your pocket that contains keys for your car, garage, doors of your offices and homes etc.,
  the Global Input App (GIA) allows you to use your mobile device in your pocket to carry
  around the encryption keys for unlocking encrypted data.  It turns  your mobile as a cryptography device, allowing you to execute
 encryption/decryption processes in your mobile app and push the result securely to the connected application. You can create and manage
 as many encryption keys as you want in your mobile app,  and use any of them in the encryption/decryption processes.
</P>

  <P>
    Data encryption is the key technology for organisations to comply with the General Data Protection Regulation (RDPR).
    The protection of the encryption keys in a secure, convenient and manageable manner is an important step in a data encryption
    strategy. One good way of securing encryption keys is by using a key hiearchy, in which a master key is used for encrypting the
    data encryption keys that encrypt different sections of data so that the problem of protecting the multiple keys is reduced
    to protecting the single master key. The master key should be stored in dedicated secure storage that is separate from the
    ones that store the encrypted data. An application can choose to use one of the encryption keys managed in GIA as the master
    key for encrypting the data encryption keys. In this scenario, the user can use his/her mobile device to decrypt the data
    keys for the application, so that the application can continue to use the decrypted data keys to decrypt the data in its storage.
    The involvement of mobile devices as the initiator in the data encryption/decryption process enhances the accountability of the data
    manipulation processes because of the attachment of the mobile to the person who owns it.
  </P>
  <P>
    In this data encryption strategy, an application creates a keyset for each user. Each data encryption key in the keyset is able to decrypt a
    section of data that the user is permitted to access, thus forming an access control mechanism that can protect the data confidentiality
    independently from the application's storage.
    The application stores the encrypted form of the keyset encrypted by the GIA, and will not be able to decrypt it on its own,
    and it needs to ask GIA to decrypt the keyset at the start of each data processing session.

    It is like turning mobile devices into lockers and keys for protecting the content stored in applications.
  </P>
    <P>
    The mechanism that allows applications to use the mobile app to encrypt/decrypt content using a selected key in the app may lead to many use cases.
    One of the example applications is <QrcodePrinting {...props}>the QR Code Printing Application</QrcodePrinting>, which allows you
    to print Encrypted QR Codes using the encrypted content from GIA.
    </P>
    <P>
    You may find the Encrypted QR codes handy in many situations because of its convenience:scan a Encrypted QR code and the message will be decrypted
    and displayed immediately on your mobile screen and you can copy it into any applications on your mobile, provided that your GIA contains the same
    encryption key that was used to encrypt the message originally.

    For example, you may like to back up your important root passwords if you prefer archiving your passwords offline on papers and
    filing them as secret documents that only you can read via your mobile.
    </P>

    <P>
      However, it is also important to backup your encryption keys in your Global Input App, so that you can recover them
      if your phone is lost or stolen. You can backup your encryption keys in the form of password-encrypted QR Codes 


    </P>


    <P>

    </P>


               <QRCodePrintingListExample {...props}/>
               </NextSection>


           <P>



           </P>

           <P>

           </P>



       </React.Fragment>
  );

};
ContentEncryption.menu={
  id:"contentEncryption",
  label:"Mobile Content Encryption"

}


export default ContentEncryption;
