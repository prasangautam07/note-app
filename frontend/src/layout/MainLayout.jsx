import Navbar from "../components/Navbar"
import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"
function MainLayout({searchNotes}) {
  return (
    <>
        <Navbar searchNotes={searchNotes}/>
        <ToastContainer />
        <Outlet />
    </>
  )
}

export default MainLayout