/* Descrizione:
Attraverso una chiamata ajax all’API di boolean
 https://flynn.boolean.careers/exercises/api/array/music 
 avremo a disposizione una decina di dischi musicali.
Utilizzando vue, stampiamo a schermo una card per ogni album.
BONUS: Creare una select con tutti i generi dei dischi. 
In base a cosa scegliamo nella select, vedremo i corrispondenti cd.
BONUS 2: Ordinare i dischi per anno di uscita. */

const app = new Vue ({

    el: "#app",

    data: {
        url: "https://flynn.boolean.careers/exercises/api/array/music",
        albums: [],
        genres: [],
        genre: "",
        selected: "Choose a genre...",
        
    },

    methods: {

    },

    computed: {
        

    },

    mounted() {

        axios
        .get(this.url)
        .then(response => {
            const albums = response.data.response;
            this.albums = albums;

            this.albums.forEach(album  => {
                this.genres.push(album.genre);
                console.log(this.genres); 
            });


        })
        .catch(e => {
            console.error(e);
        })
        
      
    },

})