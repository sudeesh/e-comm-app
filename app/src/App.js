import Product from "./components/product";
import data from "./data";
function App() {
  return (
    <div className="grid-container">
        <header className="row">
            <div>
                <a href="/" className="brand">E-commerce</a>
            </div>
            <div>
                <a href="/cart">Cart</a>
                <a href="/signin">signin</a>
            </div>
        </header>
        <main>
            <div className="row center">

              {data.products.map((product) => 
                <Product key={product._id} product={product} />
                )}
            </div>
        </main>
        <footer className="row center">
            All rights are reserved
        </footer>
    </div>
  );
}

export default App;
