Vue.component('cart-comp', {
    template: `
    <div class="modal fade" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

                <div class="modal-header">
                    <h4 class="modal-title">My Cart</h4>
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                </div>
                    
                <div class="modal-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Item Name</th>
                                <th>Qty</th>
                                <th>Total</th>
                                <th>Delete</th>
                            </tr>
                        </thead>

                    <tbody v-for="item in cart">
                        <tr>
                            <td>{{item.name}}</td>
                            <td>{{item.qty}}</td>
                            <td>{{pricing(item.price*item.qty)}}</td>
                            <td><button type="button" class="btn btn-outline-danger" v-on:click="deleteCartItem(item.productId)"><i class="fas fa-trash-alt"></i></button></td>
                        </tr>
                    </tbody>

                    <tbody>
                        <tr>
                            <th class="text-right mb-0">Grand Total</th>
                            <td>:</td>
                            <td>{{getGrandTotal}}</td>
                        </tr>
                    </tbody>

                    </table>
                </div>
                    
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary mr-auto" data-dismiss="modal">
                        < Continue Shopping
                    </button>
                    <button type="button" class="btn btn-success" @click="checkout">
                        Checkout >
                    </button>
                </div>
            </div>
        </div>
    </div>
    `,
    props: ['cart', 'tickets', 'pricing'],
    data () {
        return {

        }
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
        deleteCartItem: function(_id) {
            for(let i in this.cart) {
                if(this.cart[i].productId == _id) {
                    for(let j in this.tickets) {
                        if(this.tickets[j]._id == _id) {
                            let tempCart = this.cart.slice()
                            let tempTickets = this.tickets.slice()
                            tempTickets[j].stock += tempCart[i].qty;
                            tempCart.splice(i,1)
                            this.$emit('updatecart', tempCart)
                            this.$emit('updatetickets', tempTickets)
                            return
                        }
                    }
                }
            }
        },

        checkout: function() {
            let tickets = JSON.parse(localStorage.getItem('tickets'));
            let cart = JSON.parse(localStorage.getItem('cart'));
            localStorage.removeItem('cart')
            window.location.href='tickets.html';   
        }
    }
})