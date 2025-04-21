import React, { useState } from 'react'
import styles from './Design.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import IonIcon from '@reacticons/ionicons';


import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

const Design = () => {
    const designs = [
        {
            id: 1,
            title: '입생로랑 이벤트 배너',
            thumb: '/img/design_t01.png',
            img: '/img/design01.png',
            tags: ['#이벤트배너', '#골드', '#뷰티']
        },
        {
            id: 2,
            title: '크리스마스 카드뉴스',
            thumb: '/img/design_t02.png',
            img: '/img/design02.png',
            tags: ['#카드뉴스', '#크리스마스']
        },
        {
            id: 3,
            title: '향수 카드메뉴',
            thumb: '/img/design_t03.png',
            img: '/img/design03.png',
            tags: ['#카드메뉴', '#향수', '#뷰티']
        },
        {
            id: 4,
            title: '롬앤 상세페이지',
            thumb: '/img/design_t04.png',
            img: '/img/design04.jpg',
            tags: ['#상세페이지', '#뷰티']
        },
        {
            id: 5,
            title: '톰포드 뷰티 상세페이지',
            thumb: '/img/design_t05.png',
            img: '/img/design05.jpg',
            tags: ['#상세페이지', '#블랙', '#뷰티']
        },
        {
            id: 6,
            title: '메종 프란시스 커정 상세페이지',
            thumb: '/img/design_t06.png',
            img: '/img/design06.jpg',
            tags: ['#상세페이지', '#코랄', '#뷰티']
        },
        {
            id: 7,
            title: '에어빔 상세페이지',
            thumb: '/img/design_t07.png',
            img: '/img/design07.jpg',
            tags: ['#상세페이지', '#무선이어폰', '#블루']
        },
        {
            id: 8,
            title: '돌상 이벤트 배너+상세',
            thumb: '/img/design_t08.png',
            img: '/img/design08.png',
            tags: ['#이벤트배너', '#이벤트상세', '#전통']
        },
        {
            id: 9,
            title: '카드뉴스',
            thumb: '/img/design_t09.png',
            img: '/img/design09.png',
            tags: ['#카드뉴스', '#UI디자인']
        },
        {
            id: 10,
            title: '포스터',
            thumb: '/img/design_t10.png',
            img: '/img/design10.png',
            tags: ['#핑크', '#전시회포스터']
        },
        {
            id: 11,
            title: '이벤트 배너',
            thumb: '/img/design_t11.png',
            img: '/img/design11.png',
            tags: ['#이벤트배너', '#플랜테리어', '#핑크']
        },
        {
            id: 12,
            title: '카드메뉴',
            thumb: '/img/design_t12.png',
            img: '/img/design12.png',
            tags: ['#카드메뉴', '#옐로우', '#제품소개']
        }
    ]
    const [selectedImg, setSelectedImg] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const centerIndex = (activeIndex + Math.floor(5 / 2)) % designs.length;

    const viewAll = (imgUrl) => {
        setSelectedImg(imgUrl); // 이미지 클릭하면 모달용 상태 저장
    };
    return (
        <section className={styles.design} id='design'>
            <div className="inner">
                <h2>Design Contents</h2>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={20}
                    loop={true}
                    autoplay={true}
                    className="mySwiper"
                    onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                >
                    {
                        designs.map((design, idx) => (
                            <SwiperSlide key={design.id}>
                                <button className={styles.btnView} onClick={() => viewAll(design.img)}>
                                    <figure><img src={design.thumb} alt={design.title} /></figure>
                                </button>
                                {idx === centerIndex  && design.tags && (
                                    <ul className={styles.tags}>
                                        {design.tags.map((tag, tagIdx) => (
                                            <li key={tagIdx}>{tag}</li>
                                        ))}
                                    </ul>
                                )}
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                {selectedImg && (
                    <div className={styles.modalBg} onClick={() => setSelectedImg(null)}>
                        <div className={styles.modalContent}>
                            <img src={selectedImg} alt={styles.title} />
                            <button className={styles.closeBtn} onClick={() => setSelectedImg(null)}> <IonIcon name="close-outline" /></button>
                        </div>
                    </div>
                )}

            </div>
        </section>
    )
}

export default Design