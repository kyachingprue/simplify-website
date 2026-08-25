import { motion } from "motion/react";
import { industries } from "../data/content";
import { fadeUp, stagger, viewportOnce } from "../utils/motionVariants";

const IMAGES = {
  Manufacturing:
    'https://i.ibb.co.com/3mZDcWfJ/thisisengineering-Wj-OWaz-UPAss-unsplash.jpg',
  'Retail & E-commerce':
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
  Automotive:
    'https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=600&q=80',
  Healthcare:
    'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80',
  Construction:
    'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=600&q=80'
}

export default function Industries() {
  return (
    <section className="section-pad bg-white">
      <div className="container-px">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mb-12"
        >
          <span className="eyebrow">Industries We Serve</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-950 max-w-lg leading-tight">
            Tailored Logistics for Every Industry
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5"
        >
          {industries.map((ind) => {
            const Icon = ind.icon;
            return (
              <motion.div
                key={ind.title}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="relative rounded-2xl overflow-hidden aspect-[3/4] group cursor-pointer"
              >
                <img
                  src={IMAGES[ind.title]}
                  alt={ind.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col items-start gap-2">
                  <span className="w-9 h-9 rounded-lg bg-brand-orange/90 flex items-center justify-center">
                    <Icon size={16} className="text-white" />
                  </span>
                  <span className="text-white font-display font-semibold text-sm leading-tight">
                    {ind.title}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
