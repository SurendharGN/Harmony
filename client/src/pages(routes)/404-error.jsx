import { useRouteError } from "react-router-dom"

export const Error = () => {
  const error=useRouteError();

  return(
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occured.</p>
      <p>{error.message || error.statusText}</p>
    </div>
  )

}