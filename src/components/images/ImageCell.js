import React from 'react';

class ImageCell extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            imageUri: '', 
            selected: false
        }
    }

    toggleCellSelection = () =>{
        this.setState({selected: !this.state.selected});
    }

    render(){
        return(
            <div style={{
                top:this.props.top,
                left:this.props.left,
                height:this.props.height, 
                width:this.props.width, 
            }} 
            className={this.state.selected ? 'selected-img-cell' : 'img-cell'}
            onClick={this.toggleCellSelection}>
                {
                    this.state.imageUri ?
                    <img 
                    src={this.state.imageUri}
                    height={this.props.height}
                    width={this.props.width}
                    className='img-responsive' /> :
                    null
                }
            </div>
        );
    }
}

export default ImageCell;