import { useSpring, animated } from 'react-spring'

import Header from '@components/header'
import { useTimer } from '@lib/hooks/useTimer'
import { commonSpring } from '@lib/constants'

import styles from './index.module.scss'

export default function Home() {
    const { days, hours, minutes, seconds } = useTimer()

    const dateStyles = useSpring({
        ...commonSpring,
        delay: 200,
    })

    return (
        <animated.div className={styles.container}>
            <Header />
            <animated.ul className={styles.ul} style={dateStyles}>
                <li className={styles.li}>
                    <span className={styles.span}>{days}</span>
                    days
                </li>
                <li className={styles.li}>
                    <span className={styles.span}>{hours}</span>
                    hours
                </li>
                <li className={styles.li}>
                    <span className={styles.span}>{minutes}</span>
                    minutes
                </li>
                <li className={styles.li}>
                    <animated.span className={styles.span}>
                        {seconds}
                    </animated.span>
                    seconds
                </li>
            </animated.ul>
        </animated.div>
    )
}
