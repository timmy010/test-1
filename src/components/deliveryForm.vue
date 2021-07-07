<template>
  <form class="content__form">
    <div class="dropdown">
      <button class="dropdown__button dropdown__button--rotate" @click.prevent="openDropdown">
        SE1 6DR, 42 Newington Causeway
      </button>
      <ul class="dropdown__list" v-if="isDropdownOn">
        <li class="dropdown__list-item" data-value="phone">SE1 6DR, 42 Newington Causeway</li>
      </ul>
      <span class="dropdown__label">London</span>
    </div>
    <div class="content-form__input-group">
      <div class="content-form__input-text">
        <input
          type="text"
          name="flat"
          class="content-form__input content-form__flat"
          placeholder="Flat"
          v-model="flatValue"
          @focus="focusedFlat = true"
          @blur="focusedFlat = !flatValue ? false : true"
          :class="{ 'content-form__input-text--focus': focusedFlat }"
        />
        <span class="content-form__input-label" v-show="focusedFlat">Flat</span>
      </div>
      <div class="content-form__input-text">
        <input
          type="text"
          name="floor"
          class="content-form__input content-form__floor"
          placeholder="Floor"
          v-model="floorValue"
          @focus="focusedFloor = true"
          @blur="focusedFloor = !floorValue ? false : true"
          :class="{ 'content-form__input-text--focus': focusedFloor }"
        />
        <span class="content-form__input-label" v-show="focusedFloor">Floor</span>
      </div>
      <div class="content-form__input-text">
        <input
          type="text"
          name="block"
          class="content-form__input content-form__block"
          placeholder="Block"
          v-model="blockValue"
          @focus="focusedBlock = true"
          @blur="focusedBlock = !blockValue ? false : true"
          :class="{ 'content-form__input-text--focus': focusedBlock }"
        />
        <span class="content-form__input-label" v-show="focusedBlock">Block</span>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data: () => ({
    focusedFlat: false,
    focusedFloor: false,
    focusedBlock: false,
    isDropdownOn: false,

    flatValue: null,
    floorValue: null,
    blockValue: null,
  }),
  methods: {
    openDropdown() {
      this.isDropdownOn = !this.isDropdownOn;
    },
  },
};
</script>

<style lang="scss">
.content-form__input-group {
  display: flex;
  justify-content: space-between;
}

.content-form__input-text {
  position: relative;
  width: calc(1 / 3 * 100% - (1 - 1 / 3) * 10px);
  margin: 0 0 10px;
  padding: 0;
}

.content-form__input {
  border: 1px solid #ebebeb;
  border-radius: 8px;
  padding-left: 11px;
  outline: none;
}

.content-form__input:focus {
  border-color: #ffb000;
}

.content-form__input-label {
  position: absolute;
  top: 3px;
  left: 11px;
  font-size: 12px;
  color: #c4c4c4;
}

.content-form__flat,
.content-form__floor,
.content-form__block {
  width: 100%;
  padding: 16px 11px 13px 11px;
}

.content-form__input-text--focus {
  padding: 22px 11px 7px 11px;
}

.content-form__block {
  margin-right: 0;
}

.dropdown {
  width: 100%;
  position: relative;
}

.dropdown__button {
  position: relative;
  display: block;
  width: 100%;
  text-align: left;
  cursor: pointer;
  height: 100%;
  border: 1px solid #ebebeb;
  border-radius: 8px;
  padding: 5px 30px 24px 12px;
  margin-bottom: 10px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.dropdown__button:focus,
.dropdown__button--active {
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
  background-image: url("../assets/img/arrow.svg");
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
  border-left: 1px solid #ebebeb;
  border-right: 1px solid #ebebeb;
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
  border-bottom: 1px solid #c8c5d1;
}

.dropdown__list-item:hover {
  background: #e7e5eb50;
}

.dropdown__label {
  position: absolute;
  bottom: 5px;
  left: 12px;
  font-size: 12px;
  color: #c4c4c4;
}
</style>
