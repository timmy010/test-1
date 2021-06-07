<template>
<div>
  <div class="header">
    <h2 class="title">Cart</h2>
    <button class="back-btn"></button>
  </div>
  <div class="container">
    <div class="content">
      <h3 class="content__title">Delivery address</h3>
      <form class="content__form">
          <div class="dropdown">
              <button
                class="dropdown__button dropdown__button--rotate"
                @click="openDropdown"
              >SE1 6DR, 42 Newington Causeway</button>
              <ul class="dropdown__list" v-show="isDropdownOn">
                  <li class="dropdown__list-item" data-value="phone">SE1 6DR, 42 Newington Causeway</li>
              </ul>
              <span class="dropdown__label">London</span>
          </div>
        <div class="content-form__input-group content-form__input-group--3">
          <div class="content-form__input-text">
              <input
                type="text"
                name="flat"
                class="content-form__input content-form__flat"
                placeholder="Flat"
                @focus="focusedFlat = true" @blur="focusedFlat = false"
                :class="{ 'content-form__input-text--focus':focusedFlat }"
              >
              <span class="content-form__input-label" v-show="focusedFlat">Flat</span>
          </div>
          <div class="content-form__input-text">
            <input
              type="text"
              name="floor"
              class="content-form__input content-form__floor"
              placeholder="Floor"
              @focus="focusedFloor = true" @blur="focusedFloor = false"
              :class="{ 'content-form__input-text--focus':focusedFloor }"
            >
            <span class="content-form__input-label" v-show="focusedFloor">Floor</span>
          </div>
          <div class="content-form__input-text">
            <input
              type="text"
              name="block"
              class="content-form__input content-form__block"
              placeholder="Block"
              @focus="focusedBlock = true" @blur="focusedBlock = false"
              :class="{ 'content-form__input-text--focus':focusedBlock }"
            >
            <span class="content-form__input-label" v-show="focusedBlock">Block</span>
          </div>
        </div>
      </form>
    </div>
    <!-- <router-view/> -->
  </div>
</div>
</template>

<script>

export default {
  data: () => ({
    focusedFlat: false,
    focusedFloor: false,
    focusedBlock: false,
    isDropdownOn: false,
  }),
  name: 'app',
  methods: {
    openDropdown(e) {
      e.preventDefault();
      this.isDropdownOn = !this.isDropdownOn;
    },
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: 'Noto Sans';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('./assets/fonts/noto-sans-v12-latin_cyrillic-regular.woff2') format('woff2'),
       url('./assets/fonts/noto-sans-v12-latin_cyrillic-regular.woff') format('woff');
}
  * {
    box-sizing: border-box;
  }
  body {
    max-width: 360px;
    background: #E5E5E5;
    font-family: 'Noto Sans';
  }
  button {
    background-color: unset;
    border: 0;
    padding: 0;
    margin: 0;
  }
  .header {
    position: relative;
    width: 100%;
    height: 60px;
    top: 0;
    background: #FFB000;
    border-radius: 0px 0px 8px 8px;
  }
  .title {
    text-align: center;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
  }
  .back-btn {
    position: absolute;
    top: 17px;
    left: 23px;
    width: 13px;
    height: 14px;
    background-image: url('./assets/back-btn.svg');
    background-size: 13px 14px;
    background-position: center;
  }
  .container {
    width: 100%;
    padding: 0 24px;
  }
  .content {
    width: 100%;
    background-color: #fff;
    border-radius: 8px;
    padding: 1px 18px 18px;
    z-index: 9999;
  }
  .content-form__input-group {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .content-form__input-text {
    position: relative;
  }
  .content-form__input {
    border: 1px solid #EBEBEB;
    border-radius: 8px;
    padding-left: 11px;
    outline: none;
  }
  .content-form__input:focus {
    border-color: #FFB000;
  }
  .content-form__input-label {
    position: absolute;
    top: 3px;
    left: 11px;
    font-size: 12px;
    color: #C4C4C4;
  }
  .content-form__flat, .content-form__floor, .content-form__block {
    width: 87.52%;
    padding: 16px 11px 13px 11px;
    margin-right: 9px;
  }
  .content-form__input-text--focus {
    padding: 22px 11px 7px 11px;
  }
  .content-form__block {
    margin-right: 0;
  }

// Select c dropdown на JS

.dropdown {
    position: relative;
}

.dropdown__button {
    position: relative;
    display: block;
    width: 100%;
    text-align: left;
    cursor: pointer;
    height: 100%;
    border: 1px solid #EBEBEB;
    border-radius: 8px;
    padding: 5px 35px 24px 12px;
    margin-bottom: 10px;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

.dropdown__button:focus, .dropdown__button--active {
    outline: none;
}

.dropdown__button::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 12px;
    height: 12px;
    right: 9px;
    background-image: url('./assets/arrow.svg');
    background-position: center center;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    border: 0;
    pointer-events: none;
}

.rotate::after {
    transform: translateY(-50%) rotate(180deg);
}

.dropdown__list {
    position: absolute;
    left: 0;
    margin: 0;
    padding: 0;
    list-style-type: none;
    background: #fff;
    overflow: hidden;
    border-left: 1px solid #EBEBEB;
    border-right: 1px solid #EBEBEB;
    border-radius: 8px;
    width: 100%;
    z-index: 1;
}

.dropdown__list--visible {
    display: block;
}

.dropdown__list-item {
    margin: 0;
    padding: 0;
    padding: 5px 32px 5px 12px;
    cursor: pointer;
}

.dropdown__list-item:last-child {
    border-bottom: 1px solid #C8C5D1;
}

.dropdown__list-item:hover {
    background: #E7E5EB50;
}

.dropdown__label {
  position: absolute;
  bottom: 5px;
  left: 12px;
  font-size: 12px;
  color: #C4C4C4;
}

</style>
