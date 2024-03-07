import { Outlet } from "react-router-dom"

import AppHeader from "./components/shared/AppHeader"

const Root = () => {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  )
}

export default Root
