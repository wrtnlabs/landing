import { ToastContainer, Zoom } from "react-toastify/unstyled"
import "react-toastify/dist/ReactToastify.css";

export default function ToastProvider() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      closeButton={false}
      closeOnClick={true}
      icon={false}
      style={{
        width: "100%",
        top: "80px"
      }}
      transition={Zoom}
      toastStyle={{
        padding: "0",
        width: "100%",
        backgroundColor: "transparent",
        margin: "0 auto",
        boxShadow: "none",
      }}
    />
  )
}