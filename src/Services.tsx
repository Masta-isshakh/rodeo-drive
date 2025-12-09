
import "./services.css";


// Liste des services avec images de haute qualité
const services = [
  { title: "Polish", image: "https://images.unsplash.com/photo-1612620219325-2b0a3d76f028?auto=format&fit=crop&w=800&q=80" },
  { title: "Ceramic Coating", image: "https://images.unsplash.com/photo-1616576509535-b7e8b4e6f2a4?auto=format&fit=crop&w=800&q=80" },
  { title: "Protection", image: "https://images.unsplash.com/photo-1606495706744-828d3f17bff6?auto=format&fit=crop&w=800&q=80" },
  { title: "Color Protection", image: "https://images.unsplash.com/photo-1590524231556-ec6de28b1742?auto=format&fit=crop&w=800&q=80" },
  { title: "Rubberized Paint", image: "https://images.unsplash.com/photo-1616628180753-f5c5c0a1b50a?auto=format&fit=crop&w=800&q=80" },
  { title: "Smart Repair", image: "https://images.unsplash.com/photo-1622495892131-7e7022a5b7a1?auto=format&fit=crop&w=800&q=80" },
  { title: "Paintless Dent Repair", image: "https://images.unsplash.com/photo-1622495858324-49e8dcda8361?auto=format&fit=crop&w=800&q=80" },
  { title: "Paintless Dent Adjustment", image: "https://images.unsplash.com/photo-1600210494586-01680edca63c?auto=format&fit=crop&w=800&q=80" },
  { title: "Protective Wrap Color Change", image: "https://images.unsplash.com/photo-1616627180231-4c2c257f0d2d?auto=format&fit=crop&w=800&q=80" },
  { title: "Rubberized Paint Color Change", image: "https://images.unsplash.com/photo-1616627509613-6e29012c83a5?auto=format&fit=crop&w=800&q=80" },
  { title: "Interior Polishing", image: "https://images.unsplash.com/photo-1616627304354-5bcbb26f9e9a?auto=format&fit=crop&w=800&q=80" },
  { title: "Exterior Polishing", image: "https://images.unsplash.com/photo-1616627389322-98d9e7fffe1d?auto=format&fit=crop&w=800&q=80" },
  { title: "Nano Ceramic Coating for Rims", image: "https://images.unsplash.com/photo-1616627140977-3c012bde3f5b?auto=format&fit=crop&w=800&q=80" },
  { title: "Nano Ceramic Coating for Body", image: "https://images.unsplash.com/photo-1616627250215-3ffedbc7de09?auto=format&fit=crop&w=800&q=80" },
  { title: "Nano Leather Protection", image: "https://images.unsplash.com/photo-1616627120035-8eb3f1a4f5de?auto=format&fit=crop&w=800&q=80" },
  { title: "Front Windshield Protection", image: "https://images.unsplash.com/photo-1616627160541-b22a3e2fa0b0?auto=format&fit=crop&w=800&q=80" },
  { title: "Black Edition Vehicle Conversion", image: "https://images.unsplash.com/photo-1616627100035-7fa0a3e6a4e8?auto=format&fit=crop&w=800&q=80" },
  { title: "Defender Customization", image: "https://images.unsplash.com/photo-1616627200031-3b0f0f9a5f1c?auto=format&fit=crop&w=800&q=80" },
  { title: "Car Accessories Painting", image: "https://images.unsplash.com/photo-1616627280035-4c2c3e7a5f3a?auto=format&fit=crop&w=800&q=80" },
];

export default function Services() {
  return (
    <div>
      {/* New Hero Section instead of header */}
      <section
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1616627304354-5bcbb26f9e9a?auto=format&fit=crop&w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "350px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          textShadow: "0 0 15px rgba(0,0,0,0.7)",
        }}
      >
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>Our Premium Services</h1>
      </section>

      {/* Services Grid */}
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Experience Premium Car Care Today</h2>
        <p>Book your appointment now and protect your vehicle like never before.</p>
        <a className="cta-btn" href="/Contact">Book an Appointment</a>
      </section>
    </div>
  );
}
