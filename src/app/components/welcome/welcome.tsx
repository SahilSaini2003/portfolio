import React, {useEffect} from 'react'
import Image from 'next/image'
import styles from './welcome.module.css'

const welcome = () => {

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
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.image}>
                    <Image src="/hackerImage1.png" alt="Image" width={300} height={300} className={'blurringEffect'} id="hcImage" />
                </div>
                <div className={`${styles.ring1} blurringEffect`} id="ring1"></div>
                <div className={`${styles.ring2} blurringEffect`} id="ring2"></div>
                <div className={`${styles.ring3} blurringEffect`} id="ring3"></div>
            </div>
            <div className={styles.textContainer}>
                <div className={`${styles.text1} bottomToUp`} id="text1"><h3>Step into a world where ideas meet innovation</h3></div>
                <div className={styles.text2} id="text2"><h3>Welcome to my PORTFOLIO</h3></div>
                <div className={styles.text3} id="text3"><h3>Where creativity takes shape through technology</h3></div>
            </div>
            <script src="./ring.js"></script>
        </div>
    )
}

export default welcome