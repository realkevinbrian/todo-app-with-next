import Footer from "../components/Todo/Footer";
import Header from "../components/Todo/Header";
import Todo_Item from "../components/Todo/Todo_Item";
import styles from "../styles/Body.module.scss"

function Body() {
  return (
    <div className={styles.body}>
      <Header />
      <div className={styles.wrapper}>
        <Todo_Item />
        <Todo_Item />
        <Todo_Item />
        <Todo_Item />
        <Footer />
      </div>

    </div>
  );
}

export default Body;
