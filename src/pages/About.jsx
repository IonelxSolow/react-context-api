export default function About() {
  return (
    <div className="container my-5">
      <h1 className="display-4 text-center mb-4">About Us</h1>
      <p className="lead text-center">
        Welcome to our website! We are passionate about delivering high-quality
        content and services to our users.
      </p>
      <div className="row mt-5">
        <div className="col-md-6">
          <h3>Our Mission</h3>
          <p>
            Our mission is to provide exceptional value through innovative
            solutions and a commitment to excellence. We strive to make a
            positive impact in the lives of our customers and the community.
          </p>
        </div>
        <div className="col-md-6">
          <h3>Our Vision</h3>
          <p>
            We envision a world where technology and creativity come together to
            solve real-world problems and inspire progress. Our goal is to be a
            leader in our industry and a trusted partner for our clients.
          </p>
        </div>
      </div>
      <div className="text-center mt-5">
        <h4>Contact Us</h4>
        <p>
          Have questions? Feel free to reach out to us at{" "}
          <a href="mailto:info@example.com">info@example.com</a>.
        </p>
      </div>
    </div>
  );
}
