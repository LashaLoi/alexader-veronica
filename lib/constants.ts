import { config } from 'react-spring'

export const commonSpring = {
    from: { opacity: 0, color: '#ffefd5', scale: 0.95 },
    to: {
        opacity: 1,
        color: 'white',
        scale: 1,
        textShadow: '2px 4px 3px #222',
    },
    config: config.molasses,
}
