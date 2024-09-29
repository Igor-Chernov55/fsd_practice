import './App.css'
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage";
import {MainPageAsync} from "./pages/MainPage";
import {Suspense} from "react";

function App() {

  return (
    <div>
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>

        <Suspense fallback={<p>...Loading</p>}>
            <Routes>
            <Route path={'/about'} element={<AboutPageAsync/>}/>
            <Route path={'/'} element={<MainPageAsync/>}/>
        </Routes>
        </Suspense>
    </div>
  )
}

export default App
