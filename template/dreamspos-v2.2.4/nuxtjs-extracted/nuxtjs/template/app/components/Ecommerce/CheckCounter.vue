<template>
    <span class="quantity-btn ps-2"  @click="decrement">
        <vue-feather type="minus-circle" class="feather-search"></vue-feather>
    </span>
    <input type="text" class="quntity-input bg-transparent p-0" value="1" v-model="quantity">
    <span class="quantity-btn pe-2" @click="increment">+
        <vue-feather type="plus-circle" class="plus-circle"></vue-feather>
    </span>
</template>

<script>
export default {
    data() {
        return {
            quantity: 0,
        }
    },
    methods: {
        increment() {
            this.quantity += 1;
        },
        decrement() {
            if (this.quantity > 0) {
                this.quantity -= 1;
            }
        },
    },
}
</script>