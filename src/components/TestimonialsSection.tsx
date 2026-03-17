import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Head of Growth, ShopKart",
    text: "We discovered our checkout was bleeding ₹2.8L/month. Fixed it in a week. The ROI on this tool is insane.",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "CTO, FinanceHub",
    text: "The AI suggestions were spot-on. We improved our signup conversion by 24% just by following the recommendations.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "Product Manager, EduLearn",
    text: "Finally, a tool that shows me exactly where we lose users — not just vanity metrics. The funnel view is brilliant.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="text-center mb-16"
        >
          <span className="text-xs font-medium text-primary uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mt-3">
            Trusted by revenue-focused teams
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="glass-card-hover p-6"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed mb-6 text-pretty">"{t.text}"</p>
              <div>
                <div className="text-sm font-medium text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
