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
            cellHeight: 0,
            selectedCells: [],
            lastSelectedCell: null
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

    cellSelected = (cell) => {
        let {lastSelectedCell, selectedCells} = this.state;

        if(!lastSelectedCell){
            selectedCells.push(cell);
            this.setState({lastSelectedCell: cell, selectedCells: selectedCells});
            console.log(`The cell, {${cell.location.row}, ${cell.location.col}} was selected.`);
        } 
        else if(!this.isSameCell(lastSelectedCell, cell)){
            if(this.isHorizontal(lastSelectedCell, cell)){
                console.log(`The cell, {${cell.location.row}, ${cell.location.col}} is horizonal to the last selected cell, {${lastSelectedCell.location.row}, ${lastSelectedCell.location.col}}.`);
            }
            if(this.isVertical(lastSelectedCell, cell)){
                console.log(`The cell, {${cell.location.row}, ${cell.location.col}} is vertical to the last selected cell, {${lastSelectedCell.location.row}, ${lastSelectedCell.location.col}}.`);
            }

            selectedCells.push(cell);
            this.setState({lastSelectedCell: cell, selectedCells: selectedCells});
        }
    }

    cellUnselected = (unselectedCell) => {
        let {selectedCells} = this.state;
        selectedCells = selectedCells.filter(cell => cell.key === unselectedCell.key);
        this.setState({selectedCells: selectedCells});
        console.log(`The cell, {${unselectedCell.location.row}, ${unselectedCell.location.col}} was unselected.`);
    }

    isVertical = (cell1, cell2) => {
        return (cell1.location.col === cell2.location.col)
    }

    isHorizontal = (cell1, cell2) => {
        return (cell1.location.row === cell2.location.row)
    }

    isSameCell = (cell1, cell2) => {
        return (cell1.location.col === cell2.location.col) && 
                (cell1.location.row === cell2.location.row);
    }

    render(){
        let {cellWidth, cellHeight} = this.state;
        let cells = [];
        for(let row = 0; row < this.state.rows; row++) {
            for (let column = 0; column < this.state.columns; column++) {
                cells.push(
                    <ImageCell key={row + '' + column}
                               location = {{row: row, col: column}} 
                               top={row*cellHeight} 
                               left={column*cellWidth} 
                               height={cellHeight} width={cellWidth} 
                               handleCellSelected ={this.cellSelected}
                               handleCellUnselected ={this.cellUnselected}/>
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