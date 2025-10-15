import fotoMarcos from '../assets/img/marcos.jpeg';
import fotoMariano from '../assets/img/mariano.png';
import fotoJuan from '../assets/img/juan.png';
import fotoCecilia from '../assets/img/cecilia.jpg';

const integrantes = [
    { 
      path: "marcos", 
      nombre: "Marcos Martin", 
      especialidad: "Desarrollador Full Stack & Scout",
      rol: "Defender la humanidad con código",
      descripcion: "Especializado en Attack on Titan con animaciones avanzadas",
      foto: fotoMarcos,
      ciudad: "Coronel Du Graty - Chaco",    
      edad: 20,                   
      habilidades: ["JavaScript", "HTML","CSS3", "Node.js" , "Express" , "MySQL" , "PostgreSQL"],
      peliculas: ["Interstellar", "Belleza Americana", "Harry Potter", "Millon Dollar Baby" ],
      musica: ["Queen", "Nirvana", "Los Redonditos de Ricota", "Madonna", "Billie Eilish", "Lady Gaga", "Daft Punk", "David Guetta", "Calvin Harris", "Tiësto" ] 
    },
    { 
      path: "mariano", 
      nombre: "Mariano Javier", 
      especialidad: "Desarrollador de aplicaciones",
      rol: "Codeando entre siestas. Este proyecto se ve bien... por ahora no pregunten por el código.",
      descripcion: "Portfolio personal con diseño minimalista y funcionalidadmoderna",
      foto: fotoMariano,
      ciudad: "La Plata, Buenos Aires",    
      edad: 39,       
      habilidades: ["JavaScript", "HTML","CSS3","C#", "JAVA"],
      peliculas: ["El Padrino (1972)", "The Silence of the Lambs (1991)", "Interstellar (2014)"],
      musica: ["Depeche Mode",  "Air Supply","New Order"]
    },
    { 
      path: "julian", 
      nombre: "Julian Benitez", 
      especialidad: "Desarrollador Profesional",
      rol: "Professional Developer",
      descripcion: "Enfoque profesional, clean code y optimización de rendimiento",
      foto: fotoJuan,
      ciudad: "Buenos Aires, Argentina",    
      edad: 22, 
      habilidades: ["Java / Springboot", "Bash" , "Python"],
      peliculas: ["Harry Potter", "Matrix","Duro de Matar"],
      musica: ["Pink Floyd - The Dark Side of the Moon","Patricio Rey y sus Redonditos de Ricota","Led Zeppelin","Queen","AC/DC"]
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
      habilidades: ["Atención al detalle","Autodidacta", "Cantar","Cocinar"],
      peliculas: ["Harold and Maude", "La Belle Verte","Jules et Jim"],
      musica: ["Pink Floyd- The Dark Side of the Moon", "The Beatles - Abbey Road","Patricio Rey y sus Redonditos de Ricota - Oktubre","Pescado Rabioso - Pescado 2"]
    },
];

export default integrantes;