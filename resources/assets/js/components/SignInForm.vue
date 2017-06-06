<template>
    <div class="modal-card">
        <form action="">
            <header class="modal-card-head">
                <p class="modal-card-title">Sign In</p>
            </header>
            <section class="modal-card-body">
                <b-field label="Email" 	class="has-text-left">
                    <b-input
                        type="email"
                        v-model="email"
                        placeholder="Your email"
                        required>
                    </b-input>
                </b-field>

                <b-field label="Password" 	class="has-text-left">
                    <b-input
                        type="password"
                        v-model="password"
                        password-reveal
                        placeholder="Your password"
                        required>
                    </b-input>
                </b-field>
                <fb-signin-button
                    :params="fbSignInParams"
                    @success="onSignInSuccess"
                    @error="onSignInError"
                    v-if="showButton">
                    Log in via FB
                </fb-signin-button>
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$emit('close')">Close</button>
                <button class="button is-primary">Login</button>
            </footer>
        </form>
    </div>
</template>

<script>

import FBSignInButton from 'vue-facebook-signin-button'
Vue.use(FBSignInButton)

    export default {
          data () {
            return {
            fbSignInParams: {
                // Login Scope
                scope: 'email,public_profile',
                // Return Scopes for Permission Checking
                return_scopes: true
            },
            showButton: true,
            uid: 'test',
            accessToken: 'test'
            }
        },
        props: ['email', 'password'],
        methods: {
        onSignInSuccess (response) {
        if(response.status === 'connected'){
            this.showButton = false
            console.log('You are Already Connected to The App!')
        }
        FB.api('/me/permissions', response => {
        let data = response.data
        let granted = []
        for(let permission of data)
        {
            if(this.hasGranted(permission)){
                granted.push(permission.permission)
                
            }
        }
        console.log('User Granted Permissions:')
        console.log(granted)
        let allowedPermissions = _.intersection(this.neededPermissions(),granted)

        console.log('App Permission Needed:')
        console.log(this.neededPermissions())

        console.log('Intersected Value of Needed and Granted Permissions:')
        console.log(allowedPermissions)
        if(_.isEqual(this.neededPermissions(), allowedPermissions)){
            console.log('All Permission For App Granted!')
            // Proceed in Signing In User to Our App!
            // Go to Dashboard Route!
        }else{
            console.log('You Lack Permission Needed for this App')
            // Re Ask Permission to User
        }

        }) // End of FB API for Permissions
        }, // End OnSignInSuccess Method
        onSignInError (error) {
        console.log('Whoops! You Need to Login To Facebook!', error)
        },
        hasGranted(data){
            if(data.status === 'granted')
            return true
        },
        neededPermissions(){
            // Define Your Needed Permissions Here
            return ['email','public_profile']
        },
        checkStatus(){
        // Check login Status
        FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
        // the user is logged in and has authenticated your
        // app, and response.authResponse supplies
        // the user's ID, a valid access token, a signed
        // request, and the time the access token 
        // and signed request each expire
        console.log('User is Already Connected To Our App')
        // We Should Show Here The User? Avatar?
        this.showButton = false
        this.uid = response.authResponse.userID
        console.log('USER ID:')
        console.log(this.uid)
        this.accessToken = response.authResponse.accessToken
        console.log('ACCESS TOKEN:')
        console.log(this.accessToken)
        // This Access Token Should Be Store Either in LS or Cookie
        // So Our PHP App Can Access It!
        
        } else if (response.status === 'not_authorized') {
        this.showButton = true
        // the user is logged in to Facebook, 
        // but has not authenticated your app
        } else {
        // the user isn't logged in to Facebook.
        this.showButton = true
        }
        })
        }

        },
        components: {
        FBSignInButton
        },
        mounted() {
        this.checkStatus()
        // Bug Here is that Fb BUtton is Not Hidden if You Are Already Logged iN
        // Will Be Fix Soon!
        }
    }
</script>


<style scoped>
    .modal-card {
        margin: 0 auto;
        width: auto;
    }
    .fb-signin-button {
    /* This is where you control how the button looks. Be creative! */
    display: inline-block;
    padding: 8px 16px;
    border-radius: 6px;
    background-color: #4267b2;
    color: #fff;
    }
</style>