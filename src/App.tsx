import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserPage from "./pages/user";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
