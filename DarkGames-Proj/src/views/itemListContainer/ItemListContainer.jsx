import NavBar from "../../components/navBar/NavBar";
import ItemList from "../../components/itemList/ItemList";
import { tienda } from "./itemListContainer.module.css";

export default function Tienda() {
  return (
    <div className={tienda}>
      <NavBar />
      <ItemList />
    </div>
  );
}