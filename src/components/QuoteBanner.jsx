import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { fadeUp, viewportOnce } from "../utils/motionVariants";

export default function QuoteBanner() {
  return (
    <div className="container-px pb-16 sm:pb-20">
      <motion.div
        id="quote"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="bg-navy-950 rounded-2xl p-7 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left"
      >
        <div>
          <h3 className="font-display font-bold text-white text-xl sm:text-2xl mb-1">
            Need a custom logistics solution?
          </h3>
          <p className="text-white/60 text-sm">
            We design logistics solutions that fit your business.
          </p>
        </div>
        <a href="#contact" className="btn-primary shrink-0">
          Request a Quote <ArrowRight size={16} />
        </a>
      </motion.div>
    </div>
  );
}
