import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">// about me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-8">
            Who I <span className="text-gradient">Am</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Python Developer with strong fundamentals in backend development using Django, REST APIs,
                and PostgreSQL/MySQL. Experienced in building scalable web applications, integrating
                authentication and role-based access, and working with AWS and Git.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Passionate about clean code, problem-solving, and delivering reliable software solutions 
                in agile environments. Currently pursuing B.Tech in Computer Science (AI & ML).
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass rounded-lg p-4 flex items-center gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <span className="text-sm text-secondary-foreground">Visakhapatnam, India</span>
              </div>
              <div className="glass rounded-lg p-4 flex items-center gap-3">
                <Phone className="text-primary shrink-0" size={18} />
                <span className="text-sm text-secondary-foreground">+91 6305430292</span>
              </div>
              <div className="glass rounded-lg p-4 flex items-center gap-3">
                <Mail className="text-primary shrink-0" size={18} />
                <span className="text-sm text-secondary-foreground break-all">jayaramchinthala7890@gmail.com</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
