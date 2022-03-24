<template>
    <div>
        <div class="container introduction">
            <h2>Sign Up</h2>
            <p>Please provide the information below to register</p>
        </div>
        <form class="container" action="" @submit.prevent="registerSuccess">

            <label for="name">Name</label>
            <input
            v-model="name" 
            type="text" 
            name="name" 
            id="name"
            placeholder="First Name"
            required>

            <label for="surname">Last Name</label>
            <input
            v-model="surname" 
            type="text" 
            name="surname" 
            id="surname"
            placeholder="Last Name"
            required>

            <label for="email">E-mail</label>
            <input
            v-model="email" 
            type="email" 
            name="email" 
            id="email"
            placeholder="E-mail"
            required>

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

             <label for="password">Repeat password</label>
            <input
            v-model="password2" 
            type="password" 
            name="password2" 
            id="password2"
            placeholder="Repeat password"
            required>

            <input type="submit" value="Sign Up">

            <p v-if="numbers" class="text-danger">{{numbers}}</p>
            <p v-if="matchPassword" class="text-danger">{{matchPassword}}</p>

        </form>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            name: "",
            surname: "",
            email: "",
            phone: "",
            password: "",
            password2: "",
            numbers: false,
            matchPassword: false,
        }
    },
    methods: {
        registerSuccess() {
            
            if(!this.passwordHasNumbers) {
                this.numbers = "Password must include numbers."
            } else {
                this.numbers = false
            }

            if(this.password != this.password2) {
                this.matchPassword = "Password doesn't match."
            } else {
                this.matchPassword = false
            }

            if(!this.matchPassword && !this.numbers) {
                this.postUser()
                
            }
            
        },
        postUser () {
            let user = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                password: this.password
            }

            let url = "https://6238caec00ed1dbc5ab775ba.mockapi.io/api/users"

            let post = {
                method: "POST",
                body: JSON.stringify(user, post),
                headers: {
                    'Content-Type': 'application/json'
                }
            }

            fetch(url, post)
            .then(alert("Usuario creado correctamente"))
            
        }

    },
    computed: {
        passwordHasNumbers() {
            return /\d/.test(this.password)
        }
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
        margin: 0;
        padding: 0;
        line-height: 12px;
    }

</style>