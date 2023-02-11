import './assets/styles/css/app.css';
import Home from './components/home/Home';
import { BrowserRouter } from "react-router-dom"
import { Route, Routes } from "react-router"
import PlantActivity from './components/plantTree/PlantActivity';


function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path = '/' element={<Home />} />
          <Route path='/plant' element={<PlantActivity />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
