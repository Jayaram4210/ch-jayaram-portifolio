import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "C", "SQL"],
  },
  {
    title: "Web & Backend",
    skills: ["Django", "REST APIs", "HTML/CSS"],
  },
  {
    title: "AI / ML",
    skills: ["TensorFlow", "scikit-learn", "Neural Networks", "Pandas", "NumPy"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS", "Git"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Tools",
    skills: ["VS Code", "PyCharm", "Jupyter Notebook"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 bg-surface/30" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-mono text-primary text-sm mb-2">// skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-12">
            Tech <span className="text-gradient">Stack</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-xl p-6 hover:glow-border transition-shadow duration-300"
              >
                <h4 className="font-mono text-primary text-xs uppercase tracking-wider mb-4">
                  {cat.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-secondary text-secondary-foreground text-sm px-3 py-1.5 rounded-md font-medium"
                    >
                      {skill}
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

export default SkillsSection;
