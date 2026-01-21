import { Check } from "lucide-react";
import { motion } from "framer-motion";

const modules = [
  {
    number: "01",
    title: "Introdução ao Método",
    lessons: [
      "Boas-vindas e mentalidade criativa",
      "Como se preparar para a jornada",
      "Liberando o medo de errar",
    ],
  },
  {
    number: "02",
    title: "Materiais e Preparação",
    lessons: [
      "Lista completa de materiais",
      "Como preparar o vidro para pintura",
      "Escolhendo as tintas certas",
    ],
  },
  {
    number: "03",
    title: "Técnicas Base",
    lessons: [
      "Pinceladas fundamentais",
      "Criando fundos e texturas",
      "Combinação de cores harmoniosas",
    ],
  },
  {
    number: "04",
    title: "Arte Floral",
    lessons: [
      "Pintando folhas e ramos",
      "Flores simples e elegantes",
      "Composições florais completas",
    ],
  },
  {
    number: "05",
    title: "Projetos Práticos",
    lessons: [
      "Pote decorativo passo a passo",
      "Garrafa ornamental",
      "Conjunto harmonioso de peças",
    ],
  },
  {
    number: "06",
    title: "Finalizações",
    lessons: [
      "Técnicas de acabamento",
      "Vernizes e proteção",
      "Cuidados com suas peças",
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Modules() {
  return (
    <section className="py-20 bg-blush" id="modulos">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-sm font-medium tracking-widest uppercase text-terracotta mb-4">
            Conteúdo do Curso
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-4">
            O que você vai aprender
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Um método completo, do zero ao avançado, para você criar peças
            únicas e encantadoras.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {modules.map((module, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)",
              }}
              className="bg-card p-6 rounded-2xl border border-sage hover:shadow-elegant transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.span
                  className="text-4xl font-display font-bold text-terracotta"
                  initial={{ scale: 0.5 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    type: "spring",
                    stiffness: 200,
                  }}
                >
                  {module.number}
                </motion.span>
                <h3 className="font-display text-xl font-bold text-primary pt-2">
                  {module.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {module.lessons.map((lesson, lessonIndex) => (
                  <motion.li
                    key={lessonIndex}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + lessonIndex * 0.1 }}
                  >
                    <Check className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm">
                      {lesson}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
