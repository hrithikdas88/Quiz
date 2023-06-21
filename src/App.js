import { ContextProvider } from "./components/context/Context"
import './App.css';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <ContextProvider>
     <Home/>
     </ContextProvider>
    </div>
  );
}

export default App;
