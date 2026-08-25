import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { newsItems } from "../data/content";
import { fadeUp, stagger, viewportOnce } from "../utils/motionVariants";

const IMAGES = [
  "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=600&q=80",
];

export default function Insights() {
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
            <span className="eyebrow">Latest News</span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-950 max-w-lg leading-tight">
              Insights &amp; Updates
            </h2>
            <p className="text-navy-400 max-w-sm mt-3">
              Stay informed with the latest trends, tips, and updates from
              the logistics world.
            </p>
          </motion.div>
          <motion.a
            variants={fadeUp}
            custom={0.15}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            href="#news"
            className="btn-primary shrink-0"
          >
            View All News <ArrowRight size={16} />
          </motion.a>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {newsItems.map((item, i) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="group rounded-2xl overflow-hidden border border-navy-100 hover:shadow-cardHover transition-shadow"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={IMAGES[i]}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-white rounded-lg px-3 py-1.5 text-center leading-none shadow">
                  <span className="block font-display font-extrabold text-navy-950 text-base">
                    {item.day}
                  </span>
                  <span className="block text-[10px] text-navy-400 uppercase">
                    {item.month}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-navy-950 text-lg mb-4 leading-snug">
                  {item.title}
                </h3>
                <a
                  href="#news"
                  className="inline-flex items-center gap-1.5 text-brand-orange font-semibold text-sm group-hover:gap-2.5 transition-all"
                >
                  Read More <ArrowUpRight size={15} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
