new Vue({
    el: '#catalogue',
    data: {
        tickets: [],
        cart: [],
        admin: null,
    },
    
    computed: {
    },

    methods: {
        pricing: function(price) {
            return '$'+price
        },

        getName: function(name) {
            if(name.length > 33) return name.slice(0, 30) + '...';
            else {
                for(let i = name.length; i<33; i++) {
                    name += ' '
                }
                return name
            }
        },
        
        addToCart: function(item) {
            for(let i in this.tickets) {
                if(this.tickets[i]._id == item._id && this.tickets[i].stock) {
                    this.tickets[i].stock --;
                    for(let i in this.cart) {
                        if(this.cart[i].productId == item._id) {
                            this.cart[i].qty ++;                          
                            localStorage.setItem("cart", JSON.stringify(this.cart));
                            localStorage.setItem("tickets", JSON.stringify(this.tickets));
                            return;
                        }
                    }
                    let newItem = {
                        productId: item._id,
                        name: item.name,
                        price: item.price,
                        qty: 1,
                    };
                    this.cart.push(newItem)
                    localStorage.setItem("cart", JSON.stringify(this.cart));
                    localStorage.setItem("tickets", JSON.stringify(this.tickets));
                    return
                }
            }
        },

        getStock: function(_id) {
            for(let i in this.tickets) {
                if(this.tickets[i]._id == _id) {
                    return this.stock
                }
            }
        }
    },

    created: function() {
        axios.get('http://localhost:3000/items')  //Local test
        // axios.get('http://35.198.215.76/items') //Online Db
        .then((response) => {

            if(localStorage.getItem('tickets')) {
                this.tickets = JSON.parse(localStorage.getItem('tickets'));
            } else {
                console.log(response)
                this.tickets = response.data.items;
                localStorage.setItem("tickets", JSON.stringify(this.tickets));
            }

            if(localStorage.getItem('cart')) {
                this.cart = JSON.parse(localStorage.getItem('cart'))
            } else {
                this.cart = [];
            }
        })
        .catch((err) => {
            console.log(err)
        });

        axios.get('http://localhost:3000/verifyAdmin/', {headers: {apptoken: localStorage.getItem('apptoken')}})
        .then(({data}) => {
            this.admin = data;
        })
    }
})