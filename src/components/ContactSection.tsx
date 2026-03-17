import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="max-w-lg mx-auto"
        >
          <div className="text-center mb-10">
            <span className="text-xs font-medium text-primary uppercase tracking-wider">Contact</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mt-3 mb-4">
              Get in touch
            </h2>
            <p className="text-muted-foreground text-pretty">
              Have questions? We'd love to hear from you.
            </p>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-8 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Send className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Message sent!</h3>
              <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="glass-card p-6 space-y-4"
            >
              <input type="text" required placeholder="Your name" className="glow-input w-full text-sm" />
              <input type="email" required placeholder="you@company.com" className="glow-input w-full text-sm" />
              <textarea required placeholder="How can we help?" rows={4} className="glow-input w-full text-sm resize-none" />
              <button
                type="submit"
                className="w-full py-3 text-sm font-medium bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity duration-200"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
