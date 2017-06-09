import React from 'react';

class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">Collage Maker</a>
                    </div>
                </div>
            </nav>
        );
    };
}

export default Header;