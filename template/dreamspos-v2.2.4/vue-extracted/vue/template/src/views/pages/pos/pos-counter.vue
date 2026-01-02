<template>
    <a href="javascript:void(0);" @click="decrement" class="dec dark d-flex justify-content-center align-items-center"
        data-bs-toggle="tooltip" data-bs-placement="top" title="minus"><i class="ti ti-minus"></i>
    </a>
    <input type="text" class="form-control text-center" name="qty" v-model="quantity">
    <a href="javascript:void(0);" @click="increment" class="inc dark d-flex justify-content-center align-items-center"
        data-bs-toggle="tooltip" data-bs-placement="top" title="plus"><i class="ti ti-plus"></i>
    </a>
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