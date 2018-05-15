import { Link} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap'
import PropTypes from 'prop-types';
import React, {Fragment} from 'react';

const PhotoGallery = ({images, onClick}) => {
    if (Array.isArray(images) && images.length === 0) {
        return null;
    }

    return (
        <Fragment>
            <Grid>
                <Row>
                    <Col sm={12}>
                        <div className="slider-layout">
                            <div className="slider-left-nav">
                                <i className="material-icons">
                                    arrow_back_ios
                                </i>
                            </div>
                            <div className="slider-content">
                                {images.map((item, index) => {
                                    return (
                                        <div className="slide-photo-box" key={index} style={{display: index !== 0 ? 'none' : 'block'}}>
                                            <img src={item.url} />
                                            <div className="caption">{item.caption}</div>
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="slider-right-nav">
                                <i className="material-icons">

                                    arrow_forward_ios
                                </i>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col sm={12}>
                        <div className="gallery-container">
                            {images.map((item, index) => {
                                return (
                                    <Link to={index}>
                                        <div className="photo-card" key={index}>
                                            <img src={item.url} />
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                    </Col>
                </Row>
            </Grid>
        </Fragment>

    );
}

PhotoGallery.propTypes = {
    images: PropTypes.array
}

PhotoGallery.defaultProps = {
    images: [],
    onClick: () => {}
}

export default PhotoGallery;
