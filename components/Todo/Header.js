import Image from "next/image"
import LightButton from "../../images/icon-moon.svg"
import SunButton from "../../images/icon-sun.svg"
import SearchBox from "./SearchBox"
import styles from "../../styles/Header.module.scss"

function Header() {
  return (
    <div className={styles.HeaderWrapper}>

        <div className={styles.HeaderWrapper__navbar}>
            <h1>TODO</h1>
            <Image src={LightButton} alt="moonbutton"/>
            {/* <Image src={SunButton} alt="moonbutton"/> */}
        </div>
        <SearchBox/>
    </div>
  )
}

export default Header