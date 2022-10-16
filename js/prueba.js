const { createApp } = Vue

  createApp({
    data() {
      return {
        url:"../json/Film.json",
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