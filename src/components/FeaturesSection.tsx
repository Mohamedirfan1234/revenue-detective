import { motion } from "framer-motion";
import { GitBranch, AlertTriangle, Brain, IndianRupee } from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "Funnel Analysis",
    description: "Track the complete user journey from landing to purchase. Identify exactly where users drop off in your conversion funnel.",
  },
  {
    icon: AlertTriangle,
    title: "Drop-off Detection",
    description: "Real-time alerts when unusual drop-off patterns emerge. Catch conversion killers before they cost you thousands.",
  },
  {
    icon: Brain,
    title: "AI Insights",
    description: "Get automated, actionable suggestions to fix leaks. Our AI analyzes patterns across thousands of websites.",
  },
  {
    icon: IndianRupee,
    title: "Revenue Loss Estimation",
    description: "See the exact rupee value you're losing at each funnel stage. Prioritize fixes by potential revenue impact.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
};

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-wider">Features</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mt-3 mb-4">
            Every leak, identified and quantified
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
            Four powerful tools working together to find, measure, and fix your revenue leaks.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={item}
              className="glass-card-hover p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-sm font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground text-pretty leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
