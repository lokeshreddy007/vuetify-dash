<template>
    <v-app>
      <!-- Login Module -->
        <v-card width="400" class="mx-auto mt-15">
            <v-card-title>
                <h1 class=" text-center display-1 ">Login</h1>
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field label="UserName" prepend-icon="mdi-account-circle" />
                    <v-text-field :type="showPassword ? 'text' : 'password' " label="Password" prepend-icon="mdi-lock" 
                    :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'" 
                    @click:append="showPassword = !showPassword" />
                </v-form>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
                <v-btn color="info">Register</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="success">Login</v-btn>
            </v-card-actions>
        </v-card>
    </v-app>
</template>
<script>

export default {
    name: 'App',

    components: {
        // HelloWorld,
    },

    data: () => ({
        showPassword: false
    }),
};
</script>