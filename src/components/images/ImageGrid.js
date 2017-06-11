import React from 'react';

class ImageGrid extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        let image = <img className='img-reponsive' src={this.props.image} />
        let content = this.props.image? image : <span>Load an Image</span>;
        return(
            <div className="image-grid">
                {content}
            </div>
        );
    }
}
export default ImageGrid;