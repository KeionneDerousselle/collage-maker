import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom'

class UploadImageModal extends React.Component{

    constructor(props)
    {
        super(props);
        this.uploadFile = this.uploadFile.bind(this);
    }

    componentDidMount(){
        $(ReactDOM.findDOMNode(this)).modal('show');
        $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideModal);
    }

    uploadFile() {
        console.log('hi');
        $('#fileUpload').click();
    }

    render(){
        return(
            <div className="modal fade" 
                    id="myModal" 
                    tabIndex="-1" 
                    role="dialog" 
                    aria-labelledby="myModalLabel">

                <div className="modal-dialog">
                    <div className="modal-content" role="document">
                        <div className="modal-header">
                            <button type="button" 
                                    className="close" 
                                    data-dismiss="modal" 
                                    aria-label="Close">
                                    
                                <span aria-hidden="true">&times;</span></button>
                                <h2 className="modal-title" id="myModalLabel">Upload Image</h2>
                        </div>
                        <div className="modal-body">
                            <div className="drop-here">
                                <div className="drop-instructions text-center">
                                    <h3>Drag an image here</h3>
                                    <h4>or click to upload</h4>
                                    <button className="btn btn-primary" onClick={this.uploadFile}>Choose an image</button>
                                    <input id="file-upload" type="file"/>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" 
                                    className="btn btn-default" 
                                    data-dismiss="modal">Close</button>

                            <button type="button" 
                                    className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

UploadImageModal.propTypes = {
  handleHideModal: React.PropTypes.func.isRequired
};

export default UploadImageModal;