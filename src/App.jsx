import "./App.css";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <div>
        <Header />
        {/* <ItemListContainer titulo={"Bienvenidos"} /> */}
        <ItemDetailContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;
