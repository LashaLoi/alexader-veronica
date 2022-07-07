import { config } from 'react-spring'

export const commonSpring = {
    from: { opacity: 0, color: '#ffefd5', scale: 0.95 },
    to: {
        opacity: 1,
        color: 'white',
        scale: 1,
    },
    config: config.molasses,
}
