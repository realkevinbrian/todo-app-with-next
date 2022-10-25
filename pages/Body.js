import Footer from "../components/Todo/Footer";
import Header from "../components/Todo/Header";
import Todo_Item from "../components/Todo/Todo_Item";

function Body() {
  return (
    <div>
      <Header />
      <div>
        <Todo_Item />
        <Todo_Item />
        <Todo_Item />
        <Todo_Item />
      </div>

      <Footer />
    </div>
  );
}

export default Body;
