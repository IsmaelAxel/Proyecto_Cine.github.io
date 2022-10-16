const { createApp } = Vue
 movies = "../json/Film.json"

  createApp({
    data() {
      return {
        url: movies,
        pelis:[]
      }
    },
    methods:{
        fetchData(url){
            fetch(url)
            .then(response => response.json())
            .then(data => this.pelis=data
            )
        }
    },
    created(){
        this.fetchData(this.url)
    }

  }).mount('#app')

