import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="container text-center my-5">
      <h1 className="display-4">404 - Page Not Found</h1>
      <p className="lead">Oops! The page you are looking for does not exist.</p>
      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate("/")} // Torna alla home
      >
        Go to Home
      </button>
    </div>
  );
}
