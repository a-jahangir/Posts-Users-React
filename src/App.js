import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import UserRouter from "./pages/users/Router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/*" element={<UserRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
