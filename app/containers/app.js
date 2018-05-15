import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter} from 'react-router-dom';
import PhotoGallery from "../components/photogallery";

import data from '../data/data.json';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider>
                <BrowserRouter>
                    <div className="app-container">
                        <AppBar title="Photo Gallery" />
                        <div className="gallery-container">
                            <PhotoGallery images={data.images} />
                        </div>
                    </div>
                </BrowserRouter>
           </MuiThemeProvider>
    );
    }
}
export default hot(module)(App);
