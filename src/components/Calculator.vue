<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model.number="operand1" placeholder="Введите первое число" /><br />
    <input v-model.number="operand2" placeholder="Введите второе число" /><br />
    <button @click="add">+</button>
    <button @click="sub">-</button>
    <button @click="mult">*</button>
    <button @click="div">/</button>
    <button @click="exp">^</button><br />
    <h2>= {{ result }}</h2>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      result: 0,
      operand1: 0,
      operand2: 0,
    };
  },
  methods: {
    add() {
      this.result = this.operand1 + this.operand2;
    },
    sub() {
      this.result = this.operand1 - this.operand2;
    },
    mult() {
      this.result = this.operand1 * this.operand2;
    },
    div() {
      if (this.operand2 == 0) {
        this.result = "Ошибка";
      } else {
        this.result = this.operand1 / this.operand2;
      }
    },
    exp() {
      this.result = this.operand1 ** this.operand2;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input {
  margin-top: 30px;
  width: 300px;
  height: 35px;
  border: 3px solid #2c3e50;
}
button {
  margin: 50px 10px 0 0;
  width: 50px;
  height: 50px;
  background-color: #42b983;
  border-color: transparent;
  font-weight: bold;
  font-size: 20px;
  color: #2c3e50;
}
button:hover {
  background-color: transparent;
  border: 3px solid #42b983;
}
h2 {
  color: #2c3e50;
  font-size: 36px;
  margin-top: 40px;
}
</style>
