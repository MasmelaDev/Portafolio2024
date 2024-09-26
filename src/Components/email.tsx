import { IconMail, IconCopy, IconSend } from "@tabler/icons-react";
import { useState } from "react";
export const Email = () => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("miguelmasmeladev@gmail.com");
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <section className="w-full pb-10">
      <h2 className="text-2xl sm:text-3xl text-emerald-500 font-bold flex items-center gap-2 mb-5 dark:drop-shadow-neon dark:text-emerald-100">
        <IconMail /> Email
      </h2>
      <div className="flex gap-2 justify-center">
        <input
          type="text"
          disabled
          className="bg-white/5 text-sm sm:text-base w-2/3 py-1 sm:py-1.5 px-3 rounded-lg grid place-items-center text-slate-600 dark:text-slate-300 "
          value="miguelmasmeladev@gmail.com"
        />
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="bg-emerald-500 text-white text-sm sm:text-base px-2 sm:px-[10px] py-1 sm:py-1.5 rounded-lg duration-300 relative tooltip-group hover:scale-110"
          >
            <IconCopy />
            <div className="tooltip">{copied ? "Copiado" : "Copiar"}</div>
          </button>
          <a
            href="mailto:miguelmasmeladev@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-500 text-white px-2 sm:px-[10px] py-1 sm:py-1.5 rounded-lg duration-300 relative tooltip-group hover:scale-110"
          >
            <IconSend />
            <div className="tooltip">Enviar email</div>
          </a>
        </div>
      </div>
    </section>
  );
};
