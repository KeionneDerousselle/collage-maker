import React from 'react';
import ImageGrid from './ImageGrid';
import UploadImage from './UploadImage';

class ImageContent extends React.Component{
    constructor(){
        super();
        this.state = { currentImage: null};
    }

    setCurrentImage = (data) =>{
        console.log(data);
    };

    render(){
        return(
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 image-content">
                <UploadImage handleUpload = {this.setCurrentImage} />
                <ImageGrid />
            </div>
        );
    };
}
export default ImageContent;