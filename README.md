# 🏰 Hogwarts Sorting Avatar

Una aplicación web interactiva que te permite descubrir a qué casa de Hogwarts perteneces a través de un quiz mágico de personalidad.

## ✨ Características

- **Experiencia inmersiva**: Fondo animado con partículas mágicas flotantes
- **Quiz interactivo**: 6 preguntas cuidadosamente diseñadas para evaluar tu personalidad
- **Transiciones cinematográficas**: Animaciones suaves con Framer Motion
- **Resultado personalizado**: Descubre tu casa con descripción detallada y video
- **Diseño responsive**: Optimizado para escritorio y móvil
- **Tema mágico**: Inspirado en el mundo de Harry Potter con colores y efectos especiales

## 🎯 Objetivo

Crear una experiencia inmersiva que capture la magia del Sombrero Seleccionador de Hogwarts, permitiendo a los usuarios descubrir su casa de manera entretenida y visualmente atractiva.

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca principal para la interfaz de usuario
- **TypeScript** - Tipado estático para mayor robustez
- **Vite** - Herramienta de construcción y desarrollo
- **Framer Motion** - Animaciones y transiciones fluidas
- **react-tsparticles** - Fondo animado con partículas
- **Tailwind CSS** - Framework de estilos utilitarios
- **shadcn/ui** - Componentes de interfaz de usuario
- **Google Fonts** - Tipografías mágicas (Cinzel y Cormorant Garamond)

## 🚀 Cómo ejecutar la aplicación

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd hogwarts-sorting-avatar
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```


## 🏛️ Estructura del Proyecto

```
src/
├── components/           # Componentes React
│   ├── ui/              # Componentes de UI base (shadcn)
│   ├── StartScreen.tsx  # Pantalla de inicio
│   ├── Quiz.tsx         # Componente principal del quiz
│   ├── QuestionCard.tsx # Tarjeta individual de pregunta
│   ├── ProgressBar.tsx  # Barra de progreso
│   ├── LoadingScreen.tsx # Pantalla de carga
│   ├── ResultScreen.tsx # Pantalla de resultados
│   └── ParticlesBackground.tsx # Fondo animado
├── data/
│   └── quizData.ts      # Preguntas y lógica de casas
├── pages/
│   └── Index.tsx        # Página principal
├── hooks/               # Hooks personalizados
├── lib/                 # Utilidades
└── index.css           # Estilos globales y tema
```

## 🎨 Sistema de Diseño

### Paleta de Colores
- **Primario**: Dorado mágico (#DAA520)
- **Fondo**: Azul marino profundo con gradientes
- **Acentos**: Bronce y tonos cálidos
- **Casas**: Colores oficiales de cada casa de Hogwarts

### Tipografías
- **Títulos**: Cinzel (elegante y mágica)
- **Texto**: Cormorant Garamond (legible y clásica)

### Efectos Especiales
- Partículas flotantes doradas
- Bordes mágicos con efectos shimmer
- Animaciones de brillo y flotación
- Transiciones suaves entre pantallas

## 🔮 Posibles Mejoras

### Funcionalidades
- [ ] Sistema de autenticación para guardar resultados
- [ ] Compartir resultados en redes sociales
- [ ] Quiz extendido con más preguntas
- [ ] Modo multijugador para comparar casas
- [ ] Integración con API de Harry Potter
- [ ] Sistema de insignias y logros

### Técnicas
- [ ] Pruebas unitarias con Jest/Vitest
- [ ] Análisis de bundle con webpack-bundle-analyzer
- [ ] Service Worker para funcionamiento offline
- [ ] Optimización de imágenes y lazy loading
- [ ] Internacionalización (i18n)
- [ ] Modo oscuro/claro

### UX/UI
- [ ] Más efectos de partículas temáticos
- [ ] Sonidos ambientales mágicos
- [ ] Animaciones más elaboradas para cada casa
- [ ] Galería de avatares personalizables
- [ ] Tutorial interactivo

## 📱 Responsive Design

La aplicación está completamente optimizada para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Escritorio (1024px+)
- 🖥️ Pantallas grandes (1440px+)

## Autor
Martin Corredor

---

*"Puede que no sea el mago más poderoso, pero soy el más sabio."* - Albus Dumbledore
