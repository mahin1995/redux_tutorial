import "./App.css";
import MainPage from "./containers/MainPage";
import {Routes ,Route} from 'react-router-dom'
import ProductDetails from "./containers/ProductDetail";
import Header from './containers/Header'
function App() {
  return (
    <div className="App">
       <Header></Header>
      <Routes>
        <Route path="/" exact element={ <MainPage />} />
        <Route path="/product/:productId" exact element={ <ProductDetails />} />
        <Route>404 Not Found</Route>
      </Routes>
    </div>
  );
}

export default App;
