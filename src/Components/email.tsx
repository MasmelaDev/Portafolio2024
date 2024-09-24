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
    <section className="w-full pb-5">
      <h2 className="text-3xl text-emerald-500 font-bold flex items-center gap-2 mb-5">
        <IconMail /> Email
      </h2>
      <div className="flex gap-2">
        <input
          type="text"
          disabled
          className="bg-black/5  w-full py-1.5 px-3 rounded-lg grid place-items-center text-slate-600 "
          value="miguelmasmeladev@gmail.com"
        />
        <div className="flex gap-2">
          <button
            onClick={handleCopy}
            className="bg-emerald-500 text-white px-3 py-1.5 rounded-lg duration-300 relative tooltip-group hover:scale-110"
          >
            <IconCopy />
            <div className="tooltip">{copied ? "Copiado" : "Copiar"}</div>
          </button>
          <a
            href="mailto:miguelmasmeladev@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="bg-emerald-500 text-white px-3 py-1.5 rounded-lg duration-300 relative tooltip-group hover:scale-110"
          >
            <IconSend />
            <div className="tooltip">Enviar email</div>
          </a>
        </div>
      </div>
    </section>
  );
};
