import {
  FaShip,
  FaPlane,
  FaTruck,
  FaWarehouse,
  FaFileInvoice,
  FaProjectDiagram,
} from "react-icons/fa";
import {
  Radar,
  Globe2,
  ShieldCheck,
  Headset,
  Factory,
  ShoppingBag,
  Car,
  HeartPulse,
  HardHat,
} from "lucide-react";

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Industries", to: "/industries" },
  { label: "About", to: "/about" },
  { label: "Pages", to: "/pages" },
  { label: "News", to: "/news" },
];

export const heroStats = [
  { value: "120+", label: "Global Offices" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "25K+", label: "Happy Clients" },
  { value: "150+", label: "Countries Covered" },
];

export const services = [
  {
    icon: FaShip,
    title: "Sea Freight",
    desc: "Reliable ocean freight for global trade.",
  },
  {
    icon: FaPlane,
    title: "Air Freight",
    desc: "Fast and secure air cargo solutions.",
  },
  {
    icon: FaTruck,
    title: "Road Transport",
    desc: "Efficient road freight across borders.",
  },
  {
    icon: FaWarehouse,
    title: "Warehousing",
    desc: "Safe and smart storage solutions.",
  },
  {
    icon: FaFileInvoice,
    title: "Customs Clearance",
    desc: "Smooth and compliant customs process.",
  },
  {
    icon: FaProjectDiagram,
    title: "Supply Chain",
    desc: "Optimized supply chain management.",
  },
];

export const whyChooseUs = [
  {
    icon: Radar,
    title: "Real-Time Tracking",
    desc: "Monitor your shipment 24/7 with live updates.",
  },
  {
    icon: Globe2,
    title: "Global Network",
    desc: "Strong network across 150+ countries.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Delivery",
    desc: "We ensure your cargo is safe and secure.",
  },
  {
    icon: Headset,
    title: "Expert Support",
    desc: "Our team is here to support you anytime.",
  },
];

export const industries = [
  { icon: Factory, title: "Manufacturing" },
  { icon: ShoppingBag, title: "Retail & E-commerce" },
  { icon: Car, title: "Automotive" },
  { icon: HeartPulse, title: "Healthcare" },
  { icon: HardHat, title: "Construction" },
];

export const processSteps = [
  {
    number: "01",
    title: "Request a Quote",
    desc: "Share your requirements with us.",
  },
  {
    number: "02",
    title: "We Plan",
    desc: "Our team creates the best logistics plan.",
  },
  {
    number: "03",
    title: "We Deliver",
    desc: "Your cargo is delivered safely and on time.",
  },
  {
    number: "04",
    title: "You Relax",
    desc: "We handle the rest, so you don't have to.",
  },
];

export const testimonials = [
  {
    quote:
      "Anti has been a game-changer for our supply chain. Their service is fast, reliable, and highly professional.",
    name: "David Johnson",
    role: "Operations Manager",
  },
  {
    quote:
      "The real-time tracking gives us total peace of mind. Deliveries always arrive exactly when promised.",
    name: "Sarah Mitchell",
    role: "Supply Chain Lead",
  },
  {
    quote:
      "Switching to Anti Logistics cut our shipping costs and delays dramatically. Couldn't ask for a better partner.",
    name: "Michael Chen",
    role: "Procurement Director",
  },
];

export const newsItems = [
  {
    day: "20",
    month: "May",
    title: "The Future of Global Logistics",
  },
  {
    day: "18",
    month: "May",
    title: "5 Ways to Optimize Your Supply Chain",
  },
  {
    day: "16",
    month: "May",
    title: "Sustainable Logistics for a Better Tomorrow",
  },
];

export const partners = [
  "MAERSK",
  "DHL",
  "FedEx",
  "MSC",
  "Kuehne+Nagel",
  "UPS",
];

export const footerLinks = {
  "Quick Links": ["About Us", "Our Services", "Industries", "News & Blog", "Careers"],
  Services: ["Sea Freight", "Air Freight", "Road Transport", "Warehousing", "Supply Chain"],
  Support: ["FAQs", "Track Shipment", "Terms & Conditions", "Privacy Policy", "Help Center"],
};
