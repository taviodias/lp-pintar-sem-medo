import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import HotmartPayment from "./HotmartPayment";

const pills = [
  "✓ Para iniciantes absolutas",
  "✓ Acesso online",
  "✓ No seu ritmo",
];

export default function Hero() {
  const scrollDown = () => {
    document.getElementById("benefits")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen bg-linear-to-br from-cream to-blush flex items-center py-12 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.span
              className="inline-block text-sm font-medium tracking-widest uppercase text-terracotta mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Curso Online de Pintura Criativa
            </motion.span>

            <motion.h1
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              Método
              <br />
              <span className="italic">Pintar Sem Medo</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-6 max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Transforme potes, garrafas e vidros comuns em peças únicas —
              enquanto desenvolve
              <strong className="text-primary">
                {" "}
                autoconfiança, presença e expressão pessoal
              </strong>
              .
            </motion.p>

            <motion.p
              className="text-base text-muted-foreground italic mb-8 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              "Não é sobre fazer bonito. É sobre se permitir criar."
            </motion.p>

            {/* Benefits Pills */}
            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              {pills.map((text, index) => (
                <motion.span
                  key={index}
                  className="bg-sage-light text-primary px-4 py-2 rounded-full text-sm font-medium"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {text}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-col gap-4 md:flex-row justify-center lg:justify-start"
            >
              <HotmartPayment>Quero Começar Agora</HotmartPayment>
              <Button
                onClick={scrollDown}
                size="lg"
                className="bg-forest/50 hover:bg-forest/60 text-accent-foreground text-lg px-8 py-6 rounded-full shadow-elegant transition-all duration-300 hover:scale-105"
              >
                Quero Saber Mais
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-sage-light/50 rounded-3xl blur-2xl"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.img
                src="/image.png"
                alt="Potes de vidro pintados à mão com arte floral - Método Pintar Sem Medo"
                className="relative w-full max-w-md lg:max-w-lg rounded-2xl shadow-elegant"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
