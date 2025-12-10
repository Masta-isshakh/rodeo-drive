import "./services.css";
import { useTranslation } from "react-i18next";

// Liste des services avec images de haute qualité
const serviceImages: Record<string, string> = {
  polish: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=60",
  ceramic_coating: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?auto=format&fit=crop&w=1200&q=60",
  protection: "https://images.unsplash.com/photo-1549921296-3f9a3f1f8a9f?auto=format&fit=crop&w=1200&q=60",
  color_protection: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=60",
  rubberized_paint: "https://images.unsplash.com/photo-1542365887-1b8b6a7f8b5b?auto=format&fit=crop&w=1200&q=60",
  smart_repair: "https://images.unsplash.com/photo-1549921294-df7c2b93d7f0?auto=format&fit=crop&w=1200&q=60",
  paintless_dent_repair: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=60",
  protective_wrap: "https://images.unsplash.com/photo-1518655048521-f130df041f66?auto=format&fit=crop&w=1200&q=60",
  nano_rims: "https://images.unsplash.com/photo-1517863819182-1f4e0f1a8f4d?auto=format&fit=crop&w=1200&q=60",
  nano_body: "https://images.unsplash.com/photo-1529400971008-f566de0e6dfc?auto=format&fit=crop&w=1200&q=60",
  nano_leather: "https://images.unsplash.com/photo-1520975917670-95f3f7f6d66c?auto=format&fit=crop&w=1200&q=60",
  front_windshield: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d?auto=format&fit=crop&w=1200&q=60",
  black_edition: "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759?auto=format&fit=crop&w=1200&q=60",
  defender_custom: "https://images.unsplash.com/photo-1519669556871-1e52aede2b61?auto=format&fit=crop&w=1200&q=60",
  car_accessories_painting: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=60"
};

export default function ServicesPage() {
  const { t } = useTranslation();

  // Liste des services (la source principale)
  const serviceKeys = [
    "polish","ceramic_coating","protection","color_protection","rubberized_paint","smart_repair",
    "paintless_dent_repair","paintless_dent_adjustment","protective_wrap","rubberized_paint_color_change",
    "interior_polishing","exterior_polishing","nano_rims","nano_body","nano_leather",
    "front_windshield","black_edition","defender_custom","car_accessories_painting"
  ];

  return (
    <div className="services-page">
      <h1>{t("services.page_title")}</h1>
      <p>{t("services.intro")}</p>

      <div className="services-grid">
        {serviceKeys.map((k) => (
          <div className="service-card" key={k}>
            <img 
              src={serviceImages[k] || serviceImages.polish} 
              alt={t(`services.list.${k}`)} 
            />
            <h3>{t(`services.list.${k}`)}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
