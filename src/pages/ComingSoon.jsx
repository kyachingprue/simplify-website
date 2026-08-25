import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ComingSoon({ title }) {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-navy-50/60 pt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center container-px"
      >
        <span className="eyebrow justify-center">{title}</span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-950 mb-4">
          This page is coming soon
        </h1>
        <p className="text-navy-400 mb-8 max-w-md mx-auto">
          We're putting the finishing touches on this page. In the meantime,
          head back to the homepage.
        </p>
        <Link to="/" className="btn-primary inline-flex !bg-navy-950 hover:!bg-navy-800">
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </motion.div>
    </section>
  );
}
