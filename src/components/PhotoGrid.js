import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PhotoGrid extends Component {
    render() {
        return (
            <div>
                <Link to="/view/123">go to 123</Link>
            </div>
        );
    }
}
