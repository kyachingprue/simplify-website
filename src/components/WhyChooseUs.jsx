import { motion } from 'motion/react'
import { fadeUp, stagger, viewportOnce } from '../utils/motionVariants'
import { whyChooseUs } from '../data/content'
import backgroundVideo from "../assets/videos/17469001-uhd_3840_2160_30fps.mp4"


export default function WhyChooseUs() {
  return (
    <section className="section-pad bg-navy-50/60">
      <div className="container-px grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="eyebrow">Why Choose Us</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-950 mb-4 leading-tight">
            Your Trusted Logistics{' '}
            <span className="text-brand-orange">Partner</span>
          </h2>
          <p className="text-navy-400 max-w-md mb-10">
            We focus on delivering value, reliability, and excellence in every
            shipment.
          </p>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid sm:grid-cols-2 gap-5"
          >
            {whyChooseUs.map(item => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-card"
                >
                  <span className="w-11 h-11 shrink-0 rounded-lg bg-navy-950 flex items-center justify-center">
                    <Icon className="text-brand-orange" size={19} />
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-navy-950 text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-navy-400 text-xs leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/5] max-w-md mx-auto shadow-2xl">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-6 -left-2 sm:left-4 bg-brand-orange text-white rounded-full w-28 h-28 flex flex-col items-center justify-center text-center shadow-xl"
          >
            <span className="font-display font-extrabold text-2xl leading-none">
              25+
            </span>
            <span className="text-[10px] leading-tight mt-1 px-2">
              Years of Experience
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
