<template>
    <div class="home">
        <header>
            <div class="title">My personal costs</div>
        </header>
        <main>
            <AddPaymentForm @addNewPayment="addPaymentData"/>
            <PaymentsDisplay :items="paymentsList"/>
        </main>
    </div>
</template>

<script>
import PaymentsDisplay from './components/PaymentsDisplay.vue';
import AddPaymentForm from './components/AddPaymentForm.vue';
export default {
    name: 'HomeView',
    components: {
        PaymentsDisplay,
        AddPaymentForm
    },

data() {
    return {
        paymentsList: [],
    };
},
methods: {
    addPaymentData(data) {
        this.paymentsList.push(data)
    },
    fetchData() {
    return [
        {
          date: "28.03.2020",
          category: "Food",
          value: 169,
        },
        {
          date: "24.03.2020",
          category: "Transport",
          value: 360,
        },
        {
          date: "24.03.2020",
          category: "Food",
          value: 532,
        },
        ];
    },
},
created() {
        this.paymentsList = this.fetchData()
    },
}
</script>

<style>
</style>