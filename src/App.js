import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import UserRouter from "./pages/users/Router";
import PostRouter from "./pages/posts/Router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/*" element={<UserRouter />} />
        <Route path="/posts/*" element={<PostRouter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
