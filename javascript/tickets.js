let ticketsData = [
    {
        id: 1,
        name : 'Universal Studio Singapore (USS)',
        imageUrl: 'https://cf.shopee.co.id/file/7afdd3c0ab799b1c69a66c9ad9df3d62',
        price: 50,
        stock: 5,
        category: ['Asia','Singapore','Entertaiment']
    }, {
        id: 2,
        name : 'Garden By The Bay Singapore',
        imageUrl: 'https://cf.shopee.co.id/file/208594e96e90fa00666ceee5835c7176',
        price: 15,
        stock: 12,
        category: ['Asia','Singapore','Nature']        
    }, {
        id: 3,
        name: 'Madame Tussauds Singapore + Marvel 4D Experience',
        imageUrl: 'https://cf.shopee.co.id/file/662ed7ad281668fc5b0034312f212d5f',
        price: 25,
        stock: 15,
        category: ['Asia','Singapore','Entertaiment']        
    }, {
        id: 4,
        name: 'Little Big Club / Thomas Town Johor Bahru - Malaysia',
        imageUrl: 'https://cf.shopee.co.id/file/838617d4f3078c0fc6d579c844247dfe',
        price: 22,
        stock: 17,
        category: ['Asia','Singapore','Entertaiment']        
    }, {
        id: 5,
        name: 'Calypso Cabaret Show Bangkok Thailand',
        imageUrl: 'https://cf.shopee.co.id/file/f0698586ad8e6f0e310f3a03b022f5fd',
        price: 18,
        stock: 13,
        category: ['Asia','Singapore','Entertaiment']        
    }, {
        id: 6,
        name: 'Hello Kitty Land Only Malaysia',
        imageUrl: 'https://cf.shopee.co.id/file/6e0d2612e6d40034dc5f4d20ca55cbca',
        price: 20,
        stock: 12
    }, {
        id: 7,
        name: 'Sunway Lagoon Kuala Lumpur',
        imageUrl: 'https://cf.shopee.co.id/file/c264972efc14b0f48a984bd4c529d52c',
        price: 28,
        stock: 26
    }, {
        id: 8,
        name: 'Snow City Singapore 2 Hours Duration',
        imageUrl: 'https://cf.shopee.co.id/file/d41b32666fc8f28eac49cd849ea7c56d',
        price: 28,
        stock: 26
    }, {
        id: 9,
        name: 'River Safari Singapore + Boat Ride',
        imageUrl: 'https://cf.shopee.co.id/file/b52da7862286d83d1c6d5ce3ef9475e0',
        price: 12,
        stock: 42
    }, {
        id: 10,
        name: 'Singapore Cable Car Round Trip',
        imageUrl: 'https://cf.shopee.co.id/file/cc51819bcfacf245ee5b833f9eb4c24c',
        price: 15,
        stock: 37
    }
]

new Vue({
    el: '#catalogue',
    data: {
        tickets: ticketsData,
        cart: []
    },
    
    computed: {
        countCart: function() {
            if(!this.cart.length) return ''
            let total=0;
            for(let i in this.cart) {
                total += this.cart[i].qty
            }
            return total
        },
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
        },

        getStock: function(id) {
            for(let i in this.tickets) {
                if(this.tickets[i].id == id) {
                    return this.stock
                }
            }
        }
    }
})