Vue.component('new-item-comp', {
    template: `
    <div class="modal fade" id="newItemModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Create New User</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body mt-1">
                    <div class="row">
                        <div class="col-md-3">
                            Item Name
                        </div>
                        <div class="col-md-1">
                            :
                        </div>
                        <div class="col-md-8">
                            <input type="text" class="form-control" id="name-input" v-model="name" placeholder="item name">
                        </div>
                    </div>
                    <div class="row mt-1">
                        <div class="col-md-3">
                            Price
                        </div>
                        <div class="col-md-1">
                            :
                        </div>
                        <div class="col-md-8">
                            <input type="text" class="form-control" id="price-input" v-model="price" placeholder="price">
                        </div>
                    </div>
                    <div class="row mt-1">
                        <div class="col-md-3">
                            Stock
                        </div>
                        <div class="col-md-1">
                            :
                        </div>
                        <div class="col-md-8">
                            <input type="text" class="form-control" id="stock-input" v-model="stock" placeholder="stock">
                        </div>
                    </div>
                    <div class="row mt-1">
                        <div class="col-md-3">
                            Image
                        </div>
                        <div class="col-md-1">
                            :
                        </div>
                        <div class="col-md-8">
                            <input type="file" class="form-control-file" id="image-input" @change="takeFile">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" v-on:click="addItem()">
                        Add
                    </button>
                </div>
            </div>
        </div>
    </div>
    `,
    data: function() {
        return {
            name: '',
            price: '',
            stock: '',
            formData: new FormData(),
            file: null,
        }
    },
    computed: {
    },

    methods: {
        takeFile (event) {
            this.file = event.target.files[0];
        },
        addItem: function() {
            this.formData.append('avatar',this.file)
            this.formData.append('name', this.name)
            this.formData.append('price', this.price)
            this.formData.append('stock', this.stock)
            axios.post('http://35.198.215.76/items', this.formData, {
                headers: {apptoken: localStorage.getItem('apptoken')}
            })
            // axios.post('http://35.198.215.76/items') //Online Db
            .then(({data}) => {
                console.log(data)
            })
        }
    }
})