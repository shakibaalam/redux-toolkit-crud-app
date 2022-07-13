
import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Index from './routs/Index';
import Footer from './layouts/Footer';

function App() {
  return (
    <div className="App">
      <Index></Index>
      <Footer></Footer>

      <ToastContainer />
    </div>
  );
}

export default App;
