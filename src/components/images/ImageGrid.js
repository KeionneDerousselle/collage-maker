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

    isCellSelected = (cell) => {
        return this.state.selectedCells.findIndex(c => this.isSameCell(c, cell)) > -1;
    }

    cellsAreSelected = () => {
        return this.state.selectedCells && this.state.selectedCells.length > 0;
    }

    checkForValidCellSelection = () => {
        let isValid = this.cellsAreSelected();
        if(isValid){
            if(this.shouldCheckForRectangularSelection()){
                console.log('even');

            }
        }
        this.props.handleCellSelection(isValid);
    }

    shouldCheckForRectangularSelection = () => {
        let isAnEvenNumOfSelections = this.state.selectedCells.length % 2 === 0;
        return isAnEvenNumOfSelections;
    }

    minXSelected = () => {

    }

    minYSelected = () => {

    }

    maxXSelected = () => {

    }

    maxYSelected = () =>{
        
    }

    cellSelected = (cell) => {
        let {selectedCells} = this.state;

        if(!this.cellsAreSelected()){
            selectedCells.push(cell);
            this.setState(
                {
                    selectedCells: selectedCells
                }, 
                this.checkForValidCellSelection()
            );
        } 
        else {

            if(!this.isCellSelected(cell)){
                selectedCells.push(cell);
            }

            this.setState(
                {
                    selectedCells: selectedCells
                }, 
                this.checkForValidCellSelection()
            );
        }
    }

    cellUnselected = (unselectedCell) => {
        let selectedCells = this.state.selectedCells.filter( (cell) => !this.isSameCell(cell, unselectedCell));
        this.setState(
            {
                selectedCells: selectedCells
            },
                () => {
                    this.checkForValidCellSelection()
                }
            );
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