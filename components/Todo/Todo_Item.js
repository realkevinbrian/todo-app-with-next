import CheckButton from "./CheckButton";
import deleteBtn from "../../images/icon-cross.svg"
import Image from "next/image";
import styles from "../../styles/TodoItem.module.scss"

function Todo_Item() {
  return (
    <div className={styles.todoItemWrapper}>
      <CheckButton />
      <h4>
        loremSint duis cillum nostrud consectetur dolor ea enim culpa officil
      </h4>

      <div className={styles.actionButton}>
      <Image src={deleteBtn} alt="closebtn"/>
      </div>

    </div>
  );
}

export default Todo_Item;
