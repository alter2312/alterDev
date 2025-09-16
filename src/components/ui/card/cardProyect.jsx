import { useState } from "react";
import githubLogo from "../../../assets/img/github.svg";

export function CardProyect({
  nameImg,
  title,
  contentText,
  urlCodigo,
  urlProyecto,
  ModalComponent, // <-- le pasamos el modal directamente
}) {
  const [open, setOpen] = useState(false);

  return (
    <article className="cardProyect w-[20rem] h-[25rem] flex flex-col items-center p-0 justify-center overflow-hidden relative bg-neutral-950 rounded-xl">
      <img
        src={nameImg}
        alt={title}
        className="w-full h-full z-0 object-cover absolute"
      />
      <h3 className="absolute -top-100 z-10 text-2xl font-extrabold text-neutral-300">
        {title}
      </h3>
      <a
        href={urlCodigo}
        target="_blank"
        rel="noreferrer"
        className="absolute z-10 -top-16 right-10"
      >
        <img src={githubLogo} alt="" />
      </a>

      <div className="w-full h-1/3 p-5 absolute -bottom-full flex flex-col justify-center items-center gap-7">
        <p className="relative z-10 w-4/5 text-neutral-400 text-sm text-center">
          {contentText}
        </p>

        {ModalComponent ? (
          <>
            <button
              onClick={() => setOpen(true)}
              className="bg-violet-600 text-white px-10 py-2 font-black rounded-[1rem] hover:bg-violet-800 hover:cursor-pointer transition"
            >
              Probar
            </button>

            {open && <ModalComponent onClose={() => setOpen(false)} />}
          </>
        ) : (
          urlProyecto && (
            <a href={urlProyecto} target="_blank" rel="noreferrer">
              <button className="bg-violet-600 text-white px-10 py-2 font-black rounded-[1rem] hover:bg-violet-800 hover:cursor-pointer transition">
                Ver Sitio
              </button>
            </a>
          )
        )}
      </div>
    </article>
  );
}
