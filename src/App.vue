<template>
  <section id="Price" class="center">
    <h2 class="calculator_title subtitle">Калькулятор стоимости набора</h2>
    <div class="calculator" id="calculator">
      <form class="calculator__form" action="#" method="post">
        <label for="type">Выберите тип кексов</label>
        <select id="type" title="type" v-model="type" @change="getPrice">
          <option value="vanilla">Ванильная классика</option>
          <option value="red">Красный бархат</option>
          <option value="choko">Шоколадный маффин</option>
          <option value="berries">Ягодное поппури</option>
        </select>
        <label for="size">Выберите количество готовых порций</label>
        <input type="range" name="size" id="size" v-model="size" @change="getPrice" min="5" max="20" step="5">
        <div class="range_text">
          <ul class="range__list">
            <li class="range__li">5</li>
            <li class="range__li">10</li>
            <li class="range__li">15</li>
            <li class="range__li">20</li>
          </ul>
        </div>
        <label for="pack">Выберите тип упаковки набора</label>
        <select id="pack" title="pack" v-model="pack" @change="getPrice">
          <option value="Обычная">Обычная</option>
          <option value="Подарочная">Подарочная</option>
        </select>
        <div class="calculator__div_mobile">
          <p class="calculator__div__price_mobile">Стоимость набора: {{price}} руб.</p>
        </div>
        <button class="calculator__btn" type="button" onclick="window.orderDialog.showModal();">Заказать</button>
      </form>
      <div class="calculator__div">
        <img :src="picture" class="calculator__div__pic" alt="Фото кексов">
        <p class="calculator__div__price">Стоимость набора: {{price}} руб.</p>
      </div>
    </div>
  </section>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      type: 'vanilla',
      size: 5,
      pack: 'Обычная',
      price: 0,
      picture: ''
    }
  },
  methods: {
    getPrice() {
            if(this.type == "vanilla") {
                this.price = 1000;
                this.picture = require('@/assets/img/vanila.jpg');
                }
            else if(this.type == "red") {
                this.price = 1200;
                this.picture = require('@/assets/img/redb.jpg');
                }
            else if(this.type == "choko") {
                this.price = 1200;
                this.picture = require('@/assets/img/choko.jpg');
                }
            else {
                this.price = 1300;
                this.picture = require('@/assets/img/berries.jpg');
                }
        
            if(this.size == 10) this.price *= 1.5;
            else if(this.size == 15) this.price *= 2;
            else if(this.size == 20) this.price *= 2.5;
        
            if(this.pack == "Подарочная") this.price += 200;
            return this.price;
        },
  },
  mounted() {
        this.getPrice()
    }
}
</script>

<style lang="scss">

</style>
