import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom'

class DropInstructions extends React.Component {
    constructor(props) {
        super(props);
    }

    displayFileDialog = () => {
        $('#file-upload').click();
    }

    uploadFile = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onload = (upload) => {
            var fileUri = upload.target.result;

            //validation etc, set some css on body
            this.props.handleImageSelected({
                uploadedUri: fileUri,
                filename: file.name,
                filetype: file.type
            });
        };

        reader.readAsDataURL(file);
    }

    render() {
        return (
            <div className="drop-here">
                <div className="drop-instructions text-center">
                    <h3>Drag an image here</h3>
                    <h4>or click to upload</h4>
                    <button className="btn btn-primary" onClick={this.displayFileDialog}>Choose an image</button>
                    <input id="file-upload" type="file" onChange={this.uploadFile} />
                </div>
            </div>
        );
    }
}

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
        console.log(this.state.imageUri);
    }



    render() {

        let dropInstructions = (<DropInstructions handleImageSelected={this.imageSelected}/>);

        let selectedImage = (<img className="img-responsive" src={this.state.imageUri} />)

        let content = (this.state.imageUri) ? selectedImage : dropInstructions;

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