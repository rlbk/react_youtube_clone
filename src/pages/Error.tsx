import { Link } from "react-router-dom";
import { TfiFaceSad } from "react-icons/tfi";

interface ErrorPropsI {
  error: string;
}

const Error = ({ error }: ErrorPropsI) => {
  const refreshPage = () => {
    window.location.reload();
  };
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-primary-gray-50">
      <div className="text-center">
        <TfiFaceSad size={200} className="text-primary-gray-300 mx-auto mb-4" />

        <p className="font-bold text-3xl text-primary-gray-180 mb-4">
          Something went wrong!
        </p>
        <p className="text-primary-gray-200 text-lg">
          {error}
          <br />
          <span onClick={refreshPage} className="cursor-pointer">
            <strong>Reload page</strong>
          </span>
          , or head over to{" "}
          <strong>
            <Link to="/">home page</Link>
          </strong>{" "}
          to choose a new direction.
        </p>
      </div>
    </div>
  );
};

export default Error;
