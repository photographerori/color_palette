var app = new Vue({
  el: "#app",
  data: {
    red: 0,
    green: 0,
    colors: [],
  },
  methods: {
    changeColor: function (event) {
      // console.log(event);
      this.red = event.offsetX;
      this.green = event.offsetY;
    },
    pickColors: function () {
      const newColor = {
        red: this.red,
        green: this.green,
      };
      this.colors.push(newColor);
      console.log(this.colors);
    },
    showColor: function (color) {
      this.red = color.red;
      this.green = color.green;
    },
  },
  computed: {
    paletteStyle() {
      return {
        backgroundColor: `rgba(${this.red}, ${this.green}, 200, 0.5)`,
      };
    },
  },
});
