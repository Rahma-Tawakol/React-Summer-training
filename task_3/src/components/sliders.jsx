import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './slider.css';

export default function Slider() {
    return (
        <div className="slides-container">
            <Swiper
                modules={[Navigation, Pagination, A11y]}
                spaceBetween={40}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                style={{ paddingBottom: "50px" }}
            >
                <SwiperSlide>
                    <img src="imgs/black.png" alt="img1" className="slide-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="imgs/applec.png" alt="img2" className="slide-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="imgs/mo.png" alt="img3" className="slide-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="imgs/blu.png" alt="img2" className="slide-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="imgs/va.png" alt="img3" className="slide-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="imgs/tea.png" alt="img3" className="slide-img" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="imgs/co.png" alt="img3" className="slide-img" />
                </SwiperSlide>
                 <SwiperSlide>
                    <img src="imgs/stra.png" alt="img3" className="slide-img" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
