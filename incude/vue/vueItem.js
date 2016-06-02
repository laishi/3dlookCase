
var workNames = [ "webgl", "x50", "rose", "ring", "iwatch", "moto", "edge", "i8", "nike", "shave", "house" ];
var workTitles = [ "webglCase", "x50", "rose", "ring", "iwatch", "moto", "edge", "i8", "nike", "shave", "house" ];

var workFolder = "img/workimg/";

var summary = [];





new Vue({
    el: '.pages',
    data: {
        searchString: "",
        selectedCategory: "",
        shoppingCart: [],

        quantity: [
            { "id": "0", "quantity": 1 }, { "id": "1", "quantity": 1 },
            { "id": "2", "quantity": 1 }, { "id": "3", "quantity": 1 },
            { "id": "4", "quantity": 1 }, { "id": "5", "quantity": 1 },
            { "id": "6", "quantity": 1 }, { "id": "7", "quantity": 1 },
            { "id": "8", "quantity": 1 }, { "id": "9", "quantity": 1 }
        ],


        works: [
            {
                "id"    : "0",
                "name"  : workNames[0],
                "title" : workTitles[0],
                "image" : workFolder + workNames[0] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[0] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "1",
                "name"  : workNames[1],
                "title" : workTitles[1],
                "image" : workFolder + workNames[1] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "x51 webgl 3drender",
                "url"   : "assets/webgl/" + workNames[1] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "2",
                "name"  : workNames[2],
                "title" : workTitles[2],
                "image" : workFolder + workNames[2] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[2] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "3",
                "name"  : workNames[3],
                "title" : workTitles[3],
                "image" : workFolder + workNames[3] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[3] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "4",
                "name"  : workNames[4],
                "title" : workTitles[4],
                "image" : workFolder + workNames[4] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[4] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "5",
                "name"  : workNames[5],
                "title" : workTitles[5],
                "image" : workFolder + workNames[5] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[5] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "6",
                "name"  : workNames[6],
                "title" : workTitles[6],
                "image" : workFolder + workNames[6] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[6] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "7",
                "name"  : workNames[7],
                "title" : workTitles[7],
                "image" : workFolder + workNames[7] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[7] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "8",
                "name"  : workNames[8],
                "title" : workTitles[8],
                "image" : workFolder + workNames[8] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[8] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "9",
                "name"  : workNames[9],
                "title" : workTitles[9],
                "image" : workFolder + workNames[9] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[9] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "10",
                "name"  : workNames[10],
                "title" : workTitles[10],
                "image" : workFolder + workNames[10] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[10] + "/index.html",
                "date"  : Date.now(),
            }
        ],


        blog: [
            {
                "id"    : "0",
                "name"  : workNames[0],
                "title" : workTitles[0],
                "image" : workFolder + workNames[0] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[0] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "1",
                "name"  : workNames[1],
                "title" : workTitles[1],
                "image" : workFolder + workNames[1] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "x51 webgl 3drender",
                "url"   : "assets/webgl/" + workNames[1] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "2",
                "name"  : workNames[2],
                "title" : workTitles[2],
                "image" : workFolder + workNames[2] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[2] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "3",
                "name"  : workNames[3],
                "title" : workTitles[3],
                "image" : workFolder + workNames[3] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[3] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "4",
                "name"  : workNames[4],
                "title" : workTitles[4],
                "image" : workFolder + workNames[4] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[4] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "5",
                "name"  : workNames[5],
                "title" : workTitles[5],
                "image" : workFolder + workNames[5] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[5] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "6",
                "name"  : workNames[6],
                "title" : workTitles[6],
                "image" : workFolder + workNames[6] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[6] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "7",
                "name"  : workNames[7],
                "title" : workTitles[7],
                "image" : workFolder + workNames[7] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[7] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "8",
                "name"  : workNames[8],
                "title" : workTitles[8],
                "image" : workFolder + workNames[8] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[8] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "9",
                "name"  : workNames[9],
                "title" : workTitles[9],
                "image" : workFolder + workNames[9] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[9] + "/index.html",
                "date"  : Date.now(),
            },{
                "id"    : "10",
                "name"  : workNames[10],
                "title" : workTitles[10],
                "image" : workFolder + workNames[10] + ".png",
                "tag"   : "webgl web3d 三维产品展示",
                "info"  : "webgl web3d 三维产品展示",
                "url"   : "assets/webgl/" + workNames[10] + "/index.html",
                "date"  : Date.now(),
            }
        ]
    },

    computed: {
        totalPrice: function() {
            var total = 0
            this.shoppingCart.forEach(function(item) {
                total += item.price * item.quantity
            })

            return total
        }
    },

    methods: {
        addToCart: function(id) {
            var id = id
            var index = this.shoppingCart.length

            if(this.products[id].inCart == false) {
                this.products[id].inCart = true
                this.shoppingCart.$set(index, { 
                productId: id,
                quantity: this.quantity[id].quantity,
                name: this.products[id].product,
                price: this.products[id].price,
                })
            }
            else {
                product = _.find(this.shoppingCart, ['productId', id])
                product.quantity = product.quantity + this.quantity[id].quantity
            }
        },

        removeFromCart: function(i, productId) {
            id = productId
            this.products[id].inCart = false
            this.shoppingCart.$remove(i)
        },

        updatData: function(i, productId) {

            console.log(this.products[id]);
        }






    }
});