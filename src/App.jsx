import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Home } from "./layout/home/Home";

function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Nav/> }>
              <Route index element={ <Home/> }/>
            </Route>
        </Routes> 
    </BrowserRouter>
  )
}

export default App
