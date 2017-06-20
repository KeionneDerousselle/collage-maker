import React from 'react';
import ImageCell from './ImageCell';

class ImageGrid extends React.Component{
    constructor(props){
        super(props);

        this.state = { 
            height: 0,
            width: 0,
            columns: 2,
            rows: 4,
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
        let {cellWidth, cellHeight} = this.state;
        let cells = [];
        for(let row = 0; row < this.state.rows; row++) {
            for (let column = 0; column < this.state.columns; column++) {
                cells.push(
                    <ImageCell key={row + '' + column} 
                               top={row*cellHeight} 
                               left={column*cellWidth} 
                               height={cellHeight} width={cellWidth} />
                )
            }
        }
        
        return(
            <div ref="imageGrid" className="image-grid">
                {cells}
            </div>
        );
    }
}
export default ImageGrid;