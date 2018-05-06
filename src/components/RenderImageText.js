import React, {Component} from 'react'


import {globalStyles} from "./styles";
import RenderText from "./RenderText";

export  default class RenderImageText extends Component {

  render() {
    if(this.props.image){
      return (
                    <div className="row top-margin-md" >
                      <div className="col-md-6">
                          <img src={this.props.image} className="img-responsive"/>
                      </div>

                          <RenderText containerClass="col-md-6 " titleClass="section-heading"
                              title={this.props.title} contentClass="section-subheading text-muted bottom-margin-sm"
                              content={this.props.content}/>

                    </div>
              );
    }
    else{
        return(
            <RenderText  titleClass="section-heading"
                title={this.props.title} contentClass="section-subheading text-muted bottom-margin-sm"
                content={this.props.content}/>
        );
    }
  }
}
