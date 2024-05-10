import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts/Layout";
import Todos from "./pages/Todos";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="admin/todos" element={<Todos />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
