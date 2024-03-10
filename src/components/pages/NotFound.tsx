import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center pt-[100px]">
      <h3 className="text-3xl">404</h3>
      <p>Sorry, we couldn't find this page.</p>
      <p className="pt-4">
        Back to{" "}
        <Link className="underline" to="/">
          Home
        </Link>
      </p>
    </div>
  )
}
export default NotFound
