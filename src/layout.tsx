import { Outlet } from "react-router-dom"
import { Toaster } from "sonner"

import AppHeader from "./components/shared/AppHeader"
import AppFooter from "./components/shared/AppFooter"

const Root = () => {
  return (
    <>
      <Toaster position="bottom-center" richColors />
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  )
}

export default Root
