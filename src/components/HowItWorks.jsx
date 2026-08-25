import { motion } from "motion/react";
import { processSteps } from "../data/content";
import { fadeUp, stagger, viewportOnce } from "../utils/motionVariants";

export default function HowItWorks() {
  return (
    <section className="section-pad bg-white overflow-hidden">
      <div className="container-px">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-16"
        >
          <span className="eyebrow">How It Works</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-950 max-w-lg leading-tight">
            Simple Steps, Smooth Delivery
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6"
        >
          {/* connecting line, desktop only */}
          <div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-navy-100" />

          {processSteps.map((step, i) => (
            <motion.div
              key={step.number}
              variants={fadeUp}
              className={`relative flex flex-col items-start ${i % 2 === 1 ? "lg:mt-10" : ""}`}
            >
              <span className="font-display font-extrabold text-3xl text-brand-orange mb-4 bg-white relative z-10">
                {step.number}
              </span>
              <h4 className="font-display font-bold text-navy-950 mb-1.5">
                {step.title}
              </h4>
              <p className="text-navy-400 text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
