import React from 'react';
import ImageGrid from './ImageGrid';
import UploadImage from './UploadImage/UploadImage';

class ImageContent extends React.Component{
    constructor(){
        super();
        this.state = { 
            currentImage: null,
            isCellSelectionValid: false
        };
    }

    setCurrentImage = (data) =>{
        this.setState({currentImage: data});
    };

    toggleUploadImageEnabled = (isCellSelectionValid) =>{
        this.setState({isCellSelectionValid: isCellSelectionValid});
    }

    render(){
        return(
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 image-content">
                <UploadImage 
                    handleUpload = {this.setCurrentImage} 
                    disabled = {!this.state.isCellSelectionValid}/>
                <ImageGrid handleCellSelection={this.toggleUploadImageEnabled}/>
            </div>
        );
    };
}
export default ImageContent;