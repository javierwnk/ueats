<template>
  <div class="container">

      <div class="productList">
          <router-link :to="{name: 'product', params: {id: product.id}}" class="productCard">
              <div>
                  <img :src="product.image" :alt="product.name">
              </div>
              <div>
                  <h3>{{product.name}}</h3>
                  <div class="productDetails">
                      <p>${{product.price}}  • </p>
                  </div>
              </div>
          </router-link>
      </div>
  </div>
</template>

<script>
export default {
    name: "ProductList",
    props: {
        product: Object
    }
    
}
</script>

<style scoped>
    .container {
        margin-top: 30px;
    }

    h2 {
        font-weight: 700;
        font-size: 2.25rem;
    }

    h3 {
        font-weight: 400;
        font-size: 18px;
        margin-top: 12px;
        line-height: 24px;
        text-overflow: ellipsis;
    }

    .productList {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;

    }

    a {
        text-decoration: none;
        color: #000;
    }

    .productDetails {
        display: flex;
        column-gap: 5px;
    }

    .productDetails p:last-child {
        color: rgb(107, 107, 107);
    }

</style>