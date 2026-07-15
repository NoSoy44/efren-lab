import { Link } from "react-router-dom";
import { experiments, TAG_COLORS } from "../experiments";

export default function Home() {
  const live = experiments.filter((e) => e.status === "live");
  const soon = experiments.filter((e) => e.status !== "live");

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5]">
      <header className="max-w-5xl mx-auto px-6 pt-16 pb-10 border-b border-[#1a1a1a]">
        <span className="font-mono text-[10px] uppercase tracking-widest text-[#D4FF3F]">
          efren-lab
        </span>
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mt-2">
          Experimentos interactivos
        </h1>
        <p className="text-[#888] font-mono text-sm mt-4 max-w-2xl">
          Demos front-end migradas del{" "}
          <a
            href="https://efrenmunoz.cl/lab"
            target="_blank"
            rel="noreferrer"
            className="text-[#D4FF3F] hover:underline"
          >
            Lab de efrenmunoz.cl
          </a>
          , publicadas una por una: canvas, voz, accesibilidad, IA y visión por computadora.
        </p>
      </header>

      <section className="max-w-5xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1a1a1a]">
        {[...live, ...soon].map((exp) => (
          <article
            key={exp.id}
            className={`p-6 flex flex-col gap-3 ${
              exp.status === "live" ? "bg-[#0c0c0c]" : "bg-[#0a0a0a] opacity-60"
            }`}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-black uppercase tracking-tight">
                {exp.title}
              </h2>
              <span
                className={`font-mono text-[9px] uppercase tracking-widest px-2 py-1 border ${
                  exp.status === "live"
                    ? "text-[#D4FF3F] border-[#D4FF3F]/30"
                    : "text-[#555] border-[#333]"
                }`}
              >
                {exp.status === "live" ? "live" : "próximamente"}
              </span>
            </div>
            <p className="font-mono text-xs text-[#888] leading-relaxed">
              {exp.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {exp.tags.map((t) => (
                <span
                  key={t}
                  className={`font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 border ${TAG_COLORS[t]}`}
                >
                  {t}
                </span>
              ))}
            </div>
            {exp.status === "live" ? (
              <Link
                to={`/${exp.id}`}
                className="mt-2 font-mono text-[11px] uppercase tracking-widest text-[#D4FF3F] hover:text-black hover:bg-[#D4FF3F] px-4 py-2 border border-[#D4FF3F] transition-all duration-200 w-fit"
              >
                [ Ver demo ]
              </Link>
            ) : null}
          </article>
        ))}
      </section>

      <footer className="max-w-5xl mx-auto px-6 pb-16 font-mono text-[10px] text-[#444] uppercase tracking-widest">
        Por{" "}
        <a
          href="https://efrenmunoz.cl"
          target="_blank"
          rel="noreferrer"
          className="text-[#666] hover:text-[#D4FF3F]"
        >
          Efren Muñoz
        </a>
      </footer>
    </main>
  );
}
