import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech in Computer Science (AI & ML)",
    school: "NSRIT — Nadimpalli Satyanarayana Raju Institute of Technology",
    period: "2022 — Present",
    gpa: "7.56",
    location: "Visakhapatnam",
  },
  {
    degree: "Intermediate Education",
    school: "Sri Chaitanya Junior College",
    period: "2020 — 2022",
    gpa: "8.06",
    location: "Anakapalli",
  },
  {
    degree: "Secondary Education",
    school: "D.A.V Public School",
    period: "2019 — 2020",
    gpa: "7.97",
    location: "Anakapalli",
  },
];

const certifications = [
  "Fundamentals of Deep Learning — NVIDIA DLI",
  "Top 25% Communication Assessment — TestDome",
  "HTML Essential Training — LinkedIn Learning",
  "Python for Data Science, AI & Development — IBM, Coursera",
  "JobReady: Employability Skills — Wadhwani Foundation",
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">// education</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Education & <span className="text-gradient">Certifications</span>
          </h3>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Education */}
            <div className="space-y-6">
              {education.map((edu, i) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass rounded-xl p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0 mt-1">
                      <GraduationCap size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{edu.school}</p>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-xs">
                        <span className="font-mono text-primary">{edu.period}</span>
                        <span className="text-muted-foreground">GPA: {edu.gpa}</span>
                        <span className="text-muted-foreground">{edu.location}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass rounded-xl p-6"
            >
              <div className="flex items-center gap-2 mb-6">
                <Award className="text-primary" size={20} />
                <h4 className="font-bold text-lg">Certifications</h4>
              </div>
              <ul className="space-y-4">
                {certifications.map((cert, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="text-primary mt-0.5 shrink-0">▹</span>
                    <span>{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
