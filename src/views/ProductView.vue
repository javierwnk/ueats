<template>
  <div>
    <div class="productHeader" :style="{ 'background-image': 'url(' + product.image + ')' }">
    </div>

    <div class="productContent">
        <h2> {{product.name}}</h2>
        <p class="description"> {{product.description}}</p>
        <p class="price">$ {{product.price}}</p>

        <div class="buttonsContainer">
            <button class="qtyButtons" @click="qty > 1 ? qty-- : qty = 1 ">-</button>

            <input type="number" name="qty" id="qty" :value="qty">
            <button class="qtyButtons" @click="qty++">+</button>

            <button class="addToCartBtn" @click="loadCart(product)">Add to cart</button> 
        </div>
    </div>

  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
    name: "ProductView",
    data() {
        return {
            qty: 1,
        }
    },
    computed: {
        ...mapState([
            "product"
        ])
    },
    methods: {
        ...mapActions([
            "getProduct"
        ]),
        ...mapMutations([
            "addToCart"
        ]),
        loadCart(prod) {
            let product = {...prod, qty: this.qty}
            this.addToCart(product)
        }
    },
    beforeMount() {
        this.getProduct(this.$route.params.id)
    }
}
</script>

<style scoped>
.productHeader {
    height: 220px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.productContent {
    display: grid;
    grid-template-areas: "h2 price"
    "description buttonsContainer";
    justify-content: space-around;
    align-items: center;

    margin-top: 24px;
}

h2 {
    grid-area: h2;
    line-height: 0;
    margin: 0;
}

.price {
    grid-area: price;
    color: rgb(42, 42, 42);
    font-weight: 700;
    font-size: 24px;
    margin: 0;
}

.description {
    grid-area: description;
}

.buttonsContainer {
    grid-area: buttonsContainer
}

.qtyButtons {
    width: 24px;
    height: 36px;
    border: 1px solid #eee;
    background: #eee;
}


input {
    border: 1px solid #eee;
    width: 40px;
    height: 36px;
    text-align: center;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

.addToCartBtn {
    border: 1px solid black;
    background: black;
    color: white;
    width: 100px;
    height: 36px;

}

</style>