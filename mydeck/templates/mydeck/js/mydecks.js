Vue.http.headers.common['X-CSRFToken'] = "{{ csrf_token }}";
new Vue({
		el: ‘#starting’,
		delimiters: ['{','}'],
		data: {
		decks: [],
		loading: true,
		currentDeck: {},
		message: null,
		newDeck: { 'deck_name': null},
	},
	mounted: function() {
		this.getDecks();
	},
	methods: {
		getDecks: function() {
			this.loading = true;
			this.$http.get('/api/decks')
			.then((response) => {
				this.decks = response.data;
				this.loading = false;
			})
			.catch((err) => {
				this.loading = false;
				console.log(err);
			})
		},

		addDeck: function(){
			this.loading = true;
			this.$http.post('/api/decks/create', this.newDeck)
			.then((response) => {
				this.loading = true;
				this.getDecks();
			})
			.catch((err) => {
				this.loading = false;
				console.log(err);
			})

	},

	}
});


