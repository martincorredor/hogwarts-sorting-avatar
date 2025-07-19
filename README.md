# 🪄 Hogwarts Sorting Avatar

![](/project-recordings/welcome.png)

Una aplicación web interactiva que te permite descubrir a qué casa de Hogwarts perteneces a través de un quiz mágico de personalidad.


**Puedes ver la aplicación desplegada aquí:** [Hogwarts Sorting](https://hogwarts-sorting-avatar.netlify.app/)

## ✨ Características

- **Experiencia inmersiva**: Fondo animado con partículas mágicas flotantes.
- **Quiz interactivo**: 6 preguntas cuidadosamente diseñadas para evaluar tu personalidad.
- **Transiciones cinematográficas**: Animaciones suaves con Framer Motion.
- **Loading animado**: Animaciones para mejorar la experiencia de usuario en tiempos de espera.
- **Resultado personalizado con IA**: Descubre tu casa con una descripción detallada y un video **generado con la API de HeyGen**, que utiliza IA para crear mensajes únicos según tu casa en Hogwarts.
- **Tema mágico**: Inspirado en el mundo de Harry Potter con colores y efectos especiales.
- **Diseño responsive**: La aplicación está completamente optimizada para:
   - 📱 Móviles (320px+)
   - 📱 Tablets (768px+)
   - 💻 Escritorio (1024px+)
   - 🖥️ Pantallas grandes (1440px+)



## 🎯 Objetivo
Crear una experiencia inmersiva que capture la magia del Sombrero Seleccionador de Hogwarts, permitiendo a los usuarios descubrir su casa de manera entretenida y visualmente atractiva.


## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca principal para la interfaz de usuario.
- **TypeScript** - Tipado estático para mayor robustez.
- **Vite** - Herramienta de construcción y desarrollo.
- **Framer Motion** - Animaciones y transiciones fluidas.
- **react-tsparticles** - Fondo animado con partículas.
- **Tailwind CSS** - Framework de estilos utilitarios.
- **shadcn/ui** - Componentes de interfaz de usuario.
- **HeyGen API** - Generación de videos personalizados con inteligencia artificial.
- **Google Fonts** - Tipografías mágicas (Cinzel y Cormorant Garamond).

## 🚀 Cómo ejecutar la aplicación
To run this project, after cloning this repository, install it locally using npm:

```
$ cd hogwarts-sorting-avatar
$ npm install
$ npm run dev
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
├── services/
│   └── heygenService.ts  # Funciones para consumir la API de HeyGen
├── data/
│   └── quizData.ts      # Preguntas y lógica de casas
├── pages/
│   └── Index.tsx        # Página principal
├── hooks/               # Hooks personalizados
├── lib/                 # Utilidades
└── index.css           # Estilos globales y tema
```

## 🔮 Posibles Mejoras

### Funcionalidades
- [ ] Sistema de autenticación para guardar resultados
- [ ] Compartir resultados en redes sociales
- [ ] Quiz extendido con más preguntas
- [ ] Modo multijugador para comparar casas

### Técnicas
- [ ] Pruebas unitarias con Jest/Vitest
- [ ] Internacionalización (i18n)
- [ ] Modo oscuro/claro

### UX/UI
- [ ] Sonidos ambientales mágicos
- [ ] Galería de avatares personalizables
- [ ] Tutorial interactivo

## 🖼️ App

| ![](/project-recordings/question.png) | ![](/project-recordings/results.png) |
| :------------------------------------------: | :--------------------------------------: |
| ![](/project-recordings/mobile%201.png) |   ![](/project-recordings/mobile%202.png)    |


## Autor
**Martin Corredor** - [martincorredor](https://github.com/martincorredor)

---

*"Puede que no sea el mago más poderoso, pero soy el más sabio."* - Albus Dumbledore
