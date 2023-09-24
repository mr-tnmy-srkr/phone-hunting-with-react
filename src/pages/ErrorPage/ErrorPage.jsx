import { useRouteError } from "react-router-dom";
import errorPage from '/src/assets/errorpage.jpg'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" className="h-screen
    flex items-center justify-center">
      {/* <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p> */}
      <img className="" src={errorPage} alt="" />
    </div>
  );
}