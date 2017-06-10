import React from 'react';
import UploadImageModal from './UploadImageModal';

class UploadImage extends React.Component{
    constructor(){
        super();

        this.handleHideModal = this.handleHideModal.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);

        this.state = { showUploadModal : false };
    }

    handleHideModal(){
        this.setState({
            showUploadModal : false
        });
    }

    handleShowModal(){
        this.setState({
            showUploadModal : true
        });
    }

    render(){
        return(
            <div className="row">
                <div className="col-xs-12">
                    <button className="btn btn-primary pull-right" 
                        data-toggle="modal" 
                        data-target="#myModal"
                        onClick={this.handleShowModal}>Insert Image</button>
                </div>
                {this.state.showUploadModal? <UploadImageModal 
                                                handleHideModal={this.handleHideModal} /> : null}
            </div>
        );
    };
};

export default UploadImage;