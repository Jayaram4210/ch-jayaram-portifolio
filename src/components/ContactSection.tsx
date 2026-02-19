import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-surface/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="font-mono text-primary text-sm mb-2">// contact</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h3>
          <p className="text-muted-foreground text-lg mb-12">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            feel free to reach out!
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <a
              href="mailto:jayaramchinthala7890@gmail.com"
              className="glass rounded-xl p-5 flex items-center gap-3 hover:glow-border transition-all duration-300 group"
            >
              <Mail className="text-primary" size={20} />
              <span className="text-sm text-secondary-foreground group-hover:text-primary transition-colors">
                jayaramchinthala7890@gmail.com
              </span>
            </a>
            <a
              href="tel:+916305430292"
              className="glass rounded-xl p-5 flex items-center gap-3 hover:glow-border transition-all duration-300 group"
            >
              <Phone className="text-primary" size={20} />
              <span className="text-sm text-secondary-foreground group-hover:text-primary transition-colors">
                +91 6305430292
              </span>
            </a>
          </div>

          <div className="flex justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/chintala-jayaram-bhavani-prasad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Linkedin size={18} />
              LinkedIn
              <ArrowUpRight size={14} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-lg font-medium hover:border-primary/50 hover:text-primary transition-colors"
            >
              <Github size={18} />
              GitHub
              <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
