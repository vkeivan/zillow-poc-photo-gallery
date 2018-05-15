import { Link} from 'react-router-dom';
import {Button, Grid, Row, Col} from 'react-bootstrap'
import PropTypes from 'prop-types';
import React, {Component, Fragment} from 'react';

export class PhotoGallery extends Component {
    static propTypes = {
        images: PropTypes.array
    };

    static defaultProps = {
        image: []
    }

    state = {
        slider_image_index: 0,
        thumbnail_pointer: 0
    }

    onChangeSliderIndex = (step) => {
        const {images} = this.props;
        let {slider_image_index} = this.state;
        if (slider_image_index + step >= 0 || slider_image_index + step < images.length ) {
            slider_image_index += step;
            this.setState({
                slider_image_index
            });
        }
    }

    onChangeThumbnailIndex = (step) => {
        const {images} = this.props;
        let {thumbnail_pointer} = this.state;
        if (thumbnail_pointer + step >= 0 || thumbnail_pointer + step < images.length ) {
            thumbnail_pointer += step;
            this.setState({
                thumbnail_pointer
            });
        }
    }


    render() {
        const {images} = this.props;
        let {thumbnail_pointer, slider_image_index} = this.state;

        return (
            <Fragment>
                <Grid>
                    <Row>
                        <Col sm={12}>
                            <div className="slider-layout">
                                <div className="slider-left-nav" onClick={() => this.onChangeSliderIndex(-1)}>
                                    <i className="material-icons md-48">
                                        arrow_back_ios
                                    </i>
                                </div>
                                <div className="slider-content">
                                    {images.map((item, index) => {
                                        if (index === slider_image_index) {
                                            return (
                                                <div className="slide-photo-box" key={index}
                                                     style={{display: 'block'}}>
                                                    <img src={item.url}/>
                                                    <div className="caption">{item.caption}</div>
                                                </div>
                                            );
                                        }
                                    })}
                                </div>
                                <div className="slider-right-nav" onClick={() => this.onChangeSliderIndex(+1)}>
                                    <i className="material-icons md-48">

                                        arrow_forward_ios
                                    </i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12}>
                            <div className="slider-container">
                                <div className="slider-left-nav" onClick={() => this.onChangeThumbnailIndex(-1)}>
                                    <i className="material-icons">
                                        arrow_back_ios
                                    </i>

                                </div>
                                <div className={'slider-thumbnails'}>
                                    {images.map((item, index) => {

                                        if (index >= thumbnail_pointer) {
                                            return (
                                                <Link to={index}>
                                                    <div className="photo-card" key={index}>
                                                        <img src={item.url}/>
                                                    </div>
                                                </Link>
                                            )
                                        }
                                        return null;

                                    })}
                                </div>
                                <div className="slider-right-nav" onClick={() => this.onChangeThumbnailIndex(+1)}>
                                    <i className="material-icons">

                                        arrow_forward_ios
                                    </i>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </Fragment>


        );
    }
}

PhotoGallery.propTypes = {
    images: PropTypes.array
}

PhotoGallery.defaultProps = {
    images: [],
    onClick: () => {}
}

export default PhotoGallery;
