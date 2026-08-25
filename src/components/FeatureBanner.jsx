import { motion } from 'motion/react'
import { Play, ArrowRight } from 'lucide-react'
import { fadeUp, viewportOnce } from '../utils/motionVariants'
import backgroundVideo from "../assets/videos/12257053_3840_2160_60fps.mp4"


export default function FeatureBanner() {
  return (
    <section className="container-px pb-16 sm:pb-20">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative rounded-2xl overflow-hidden min-h-[320px] sm:min-h-[380px] flex items-end"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-navy-950/10" />
        <div className="relative p-8 sm:p-12 max-w-lg">
          <h3 className="font-display font-extrabold text-white text-2xl sm:text-3xl mb-3 leading-snug">
            Fast, Reliable &amp; Always on Time
          </h3>
          <p className="text-white/75 text-sm sm:text-base mb-7">
            We ensure your cargo reaches its destination safely and on schedule,
            every time.
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <a href="#quote" className="btn-primary">
              Learn More <ArrowRight size={16} />
            </a>
            <button className="flex items-center gap-3 text-white font-semibold group">
              <span className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white group-hover:text-navy-950 transition-all">
                <Play size={13} fill="currentColor" />
              </span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
