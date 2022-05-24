<template>
    <div>
        <button v-on:click="formVisible = !formVisible">Add New Cost +</button>
    <div v-show="formVisible" class="form-wrp">
        <input v-model="date" placeholder="date">
        <input v-model="category" placeholder="category">
        <input v-model="value" placeholder="value">
        <button @click="onClickSave">Save</button>
    </div>
    </div>
</template>

<script>
export default {
    name: 'AddPaymentForm',
    data() {
        return {
            date: '',
            category: '',
            value: '',
            formVisible: false
        }
    },
    computed: {
        getCurrentDate() {
            const today = new Date
            const d = today.getDate()
            const m = today.getMonth()+1
            const y = today.getFullYear()
            if (m < 10) {
                return `${d}.0${m}.${y}`
            } else {
                return `${d}.${m}.${y}`
            }
            }
    },
    methods: {
        onClickSave() {
            const data = {
                date: this.date || this.getCurrentDate,
                category: this.category,
                value: this.value
            }
            this.$emit('addNewPayment', data)
            console.log(data);
        },
    }
}
</script>