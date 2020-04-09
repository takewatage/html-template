
const vue = new Vue({
    el: '#app',

    data: function() {
        return {
            isModal: false,
            modalSearch: ''
        }
    },

    methods: {
        changeModal: function() {
            console.log("changeModal")
            this.isModal = !this.isModal
        }
    }
})
