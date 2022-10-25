import Image from "next/image"
import LightButton from "../../images/icon-moon.svg"
import SunButton from "../../images/icon-sun.svg"
import SearchBox from "./SearchBox"

function Header() {
  return (
    <div>

        <div>
            <h3>TODO</h3>
            <Image src={LightButton} alt="moonbutton"/>
            {/* <Image src={SunButton} alt="moonbutton"/> */}
        </div>
        <SearchBox/>
    </div>
  )
}

export default Header