import { motion } from "framer-motion";
import HotmartPayment from "./HotmartPayment";
import { useIsMobile } from "@/hooks/use-mobile";

const pills = [
  "✓ Para iniciantes absolutas",
  "✓ Acesso online",
  "✓ No seu ritmo",
];

export default function Hero() {
  const isMobile = useIsMobile();
  return (
    <section className="min-h-screen bg-linear-to-br from-cream to-blush flex items-center py-12 lg:py-0">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            className="order-2 lg:order-1 text-center lg:text-left z-50"
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
            >
              <HotmartPayment>Quero Começar Agora</HotmartPayment>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center relative"
            initial={
              isMobile
                ? { opacity: 1, x: 0 }
                : { opacity: 0.1, x: 50, scale: 0.9 }
            }
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <picture>
              <source
                srcSet="/lp-pintar-sem-medo/mobile-fundo.webp"
                media="(max-width: 600px)"
                type="image/webp"
              />
              <source
                srcSet="/lp-pintar-sem-medo/fundo.webp"
                type="image/webp"
              />
              <motion.img
                src="/lp-pintar-sem-medo/fundo.webp"
                alt="Decoração floral de fundo"
                className="absolute -top-16 xl:-top-40 right-0 z-0 pointer-events-none"
                initial={
                  isMobile
                    ? { x: 0, opacity: 0.3 }
                    : { x: 100, opacity: 0.1, rotate: 10 }
                }
                animate={{ x: 0, opacity: 0.3, rotate: 0 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                loading="eager"
                decoding="sync"
                fetchPriority="high"
              />
            </picture>

            <motion.div
              className="relative z-10 flex justify-center"
              initial={
                isMobile ? { x: 0, opacity: 1 } : { x: 100, opacity: 0.1 }
              }
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: isMobile ? 0 : 0.8,
              }}
            >
              <picture>
                <source
                  srcSet="/lp-pintar-sem-medo/mobile-potes.webp"
                  media="(max-width: 600px)"
                  type="image/webp"
                />
                <source
                  srcSet="/lp-pintar-sem-medo/potes.webp"
                  type="image/webp"
                />
                <motion.img
                  src="/lp-pintar-sem-medo/potes.webp"
                  alt="Potes de vidro pintados à mão"
                  className="drop-shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: -1 }}
                  transition={{ duration: 0.3 }}
                  fetchPriority="high"
                  loading="eager"
                  decoding="sync"
                />
              </picture>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
