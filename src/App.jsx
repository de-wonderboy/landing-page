import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <div className="w-100">
      {/* Hero Section */}
      <section
        className="hero-section text-center text-white"
        style={{
          backgroundImage: "url(/background.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
        }}
      >
        <div>
          <a href="#flavors" className="btn btn-light btn-lg mb-4">
            Browse Flavors
          </a>
        </div>
      </section>

      {/* Flavors Section */}
      <section id="flavors" className="container py-5">
        <h2 className="text-center mb-5">Our Flavors</h2>
        <div
          id="flavorsCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-4">
                  <img
                    src="/oolong.jpeg"
                    className="card-img-top"
                    alt="Oolong"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Oolong Bubble Tea</h5>
                    <p className="card-text">
                      Pure and rich, a timeless favorite.
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <img
                    src="/brown-sugar.jpeg"
                    className="card-img-top"
                    alt="Chocolate Bubble"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Chocolate Bubble Tea</h5>
                    <p className="card-text">
                      Chocolate with a swirl of crunchiness.
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <img
                    src="/choco.jpeg"
                    className="card-img-top"
                    alt="Brown Sugar"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Taiwanese Brown Sugar
                    </h5>
                    <p className="card-text">
                    Pure and rich, a timeless favorite.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row">
                <div className="col-4">
                  <img
                    src="/strawberry.jpeg"
                    className="card-img-top"
                    alt="Strawberry"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Strawberry Bubble Tea</h5>
                    <p className="card-text">
                    Fresh, fruity, and delightfully sweet.
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <img
                    src="/melon.jpeg"
                    className="card-img-top"
                    alt="Melon Bubble"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Melon Bubble Tea</h5>
                    <p className="card-text">
                      Reminiscent of summertime on beach.
                    </p>
                  </div>
                </div>
                <div className="col-4">
                  <img
                    src="blueberry.jpeg"
                    className="card-img-top"
                    alt="Blueberry"
                  />
                  <div className="card-body">
                    <h5 className="card-title">
                      Blueberry Bubble Tea
                    </h5>
                    <p className="card-text">
                      So delicious, some say the queen of the berries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#flavorsCarousel"
            data-bs-slide="prev"
            aria-label="Previous"
          >
            <span
              className="carousel-control-prev-icon bg-secondary rounded-circle"
              aria-hidden="true"
            ></span>
          </button>
          <button
            className="carousel-control-next "
            type="button"
            data-bs-target="#flavorsCarousel"
            data-bs-slide="next"
            aria-label="Next"
          >
            <span
              className="carousel-control-next-icon bg-secondary rounded-circle"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>Why Dreamy Drinks?</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4 mt-4">
            <div className="col">
              <div className="text-center">
                <i
                  className="bi bi-heart-fill"
                  style={{ fontSize: "2rem", color: "#FFC107" }}
                ></i>
                <h5>Made with Love</h5>
                <p>Every drop is carefully crafted with passion.</p>
              </div>
            </div>
            <div className="col">
              <div className="text-center">
                <i
                  className="bi bi-basket"
                  style={{ fontSize: "2rem", color: "#FFC107" }}
                ></i>
                <h5>Fresh Ingredients</h5>
                <p>We use only the finest natural ingredients.</p>
              </div>
            </div>
            <div className="col">
              <div className="text-center">
                <i
                  className="bi bi-egg"
                  style={{ fontSize: "2rem", color: "#FFC107" }}
                ></i>
                <h5>Handmade</h5>
                <p>Each flavor is made in small batches to ensure quality.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial bg-light py-5">
        <div className="container text-center">
          <h2>What Our Customers Say</h2>
          <div className="row mt-4">
            <div className="col-md-4">
              <blockquote className="blockquote">
                "Absolutely the creamiest bubble tea I've ever had. So many
                delicious flavors!"
              </blockquote>
              <p>- Batjargal.</p>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                "Brown sugar is so addictive! Can't get enough of it!"
              </blockquote>
              <p>- Misheel.</p>
            </div>
            <div className="col-md-4">
              <blockquote className="blockquote">
                "I love that they have sugar free option that taste just as good as
                regular bubble tea!"
              </blockquote>
              <p>- Zolbayar.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="text-white text-center py-5" style={{backgroundColor: '#EB6A39'}}>
        <div className="container">
          <h2>Join the Dreamy Drinks Family</h2>
          <p>
            Get the latest flavors, special discounts, and more! Sign up now.
          </p>
          <form
            onSubmit={() => {}}
            className="d-flex justify-content-center mt-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="form-control w-50"
              required
            />
            <button type="submit" className="btn btn-light ms-2">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer bg-dark text-white text-center py-4">
        <div className="container">
          <p>&copy; 2024 Dreamy Drinks | All Rights Reserved</p>
          <p>
            <a
              href="https://www.instagram.com/dreamydrinks_bubbletea/?hl=en"
              target="_blank"
              className="text-white me-3"
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/dreamydrinksbubbletea?locale=hi_IN"
              target="_blank"
              className="text-white me-3"
            >
              Facebook
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
