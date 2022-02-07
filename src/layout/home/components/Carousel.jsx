import React from 'react';
import "../../../styles/Carousel.scss";

export const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active btn--slide" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" className="btn--slide" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" className="btn--slide" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="../../assets/D_NQ_722060-MLA48959399715_012022-OO.webp" className="d-block w-100 img-slide" alt="slide-1"/>
                </div>
                <div className="carousel-item">
                    <img src="../../assets/D_NQ_829565-MLA48927896565_012022-OO.webp" className="d-block w-100 img-slide" alt="slide-2"/>
                </div>
                <div className="carousel-item">
                    <img src="../../assets/D_NQ_894113-MLA49020869660_022022-OO.webp" className="d-block w-100 img-slide" alt="slide-3"/>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
};
