import React from 'react'
import styles from './Profile.module.css'

const Profile = () => {
    return (
        <section id='profile' className={styles.profile}>
            <div className="inner">
                <h2>ABOUT ME</h2>
                <div className={styles.aboutMe}>
                    <img src='/img/profile.png' alt="profile" />
                    <div className={styles.profile_text}>
                        <p className="intro text">
                            작지만 확실한 디테일을 중요하게 생각하는 신입 퍼블리셔 문효은입니다.
                        </p>
                        <dl>
                            <div>
                                <dt>NAME</dt>
                                <dd>문효은</dd>
                            </div>
                            <div>
                                <dt>BIRTH</dt>
                                <dd>2001</dd>
                            </div>
                            <div>
                                <dt>E-mail</dt>
                                <dd><a href="mailto:hsilver1630@gmail.com">hsilver1630@gmail.com</a></dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Profile
