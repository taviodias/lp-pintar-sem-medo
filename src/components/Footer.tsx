import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-card border-t border-sage">
      <div className="container mx-auto px-4">
        <div className="text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="gap-2 md:order-2">
            <h3 className="font-display text-2xl font-semibold text-primary">
              Método Pintar Sem Medo
            </h3>
            <p className="text-muted-foreground text-sm">
              Pintura criativa em vidros reutilizados
            </p>
          </div>
          <p className="text-muted-foreground text-xs md:order-1">
            © {new Date().getFullYear()} Todos os direitos reservados
          </p>

          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1 md:order-3">
            Feito com <Heart className="w-4 h-4 text-accent fill-current" /> e
            ☕ por{" "}
            <a
              href="https://taviodias.github.io/portfolio"
              target="_blank"
              className="underline"
            >
              Otávio Dias
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
