import Sidebar from "../Components/Sidebar";


export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main>
        <Sidebar/>
        {/* ####### Center ########*/}
        {/* ####### End ########*/}
      </main>
      <div>{/* Player*/}</div>
    </div>
  )
}
