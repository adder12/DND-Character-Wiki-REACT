import ReactDOM from "react-dom";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Marissa from "./pages/Marissa";
import Allie from "./pages/Allie";
import Blaze from "./pages/Blaze";
import Hera from "./pages/Hera";
import NoPage from "./pages/NoPage";




export default function App() {

return (
    
<BrowserRouter>
<Routes>
    <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="Blaze" element={<Blaze />}/>
        <Route path="Allie" element={<Allie/>}/>
        <Route path="Marissa" element={<Marissa/>}/>
        <Route path="Hera" element={<Hera/>}/>
        <Route path="*" element={<NoPage/>}/>
     </Route>
    
    
    </Routes></BrowserRouter>


);


}

ReactDOM.render(<App />, document.getElementById("root"))