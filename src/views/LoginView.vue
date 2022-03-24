<template>
    <div>
        <div class="container introduction">
            <h2>Login</h2>
            <p>Please enter your telephone number and password to log in</p>
        </div>
        <form class="container" action="" @submit.prevent="loginSuccess">
            <label for="phone">Phone</label>
            <input
            v-model="phone" 
            type="tel" 
            name="phone" 
            id="phone"
            placeholder="Phone number"
            required>

            <label for="password">Password</label>
            <input
            v-model="password" 
            type="password" 
            name="password" 
            id="password"
            placeholder="Password"
            required>

            <input type="submit" value="Login">

            <p v-if="message" :class="messageStyle">{{message}}</p>
        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            phone: "",
            password: "",
            message: false,
            messageStyle: "",
            userData: null
        }
    },
    methods: {
        loginSuccess() {
            if(this.loginVerification) {
                this.message = "Success!"
                this.messageStyle = "text-success"
            } else {
                this.message = "The phone number or password is invalid"
                this.messageStyle = "text-danger"
            } 
        }
    },
    computed: {
        loginVerification() {

            let user = this.userData.find(user => user.phone == this.phone && user.password == this.password)

            if(user) {
                return true
            } else {
                return false
            }
        }
    },
    created() {
        let url = "https://6238caec00ed1dbc5ab775ba.mockapi.io/api/users"

        fetch(url)
        .then(response => response.json())
        .then(data => this.userData = data)
    }
}
</script>

<style>
    input {
        border-radius: 500px;
        border: 0;
    }
</style>

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

    input {
        height: 46px;
        border: 1px solid #e3e3e3;
        padding: 16px;
    }

    input[type=submit] {
        padding: 0;
        background: #000;
        color: #fff;
        font-weight: 500;
    }

    form p {
        text-align: center;
    }

</style>