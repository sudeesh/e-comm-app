import {BrowserRouter,Route} from 'react-router-dom';

// Components 
import HomeScreen from './screens/homeScreen';
import ProductScreen from './screens/productScreen';

function App() {
  return (
      <BrowserRouter>
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
                <Route path="/product/:id" component={ProductScreen}></Route>
                <Route path="/" component={HomeScreen} exact></Route>
                
            </main>
            <footer className="row center">
                All rights are reserved
            </footer>
        </div>
    </BrowserRouter>
  );
}

export default App;
