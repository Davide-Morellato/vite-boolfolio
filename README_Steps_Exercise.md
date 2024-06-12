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
