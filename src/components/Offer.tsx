import { Check, Shield, Clock } from "lucide-react";
import { motion } from "framer-motion";
import HotmartPayment from "./HotmartPayment";

const included = [
  "Acesso imediato por 2 anos",
  "6 módulos completos em vídeo",
  "Aulas passo a passo detalhadas",
  "Lista de materiais recomendados",
  "Grupo de WhatsApp para alunas",
  "Materiais de apoio para avançar na sua criação",
  "PDFs com mais de 100 riscos para pintura",
  "Aulas Bônus de pintura com tinta para vidros",
  "Aula Bônus de pintura em pratos",
];

const badges = [
  { icon: Shield, text: "Compra 100% Segura" },
  { icon: Clock, text: "Acesso Imediato" },
];

export default function Offer() {
  return (
    <section className="py-20 bg-forest text-primary-foreground" id="oferta">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            className="inline-block text-sm font-medium tracking-widest uppercase text-sage-light mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Oferta Especial
          </motion.span>
          <motion.h2
            className="font-display text-3xl md:text-4xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Comece sua jornada criativa{" "}
            <span className="text-terracotta font-bold">Hoje</span>
          </motion.h2>
          <motion.p
            className="text-primary-foreground/80 text-lg mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Tudo o que você precisa para transformar vidros simples em obras de
            arte únicas.
          </motion.p>

          {/* Offer Card */}
          <motion.div
            className="bg-card text-card-foreground rounded-3xl p-8 md:p-12 shadow-elegant max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            whileHover={{ boxShadow: "0 30px 60px -20px rgba(0,0,0,0.25)" }}
          >
            <motion.h3
              className="font-display text-4xl font-bold text-primary mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              Método Pintar Sem Medo
            </motion.h3>

            {/* What's included */}
            <ul className="text-left space-y-3 mb-8">
              {included.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.08 }}
                >
                  <motion.div
                    className="w-6 h-6 bg-sage-light rounded-full flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    <Check className="w-4 h-4 text-primary" />
                  </motion.div>
                  <span className="text-muted-foreground">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Price */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, type: "spring", stiffness: 150 }}
            >
              <p className="text-muted-foreground text-sm mb-2">
                <span className="line-through">De R$ 397,00</span> por apenas
              </p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl font-medium text-primary">
                  12x de
                </span>
                <motion.span
                  className="font-display text-5xl font-bold text-terracotta"
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  R$ 30,72
                </motion.span>
              </div>
              <p className="text-muted-foreground text-sm mt-2">
                ou R$ 297,00 à vista
              </p>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
            >
              <HotmartPayment className="mb-6 w-full">
                Quero Comprar Agora
              </HotmartPayment>
            </motion.div>

            {/* Guarantee */}
            <motion.div
              className="flex items-center justify-center gap-3 text-sm text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              <Shield className="w-5 h-5 text-terracotta" />
              <span>Garantia de 7 dias</span>
            </motion.div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="flex flex-wrap justify-center gap-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 1.1, duration: 0.5 }}
          >
            {badges.map((badge, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 text-primary-foreground/70"
                whileHover={{ scale: 1.1, color: "white" }}
              >
                <badge.icon className="w-5 h-5" />
                <span className="text-sm">{badge.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
