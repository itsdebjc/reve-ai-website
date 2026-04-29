import meiraLogo from "@/assets/meira-logo.png";
import organikaLogo from "@/assets/organika-logo.png";
import intuitionLogo from "@/assets/intuition-logo.png";
import maFolieLogo from "@/assets/ma-folie-logo.png";
import lkaLogo from "@/assets/lka-logo.png";

const clients = [
  { name: "Meira", logo: meiraLogo },
  { name: "Organika", logo: organikaLogo },
  { name: "Intuition", logo: intuitionLogo },
  { name: "Ma Folie", logo: maFolieLogo },
  { name: "LKA", logo: lkaLogo },
];

const TrustedLogos = () => {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <div className="flex items-center justify-center gap-6 md:gap-10 py-8 flex-wrap">
        {clients.map((client) => (
          <img
            key={client.name}
            src={client.logo}
            alt={client.name}
            className={`h-12 md:h-14 w-auto object-contain hover:opacity-100 transition-opacity ${
              client.name === "Meira" || client.name === "Ma Folie"
                ? "opacity-100 invert brightness-200"
                : "grayscale opacity-80"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedLogos;
