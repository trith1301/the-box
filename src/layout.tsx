import { Outlet } from "react-router-dom"

import AppHeader from "./components/shared/AppHeader"
import AppFooter from "./components/shared/AppFooter"

const Root = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </>
  )
}

export default Root
