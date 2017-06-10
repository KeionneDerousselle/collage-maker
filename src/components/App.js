import React from 'react';
import Header from './common/Header';
import FileSystem from './common/FileSystem';
import ImageContent from './images/ImageContent';

export class App extends React.Component{
    render() {
        return(
            <div>
                <Header />
                <div className="container-fluid">
                    <div className="row">
                        <FileSystem />
                        <ImageContent/> 
                    </div>
                </div>
            </div>
        );
    };
}
