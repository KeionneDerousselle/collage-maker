import React from 'react';
import ImageCell from './ImageCell';

class ImageGrid extends React.Component{
    constructor(props){
        super(props);
        const NUMBER_OF_CELLS = 6;
        const NUMBER_OF_ROWS = 3;
        this.state = { 
            numberOfPictureCells : NUMBER_OF_CELLS,
            numberOfPictureRows: 3,
            cells: new Array(NUMBER_OF_CELLS)
        };
    }

    render(){
        let image = <img className='img-reponsive' src={this.props.image} />
        let rows = new Array(NUMBER_OF_ROWS);
        let cellsPerRow = NUMBER_OF_CELLS/NUMBER_OF_ROWS;

        

        let content = rows.map((rows) =>
            {
                <div className='row'>
                       
                </div>
            }
        );

        

        return(
            <div className="image-grid">
            </div>
        );
    }
}
export default ImageGrid;