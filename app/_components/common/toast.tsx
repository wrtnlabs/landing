import { toast } from "react-toastify/unstyled"

interface ToastProps {
  message: string
}

export const openToast = () => toast.info(
  <Toast message="This service will be available soon." />,
)

export const Toast = ({ message }: ToastProps) => {
  return (
    <div
      className="max-w-md mx-auto w-full text-base text-[#F7F7F3] font-bold text-center bg-[#2D2D25] rounded-xl py-3"
    >
      {message}
    </div>
  )
}