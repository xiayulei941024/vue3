import { WOW } from "wowjs";
export const appMixin = {
  mounted() {
    console.log(123);
  }
};

// wow混入
export const wowMixin = {
  mounted() {
    new WOW().init();
  }
};
