import React from 'react'
import styles from './Web.module.css'

const Web = () => {
    const webPFs = [
        {
            id: 1,
            title: 'Clone Coding-12play',
            img: '/img/12play.png',
            gif: '/img/12play_g.gif',
            text: '12Play 공식 사이트를 HTML, CSS, 그리고 JQuery로 클론코딩한 작업물입니다. 깔끔한 디자인과, 다양한 동작이 자연스럽게 어우러지는 부분이 마음에 들어서 첫 클론코딩 프로젝트로 선정하였습니다. 사이트의 전체적인 구조와 애니메이션 구현에 중점을 두었으며, JQuery를 활용해 여러 동적 요소를 구현하면서 특히 퍼블리싱의 기본인 HTML, CSS에 대한 기초를 견고하게 다질 수 있었습니다.',
            tags: ['HTML', 'CSS', 'JQuery', '클론코딩', '첫 프로젝트'],
            tools: ['/img/logo_html.png', '/img/logo_css.png', '/img/logo_jquery.png']
        }
    ]
    return (
        <section className={styles.web} id='web'>
            <div className="inner">
                <h2>Publishing Contents</h2>
                <ul className={styles.contents}>
                    {webPFs.map((webPF) => (
                        <li key={webPF.id}>
                            <div className={styles.textArea}>
                                <h3>{webPF.title}</h3>
                                <ul className={styles.tag}>
                                    {
                                        webPF.tags.map((tag, idx) => (
                                            <li key={idx}>#{tag}</li>
                                        ))
                                    }
                                </ul>
                                <p>{webPF.text}</p>
                                <ul className={styles.tool}>
                                    {
                                        webPF.tools.map((tool, idx) => (
                                            <li key={idx}><img src={tool} alt='사용 툴' /></li>
                                        ))
                                    }
                                </ul>
                                <div className={styles.btnArea}>
                                <a href="https://nueoyh.github.io/12play/index.html" target="_blank">결과물 보기</a>
                                <a href="http://www.12play.kr/html/" target="_blank">기존 사이트 보기</a>
                            </div>
                            </div>
                            <img src={webPF.gif} alt={webPF.title} className={styles.thumbnail} />

                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Web