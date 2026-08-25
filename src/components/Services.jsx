import { motion } from "motion/react";
import { services } from "../data/content";
import { fadeUp, stagger, viewportOnce } from "../utils/motionVariants";

export default function Services() {
  return (
    <section className="section-pad bg-white">
      <div className="container-px">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <span className="eyebrow">Our Services</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-950 max-w-lg leading-tight">
              End-to-End Logistics{" "}
              <span className="text-brand-orange">Solutions</span>
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            custom={0.15}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="text-navy-400 max-w-sm"
          >
            From transportation to warehousing, we provide complete logistics
            solutions tailored to your business.
          </motion.p>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="group border border-navy-100 rounded-2xl p-7 transition-all duration-300 hover:border-transparent hover:shadow-cardHover hover:bg-navy-950"
              >
                <div className="w-12 h-12 rounded-xl bg-navy-50 group-hover:bg-brand-orange flex items-center justify-center mb-5 transition-colors">
                  <Icon className="text-navy-800 group-hover:text-white transition-colors" size={20} />
                </div>
                <h3 className="font-display font-bold text-lg text-navy-950 group-hover:text-white mb-1.5 transition-colors">
                  {s.title}
                </h3>
                <p className="text-navy-400 group-hover:text-white/70 text-sm transition-colors">
                  {s.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
