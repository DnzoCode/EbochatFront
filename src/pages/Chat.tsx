import TopBar from "../Components/Chat/TopBar";
import Contact from "../Components/Chat/Contact";

export default function Chat() {
  return (
    <>
      <div className="w-screen h-screen flex flex-col items-stretch">
        <TopBar />
        <div className="w-full h-full overflow-y-auto flex flex-col p-2 mt-4 ">
          <Contact />
        </div>
      </div>
    </>
  );
}
