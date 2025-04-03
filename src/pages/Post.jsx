import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Controlla se l'ID è un numero valido
    if (isNaN(id)) {
      navigate("/404"); // Reindirizza alla pagina 404
      return;
    }

    // Simula il recupero del post
    const fakePost = {
      id,
      title: `Post Title ${id}`,
      description: `This is the description for post ${id}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.`,
      image: `https://picsum.photos/600/400?random=${id}`,
    };
    setPost(fakePost);
  }, [id, navigate]);

  if (!post) {
    return (
      <div className="text-center my-5">
        <p>Loading post...</p>
      </div>
    );
  }

  return (
    <>
      <main>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src={post.image}
                alt={post.title}
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6">
              <h1 className="display-4">{post.title}</h1>
              <p className="lead">{post.description}</p>
              <button
                className="btn btn-secondary mt-3"
                onClick={() => navigate(-1)} // Torna indietro di una pagina
              >
                Go Back
              </button>
              <button
                className="btn btn-primary mt-3"
                onClick={() => navigate(`/post/${parseInt(id) + 1}`)} // Vai al prossimo post
              >
                Next Post
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
