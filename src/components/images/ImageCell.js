import React from 'react';

class ImageCell extends React.Component{
    constructor(){
        super();
        this.state = { 
            imageUri: '', 
            cellWidth: 0,
            cellHeight: 0,
            selected: false
        }
    }

    render(){
        return(
            <div className={this.state.selected ? 'selected-img-cell' : 'img-cell'}>
                {
                    this.state.imageUri ?
                    <image 
                    src={this.state.imageUri}
                    height={this.state.cellHeight}
                    width={this.state.cellWidth}
                    className='img-responsive' /> :
                    null
                }
            </div>
        );
    }
}

export default ImageCell;