import proyect1Img from "../assets/img/proyecto1.png";
import proyect2Img from "../assets/img/proyecto2.png";
import proyect3Img from "../assets/img/proyecto3.png";
import proyect4Img from "../assets/img/proyecto4.png";
import proyect5Img from "../assets/img/proyecto5.png";

// Importamos los modales interactivos
import ModalTicTacToe from "../modals/ModalTicTacToe.jsx";
// import ModalCalculator from "../modals/ModalCalculator.jsx"; // ejemplo para la calculadora

const projects = [
  {
    nameImg: proyect1Img,
    title: "Componente de Twitter",
    contentText: "Un componente de Twitter hecho con React.",
    urlCodigo: "https://github.com/usuario/proyecto-uno",
    urlProyecto: "https://proyecto-uno.vercel.app",
    ModalComponent: null,
  },
  {
    nameImg: proyect2Img,
    title: "Tic Tac Toe",
    contentText: "Un juego clásico de tres en raya hecho con React.",
    urlCodigo: "https://github.com/usuario/proyecto-dos",
    urlProyecto: "", // no hace falta abrir un link
    ModalComponent: ModalTicTacToe, // 👈 aquí le pasamos el modal completo
  },
  {
    nameImg: proyect3Img,
    title: "Calculadora",
    contentText: "Calculadora simple hecha con React.",
    urlCodigo: "https://github.com/usuario/proyecto-tres",
    urlProyecto: "",
    ModalComponent: null, // 👈 modal independiente de calculadora
  },
  {
    nameImg: proyect4Img,
    title: "Pokedex",
    contentText:
      "Proyecto en el cual utilizo API e implemento una lista de los primeros 151 Pokémon",
    urlCodigo: "",
    urlProyecto: "",
    ModalComponent: null,
  },
  {
    nameImg: proyect5Img,
    title: "Generador de paleta",
    contentText: "Generador de paleta de colores creado con HTML, CSS y JS",
    urlCodigo: "",
    urlProyecto: "",
    ModalComponent: null,
  },
];

export default projects;
