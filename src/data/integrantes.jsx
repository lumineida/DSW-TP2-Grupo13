import fotoMarcos from '../assets/img/marcos.jpeg';
import fotoMariano from '../assets/img/mariano.png';
import fotoJulian from '../assets/img/julian.png';
import fotoCecilia from '../assets/img/cecilia.jpg';

const integrantes = [
    { 
      path: "marcos", 
      nombre: "Marcos Martin", 
      especialidad: "Desarrollador Full Stack & Scout",
      rol: "Frontend Developer",
      descripcion: "Especializado en Attack on Titan theme con animaciones CSSavanzadas",
      foto: fotoMarcos,
      ciudad: "Coronel Du Graty - Chaco",    
      edad: 20,                   
      habilidades: ["JavaScript", "CSS3", "Animations"],
      peliculas: ["Attack on Titan", "Your Name"],
      musica: ["Rock", "Pop"] 
    },
    { 
      path: "mariano", 
      nombre: "Mariano Javier", 
      especialidad: "Desarrollador de aplicaciones",
      rol: "Personal Portfolio",
      descripcion: "Portfolio personal con diseño minimalista y funcionalidadmoderna",
      foto: fotoMariano,
      ciudad: "La Plata, Buenos Aires",    
      edad: 39,       
      habilidades: ["Clean Code", "Performance", "Minimal"],
      peliculas: ["Your Name", "Spirited Away"],
      musica: ["Jazz", "Classical"]
    },
    { 
      path: "julian", 
      nombre: "Julian Benitez", 
      especialidad: "Professional Developer",
      rol: "Professional Developer",
      descripcion: "Enfoque profesional, clean code y optimización de rendimiento",
      foto: fotoJulian,
      ciudad: "Buenos Aires, Argentina",    
      edad: 22, 
      habilidades: ["React", "Node.js", "Testing"],
      peliculas: ["Coco", "Inside Out"],
      musica: ["Indie", "Electropop"]
    },
    { 
      path: "cecilia", 
      nombre: "Cecilia F", 
      especialidad: "Atencion al detalle",
      rol: "Full Stack Developer",
      descripcion: "Enfocada en crecer en el desarrollo de software, combinando creatividad y curiosidad.",
      foto: fotoCecilia,
      ciudad: "Alta Gracia, Córdoba",    
      edad: 42,
      habilidades: ["CSS", "JS", "PHP"],
      peliculas: ["The Matrix", "Inception"],
      musica: ["Pop", "Rock"]
    },
];

export default integrantes;