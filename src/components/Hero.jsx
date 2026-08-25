import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
import { heroStats } from "../data/content";
import { fadeUp, stagger, viewportOnce } from "../utils/motionVariants";
import backgroundVideo from "../assets/videos/15515062_1920_1080_25fps.mp4"


export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/10 to-transparent" />
      </div>

      <div className="relative container-px pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="max-w-2xl"
        >
          <motion.h1
            variants={fadeUp}
            className="font-display font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6"
          >
            Smart Logistics
            <br />
            <span className="text-brand-orange">Strong</span> Connections
            <br />
            Global Solutions
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-white/75 text-base sm:text-lg max-w-md mb-9"
          >
            We deliver more than cargo — we deliver trust, speed, and
            reliability across the globe.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex items-center gap-5 flex-wrap"
          >
            <a href="#quote" className="btn-primary">
              Get Started <ArrowRight size={16} />
            </a>
            <button className="flex items-center gap-3 text-white font-semibold group">
              <span className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white group-hover:text-navy-950 transition-all">
                <Play size={14} fill="currentColor" />
              </span>
              Watch Video
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        variants={fadeUp}
        custom={0.2}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="relative container-px pb-10 lg:pb-0"
      >
        <div className="mx-auto lg:absolute lg:left-12 xl:left-20 lg:right-12 xl:right-20 lg:-bottom-10 bg-navy-800/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/10">
          {heroStats.map(stat => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center gap-1 py-6 px-3 text-center"
            >
              <span className="text-white font-display font-bold text-2xl sm:text-3xl">
                {stat.value}
              </span>
              <span className="text-white/60 text-xs sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
      <div className="hidden lg:block h-10" />
    </section>
  )
}
