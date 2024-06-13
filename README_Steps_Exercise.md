1. Creo la cartella vite-boofolio -> npm create vite@latest [nome: vite-boolfolio; Framework: vue; Variant: js]
2. installo i pacchetti del node_modules: npm i
3. installo axios: npm install axios
4. installo la dipendenza sass: npm install -D sass
   Lo sposto nella cartella style (creata) di src

5. In App.vue cancello tutto e nello script eseguo l'export default così da stampare in pagina un messaggio

6. Creo un file Main.vue in cui importo axios.
   Nel return di data() dichiaro la proprietà projects e gli assegno un array vuoto.

7. Importo il Main.vue in App.vue:
nello script: import Main from './components/Main.vue';
export default{ components: { Main, }, .... }
nel template (all'interno del div): <Main />

8. In methods dichiaro una funzione fetchProjects() per effettuare la chiamata axios.get all'url http://127.0.0.1:8000/api/projects e con then mi recupero i dati che pusho poi nel nell'array vuoto projects: []

9. Nel created() richiamo la funzione fetchProjects(), cosicché i dati possano essere recuperati quando l'applicativo viene creato

10. Nel template stampo i valori che mi rimanda l'array projects

11. Creo il components: ProjectCard che importo nel Main.vue (in export default)

12. Creo la props, per far comunicare il padre (Main) con il figlio (ProjectCard), in cui dichiaro il type: Object che comunica al padre il tipo di dato che deve ritornare

13. Commento il template predecedente e sostituisco con la ProjectCard, che mi sono importato nello script e come components nell'export default.

14. Applico il ciclo v-for al componente nel template, applicando il v-bind sulla props, assegnandogli come valore l'elemento dell'array

15. BONUS: Nel Main.vue, nell'axios.get, dopo l'url, dichiaro params a cui assegno come proprietà la variabile dichiarata nel return di data() [currentPage: 1 (valore di default)]
    Nella sua arrow function, mi ricavo il valore dell'ultima pagina (last_page) che assegno alla variabile pageNumber: null (perchè la prima pagina non ha niente precedentemente), dichiarata in return di data().
    Nei methods mi creo una nuova funzione a cui assegno una paramtro "n" [nextPage(n)] che collego alla variabile currentPage dichiarata nel return di data() & mi richiamo la
    funzione fetchProjects() affinché, al cambio pagina, mi restituisca i nuovi dati
    Nel template utilizzo la direttiva v-for per ciclare la function nextPage(n) prendendo come singolo elemento "n", e tramite la direttiva on-click (@click) cambio pagina.

16. Nel ProjectCard, grazie all'eadger loading nel ProjectController nella repo laravel-api, mi stampo in pagina type & technology.
    Per Type: se esiste stamparlo, altrimenti --
    Per Technology, essendo un array, applico la direttiva v-for per ciclarlo e ottenerne il singolo nome della tech associato al progetto.


-- PARTE 2 --
17. Installo Vue-Router [npm install vue-router@4]

18. In Main.js importo:
import { createWebHistory, createRouter } from 'vue-router'

import AppHome from './components/pages/AppHome.vue'
import AppPortfolio from './components/pages/AppPortfolio.vue'
import AppContact from './components/pages/AppContact.vue'

const routes = [
  { path: '/', component: AppHome },
  { path: '/portfolio', component: AppPortfolio },
  { path: '/contact', component: AppContact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

19. Registro il plug-in router in Main.js: createApp(App).use(router).mount('#app')

20. Sposto ciò che ho in App.vue in AppPortfolio.vue (cambiando i vari percorsi), e incollo da Vue-Router:
<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/portfolio">Go to Portfolio</RouterLink>
    <RouterLink to="/contact">Go to contact</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>

21. In AppContact creo un form di compilazione

22. BONUS 1: creo il file AppProject.vue e lo importo, dichiarandone la rotta parametrica, nel Main.js
23. In ProjectCard inserisco un routerlink (nel Name Project) a cui "aggancio" la rotta parametrica e gli definisco i parametri di indirizzamento:
<RouterLink :to="{name: 'project.show', params:{slug: singleProject.slug}}">
24. Nel File AppProject.vue inserisco nel template ciò che voglio visualizzare richiamando la variabile $route che deve contenere la proprietà params con la proprietà slug, ed un bottone che mi permette di tornare indietro a cui assegno una funzione al @click
<template>
    <div>
        <p>
            {{ $route.params.slug }}
        </p>

        <button @click="goBack">
            Back to the Future
        </button>
    </div>

</template>

<script>
    export default {
        methods:{
            goBack(){
                this.$router.back()
            }
        }
    }
</script>

25. Ho spostato il codice dal main.js al router.js; esportandomelo (export defaul router) ed importandolo in main.js (import router from './router')

26. BONUS 2: in Laravel-api ho dichiarato una nuova rotta parametrica API, dopo che nel ProjectController ho dichiarato una nuova funzione che mi restiusse il singolo progetto.
Nell'AppProject ho dichiarato n methods dichiaro una funzione fetchProjects() per effettuare la chiamata axios.get all'url http://127.0.0.1:8000/api/projects/" + this.$route.params.slug (ho contatenato l'oggetto route che contiene i parametri di riferimento) e con then mi recupero i dati che pusho poi nel nell'array vuoto project: [] (dichiarato nel return di data())
Nel created() richiamo la funzione fetchProjects(), cosicché i dati possano essere recuperati quando l'applicativo viene creato
Nel template stampo in pagina i valori {{project.proprietà}}

