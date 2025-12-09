
import "./about.css";

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* Hero Section (Parallax) */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>About Rodeo Drive Car Care</h1>
          <p>Premium Car Detailing & Protection Services in Qatar</p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="about-vision">
        <div className="vision-container">
          <div className="vision-card">
            <h2>Our Vision</h2>
            <p>
              To be Qatar's most trusted and innovative car care brand, delivering unmatched quality, protection, and customer experience.
            </p>
          </div>
          <div className="vision-card">
            <h2>Our Mission</h2>
            <p>
              To provide premium detailing and protection services using advanced technology and high‑grade materials, ensuring every vehicle shines like new and stays protected for years.
            </p>
          </div>
        </div>
      </section>

      {/* History / Story */}
      <section className="about-history">
        <h2>Our Story</h2>
        <p>
          Founded with passion for perfection, Rodeo Drive Car Care has grown into a trusted name for car enthusiasts and premium car owners. From humble beginnings, we now serve thousands of vehicles with precision, innovation, and unmatched quality.
        </p>
        <div className="history-image">
          <img
            src="https://c.pxhere.com/images/7b/45/car_mercedes_slk_auto_transport_design_transportation_luxury-1382702.jpg!d"
            alt="Our Story"
            loading="lazy"
          />
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values">
        <h2>Our Core Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <i className="icon fas fa-shield-alt"></i>
            <h3>Integrity</h3>
            <p>We operate with transparency and honesty in every service.</p>
          </div>
          <div className="value-card">
            <i className="icon fas fa-star"></i>
            <h3>Excellence</h3>
            <p>Delivering perfection in every detail, every time.</p>
          </div>
          <div className="value-card">
            <i className="icon fas fa-users"></i>
            <h3>Customer Focus</h3>
            <p>Our clients are our top priority; satisfaction guaranteed.</p>
          </div>
          <div className="value-card">
            <i className="icon fas fa-cogs"></i>
            <h3>Innovation</h3>
            <p>Utilizing cutting‑edge technology for advanced car protection.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="about-team">
        <h2>Meet Our Experts</h2>
        <p>Our certified technicians are trained to deliver professional results with precision and care.</p>
        <div className="team-grid">
          <div className="team-member">
            <img
              src="https://c.pxhere.com/images/f1/e0/c061e07d45b998e799e7dd4fcc8b-1700726.jpg!d"
              alt="Team member 1"
              loading="lazy"
            />
            <h3>John Doe</h3>
            <p>Head of Detailing & Protection</p>
          </div>
          <div className="team-member">
            <img
              src="https://c.pxhere.com/images/f2/bb/c984ac7373f55071e32a7b6d7fdf-1700100.jpg!d"
              alt="Team member 2"
              loading="lazy"
            />
            <h3>Jane Smith</h3>
            <p>Lead Technician</p>
          </div>
          <div className="team-member">
            <img
              src="https://c.pxhere.com/photos/c0/3c/car_mercedes_slk_auto_transport_design_transportation_luxury-1382719.jpg!d"
              alt="Team member 3"
              loading="lazy"
            />
            <h3>Ali Ahmed</h3>
            <p>Ceramic & Coating Specialist</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Experience Premium Car Care Today</h2>
        <p>Join hundreds of satisfied clients who trust Rodeo Drive for protection and shine that lasts.</p>
        <a className="cta-btn" href="/contact">
          Book an Appointment
        </a>
      </section>

      <footer>© 2025 Rodeo Drive — All Rights Reserved</footer>
    </div>
  );
}
