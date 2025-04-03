import { Link } from "react-router-dom";

export default function Posts() {
  return (
    <>
      <section>
        <div className="container my-4">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
            <div className="col">
              <div className="card">
                <img
                  src="https://picsum.photos/300/200?random=1"
                  className="card-img-top"
                  alt="Post 1"
                />
                <div className="card-body">
                  <h5 className="card-title">Post 1</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum.
                  </p>
                  <Link to="/post/1" className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://picsum.photos/300/200?random=2"
                  className="card-img-top"
                  alt="Post 2"
                />
                <div className="card-body">
                  <h5 className="card-title">Post 2</h5>
                  <p className="card-text">
                    Cras ultricies ligula sed magna dictum porta. Proin eget
                    tortor risus.
                  </p>
                  <Link to="/post/2" className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://picsum.photos/300/200?random=3"
                  className="card-img-top"
                  alt="Post 3"
                />
                <div className="card-body">
                  <h5 className="card-title">Post 3</h5>
                  <p className="card-text">
                    Pellentesque in ipsum id orci porta dapibus. Nulla quis
                    lorem ut libero malesuada feugiat.
                  </p>
                  <Link to="/post/3" className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://picsum.photos/300/200?random=4"
                  className="card-img-top"
                  alt="Post 4"
                />
                <div className="card-body">
                  <h5 className="card-title">Post 4</h5>
                  <p className="card-text">
                    Donec sollicitudin molestie malesuada. Vestibulum ac diam
                    sit amet quam vehicula elementum.
                  </p>
                  <Link to="/post/4" className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://picsum.photos/300/200?random=5"
                  className="card-img-top"
                  alt="Post 5"
                />
                <div className="card-body">
                  <h5 className="card-title">Post 5</h5>
                  <p className="card-text">
                    Donec sollicitudin molestie malesuada. Vestibulum ac diam
                    sit amet quam vehicula elementum.
                  </p>
                  <Link to="/post/5" className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img
                  src="https://picsum.photos/300/200?random=6"
                  className="card-img-top"
                  alt="Post 6"
                />
                <div className="card-body">
                  <h5 className="card-title">Post 6</h5>
                  <p className="card-text">
                    Donec sollicitudin molestie malesuada. Vestibulum ac diam
                    sit amet quam vehicula elementum.
                  </p>
                  <Link to="/post/6" className="btn btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
