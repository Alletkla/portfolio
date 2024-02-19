import { PropsWithChildren } from "react";
import styles from '../styles.module.css'

export default function Card(props: { style?: React.CSSProperties, className?: string } & PropsWithChildren) {
    return (
        <div className={`${styles.card} ${props.className}`} style={props.style}>
            {props.children}
        </div>
    )
}