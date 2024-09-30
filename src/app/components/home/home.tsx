import React, { useEffect } from 'react'
import Image from 'next/image'
import styles from './home.module.css'

const home = () => {


    useEffect(() => {

        let ring1Angle = 180, ring2Angle = 180, ring3Angle = 180;

        let ring1: any = document.getElementById('ring1');
        let ring2: any = document.getElementById('ring2');
        let ring3: any = document.getElementById('ring3');

        ring1.style.rotate = `100 1 0 ${ring1Angle}deg`
        ring2.style.rotate = `1 1 0 ${ring2Angle}deg`
        ring3.style.rotate = `1 -1 0 ${ring3Angle}deg`

        setInterval(() => {
            if (ring1Angle == 360) {
                ring1Angle = 0;
            }
            ring1Angle++;
            ring1.style.rotate = `100 1 0 ${ring1Angle}deg`

            if (ring2Angle == 360) {
                ring2Angle = 0;
            }
            ring2Angle++;
            ring2.style.rotate = `1 1 0 ${ring2Angle}deg`

            if (ring3Angle == 360) {
                ring3Angle = 0;
            }
            ring3Angle++;
            ring3.style.rotate = `1 -1 0 ${ring3Angle}deg`
        }, 20)
    })

    return (
        <>
            <div className={styles.mainDiv}>
                <div className={styles.patternBox}>
                    <div className={styles.mainBox}>
                        <div className={styles.firstBox}>
                            <div className={styles.animation}>
                                <div className={styles.centerDiv}>
                                    <div className={styles.image}>
                                        <Image src="/hackerImage1.png" alt="Image" width={70} height={70} className={'blurringEffect'} id="hcImage" />
                                    </div>
                                    <div className={`${styles.ring1} blurringEffect`} id="ring1"></div>
                                    <div className={`${styles.ring2} blurringEffect`} id="ring2"></div>
                                    <div className={`${styles.ring3} blurringEffect`} id="ring3"></div>

                                </div>
                            </div>
                        </div>
                        <div className={styles.secondBox}>
                            <div className={styles.content}>

                            </div>
                            <div className={styles.hackerImageBox}>
                            <Image src="/jokerHome.png" className={styles.hackerImage} alt="Image" width={300} height={300} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default home