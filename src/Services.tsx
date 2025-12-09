
import "./services.css";

interface Service {
  title: string;
  description: string;
  imageUrl: string;
}

const services: Service[] = [
  { title: "Professional Polish", description: "High‑quality polishing for long‑lasting shine.", imageUrl: "https://c.pxhere.com/images/3b/9b/car_polished_sports_vehicle_auto-1712320.jpg!d" },
  { title: "Ceramic Coating", description: "Premium protection with advanced ceramic technology.", imageUrl: "https://c.pxhere.com/images/78/fa/car_mercedes_slk_auto_transport_design_transportation_luxury-1382707.jpg!d" },
  { title: "Body Protection", description: "Top‑tier protection for body paint and finishes.", imageUrl: "https://c.pxhere.com/images/16/4f/car_mercedes_slk_auto_transport_design_transportation_luxury-1382702.jpg!d" },
  { title: "Color Protection", description: "Keep your car’s color vibrant and protected for years.", imageUrl: "https://c.pxhere.com/images/69/9b/car_mercedes_slk_auto_transport_design_transportation_luxury-1382719.jpg!d" },
  { title: "Rubberized Paint", description: "Durable rubberized paint for extra body protection.", imageUrl: "https://c.pxhere.com/images/9a/b7/car_mercedes_slk_auto_transport_design_transportation_luxury-1382725.jpg!d" },
  { title: "Smart Repair", description: "Quick and precise repairs for minor damages and imperfections.", imageUrl: "https://c.pxhere.com/images/f2/bb/c984ac7373f55071e32a7b6d7fdf-1700100.jpg!d" },
  { title: "Paintless Dent Repair", description: "Fix dents without repainting — keeps original paint intact.", imageUrl: "https://c.pxhere.com/images/78/fa/car_mercedes_slk_auto_transport_design_transportation_luxury-1382707.jpg!d" },
  { title: "Paintless Dent Adjustment", description: "Professional dent adjustment without affecting paint quality.", imageUrl: "https://c.pxhere.com/images/16/4f/car_mercedes_slk_auto_transport_design_transportation_luxury-1382702.jpg!d" },
  { title: "Protective Wrap Color Change", description: "Change your car’s color with a protective wrap — stylish & safe.", imageUrl: "https://c.pxhere.com/images/3b/9b/car_polished_sports_vehicle_auto-1712320.jpg!d" },
  { title: "Rubberized Paint Color Change", description: "Custom paint‑color change using durable rubberized coating.", imageUrl: "https://c.pxhere.com/images/69/9b/car_mercedes_slk_auto_transport_design_transportation_luxury-1382719.jpg!d" },
  { title: "Interior Polishing", description: "Detailed polishing of interiors — leather, dashboard, trims.", imageUrl: "https://c.pxhere.com/images/f2/bb/c984ac7373f55071e32a7b6d7fdf-1700100.jpg!d" },
  { title: "Exterior Polishing", description: "Professional exterior polishing for a showroom‑finish shine.", imageUrl: "https://c.pxhere.com/images/16/4f/car_mercedes_slk_auto_transport_design_transportation_luxury-1382702.jpg!d" },
  { title: "Nano Ceramic Coating for Rims", description: "Advanced nano‑ceramic coating to protect rims from dust & wear.", imageUrl: "https://c.pxhere.com/images/78/fa/car_mercedes_slk_auto_transport_design_transportation_luxury-1382707.jpg!d" },
  { title: "Nano Ceramic Coating for Body", description: "Full‑body nano‑ceramic coating for long‑lasting protection and shine.", imageUrl: "https://c.pxhere.com/images/69/9b/car_mercedes_slk_auto_transport_design_transportation_luxury-1382719.jpg!d" },
  { title: "Nano Leather Protection", description: "Protect interior leather from stains, wear and UV damage.", imageUrl: "https://c.pxhere.com/images/3b/9b/car_polished_sports_vehicle_auto-1712320.jpg!d" },
  { title: "Front Windshield Protection", description: "Nano coating for windshield — scratch, UV and weather protection.", imageUrl: "https://c.pxhere.com/images/16/4f/car_mercedes_slk_auto_transport_design_transportation_luxury-1382702.jpg!d" },
  { title: "Black Edition Vehicle Conversion", description: "Transform your vehicle into a premium Black Edition — look & feel.", imageUrl: "https://c.pxhere.com/images/78/fa/car_mercedes_slk_auto_transport_design_transportation_luxury-1382707.jpg!d" },
  { title: "Defender Customization (As Requested)", description: "Customized modifications for Defender vehicles per request.", imageUrl: "https://c.pxhere.com/images/69/9b/car_mercedes_slk_auto_transport_design_transportation_luxury-1382719.jpg!d" },
  { title: "Car Accessories Painting", description: "Professional painting of car accessories and trims.", imageUrl: "https://c.pxhere.com/images/f2/bb/c984ac7373f55071e32a7b6d7fdf-1700100.jpg!d" },
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      <header className="services-hero">
        <h1>Our Premium Car Services</h1>
        <p>Delivering Excellence, Protection, and Shine for Every Vehicle</p>
      </header>

      <section className="services-grid">
        {services.map((service, idx) => (
          <div className="service-card" key={idx}>
            <img src={service.imageUrl} alt={service.title} loading="lazy" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <section className="services-cta">
        <h2>Book Your Premium Service Today</h2>
        <p>Contact us now to schedule your appointment or consultation.</p>
        <a href="/contact" className="cta-btn">Book an Appointment</a>
      </section>

      <footer>© 2025 Rodeo Drive — All Rights Reserved</footer>
    </div>
  );
}
