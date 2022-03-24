<template>
  <div class="container introduction">
    <h2>Select an option:</h2>
    <button @click="showSection(1)">Create a new product</button>
    <button @click="showSection(2)">View Products</button>

    <div :style="alta">
      <h3>{{ text }}</h3>
      <form class="container" action="" @submit.prevent="formAction">
        <label for="idProduct">Id</label>
        <input
          v-model="idProduct"
          type="number"
          name="idProduct"
          id="idProduct"
          placeholder="idProduct"
          required
          style="display: none"
        />

        <label for="name">Name</label>
        <input
          v-model="name"
          type="text"
          name="name"
          id="name"
          placeholder="Product Name"
          required
        />

        <label for="price">Price</label>
        <input
          v-model="price"
          type="number"
          name="price"
          id="price"
          placeholder="Price"
          required
        />

        <label for="image">Image URL</label>
        <input
          v-model="image"
          type="text"
          name="image"
          id="image"
          placeholder="Image URL"
          required
        />

        <label for="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          v-model="description"
          required
          placeholder="Description"
        ></textarea>

        <input type="submit" :value="buttonValue" />
      </form>
    </div>

    <div :style="list">
      <h3>Product List</h3>
      <div class="container-fluid productList">
        <div class="productCard" v-for="product of products" :key="product.id">
          <div>
            <img :src="product.image" :alt="product.name" />
          </div>
          <div>
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p>${{ product.price }}</p>
          </div>
          <div>
            <button @click="completeForm(product.id)">Edit</button>
            <button @click="deleteProduct(product.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AdminView",
  data() {
    return {
      products: [],
      optionValue: 1,
      alta: "display: none",
      list: "display: block",
      text: "Create a new product",
      idProduct: "",
      name: "",
      price: "",
      image: "",
      description: "",
      buttonValue: "Create",
    };
  },
  methods: {
    showSection(value) {
      if (value == 1 || value == 3) {
        this.alta = "display: block";
        this.list = "display: none";
      } else {
        this.alta = "display: none";
        this.list = "display: block";
      }

      if (value == 3) {
        this.optionValue = 2;
      } else {
        this.optionValue = 1;
        this.text = "Create a new product";
        this.buttonValue = "Create";
      }
    },
    formAction() {
      if (this.optionValue == 1) {
        this.createProduct();
      } else {
        this.editProduct();
      }
    },
    createProduct() {
      let url = "https://6238caec00ed1dbc5ab775ba.mockapi.io/api/products";

      let newProduct = {
        id: this.products.length + 1,
        name: this.name,
        price: this.price,
        image: this.image,
        description: this.description,
      };

      let post = {
        method: "POST",
        body: JSON.stringify(newProduct, post),
        headers: {
          "Content-Type": "application/json",
        },
      };

      fetch(url, post)
        .then(alert("Producto creado correctamente"))
        .then(this.products.push(newProduct))
        .then(this.formReset());
    },
    completeForm(id) {
      let product = this.products.find((product) => product.id == id);
      (this.text = "Edit product"),
        (this.buttonValue = "Edit"),
        (this.idProduct = product.id),
        (this.name = product.name),
        (this.price = product.price),
        (this.image = product.image),
        (this.description = product.description);

      this.showSection(3);
    },
    editProduct() {
      let product = {
        id: this.idProduct,
        name: this.name,
        price: this.price,
        image: this.image,
        description: this.description,
      };

      let put = {
        method: "PUT",
        body: JSON.stringify(product, put),
        headers: {
          "Content-Type": "application/json",
        },
      };

      let url =
        "https://6238caec00ed1dbc5ab775ba.mockapi.io/api/products/" +
        this.idProduct;

      fetch(url, put)
        .then(alert("Producto updateado"))
        .then(() => {
          let index = this.products.findIndex(
            (product) => product.id == this.idProduct
          );
          this.products[index] = product;
          this.optionValue = 1;
        })
        .then(() => {
          this.formReset();
          this.showSection(1);
        });
    },
    deleteProduct(id) {
      let url =
        "https://6238caec00ed1dbc5ab775ba.mockapi.io/api/products/" + id;

      let deleteHeader = {
          method: "DELETE",
          headers: {
          "Content-Type": "application/json",
        },
      }

      fetch(url, deleteHeader)
      .then(alert("Producto updateado"))
      .then(() => {
          let index = this.products.findIndex(
            (product) => product.id == id
          );
          this.products.splice(index, 1)
      })
    },
    formReset() {
        this.name = "",
        this.price = "",
        this.image = "",
        this.description = "";
    },
  },
  created() {
    let url = "https://6238caec00ed1dbc5ab775ba.mockapi.io/api/products";

    fetch(url)
      .then((response) => response.json())
      .then((data) => (this.products = data));
  },
};
</script>

<style scoped>
.introduction {
  margin-top: 30px;
  text-align: center;
}

form {
  max-width: 500px;
  display: flex;
  flex-flow: column wrap;
  row-gap: 16px;
}

label {
  display: none;
}

textarea {
  border: 1px solid #e3e3e3;
  padding: 16px;
}

input {
  height: 46px;
  border: 1px solid #e3e3e3;
  padding: 16px;
}

input[type="submit"] {
  padding: 0;
  background: #000;
  color: #fff;
  font-weight: 500;
}

form p {
  text-align: center;
}

.productList {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.productCard {
  width: 200px;
}

.productCard img {
  max-height: 200px;
}
</style>