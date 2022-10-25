import Link from "next/link"
import styles from "../../styles/Footer.module.scss"

function Footer() {
  return (
    <div className={styles.wrapper}>
        
        <div>
            5 items left
        </div>

        <div>
            <Link href={"/"}>All</Link>
            <Link href={"/"}>Active</Link>
            <Link href={"/"}>Completed</Link>
        </div>

        <div>
            Clear Completed
        </div>

    </div>
  )
}

export default Footer