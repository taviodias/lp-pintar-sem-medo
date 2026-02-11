import { motion } from "framer-motion";

const infos = [{ value: "5+ anos", label: "De experiência" }];

export default function About() {
  return (
    <section className="py-20 bg-card" id="sobre">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            {/* Placeholder for creator photo */}
            <motion.div
              className="md:col-span-2"
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-sage-light/50 rounded-full blur-xl"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="relative w-64 h-64 mx-auto bg-sage-light rounded-full flex items-center justify-center border-4 border-background shadow-elegant overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/pintar-sem-medo/foto_milka.jpeg"
                    alt="Foto Milka Dias"
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* About text */}
            <motion.div
              className="md:col-span-3 text-center md:text-left"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <motion.span
                className="inline-block text-sm font-medium tracking-widest uppercase text-terracotta mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                Sobre a Criadora
              </motion.span>
              <motion.h2
                className="font-display text-3xl md:text-4xl font-bold text-primary mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Olá, eu sou Milka Dias
              </motion.h2>
              <motion.div
                className="space-y-4 text-muted-foreground leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <p>
                  Sou artista criativa apaixonada por transformar o simples em
                  algo especial e acredito profundamente no poder transformador
                  da arte. Por anos, vi mulheres incríveis se afastarem de sua
                  criatividade por medo de não serem "boas o suficiente".
                </p>
                <p>
                  A pintura em vidro é, para mim, uma forma de expressão, pausa
                  e reconexão. Foi por isso que criei o{" "}
                  <strong className="text-primary">
                    Método Pintar Sem Medo
                  </strong>
                  : um espaço seguro onde você pode se expressar livremente, sem
                  cobranças ou comparações.
                </p>
                <p>
                  Minha missão é guiar você nessa jornada de reconexão com sua
                  essência criativa, uma pincelada de cada vez.
                </p>
              </motion.div>

              <motion.div
                className="mt-8 flex flex-wrap gap-6 justify-center md:justify-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {infos.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.span
                      className="font-display text-3xl font-bold text-terracotta block"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.7 + index * 0.1,
                        type: "spring",
                        stiffness: 200,
                      }}
                    >
                      {stat.value}
                    </motion.span>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
