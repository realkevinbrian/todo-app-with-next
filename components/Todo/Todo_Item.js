import CheckButton from "./CheckButton";
import deleteBtn from "../../images/icon-cross.svg"
import Image from "next/image";

function Todo_Item() {
  return (
    <div>
      <CheckButton />
      <h4>
        loremSint duis cillum nostrud consectetur dolor ea enim culpa officil
      </h4>
      <Image src={deleteBtn} alt="closebtn"/>
    </div>
  );
}

export default Todo_Item;
