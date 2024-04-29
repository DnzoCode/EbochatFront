import { useEffect, useRef } from "react";
import Message from "./Message";

export default function Conversation() {
  const containerRef = useRef(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);
  return (
    <>
      <div
        className="p-2 w-auto h-full overflow-y-auto mb-2"
        ref={containerRef}
      >
        <Message type={1} />
        <Message type={2} />
      </div>
    </>
  );
}
