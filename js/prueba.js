const { createApp } = Vue

  createApp({
    data() {
      return {
        url: "https://my-json-server.typicode.com/IsmaelAxel/API_Pelis/peliculas",
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

