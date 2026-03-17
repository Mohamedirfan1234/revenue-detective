import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Loader2 } from "lucide-react";

interface DemoSectionProps {
  onAnalyze: () => void;
}

const DemoSection = ({ onAnalyze }: DemoSectionProps) => {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAnalyze = () => {
    if (!url.trim()) {
      setUrl("https://example-store.com");
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onAnalyze();
      document.getElementById("dashboard")?.scrollIntoView({ behavior: "smooth" });
    }, 2500);
  };

  return (
    <section id="demo" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-wider">Try it now</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mt-3 mb-4">
            See your revenue leaks in seconds
          </h2>
          <p className="text-muted-foreground mb-10 text-pretty">
            Enter your website URL and get an instant analysis of where you're losing conversions and revenue.
          </p>

          <div className="glass-card p-2 flex flex-col sm:flex-row gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://your-website.com"
                className="glow-input w-full pl-10 pr-4 py-3 text-sm rounded-lg"
              />
            </div>
            <button
              onClick={handleAnalyze}
              disabled={isLoading}
              className="px-6 py-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-all duration-200 disabled:opacity-70 flex items-center justify-center gap-2 min-w-[140px]"
            >
              <AnimatePresence mode="wait">
                {isLoading ? (
                  <motion.span
                    key="loading"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center gap-2"
                  >
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Scanning...
                  </motion.span>
                ) : (
                  <motion.span
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    Run Analysis
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>

          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6"
            >
              <div className="w-full bg-secondary rounded-full h-1.5 overflow-hidden">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                />
              </div>
              <p className="text-xs text-muted-foreground mt-3">Analyzing conversion funnel, drop-off patterns, and revenue impact...</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default DemoSection;
