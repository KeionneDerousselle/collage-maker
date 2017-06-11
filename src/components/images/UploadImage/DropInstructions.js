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

export default DropInstructions;