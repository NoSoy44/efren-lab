import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MODES = [
  { id: "contrast", label: "Alto contraste", desc: "Baja visión", preview: "B/N puro" },
  { id: "colorblind", label: "Modo daltónico", desc: "Deuteranopía", preview: "Rojo/verde" },
];

export default function HighContrast() {
  const [mode, setMode] = useState(null);

  const activate = (selected) => {
    document.body.classList.remove("high-contrast", "colorblind");
    if (selected === mode) {
      setMode(null);
    } else {
      document.body.classList.add(selected === "contrast" ? "high-contrast" : "colorblind");
      setMode(selected);
    }
  };

  useEffect(() => {
    if (!document.getElementById("colorblind-svg")) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("id", "colorblind-svg");
      svg.style.cssText = "position:absolute;width:0;height:0";
      svg.innerHTML = `<defs><filter id="colorblind-filter">
        <feColorMatrix type="matrix" values="
          0.367 0.861 -0.228 0 0
          0.280 0.673  0.047 0 0
         -0.012 0.043  0.969 0 0
          0     0      0     1 0"/>
      </filter></defs>`;
      document.body.appendChild(svg);
    }
    return () => {
      document.body.classList.remove("high-contrast", "colorblind");
      document.getElementById("colorblind-svg")?.remove();
    };
  }, []);

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e5e5e5] px-6 py-16">
      <div className="max-w-xl mx-auto">
        <Link
          to="/"
          className="font-mono text-[10px] uppercase tracking-widest text-[#555] hover:text-[#D4FF3F] transition-colors"
        >
          ← Volver
        </Link>

        <h1 className="text-3xl font-black uppercase tracking-tight mt-6 mb-2">
          Modo alto contraste
        </h1>
        <p className="font-mono text-xs text-[#888] mb-8">
          Cambio la paleta de toda la página a blanco y negro puro y apago animaciones y
          sombras. Lo hice pensando en gente con baja visión. El segundo modo simula cómo se
          ve la página para alguien con deuteranopía (dificultad para distinguir rojo de
          verde). Activa uno y mira el bloque de ejemplo de abajo para notar la diferencia.
        </p>

        <div className="border border-[#D4FF3F]/20 bg-[#0c0c0c] p-5 space-y-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[#555]">
            Selecciona un modo de visualización
          </span>

          <div className="flex flex-col gap-3">
            {MODES.map((m) => (
              <div key={m.id} className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-white">{m.label}</p>
                  <p className="font-mono text-[10px] text-[#555]">
                    {m.desc} — {m.preview}
                  </p>
                </div>
                <button
                  onClick={() => activate(m.id)}
                  className={`relative w-14 h-7 rounded-full border transition-all duration-300 shrink-0
                    ${mode === m.id ? "bg-[#D4FF3F] border-[#D4FF3F]" : "bg-transparent border-[#444]"}`}
                >
                  <span
                    className={`absolute top-1 w-5 h-5 rounded-full transition-all duration-300
                      ${mode === m.id ? "left-8 bg-black" : "left-1 bg-[#555]"}`}
                  />
                </button>
              </div>
            ))}
          </div>

          {mode && (
            <p className="font-mono text-[10px] text-[#D4FF3F]">
              ● {mode === "contrast" ? "Alto contraste" : "Modo daltónico"} activo en toda la
              página
            </p>
          )}
        </div>

        {/* Bloque de ejemplo — sin esto el toggle no muestra nada */}
        <div className="mt-10 border border-[#1a1a1a] bg-[#0c0c0c] p-6 space-y-4">
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#555]">
            Contenido de ejemplo
          </span>
          <h2 className="text-xl font-black uppercase tracking-tight text-white">
            Estado del servidor
          </h2>
          <p className="text-sm text-[#ccc] leading-relaxed">
            Así se vería una tarjeta cualquiera de un dashboard: texto, colores de estado y
            botones. Prueba los dos modos y compara cuánto cambia la legibilidad.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-green-500/15 text-green-400 border border-green-500/30">
              ● Operativo
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-red-500/15 text-red-400 border border-red-500/30">
              ● Con errores
            </span>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-yellow-500/15 text-yellow-400 border border-yellow-500/30">
              ● En revisión
            </span>
          </div>
          <div className="flex gap-3 pt-2">
            <button className="font-mono text-[11px] uppercase tracking-widest text-black bg-[#D4FF3F] px-4 py-2 hover:bg-[#B6E600] transition-colors">
              Reiniciar servicio
            </button>
            <button className="font-mono text-[11px] uppercase tracking-widest text-[#888] border border-[#333] px-4 py-2 hover:border-[#555] transition-colors">
              Ver logs
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
