import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Message from "./pages/Message";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </>
  );
}

export default App;
