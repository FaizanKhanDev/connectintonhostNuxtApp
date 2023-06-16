<template>
    <div>
        <!-- <VuetifyPhoneInput :countries="countries" @country="onCountry" @phone="onPhone" /> -->
        <h1>this is Phone Input</h1>
        <!-- <VuePhoneNumberInput /> -->
        <vue-tel-input-vuetify v-model="phone"></vue-tel-input-vuetify>
    </div>
</template>

<script>
// import VuetifyPhoneInput from '@kingscode/vuetify-phone-input';

export default {
    name: 'Home',
    components: {
        // VuetifyPhoneInput,
    },
    data() {
        return {
            phone: null,
        }
    },


};
</script>

<style></style>