let ticketsData = [
    {
        id: 1,
        name : 'Universal Studio Singapore (USS)',
        imageUrl: 'https://cf.shopee.co.id/file/7afdd3c0ab799b1c69a66c9ad9df3d62',
        price: 50,
        stock: 5
    }, {
        id: 2,
        name : 'Garden By The Bay',
        imageUrl: 'https://cf.shopee.co.id/file/208594e96e90fa00666ceee5835c7176',
        price: 15,
        stock: 12
    }
]

new Vue({
    el: '#catalogue',
    data: {
        tickets: ticketsData,
        cart: []
    },
    
    computed: {
        getGrandTotal: function(){
            let total = 0;
            for(let i in this.cart) {
                total += (this.cart[i].price * this.cart[i].qty)
            }
            return this.pricing(total)
        }
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

        // checkStock: function(id) {
        //     for(let i in this.tickets) {
        //         if(this.tickets[i].id == id) return this.tickets.stock
        //     }
        // },
        
        addToCart: function(item) {
            for(let i in this.tickets) {
                if(this.tickets[i].id == item.id && this.tickets[i].stock) {
                    this.tickets[i].stock --;
                    for(let i in this.cart) {
                        if(this.cart[i].productId == item.id) {
                            this.cart[i].qty ++;
                            return;
                        }
                    }
                    let newItem = {
                        productId: item.id,
                        name: item.name,
                        price: item.price,
                        qty: 1,
                    };
                    this.cart.push(newItem)
                    return
                }
            }
        },

        deleteCartItem: function(id) {
            for(let i in this.cart) {
                if(this.cart[i].productId == id) {
                    for(let j in this.tickets) {
                        if(this.tickets[j].id == id) {
                            this.tickets[j].stock += this.cart[i].qty
                            this.cart.splice(i,1)
                            return
                        }
                    }
                }
            }
        }
    }
})