import { Heart, Sparkles, Clock, Palette } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Heart,
    title: "Sem Medo de Errar",
    description:
      "Aqui não existe erro. Cada traço é uma expressão sua, única e valiosa.",
  },
  {
    icon: Sparkles,
    title: "Reconexão Criativa",
    description:
      "Redescubra sua criatividade sem pressão, sem técnica engessada, sem cobrança.",
  },
  {
    icon: Clock,
    title: "No Seu Ritmo",
    description: "Acesso online por 2 anos. Assista quantas vezes precisar.",
  },
  {
    icon: Palette,
    title: "Para Iniciantes",
    description:
      "Não precisa de talento prévio. O método foi criado para quem nunca pintou.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function Benefits() {
  return (
    <section className="py-20 bg-card" id="benefits">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary mb-4">
            Para quem é este Método?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Para mulheres que desejam se reconectar com sua criatividade através
            da arte em vidros reutilizados.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-background p-8 rounded-2xl border border-sage text-center hover:shadow-elegant transition-all duration-300 group"
            >
              <motion.div
                className="w-16 h-16 mx-auto mb-6 bg-sage-light rounded-full flex items-center justify-center group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <benefit.icon className="w-8 h-8 text-primary group-hover:text-accent-foreground" />
              </motion.div>
              <h3 className="font-display text-xl font-bold text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
