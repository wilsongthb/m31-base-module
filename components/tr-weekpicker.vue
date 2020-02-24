<template>
  <tr>
    <th
      class="text-center app_th_arrow"
      @click.prevent="lastWeek()"
      @keypress.enter="lastWeek()"
      tabindex="0"
    >
      <i class="fa fa-arrow-left"></i>
    </th>
    <th
      class="text-center text-capitalize text-nowrap"
      v-for="(l, i) in weekDays"
      :key="i"
      :title="l.date"
    >
      <span>{{ l.weekDay }}</span>
    </th>
    <th
      class="text-center app_th_arrow"
      @click.prevent="nextWeek()"
      @keypress.enter="nextWeek()"  
      tabindex="0"
    >
      <i class="fa fa-arrow-right"></i>
    </th>
  </tr>
</template>
<script>
import moment from "moment";

export default {
  components: {
    //
  },

  // directives
  // filters

  props: {
    dayFormat: {
      default: "dddd DD"
    },
    dateFormat: {
      default: "L"
    },
    // setWithCurrentWeek: {
    //   default: true
    // },
    dayToBegin: {
      default: 0,
      validator(value) {
        return [0, 1, 2, 3, 4, 5, 6].includes(value);
      }
    }
  },

  data: () => ({
    currentMoment: moment(), // Moment
    weekDays: [] // Array<int>
    // iniTime: "", // String
    // endTime: "" // String
  }),

  computed: {
    //
  },

  watch: {
    //
  },

  mounted() {
    this.currentTime = this.$options.moment();
    this.updateTimes();
  },

  methods: {
    getIniMoment() {
      return this.currentMoment
        .clone()
        .add(-this.currentMoment.day() + this.dayToBegin, "days");
    },
    getIniDate() {
      return this.getIniMoment().format(this.dateFormat);
    },
    getEndMoment() {
      return this.getIniMoment().add(7, "days");
    },
    getEndDate() {
      return this.getEndMoment().format(this.dateFormat);
    },
    setMoment(val) {
      this.currentMoment = val.clone();
      this.updateTimes();
    },
    setDate(val, format = null) {
      this.currentMoment = this.$options.moment(val, format);
      this.updateTimes();
    },
    updateTimes() {
      let iniDate = this.getIniMoment();
      this.weekDays = [];
      for (let index = 0; index < 7; index++) {
        this.weekDays.push({
          day: iniDate.day().toString(),
          date: iniDate.format(this.dateFormat),
          weekDay: iniDate.format(this.dayFormat)
        });
        iniDate.add(1, "days");
      }
    },
    nextWeek() {
      this.currentMoment.add(7, "days");
      this.updateTimes();
      this.$emit("changeWeek", this.getIniDate());
    },
    lastWeek() {
      this.currentMoment.add(-7, "days");
      this.updateTimes();
      this.$emit("changeWeek", this.getIniDate());
    }
  }
};
</script>

<style scoped>
.app_th_arrow {
  cursor: pointer;
}
</style>
