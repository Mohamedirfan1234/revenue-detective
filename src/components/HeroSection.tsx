import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const transition = { duration: 0.6, ease: [0.4, 0, 0.2, 1] as const };

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary">Trusted by 2,400+ businesses</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.2 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-semibold tracking-tight text-foreground text-balance leading-[1.1] mb-6"
          >
            Stop Losing Revenue{" "}
            <span className="gradient-text">Without Knowing Why</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.3 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 text-pretty"
          >
            Analyze user behavior, detect drop-offs, and increase conversions
            with AI-powered insights. Know exactly where your revenue leaks are.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...transition, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity duration-200"
            >
              Analyze My Website
              <ArrowRight size={16} />
            </a>
            <a
              href="#dashboard"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium glass-card text-foreground hover:bg-surface-hover transition-colors duration-200"
            >
              <Play size={16} />
              View Demo
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...transition, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto"
          >
            {[
              { value: "₹12Cr+", label: "Revenue Recovered" },
              { value: "2,400+", label: "Websites Analyzed" },
              { value: "32%", label: "Avg. Conversion Lift" },
              { value: "< 3min", label: "Analysis Time" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-xl sm:text-2xl font-semibold text-foreground tabular-nums">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
