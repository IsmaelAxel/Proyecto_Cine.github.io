if (document.getElementById("app")) {
    const { createApp } = Vue

    createApp({
        data() {
            return {
                favoritos: [],
                errored: false,
                loading: true,
                url: "http://localhost:5000/favoritos"
                }
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.favoritos = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(favorito) {
                const url = 'http://localhost:5000/favoritos/' + favorito;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            }
        },
        created() {
            this.fetchData(this.url)
        }
    }).mount('#app')
}
