import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Music, QrCode, Monitor } from "lucide-react";

const projects = [
  {
    title: "Spotify Web Application",
    icon: Music,
    description:
      "Role-based music platform with dashboards for Admin, Artist, and Listener. Features playlist creation, music uploads, analytics via Chart.js and REST APIs.",
    tech: ["Django", "PostgreSQL", "REST API", "Chart.js", "Git"],
  },
  {
    title: "QR Menu Generator",
    icon: QrCode,
    description:
      "Django-powered QR Menu Generator for restaurants, enabling dynamic menu creation with instant QR code access and a secure admin dashboard.",
    tech: ["Django", "Python", "Bootstrap", "qrcode", "Pillow"],
  },
  {
    title: "Screenshot App",
    icon: Monitor,
    description:
      "Python application for full-screen and region-specific screenshots with both CLI automation and GUI. Cross-platform compatible.",
    tech: ["Python", "CLI", "GUI", "Cross-platform"],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-surface/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">// projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Things I've <span className="text-gradient">Built</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass rounded-xl p-6 group hover:glow-border transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <project.icon className="text-primary" size={28} />
                  <ExternalLink
                    size={18}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </div>
                <h4 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-primary/80">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
