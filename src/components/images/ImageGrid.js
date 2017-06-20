import React from 'react';
import ImageCell from './ImageCell';

class ImageGrid extends React.Component{
    constructor(props){
        super(props);

        this.state = { 
            height: 0,
            width: 0,
            columns: 2,
            rows: 3,
            cellWidth: 0, 
            cellHeight: 0
        };
    }

    updateGridSize = () => {
        let { offsetHeight, offsetWidth } = this.refs.imageGrid;
        this.setState({
            height: offsetHeight, 
            width: offsetWidth,
            cellWidth: Math.floor(offsetWidth/this.state.columns),
            cellHeight: Math.floor(offsetHeight/this.state.rows),
        });
    }

    componentDidMount(){
        this.updateGridSize();
        window.addEventListener("resize", this.updateGridSize);
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.updateGridSize);
    }

    render(){
        console.log(JSON.stringify(this.state, null, 2));
        
        return(
            <div ref="imageGrid" className="image-grid">
            </div>
        );
    }
}
export default ImageGrid;