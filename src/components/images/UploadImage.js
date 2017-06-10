import React from 'react';

class UploadImage extends React.Component{
    render(){
        return(
            <div className="row">
                <div className="col-xs-12">
                    <button className="btn btn-primary pull-right" 
                        data-toggle="modal" 
                        data-target="#myModal">Insert Image</button>
                </div>
                <div className="modal fade" 
                    id="myModal" 
                    tabIndex="-1" 
                    role="dialog" 
                    aria-labelledby="myModalLabel">

                    <div className="modal-content">
                        <div className="modal-dialog" role="document">
                            <div className="modal-header">
                              <button type="button" 
                                    className="close" 
                                    data-dismiss="modal" 
                                    aria-label="Close">
                                    
                                <span aria-hidden="true">&times;</span></button>
                                <h4 className="modal-title" id="myModalLabel">Modal title</h4>
                            </div>
                            <div className="modal-body">
                              ...
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
            </div>
        );
    };
};

export default UploadImage;