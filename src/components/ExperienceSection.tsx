import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Altair",
    role: "Data Science Intern",
    period: "Oct '25 — Dec '25",
    location: "Remote",
    points: [
      "Applied data science techniques (statistical analysis, predictive modeling, visualization) using Python, Pandas, NumPy, and Matplotlib.",
      "Built and optimized data pipelines for preprocessing, feature engineering, and model evaluation on real-world datasets.",
      "Collaborated with teams to deliver insights and reports, strengthening communication and documentation skills.",
    ],
  },
  {
    company: "Eduskills",
    role: "Google AI & ML Intern",
    period: "Jul '25 — Sep '25",
    location: "Remote",
    points: [
      "Applied ML algorithms (regression, classification, clustering) using Python, TensorFlow, and scikit-learn.",
      "Built end-to-end ML pipelines including preprocessing, feature engineering, model training, tuning, and deployment.",
      "Collaborated in teams to present solutions effectively, enhancing communication and documentation skills.",
    ],
  },
  {
    company: "APSSDC",
    role: "Web Development Intern",
    period: "Apr — Jun '25",
    location: "Remote",
    points: [
      "Built a Django-based Spotify-like web app with PostgreSQL and REST APIs.",
      "Implemented role-based dashboards and secure authentication to protect user data.",
      "Integrated Chart.js for analytics and collaborated in Agile sprints using Git.",
    ],
  },
  {
    company: "Demy Software Solutions",
    role: "Cloud and DevOps Intern",
    period: "Jun — Jul '24",
    location: "Visakhapatnam",
    points: [
      "Implemented AWS deployments and managed EC2 instances for scalable infrastructure.",
      "Automated CI/CD pipelines using Jenkins and Docker to streamline releases.",
      "Applied Agile/Scrum practices in cross-functional DevOps teams.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">// experience</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Where I've <span className="text-gradient">Worked</span>
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border md:left-1/2 md:-translate-x-px" />

            <div className="space-y-12">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`relative flex flex-col md:flex-row ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8`}
                >
                  {/* Dot */}
                  <div className="absolute left-[15px] top-2 w-[9px] h-[9px] rounded-full bg-primary glow-border md:left-1/2 md:-translate-x-1/2 z-10" />

                  <div className={`md:w-1/2 pl-10 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <div className="glass rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-1 justify-start">
                        <Briefcase size={16} className="text-primary" />
                        <span className="font-mono text-primary text-xs">{exp.period}</span>
                      </div>
                      <h4 className="text-xl font-bold mb-1">{exp.company}</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        {exp.role} · {exp.location}
                      </p>
                      <ul className="space-y-2 text-left">
                        {exp.points.map((point, j) => (
                          <li key={j} className="text-sm text-muted-foreground flex gap-2">
                            <span className="text-primary mt-1 shrink-0">▹</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="hidden md:block md:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
