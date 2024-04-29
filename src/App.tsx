import { Routes, Route } from "react-router-dom";
import Chat from "./pages/Chat";
import Message from "./pages/Message";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/chat/:chatId" element={<Message />} />
      </Routes>
    </>
  );
}

export default App;
