import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";

const CaseStudySection = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-4xl mx-auto glass-card p-8 sm:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px]" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary uppercase tracking-wider">Case Study</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-4">
              E-commerce brand increased conversions by{" "}
              <span className="text-primary">32%</span> in 3 weeks
            </h3>

            <p className="text-muted-foreground text-pretty max-w-2xl mb-8">
              After identifying a 58% drop-off at their 5-step checkout process, our AI recommended
              simplifying to 2 steps and adding trust badges. The result: ₹3.2L additional monthly revenue recovered.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              {[
                { label: "Conversion Lift", value: "+32%" },
                { label: "Revenue Recovered", value: "₹3.2L/mo" },
                { label: "Time to Fix", value: "3 weeks" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-semibold text-primary tabular-nums">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <a href="#demo" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
              Run your own analysis <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudySection;
