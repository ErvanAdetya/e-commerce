Vue.component('register-comp', {
    template: `
    <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                            First Name
                        </div>
                        <div class="col-md-1">
                            :
                        </div>
                        <div class="col-md-8">
                            <input type="text" class="form-control" id="first_name-input" v-model="first_name" placeholder="first name">
                        </div>
                    </div>
                    <div class="row mt-1">
                        <div class="col-md-3">
                            Last Name
                        </div>
                        <div class="col-md-1">
                            :
                        </div>
                        <div class="col-md-8">
                            <input type="text" class="form-control" id="last_name-input" v-model="last_name" placeholder="last name">
                        </div>
                    </div>
                    <div class="row mt-1">
                        <div class="col-md-3">
                            Email
                        </div>
                        <div class="col-md-1">
                            :
                        </div>
                        <div class="col-md-8">
                            <input type="text" class="form-control" id="email-input" v-model="email" placeholder="email">
                        </div>
                    </div>
                    <div class="row mt-1">
                        <div class="col-md-3">
                            Paswword
                        </div>
                        <div class="col-md-1">
                            :
                        </div>
                        <div class="col-md-8">
                            <input type="password" class="form-control" id="password-input" v-model="password" placeholder="password">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" v-on:click="register()">
                        Register
                    </button>
                </div>
            </div>
        </div>
    </div>
    `,
    data: function() {
        return {
            first_name: '',
            last_name: '',
            email: '',
            password: ''
        }
    },
    computed: {
    },

    methods: {
        register: function() {
            axios.post('http://35.198.215.76/users', {
                email: this.email,
                password: this.password,
                first_name: this.email,
                last_name:this.last_name
            })
            // axios.post('http://35.198.215.76/users') //Online Db
            .then(({data}) => {
                axios.post('http://35.198.215.76/', {
                    email: this.email,
                    password: this.password
                })
                // axios.post('http://35.198.215.76/') //Online Db
                .then(({data}) => {
                    localStorage.setItem('apptoken', data.token)
                })
            })
        }
    }
})