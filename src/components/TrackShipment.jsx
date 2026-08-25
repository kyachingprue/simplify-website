import { motion } from 'motion/react'
import { Search, Package, Truck, CheckCircle2 } from 'lucide-react'
import { fadeUp, viewportOnce } from '../utils/motionVariants'
import backgroundVideo from "../assets/videos/11336554-uhd_3840_2160_30fps.mp4"


export default function TrackShipment() {
  return (
    <section className="section-pad bg-navy-50/60 overflow-hidden">
      <div className="container-px grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <span className="eyebrow">Track Your Shipment</span>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-navy-950 mb-4 leading-tight">
            Track Your Shipment in{' '}
            <span className="text-brand-orange">Real-Time</span>
          </h2>
          <p className="text-navy-400 max-w-md mb-8">
            Enter your tracking ID below and get instant, accurate updates on
            your shipment's location and status.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md">
            <div className="relative flex-1">
              <Search
                size={17}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-300"
              />
              <input
                type="text"
                placeholder="Enter Tracking ID"
                className="w-full pl-11 pr-4 py-3.5 rounded-full border border-navy-100 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange/40"
              />
            </div>
            <button className="btn-primary justify-center">Track Now</button>
          </div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-navy-950/30" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="absolute -bottom-8 -right-2 sm:right-4 bg-white rounded-2xl shadow-2xl p-5 w-64"
          >
            <p className="text-navy-950 font-display font-bold text-sm mb-4">
              Shipment Status
            </p>
            <div className="flex items-center justify-between relative">
              <div className="absolute top-3 left-4 right-4 h-0.5 bg-navy-100">
                <motion.div
                  initial={{ width: '0%' }}
                  whileInView={{ width: '60%' }}
                  viewport={viewportOnce}
                  transition={{ delay: 0.6, duration: 1 }}
                  className="h-full bg-brand-orange"
                />
              </div>
              {[
                { icon: CheckCircle2, label: 'Picked' },
                { icon: Truck, label: 'In Transit' },
                { icon: Package, label: 'Delivered' }
              ].map((step, i) => (
                <div
                  key={step.label}
                  className="relative z-10 flex flex-col items-center gap-1.5"
                >
                  <span
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      i <= 1
                        ? 'bg-brand-orange text-white'
                        : 'bg-navy-100 text-navy-300'
                    }`}
                  >
                    <step.icon size={12} />
                  </span>
                  <span className="text-[10px] text-navy-400">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
