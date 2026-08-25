import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../data/content";
import { fadeUp, viewportOnce } from "../utils/motionVariants";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="section-pad bg-navy-950 relative overflow-hidden">
      <div className="container-px grid lg:grid-cols-2 gap-12 items-center relative">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="eyebrow">Testimonials</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4 leading-tight">
            What Our Clients Say About Us
          </h2>
          <p className="text-white/60 max-w-md">
            Our clients trust us for our commitment, reliability, and
            excellence.
          </p>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.15}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="bg-navy-800 rounded-2xl p-8 sm:p-10 relative"
        >
          <span className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center absolute -top-6 left-8 shadow-lg">
            <Quote size={18} className="text-white" fill="white" />
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-white/85 text-base sm:text-lg leading-relaxed mb-8 mt-3">
                "{active.quote}"
              </p>
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-full bg-brand-orange/20 border border-brand-orange/40 flex items-center justify-center font-display font-bold text-brand-orange">
                  {active.name.charAt(0)}
                </span>
                <div>
                  <p className="text-white font-semibold text-sm">{active.name}</p>
                  <p className="text-white/50 text-xs">{active.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={next}
              className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-orange hover:border-brand-orange transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
