import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TrendingDown, Lightbulb, AlertCircle, CheckCircle2 } from "lucide-react";

const funnelStages = [
  { stage: "Visitors", count: 10000, color: "bg-primary/80" },
  { stage: "Sign Up Page", count: 4200, color: "bg-primary/60" },
  { stage: "Checkout", count: 1800, color: "bg-primary/40" },
  { stage: "Purchase", count: 680, color: "bg-primary/30" },
];

const suggestions = [
  { text: "Simplify checkout to 2 steps (currently 5)", priority: "High", icon: AlertCircle },
  { text: "Improve CTA visibility on landing page", priority: "Medium", icon: Lightbulb },
  { text: "Reduce form fields from 8 to 3", priority: "High", icon: AlertCircle },
  { text: "Add trust badges near payment section", priority: "Low", icon: CheckCircle2 },
];

const AnimatedCounter = ({ value, prefix = "" }: { value: number; prefix?: string }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = Math.round(eased * value);
      setDisplay(start);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [value]);
  return <span className="tabular-nums">{prefix}{display.toLocaleString("en-IN")}</span>;
};

interface DashboardSectionProps {
  isVisible: boolean;
}

const DashboardSection = ({ isVisible }: DashboardSectionProps) => {
  if (!isVisible) return null;

  return (
    <section id="dashboard" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-wider">Analysis Results</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mt-3">
            Your Revenue Leak Report
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Revenue Loss Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="glass-card p-6 lg:col-span-1"
          >
            <div className="flex items-center gap-2 mb-4">
              <TrendingDown className="w-4 h-4 text-destructive" />
              <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Monthly Revenue Loss</span>
            </div>
            <div className="text-4xl sm:text-5xl font-semibold text-destructive mb-2">
              ₹<AnimatedCounter value={45000} />
            </div>
            <p className="text-sm text-muted-foreground">Estimated recoverable revenue per month based on current drop-off rates.</p>
            <div className="mt-4 pt-4 border-t border-border/50">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Conversion Rate</span>
                <span className="text-foreground font-medium tabular-nums">6.8%</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-muted-foreground">Industry Avg</span>
                <span className="text-primary font-medium tabular-nums">12.4%</span>
              </div>
            </div>
          </motion.div>

          {/* Funnel */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="glass-card p-6 lg:col-span-2"
          >
            <h3 className="text-sm font-semibold text-foreground mb-6">Conversion Funnel</h3>
            <div className="space-y-3">
              {funnelStages.map((stage, i) => {
                const width = (stage.count / funnelStages[0].count) * 100;
                const dropoff = i > 0 ? ((funnelStages[i - 1].count - stage.count) / funnelStages[i - 1].count * 100).toFixed(1) : null;
                return (
                  <div key={stage.stage}>
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="text-sm text-foreground">{stage.stage}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-sm text-foreground tabular-nums font-medium">{stage.count.toLocaleString()}</span>
                        {dropoff && (
                          <span className="text-xs text-destructive tabular-nums animate-pulse-slow">-{dropoff}%</span>
                        )}
                      </div>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2">
                      <motion.div
                        className={`h-full rounded-full ${stage.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${width}%` }}
                        transition={{ duration: 0.8, delay: 0.3 + i * 0.15, ease: [0.4, 0, 0.2, 1] }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* AI Suggestions */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="glass-card p-6 lg:col-span-3"
          >
            <div className="flex items-center gap-2 mb-6">
              <Brain className="w-4 h-4 text-primary" />
              <h3 className="text-sm font-semibold text-foreground">AI Recommendations</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {suggestions.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.3 }}
                  className="flex items-start gap-3 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/30"
                >
                  <s.icon className={`w-4 h-4 mt-0.5 flex-shrink-0 ${s.priority === "High" ? "text-destructive" : s.priority === "Medium" ? "text-yellow-500" : "text-primary"}`} />
                  <div>
                    <p className="text-sm text-foreground">{s.text}</p>
                    <span className={`text-xs mt-1 inline-block ${s.priority === "High" ? "text-destructive" : s.priority === "Medium" ? "text-yellow-500" : "text-muted-foreground"}`}>
                      {s.priority} Priority
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Brain = ({ className, ...props }: { className?: string } & React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/><path d="M3.477 10.896a4 4 0 0 1 .585-.396"/><path d="M19.938 10.5a4 4 0 0 1 .585.396"/><path d="M6 18a4 4 0 0 1-1.967-.516"/><path d="M19.967 17.484A4 4 0 0 1 18 18"/></svg>
);

export default DashboardSection;
