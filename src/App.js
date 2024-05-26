
import './App.css';
import Uipage from './Frontpage.js';
import { CartProvider } from './componets/context.js';

function App() {
  return (
    <div>
      <CartProvider>
      <Uipage/>
      </CartProvider>
    </div>
  );
}

export default App;
