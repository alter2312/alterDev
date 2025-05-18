import React from 'react';
import imgYo from '../assets/img/img-yo.png';
import '../assets/css/presentacion.css'; // Asegúrate de tener este archivo para los estilos
export function Myprofile({url}) {
    return (
        <img src={url} alt="Imagen de mí" className="w-2/7 h-auto rounded-full shadow-lg" />
    );
}
function Presentacion({ name }) {
    const contentText = ['Desarrollador Web', 'Desarrollador Frontend', 'Diseñador UI/UX'];
    const [index, setIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false); // Controla si estamos borrando
    const [text, setText] = React.useState(''); // Texto actual mostrado
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
                if (text === '') {
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
        <section className="h-screen flex flex-col md:flex-row items-center justify-center gap-50 p-8">
            <Myprofile url={imgYo} />
            <article className="flex flex-col items-center text-center md:items-start md:text-left gap-6">
                <h1 className="text-4xl md:text-6xl font-extrabold">
                    ¡Hola! Soy <span className="text-violet-800">{name}</span>
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-700">
                    <span className="text-violet-800">{text}</span>
                    <span className="blinking-cursor"></span>
                </h2>
                <div className="flex gap-4 mt-4 absolute bottom-30">
                    <a href="#projects" className="bg-violet-600 text-white py-2 px-6 rounded-lg hover:bg-violet-900 transition">
                        Proyectos
                    </a>
                    <a href="#about" className="bg-gray-200 text-gray-800 py-2 px-6 rounded-lg hover:bg-gray-400 transition">
                        Sobre mí
                    </a>
                </div>
            </article>
        </section>
    );
}

export default Presentacion;