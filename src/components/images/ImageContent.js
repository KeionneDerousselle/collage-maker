import React from 'react';
import ImageGrid from './ImageGrid';

class ImageContent extends React.Component{
    render(){
        return(
            <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9 image-content">
                <div className="row">
                    <div className="col-xs-12">
                        <button className="btn btn-primary pull-right">Insert Image</button>
                    </div>
                </div>
                <ImageGrid />
            </div>
        );
    };
}
export default ImageContent;