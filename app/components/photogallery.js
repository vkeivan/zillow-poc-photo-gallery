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
                        <div className="gallery-container">
                            {images.map((item, index) => {
                                return (
                                    <Link to={index}>
                                        <div className="photo-box" key={index}>
                                            <img src={item.url} />
                                            <div>{item.caption}</div>
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
