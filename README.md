# Proyecto Aprendizaje

## Descripción
Este proyecto es una plataforma educativa interactiva diseñada para enseñar conceptos básicos de lenguaje y comunicación. La plataforma está estructurada en diferentes niveles de dificultad, desde principiante hasta avanzado, y utiliza tecnologías web modernas para crear una experiencia de aprendizaje atractiva y efectiva.

## Tecnologías Utilizadas
- **Frontend**:
  - HTML5 - Estructura de páginas web
  - CSS3 - Estilos y animaciones
  - JavaScript - Interactividad y lógica
  - Bootstrap 5.1.3 - Framework CSS para diseño responsivo
  - Bootstrap Icons 1.11.3 - Iconografía
  - Animate.css 4.1.1 - Animaciones predefinidas
  - Anime.js 4.0.1 - Animaciones personalizadas
  - Axios 1.7.9 - Cliente HTTP para peticiones

- **Backend**:
  - Node.js - Entorno de ejecución
  - npm - Gestor de paquetes

## Estructura Completa del Proyecto
```
PROYECTO_APRENDIZAJE/
├── index.html              # Página principal de la aplicación
├── index.js               # Lógica principal y funcionalidades core
├── index.css              # Estilos globales de la aplicación
├── package.json           # Configuración de dependencias y scripts
├── node_modules/          # Dependencias instaladas
├── .vscode/              # Configuración de Visual Studio Code
│   └── settings.json     # Configuraciones específicas del editor
│
└── startbootstrap-freelancer-gh-pages/    # Plantilla Bootstrap modificada
    ├── First.html         # Página de bienvenida
    ├── principiante.html  # Contenido nivel principiante
    ├── intermedio.html    # Contenido nivel intermedio
    ├── avanzado.html      # Contenido nivel avanzado
    ├── mam.html           # Página de recursos adicionales
    │
    ├── js/               # Directorio de JavaScript
    │   ├── indexJS/      # Scripts de la página principal
    │   │   ├── main.js   # Funcionalidades principales
    │   │   └── ui.js     # Interfaz de usuario
    │   ├── leccionesJS/  # Scripts de las lecciones
    │   │   ├── avanzado/    # scripts de las lecciones
    │   │   ├── intermedio   # scripts de las lecciones
    │   │   └── principiante # scripts de las lecciones
    │   └── node_modules/ # Dependencias JavaScript
    │
    ├── css/              # Directorio de estilos
    │   ├── styles.css    # Estilos principales (238KB)
    │   └── registro.css  # Estilos para sistema de registro (2.6KB)
    │
    └── assets/           # Recursos estáticos
        ├── img/          # Imágenes del proyecto
        │   ├── logo/     # Logos y branding
        │   ├── principiante/  # Imágenes para nivel principiante
        │   │   ├── VOCALES/   # Imágenes de vocales
        │   │   └── Letras2.0/ # Imágenes del abecedario
        │   ├── intermedio/    # Imágenes para nivel intermedio
        │   └── avanzado/      # Imágenes para nivel avanzado
        └── fonts/        # Fuentes tipográficas
```

## Niveles de Contenido

### 1. Nivel Principiante (`principiante.html`)
- **Sección Vocales**
  - Presentación visual de vocales
  - Reproducción de sonidos
  - Navegación interactiva
  - Ejercicios de reconocimiento

- **Sección Abecedario**
  - Presentación de letras
  - Sistema de navegación
  - Reproducción de sonidos
  - Ejercicios prácticos

- **Sección Ejercicios**
  - Actividades interactivas
  - Evaluación de progreso
  - Retroalimentación inmediata

### 2. Nivel Intermedio (`intermedio.html`)
- Contenido de nivel medio
- Ejercicios más complejos
- Integración de conceptos
- Evaluaciones periódicas

### 3. Nivel Avanzado (`avanzado.html`)
- Contenido experto
- Ejercicios avanzados
- Proyectos prácticos
- Evaluaciones finales

## Características Técnicas

### Interfaz de Usuario
- Diseño responsivo adaptado a todos los dispositivos
- Animaciones suaves y atractivas
- Navegación intuitiva
- Sistema de retroalimentación visual

### Funcionalidades
- Reproducción de audio para pronunciación
- Sistema de navegación entre lecciones
- Ejercicios interactivos
- Sistema de progreso y evaluación
- Registro de usuarios
- Almacenamiento de progreso

### Estilos y Animaciones
- Gradientes dinámicos
- Animaciones de flotación
- Transiciones suaves
- Efectos de hover
- Diseño adaptable

## Dependencias Principales
- **Bootstrap 5.1.3**: Framework CSS para diseño responsivo
- **Bootstrap Icons 1.11.3**: Iconografía moderna
- **Animate.css 4.1.1**: Biblioteca de animaciones
- **Anime.js 4.0.1**: Animaciones personalizadas
- **Axios 1.7.9**: Cliente HTTP para peticiones
- **Node.js**: Entorno de ejecución JavaScript

## Instalación
1. Clona este repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
```

2. Navega al directorio del proyecto:
```bash
cd PROYECTO_APRENDIZAJE
```

3. Instala las dependencias:
```bash
npm install
```

## Uso
1. Abre el archivo `index.html` en tu navegador web
2. Navega a través de los diferentes niveles de contenido
3. Interactúa con las lecciones y ejercicios
4. Utiliza los controles de navegación para moverte entre secciones
5. Completa los ejercicios para evaluar tu progreso

## Estructura de Archivos CSS
- `styles.css` (238KB):
  - Estilos globales
  - Componentes principales
  - Animaciones
  - Media queries
  - Utilidades

- `registro.css` (2.6KB):
  - Estilos de formularios
  - Validación visual
  - Mensajes de error
  - Estilos de autenticación

## Estructura de Archivos JavaScript
- `index.js`: Lógica principal de la aplicación
- `js/indexJS/`:
  - `main.js`: Funcionalidades core
  - `ui.js`: Interfaz de usuario
- `js/leccionesJS/`: Scripts de las lecciones que contiene el proyecto

## Contribución
Si deseas contribuir al proyecto:
1. Haz un Fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia
Este proyecto está bajo la Licencia MIT.

## Contacto
Si tienes alguna pregunta o sugerencia, no dudes en contactarnos.
