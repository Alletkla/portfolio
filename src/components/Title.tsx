import { PropsWithChildren } from 'react'
import styles from '../styles.module.css'

export default function Title(props: { style?: React.CSSProperties } & PropsWithChildren) {
    const {style = {}, children} = props
    return (
        <div className={`${styles.card} ${styles.white}`} style={style}>
            {children}
        </div>
    )
}