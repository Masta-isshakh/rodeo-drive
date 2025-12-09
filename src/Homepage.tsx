

import "./index.css";

export default function HomePage() {

  return (
    <div>


      {/* Video Carousel */}
      <div className="video-carousel">
        <video autoPlay loop muted>
          <source src="https://mastatiktok.s3.us-east-1.amazonaws.com/video.mp4" type="video/mp4" />
        </video>

        {/* Text over video */}
        <div className="carousel-text">
          <h1>Experience the Ultimate in Car Care</h1>
          <p>Premium Detailing & Protection Services</p>
        </div>
      </div>

      {/* Services Section */}
      <h2 className="section-title">Our Premium Services</h2>
      <div className="services-container" id="services">
        <div className="service-card">
          <img src="/images/polish.jpg" alt="Polish" />
          <h3>Professional Polish</h3>
          <p>High-quality polishing for long-lasting shine.</p>
        </div>

        <div className="service-card">
          <img src="/images/ceramic.jpg" alt="Ceramic" />
          <h3>Ceramic Coating</h3>
          <p>Premium protection with advanced ceramic technology.</p>
        </div>

        <div className="service-card">
          <img src="/images/protection.jpg" alt="Protection" />
          <h3>Body Protection</h3>
          <p>Top-tier protection for body paint and finishes.</p>
        </div>

        <div className="service-card">
          <img src="/images/protection.jpg" alt="Protection" />
          <h3>Body Protection</h3>
          <p>Top-tier protection for body paint and finishes.</p>
        </div>

        <div className="service-card">
          <img src="/images/protection.jpg" alt="Protection" />
          <h3>Body Protection</h3>
          <p>Top-tier protection for body paint and finishes.</p>
        </div>

        <div className="service-card">
          <img src="/images/protection.jpg" alt="Protection" />
          <h3>Body Protection</h3>
          <p>Top-tier protection for body paint and finishes.</p>
        </div>

        <div className="service-card">
          <img src="/images/protection.jpg" alt="Protection" />
          <h3>Body Protection</h3>
          <p>Top-tier protection for body paint and finishes.</p>
        </div>

        <div className="service-card">
          <img src="/images/protection.jpg" alt="Protection" />
          <h3>Body Protection</h3>
          <p>Top-tier protection for body paint and finishes.</p>
        </div>

        <div className="service-card">
          <img src="/images/wrap.jpg" alt="Wrap" />
          <h3>Color Wrap</h3>
          <p>Custom protective wrap with premium color options.</p>
        </div>
      </div>

      {/* Facts / Stats Section */}
      <section className="stats-section">
        <div className="stats-overlay"></div>

        <div className="stats-container">
          <div className="stat-card">
            <span className="stat-number">#1</span>
            <span className="stat-label">Brand in Car Care</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">400+</span>
            <span className="stat-label">Worldwide Locations</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">25M+</span>
            <span className="stat-label">Vehicles Protected</span>
          </div>
          <div className="stat-card">
            <span className="stat-number">65+</span>
            <span className="stat-label">Years Experience</span>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="why-section">
        <h2>Why Choose Rodeo Drive?</h2>

        <div className="why-grid">
          <div className="why-card">
            <i className="icon fas fa-shield-alt"></i>
            <h3>Superior Protection</h3>
            <p>
              Top-grade materials and advanced coating technologies engineered
              for Qatar’s climate.
            </p>
          </div>

          <div className="why-card">
            <i className="icon fas fa-car"></i>
            <h3>Showroom Finish</h3>
            <p>
              A premium detailing approach that restores clarity, depth, and
              long-lasting brilliance.
            </p>
          </div>

          <div className="why-card">
            <i className="icon fas fa-tools"></i>
            <h3>Certified Technicians</h3>
            <p>
              Every service is performed by trained experts ensuring perfect
              finish and durability.
            </p>
          </div>
        </div>
      </section>

      {/* COMMITMENT SECTION */}
      <section className="commit-section">
        <div className="commit-overlay"></div>

        <div className="commit-content">
          <h2>Committed to Excellence</h2>
          <p>
            At Rodeo Drive, we combine precision, innovation, and passion to
            deliver unmatched car care quality. Every vehicle receives
            dealership-level craftsmanship with premium materials designed to
            withstand intense heat, dust, and daily wear.
          </p>

          <div className="commit-points">
            <div className="point">✔ Premium Materials</div>
            <div className="point">✔ Long-Term Durability</div>
            <div className="point">✔ 100% Satisfaction Guarantee</div>
          </div>
        </div>
      </section>

      {/* SOCIAL MEDIA SECTION */}
      <section className="social-section">
        <h2>Connect with Us</h2>
        <p>
          Follow us on social media for latest updates, promotions, and premium
          car care tips.
        </p>

        <div className="social-icons">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to Transform Your Vehicle?</h2>
        <p>Contact us now and experience Qatar’s premium car-care standards.</p>
        <a className="cta-btn" href="/Contact">
          Book an Appointment
        </a>
      </section>

      {/* Footer */}
      <footer>© 2025 Rodeo Drive — All Rights Reserved</footer>
    </div>
  );
}
