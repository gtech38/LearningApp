const flashCardApp = new Vue({
    el: '#mydeck',
    data: {
       deck_name: deck_name
    },

    methods: {
        flipCard: function(card) {
            card.flipped = !card.flipped;
        }
    }
 