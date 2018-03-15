Vue.component('head-comp', {
    template: `
    <header>
        <nav class="navbar navbar-expand-sm fixed-top navbar-light navi">
            <a class="navbar-brand" href="index.html"><h3>Travey</h3></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html"><i class="fas fa-home"></i> Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="tickets.html">Tickets</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Routes</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Promotion</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Category
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Asia</a>
                            <a class="dropdown-item" href="#">America</a> 
                            <a class="dropdown-item" href="#">Australia</a>
                            <!-- <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a> -->
                        </div>
                    </li>
                </ul>
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="fas fa-user"></i> User</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="" data-toggle="modal" data-target="#myModal">
                            <i class="fas fa-shopping-cart"></i> Cart  <span class="badge badge-success">{{countCart}}</span>
                        </a>
                    </li>
                </ul>
            </div>   
        </nav>
    </header>
    `,
    props: ['cart'],
    computed: {
        countCart: function() {
            // console.log()
            // if(!this.cart.length) return ''
            let total=0;
            for(let i in this.cart) {
                total += this.cart[i].qty
            }
            return total
        },
    }
})