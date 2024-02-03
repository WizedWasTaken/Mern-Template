import { useRouteError } from "react-router-dom";
import { ErrorType } from "./lib/definitions";

/**
 * Error Page
 * @date 2/4/2024 - 12:12:49 AM
 */
export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{(error as ErrorType).statusText}</i>
      </p>
    </div>
  );
}
