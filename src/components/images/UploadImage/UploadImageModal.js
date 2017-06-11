import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom'
import DropInstructions from './DropInstructions'

class UploadImageModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageUri: ''
        };
    }

    componentDidMount() {
        $(ReactDOM.findDOMNode(this)).modal('show');
        $(ReactDOM.findDOMNode(this)).on('hidden.bs.modal', this.props.handleHideModal);
    }

    imageSelected = (image) =>{
        this.setState({imageUri: image.uploadedUri});
    }

    submitImage = () => {
        this.props.handleImageUploaded(this.state.imageUri);
    }

    render() {

        let selectedImage = (<img className="img-responsive" src={this.state.imageUri} />)

        let content = (this.state.imageUri) ? selectedImage :
                                            <DropInstructions handleImageSelected={this.imageSelected}/>;

        return (
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
                            {content}
                        </div>
                        <div className="modal-footer">
                            <button type="button"
                                className="btn btn-default"
                                data-dismiss="modal">Close</button>

                            <button type="button"
                                className="btn btn-primary"
                                onClick={this.submitImage}>Submit</button>
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