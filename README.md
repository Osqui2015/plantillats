# Vue 3 + Vite Template

Este es un template para proyectos de Vue 3 configurado con Vite, TypeScript, Vue Router, Pinia, pinia-plugin-persistedstate y Tailwind CSS. Utiliza este template para iniciar rápidamente tus proyectos de Vue 3 con una configuración moderna y optimizada.

## Características

- **Vite** - Build tool rápida y optimizada.
- **Vue 3** - Framework progresivo de JavaScript.
- **TypeScript** - Superconjunto tipado de JavaScript.
- **Vue Router** - Enrutador oficial para Vue.js.
- **Pinia** - State Management para Vue.js.
- **pinia-plugin-persistedstate** - Persistencia del estado en Pinia.
- **Tailwind CSS** - Framework CSS utilitario para un diseño rápido.

## Estructura del Proyecto

my-vue-app/
├── index.html
├── package.json
├── postcss.config.js
├── src/
│ ├── assets/
│ ├── components/
│ │ └── HelloWorld.vue
│ ├── main.ts
│ ├── main.css
│ ├── router/
│ │ └── index.ts
│ ├── store/
│ │ └── index.ts
│ ├── views/
│ │ └── Home.vue
│ └── App.vue
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── ... (otros archivos de configuración)

bash
Copiar código

## Uso

### Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git nombre-nuevo-proyecto
cd nombre-nuevo-proyecto
Instalar dependencias
bash
Copiar código
npm install
Ejecutar el servidor de desarrollo
bash
Copiar código
npm run dev
Crear un nuevo proyecto desde el template
Este repositorio está configurado como un template en GitHub. Puedes usar este template para crear un nuevo proyecto directamente desde la interfaz de GitHub. Haz clic en el botón "Use this template" en la página del repositorio.

Opcional: Usar el script de inicialización
Puedes usar el script de inicialización para automatizar la creación de nuevos proyectos:

Ejecutar el script de configuración para crear un nuevo proyecto:

bash
Copiar código
npm run setup nombre-nuevo-proyecto
Personalización
Puedes personalizar este template según tus necesidades modificando los archivos de configuración y agregando las dependencias necesarias.

Configuración de Tailwind CSS
El archivo tailwind.config.js ya está configurado para procesar archivos Vue:

js
Copiar código
// tailwind.config.js
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Configuración de Vue Router
El archivo src/router/index.ts contiene una configuración básica de Vue Router:

typescript
Copiar código
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
Configuración de Pinia con persistencia
El archivo src/store/index.ts configura Pinia con persistencia de estado:

typescript
Copiar código
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

export default pinia
Contribuir
Si encuentras algún problema o tienes sugerencias para mejorar este template, por favor abre un issue o envía un pull request.

Licencia
Este proyecto está bajo la licencia MIT.

r
Copiar código

Este `README.md` proporciona una descripción clara de lo que es el template, cómo usarlo y cómo personalizarlo. También guía a los usuarios sobre cómo clonar el repositorio y configurar un nuevo proyecto usando el template.
