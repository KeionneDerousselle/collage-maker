import React from 'react';
import ImageGrid from './ImageGrid';
import UploadImage from './UploadImage';

class ImageContent extends React.Component{
    render(){
        return(
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 image-content">
                <UploadImage />
                <ImageGrid />
            </div>
        );
    };
}
export default ImageContent;