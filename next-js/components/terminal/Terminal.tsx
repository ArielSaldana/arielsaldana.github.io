import styles from "./Terminal.module.scss"

export default function Terminal() {
    return (
        <div className={styles.terminal}>
            <p>|--Home</p>
            <p>|       |--About</p>
            <p>|       |--Career</p>
            <p>|       |--Home</p>
        </div>
    )
}