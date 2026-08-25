import { motion } from "motion/react";
import { Play, ArrowRight } from "lucide-react";
import { fadeUp, viewportOnce } from "../utils/motionVariants";
import backgroundVideo from "../assets/videos/4021642-hd_1280_720_30fps.mp4"


export default function CTASection() {
  return (
    <section className="relative">
      <div className="relative min-h-[380px] sm:min-h-[440px] flex items-center overflow-hidden">
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
        <div className="absolute inset-0 bg-navy-950/70" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative container-px py-16"
        >
          <h2 className="font-display font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl max-w-xl mb-4 leading-tight">
            Ready to <span className="text-brand-orange">Simplify</span> Your
            Logistics?
          </h2>
          <p className="text-white/70 max-w-md mb-9">
            Partner with Anti and experience logistics that drive your business
            forward.
          </p>
          <div className="flex items-center gap-5 flex-wrap">
            <a href="#quote" className="btn-primary">
              Get Started <ArrowRight size={16} />
            </a>
            <button className="flex items-center gap-3 text-white font-semibold group">
              <span className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center group-hover:bg-white group-hover:text-navy-950 transition-all">
                <Play size={14} fill="currentColor" />
              </span>
              Watch Video
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
