import { motion } from "motion/react";
import { partners } from "../data/content";
import { fadeUp, stagger, viewportOnce } from "../utils/motionVariants";

export default function Partners() {
  return (
    <section className="section-pad bg-white">
      <div className="container-px">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-10"
        >
          <span className="eyebrow">Our Global Partners</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-950 max-w-lg leading-tight">
            Trusted by Leading Companies Worldwide
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-3 sm:grid-cols-6 gap-4"
        >
          {partners.map((p) => (
            <motion.div
              key={p}
              variants={fadeUp}
              className="h-20 rounded-xl border border-navy-100 flex items-center justify-center px-4 grayscale hover:grayscale-0 transition-all hover:border-brand-orange/40"
            >
              <span className="font-display font-extrabold text-navy-700 text-sm sm:text-base tracking-tight">
                {p}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
