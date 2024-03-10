import { Outlet } from "react-router-dom"
import { Toaster } from "sonner"
import "@fontsource-variable/work-sans"

import AppHeader from "./components/shared/AppHeader"
import AppFooter from "./components/shared/AppFooter"

import { NOTIFICATION_POS } from "./core/constants"

const Root = () => {
  return (
    <main className="font-work-sans">
      <Toaster position={NOTIFICATION_POS} richColors />
      <AppHeader />
      <Outlet />
      <AppFooter />
    </main>
  )
}

export default Root
