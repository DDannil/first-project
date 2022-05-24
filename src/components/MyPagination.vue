<template>
  <div class="wrp">
    <div @click="onClick(cur - 1)">-</div>
    <div v-for="i in amount"
    :key="i"
    @click="onClick(i)"
    >{{ i }}
    </div>
    <div @click="onClick(cur + 1)">+</div>
  </div>
</template>
<script>
export default {
  name: "MyPagination",
  props: {
    length: Number,
    n: Number,
    cur: Number,
  },
  computed: {
    amount() {
      return Math.ceil(this.length / this.n)
    }
  },
  methods: {
    onClick(p) {
      if(p<1 || p> this.amount) {
        return
      }
      this.$emit('changePage', p)
    }
  },
}
</script>
<style>
.wrp {
  display: flex;
  }
.wrp div {
    padding: 5px;
    border: 1px solid #000;
}
</style>