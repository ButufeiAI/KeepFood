<template>
    <div class="quantity-control">
        <button type="button" class="minus-btn" @click="decrement"><i class="icon-minus"></i></button>
        <input type="text" class="quantity-input" value="1" aria-label="Quantity" v-model="quantity">
        <button type="button" class="add-btn" @click="increment"><i class="icon-plus"></i></button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            quantity: 1,
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