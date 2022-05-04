<template>
    <div class="container">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h1 class="title">My Account</h1>
            </div>

            <div class="column is-12">
                <button @click="signout()" class="button is-danger">Sign Out</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'MyAccount',
        methods: {
            async signout() {
                await axios
                    .post('/api/v1/token/signout/')
                    .then(response => {
                        console.log('Signed out')
                    })
                    .catch(error => {
                        console.log(JSON.stringify(error))
                    })

                axios.defaults.headers.common['Authorization'] = ''
                localStorage.removeItem('token')
                this.$store.commit('removeToken')

                this.$router.push('/')
            }
        }
    }
</script>
