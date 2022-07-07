import React, { memo } from 'react'
import { animated, useSpring } from 'react-spring'

import { commonSpring } from '@lib/constants'

import styles from './index.module.scss'

const Header: React.FC = () => {
    const headingStyles = useSpring({
        ...commonSpring,
    })
    const titleStyles = useSpring({
        ...commonSpring,

        delay: 100,
    })

    return (
        <div className={styles.main}>
            <animated.div className={styles.heading} style={headingStyles}>
                Alexandr <span className={styles.span}>and</span> Veronica
            </animated.div>
            <animated.div className={styles.heading2} style={titleStyles}>
                Countdown to our wedding
            </animated.div>
        </div>
    )
}

export default memo(Header)
