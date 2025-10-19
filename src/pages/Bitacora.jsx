import React from "react";
import Hero from "../components/Hero";
import bitacoraImg from "../assets/img/bitacora.png";

export default function Bitacora() {
  return <div>

      <Hero 
        titulo="Documentación del Proceso"
        descripcion="Seguimiento detallado del desarrollo del proyecto frontend."
        imagen={bitacoraImg}
      />
        
    <section className="bitacora-content">
        <div className="container">
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker">🚀</div>
              <div className="timeline-content">
                <h3>Semana 1: Planificación Inicial y Desarrollo de Estructura Base</h3>
                <p className="timeline-date">1 de Septiembre 2025</p>
                <div className="timeline-description">
                  <h4>Actividades realizadas:</h4>
                  <ul>
                    <li>Definición de estructura del proyecto</li>
                    <li>Asignación de páginas individuales por integrante</li>
                    <li>Selección de temáticas personales para cada miembro</li>
                    <li>Configuración del repositorio GitHub</li>
                    <li>Creación de la página principal (index.html)</li>
                    <li>Desarrollo del sistema de navegación responsivo</li>
                    <li>Implementación del menú hamburguesa para móviles</li>
                    <li>Establecimiento de estilos globales (style.css)</li>
                    <li>JavaScript global (main.js) con funciones compartidas</li>
                  </ul>
                  <h4>Decisiones de diseño:</h4>
                  <ul>
                    <li>Paleta de colores moderna y profesional</li>
                    <li>Tipografías Google Fonts (Poppins y Roboto)</li>
                    <li>Diseño mobile-first con breakpoints específicos</li>
                    <li>Modularización de CSS y JavaScript por integrante</li>
                  </ul>
                  <h4>Tecnologías aplicadas:</h4>
                  <ul>
                    <li>HTML5 semántico con elementos modernos</li>
                    <li>CSS3 con variables personalizadas y flexbox</li>
                    <li>JavaScript ES6+ con arrow functions y destructuring</li>
                    <li>Media queries para responsive design</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">⚡</div>
              <div className="timeline-content">
                <h3>Semana 2: Páginas Individuales</h3>
                <p className="timeline-date">8 de Septiembre 2025</p>
                <div className="timeline-description">
                  <h4>Marcos - Attack on Titan Theme:</h4>
                  <ul>
                    <li>Card interactiva con efecto flip</li>
                    <li>Animaciones CSS3 avanzadas</li>
                    <li>Tema Scout Regiment con paleta temática</li>
                    <li>Efectos hover dinámicos</li>
                  </ul>
                  <h4>Cecilia - Personal Theme:</h4>
                  <ul>
                    <li>Galería de álbumes y películas favoritas</li>
                    <li>Modal con botones interactivos</li>
                    <li>Animaciones con CSS y JS</li>
                  </ul>
                  <h4>Mariano - Personal Portfolio:</h4>
                  <ul>
                    <li>Diseño minimalista y profesional</li>
                    <li>Sección de proyectos y habilidades</li>
                    <li>Optimización de rendimiento</li>
                  </ul>
                  <h4>J. Benítez - Professional Theme:</h4>
                  <ul>
                    <li>Enfoque corporativo y clean</li>
                    <li>Formularios interactivos</li>
                    <li>Técnicas de accesibilidad</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">🛠️</div>
              <div className="timeline-content">
                <h3>Semana 3: Dificultades, Soluciones y Mejoras</h3>
                <p className="timeline-date">15 de Septiembre 2025</p>
                <div className="timeline-description">
                  <h4>Problemas encontrados:</h4>
                  <ul>
                    <li>
                      <strong>Menú hamburguesa:</strong> Incompatibilidad en dispositivos móviles
                    </li>
                    <li>
                      <strong>Conflictos CSS:</strong> Sobreescritura de estilos entre archivos
                    </li>
                    <li>
                      <strong>Responsive design:</strong> Elementos desalineados en breakpoints
                    </li>
                    <li>
                      <strong>Git conflicts:</strong> Merges conflictivos en archivos compartidos
                    </li>
                  </ul>
                  <h4>Soluciones implementadas:</h4>
                  <ul>
                    <li>
                      <strong>JavaScript modular:</strong> Separación de funciones por archivo
                    </li>
                    <li>
                      <strong>CSS specificity:</strong> Uso de clases específicas
                    </li>
                    <li>
                      <strong>Flexbox:</strong> Mejor control de layouts responsivos
                    </li>
                    <li>
                      <strong>Git workflow:</strong> Branches individuales y pull requests
                    </li>
                  </ul>
                  <h4>Mejoras realizadas:</h4>
                  <ul>
                    <li>Navegación adaptativa con menú colapsable</li>
                    <li>Cards responsive que se ajustan al contenedor</li>
                    <li>Animaciones suaves con CSS transitions</li>
                  </ul>
                  <h4>Testing realizado:</h4>
                  <ul>
                    <li>Pruebas en múltiples navegadores</li>
                    <li>Validación de HTML y CSS</li>
                    <li>Test de velocidad de carga</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Nuevas semanas basadas en commits del repositorio */}
            <div className="timeline-item">
              <div className="timeline-marker">🔁</div>
              <div className="timeline-content">
                <h3>Semana 4: Migracion de proyecto a React</h3>
                <p className="timeline-date">6 de Octubre 2025</p>
                <div className="timeline-description">
                  <h4>Inicialización y estructura del proyecto:</h4>
                  <ul>
                    <li>Planificación de la estructura base del proyecto.</li>
                    <li>Desarrollo de componentes reutilizables (Card, Hero, Sidebar, Header, Footer).</li>
                    <li>Estilos css basicos en base a diseño del TP1.</li>
                    <li>Incorporación de rutas y navegación entre páginas. </li>
                    <li>Barra lateral con menú de navegación.</li>
                    <li>Establecimiento de un sistema de temas (claro/oscuro).</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-marker">📌</div>
              <div className="timeline-content">
                <h3>Semana 5: Incorporación de funcionalidades avanzadas</h3>
                <p className="timeline-date">13 de Octubre 2025</p>
                <div className="timeline-description">
                  <h4>Cambios principales:</h4>
                  <ul>
                    <li>Incorporación de lectura de datos desde JSON para contenidos dinámicos.</li>
                    <li>Actualizaciones de estilos y paleta para un look más consistente.</li>
                    <li>Desarrollo de la página <em>Arquitectura</em> y funcionalidades asociadas.</li>
                    <li>Integración de libros desde una API.</li>
                    <li>Actualización de documentación: agregado/ajustes en README y Bitácora.</li>
                    <li>Pequeños fixes y merges para estabilizar la rama principal antes de la entrega.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="lessons-learned">
        <div className="container">
          <h3>Lecciones Aprendidas</h3>
          <div className="lessons-grid">
            <div className="lesson-card">
              <div className="lesson-icon">💡</div>
              <h4>Planificación es Clave</h4>
              <p>
                Una estructura bien definida desde el inicio evita problemas
                mayores durante el desarrollo.
              </p>
            </div>
            <div className="lesson-card">
              <div className="lesson-icon">🤝</div>
              <h4>Trabajo en Equipo</h4>
              <p>
                La comunicación constante y el uso adecuado de Git facilita la
                colaboración efectiva.
              </p>
            </div>
            <div className="lesson-card">
              <div className="lesson-icon">📱</div>
              <h4>Mobile First</h4>
              <p>
                Diseñar primero para móviles simplifica la adaptación a
                pantallas más grandes.
              </p>
            </div>
            <div className="lesson-card">
              <div className="lesson-icon">🔧</div>
              <h4>Debugging Efectivo</h4>
              <p>
                Las herramientas de desarrollo del navegador son esenciales para
                resolver problemas.
              </p>
            </div>
          </div>
        </div>
      </section>
  </div>;
}