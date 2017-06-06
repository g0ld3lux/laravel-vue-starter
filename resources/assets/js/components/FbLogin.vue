<template>
<fb-signin-button
    :params="fbSignInParams"
    @success="onSignInSuccess"
    @error="onSignInError"
    v-if="showButton">
    Sign in with Facebook
  </fb-signin-button>
</template>

<script>
import Vue from 'vue'
import FBSignInButton from 'vue-facebook-signin-button'
Vue.use(FBSignInButton)

export default {
  data () {
    return {
      fbSignInParams: {
        // Check Facebook For the Scope Need by your App
        scope: 'email,public_profile',
        return_scopes: true
      },
      showButton: true,
      uid: null,
      accessToken: null
    }
  },
  methods: {
    onSignInSuccess (response) {
      if(response.status === 'connected'){
        this.showButton = false
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
       let allowedPermissions = _.intersection(this.neededPermissions(),granted)
       if(!_.isEqual(this.neededPermissions(), allowedPermissions))
       {
           // If we Dont Have the Right Permission Granted then...
           console.log('Do Not Allow Them To Use the App!')
       }
      })
    },
    onSignInError (error) {
      console.log('Whoops! You Need to Login To Facebook!', error)
    },
    hasGranted(data){
        if(data.status === 'granted')
        return true
    },
    neededPermissions(){
        return ['manage_pages','email']
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
    this.showButton = false
    this.uid = response.authResponse.userID
    this.accessToken = response.authResponse.accessToken
    } else if (response.status === 'not_authorized') {
    // the user is logged in to Facebook, 
    // but has not authenticated your app
    } else {
    // the user isn't logged in to Facebook.
    }
 })
    }

  },
  components: {
      FBSignInButton
  },
  mounted() {
    this.checkStatus()
  }
}
</script>

<style>
.fb-signin-button {
  /* This is where you control how the button looks. Be creative! */
  display: inline-block;
  padding: 4px 8px;
  border-radius: 3px;
  background-color: #4267b2;
  color: #fff;
}
</style>