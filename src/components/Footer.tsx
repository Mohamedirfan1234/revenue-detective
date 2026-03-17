import { Activity } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Activity className="w-5 h-5 text-primary" />
              <span className="text-sm font-semibold text-foreground">RevenueDetect</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              AI-powered revenue leak detection for modern businesses.
            </p>
          </div>
          {[
            { title: "Product", links: ["Features", "Pricing", "Demo", "Changelog"] },
            { title: "Company", links: ["About", "Blog", "Careers", "Contact"] },
            { title: "Legal", links: ["Privacy", "Terms", "Security"] },
          ].map((group) => (
            <div key={group.title}>
              <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">{group.title}</h4>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border/50 pt-8 text-center">
          <p className="text-xs text-muted-foreground">© 2026 RevenueDetect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
