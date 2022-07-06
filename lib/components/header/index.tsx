import React, { memo } from 'react'
import { animated, useSpring } from 'react-spring'
import { useMediaQuery } from 'react-responsive'

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
        <>
            <animated.div className={styles.heading} style={headingStyles}>
                Alexandr & Veronica
            </animated.div>
            <animated.div className={styles.heading2} style={titleStyles}>
                Countdown to our wedding
            </animated.div>
        </>
    )
}

export default memo(Header)
