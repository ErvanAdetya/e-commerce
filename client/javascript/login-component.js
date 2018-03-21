Vue.component('login-comp', {
    template: `
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Login</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-2">
                            Email
                        </div>
                        <div class="col-md-1">
                            :
                        </div>
                        <div class="col-md-9">
                            <input type="text" class="form-control" id="email-login" v-model="email" placeholder="email">
                        </div>
                    </div>
                    <div class="row mt-1">
                        <div class="col-md-2">
                            Paswword
                        </div>
                        <div class="col-md-1">
                            :
                        </div>
                        <div class="col-md-9">
                            <input type="password" class="form-control" id="password-login" v-model="password" placeholder="password">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary mr-auto" data-dismiss="modal" data-toggle="modal" data-target="#registerModal">
                        Register
                    </button>
                    <button type="button" class="btn btn-primary" v-on:click="login()">
                        Login
                    </button>
                </div>
            </div>
        </div>
    </div>
    `,
    data: function() {
        return {
            email: '',
            password: ''
        }
    },
    computed: {
    },

    methods: {
        login: function() {
            axios.post('http://localhost:3000/', {
                email: this.email,
                password: this.password
            })
            // axios.post('http://35.198.215.76/') //Online Db
            .then(({data}) => {
                localStorage.setItem('apptoken', data.token)
                window.location.href='index.html'
            })
        }
    }
})