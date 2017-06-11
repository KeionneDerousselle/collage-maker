import React from 'react';
import UploadImageModal from './UploadImageModal';

class UploadImage extends React.Component{
    constructor(props){
        super(props);
        this.state = { showUploadModal : false };
    }

    handleHideModal = () => {
        this.setState({
            showUploadModal : false
        });
    }

    handleShowModal = () =>{
        this.setState({
            showUploadModal : true
        });
    }

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-xs-12">
                        <button className="btn btn-primary pull-right" 
                            data-toggle="modal" 
                            data-target="#myModal"
                            onClick={this.handleShowModal}>Insert Image</button>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {this.state.showUploadModal? <UploadImageModal 
                                            handleHideModal={this.handleHideModal} 
                                            handleImageUploaded={this.props.handleUpload}/> : null}
                    </div>
                </div>
            </div>

        );
    };
};

export default UploadImage;