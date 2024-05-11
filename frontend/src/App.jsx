
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Table from "./components/Table";
import Posts from "./components/Posts";

function App() {
 

  return (
    <>
   
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Table />}/>
        <Route path="/posts/:userId" element={<Posts/>} />
      </Routes>
    </BrowserRouter>
  
  </>
  );
}

export default App;
