import { useTranslation } from "react-i18next";
import "./index.css";

export default function HomePage() {
  const { t } = useTranslation();

  return (
    <div>

      {/* HERO / VIDEO CAROUSEL */}
{/* HERO / VIDEO CAROUSEL */}
<div className="video-carousel">
  <video
    autoPlay
    loop
    muted
    playsInline
    preload="metadata"
    poster="https://mastatiktok.s3.us-east-1.amazonaws.com/video-poster.jpg"
  >
    <source
      src="https://mastatiktok.s3.us-east-1.amazonaws.com/video.mp4"
      type="video/mp4"
    />
  </video>

  <div className="carousel-text">
    <h1>{t("home.hero_title")}</h1>
    <p>{t("home.hero_subtitle")}</p>
  </div>
</div>





      {/* SERVICES SECTION */}
      <h2 className="section-title">{t("service.section_title")}</h2>

      <div className="services-container" id="service">

        <div className="service-card">
          <img src="/images/polish.jpg" alt="Polish" />
          <h3>{t("service.polish_title")}</h3>
          <p>{t("service.polish_desc")}</p>
        </div>


        <div className="service-card">
          <img src="/images/protection.jpg" alt="Protection" />
          <h3>{t("service.protection_title")}</h3>
          <p>{t("service.protection_desc")}</p>
        </div>

        <div className="service-card">
          <img src="/images/wrap.jpg" alt="Wrap" />
          <h3>{t("service.wrap_title")}</h3>
          <p>{t("service.wrap_desc")}</p>
        </div>

      </div>



      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="stats-overlay"></div>

        <div className="stats-container">
          <div className="stat-card">
            <span className="stat-number">{t("stats.brand_number")}</span>
            <span className="stat-label">{t("stats.brand_label")}</span>
          </div>

          <div className="stat-card">
            <span className="stat-number">{t("stats.locations_number")}</span>
            <span className="stat-label">{t("stats.locations_label")}</span>
          </div>

          <div className="stat-card">
            <span className="stat-number">{t("stats.vehicles_number")}</span>
            <span className="stat-label">{t("stats.vehicles_label")}</span>
          </div>

          <div className="stat-card">
            <span className="stat-number">{t("stats.years_number")}</span>
            <span className="stat-label">{t("stats.years_label")}</span>
          </div>
        </div>
      </section>



      {/* WHY CHOOSE US */}
      <section className="why-section">
        <h2>{t("why.title")}</h2>

        <div className="why-grid">
          <div className="why-card">
            <i className="icon fas fa-shield-alt"></i>
            <h3>{t("why.protection_title")}</h3>
            <p>{t("why.protection_desc")}</p>
          </div>

          <div className="why-card">
            <i className="icon fas fa-car"></i>
            <h3>{t("why.finish_title")}</h3>
            <p>{t("why.finish_desc")}</p>
          </div>

          <div className="why-card">
            <i className="icon fas fa-tools"></i>
            <h3>{t("why.tech_title")}</h3>
            <p>{t("why.tech_desc")}</p>
          </div>
        </div>
      </section>



      {/* COMMITMENT SECTION */}
      <section className="commit-section">
        <div className="commit-overlay"></div>

        <div className="commit-content">
          <h2>{t("commit.title")}</h2>
          <p>{t("commit.description")}</p>

          <div className="commit-points">
            <div className="point">{t("commit.point1")}</div>
            <div className="point">{t("commit.point2")}</div>
            <div className="point">{t("commit.point3")}</div>
          </div>
        </div>
      </section>



      {/* SOCIAL SECTION */}
      <section className="social-section">
        <h2>{t("social.title")}</h2>
        <p>{t("social.subtitle")}</p>

        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
          <a href="#"><i className="fab fa-youtube"></i></a>
        </div>
      </section>



      {/* CTA */}
      <section className="cta-section">
        <h2>{t("cta.title")}</h2>
        <p>{t("cta.subtitle")}</p>
        <a className="cta-btn" href="#contact">{t("cta.button")}</a>
      </section>



      {/* FOOTER */}
      <footer>
        © 2025 Rodeo Drive — {t("footer.rights")}
      </footer>

    </div>
  );
}
