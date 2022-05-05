<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input
      class="number-input"
      v-model.number="operand1"
      placeholder="Введите первое число"
    /><br />
    <input
      class="number-input"
      v-model.number="operand2"
      placeholder="Введите второе число"
    /><br />
    <input
      class="keyboard-ckeckbox"
      type="checkbox"
      name="keyboard"
      v-model="checked"
    /><label for="keyboard">Отобразить экранную клавиатуру</label><br />
    <button
      v-show="checked"
      v-for="number in numbers"
      @click="getNumberToInput(number)"
      :key="number"
    >
      {{ number }}
    </button>
    <button v-show="checked" @click="deleteNumber()">del</button>
    <br />
    <button
      v-for="operand in operands"
      @click="calculate(operand)"
      :key="operand"
    >
      {{ operand }}</button
    ><br />

    <input
      class="radio-btn"
      type="radio"
      name="operand"
      value="operand1"
      v-model="picked"
    /><label for="operand1">Операнд 1</label>
    <input
      class="radio-btn"
      type="radio"
      name="operand"
      value="operand2"
      v-model="picked"
    /><label for="operand2">Операнд 2</label>

    <br />
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
      operands: ["+", "-", "*", "/", "^"],
      numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
      picked: "",
      checked: "",
    };
  },
  methods: {
    calculate(operation = "+") {
      switch (operation) {
        case "+":
          this.add();
          break;
        case "-":
          this.sub();
          break;
        case "*":
          this.mult();
          break;
        case "/":
          this.div();
          break;
        case "^":
          this.exp();
          break;
      }
    },

    add() {
      this.result = +this.operand1 + +this.operand2;
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
    getNumberToInput(number) {
      if (this.picked == "operand1") {
        this.operand1 += number;
      }
      if (this.picked == "operand2") {
        this.operand2 += number;
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.number-input {
  margin-top: 20px;
  width: 250px;
  height: 25px;
  border: 3px solid #2c3e50;
}
.keyboard-ckeckbox {
  margin-top: 40px;
  width: 15px;
  height: 15px;
}
button {
  margin: 30px 10px 0 0;
  width: 40px;
  height: 35px;
  background-color: #42b983;
  border-color: transparent;
  font-weight: bold;
  font-size: 18px;
  color: #2c3e50;
}
button:hover {
  background-color: transparent;
  border: 3px solid #42b983;
}
.radio-btn {
  margin-top: 25px;
}
h2 {
  color: #2c3e50;
  font-size: 34px;
  margin-top: 25px;
}
</style>
