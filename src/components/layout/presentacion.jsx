import React from "react";
import imgYo from "../../assets/img/img-yo.png";
import "../../assets/css/presentacion.css";
import { ProyectoDestacado } from "../ui/card/CardProyectDestacado";
import proyectoDestacado1 from "../../assets/img/proyectoDestacado1.png";
import proyectoDestacado2 from "../../assets/img/proyecto2.png";
export function Myprofile({ url }) {
  return (
    <img
      src={url}
      alt="Imagen de mí"
      className="w-full h-full runded-full shadow-lg"
    />
  );
}
function Presentacion({ name }) {
  const contentText = [
    "Desarrollador Web",
    "Desarrollador Frontend",
    "Diseñador UI/UX",
  ];
  const [index, setIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false); // Controla si estamos borrando
  const [text, setText] = React.useState(""); // Texto actual mostrado
  const [speed, setSpeed] = React.useState(150); // Velocidad de la animación

  React.useEffect(() => {
    const handleTyping = () => {
      const currentWord = contentText[index];
      if (!isDeleting) {
        // Escribiendo hacia adelante
        setText((prev) => currentWord.substring(0, prev.length + 1));
        if (text === currentWord) {
          setIsDeleting(true); // Cambiamos a modo borrar
          setSpeed(150);
        }
      } else {
        // Borrando hacia atrás
        setText((prev) => currentWord.substring(0, prev.length - 1));
        if (text === "") {
          setIsDeleting(false); // Cambiamos a modo escribir
          setIndex((prevIndex) => (prevIndex + 1) % contentText.length); // Siguiente palabra
          setSpeed(150);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index, speed, contentText]);
  return (
    <section className="h-screen flex flex-col md:flex-row items-center justify-center gap-20 p-10 bg-neutral-950">
      <article className="flex flex-col items-center justify-center md:w-1/2 w-1/2 h-full ">
        <article className="w-1/2 flex justify-center h-3/6 ">
          <Myprofile url={imgYo} />
        </article>
        <h2 className="text-3xl font-bold text-violet-500">
          proyecto destacado
        </h2>
        <article className="mt-10 w-full flex justify-center h-1/7">
          <ProyectoDestacado url={[proyectoDestacado1, proyectoDestacado2]} />
        </article>
      </article>

      <article className="flex flex-col items-center text-center md:items-start md:text-left gap-6 w-1/2">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          ¡Hola! Soy <span className="text-violet-800">{name}</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
          <span className="text-violet-800">{text}</span>
          <span className="blinking-cursor"></span>
        </h2>
        <div className="flex gap-4 mt-4 absolute bottom-30">
          <a
            href="#projects"
            className="bg-violet-600 text-white py-2 px-6 rounded-lg hover:bg-violet-900 transition"
          >
            Proyectos
          </a>
          <a
            href="#about"
            className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-400 transition"
          >
            Sobre mí
          </a>
        </div>
      </article>
    </section>
  );
}

export default Presentacion;
