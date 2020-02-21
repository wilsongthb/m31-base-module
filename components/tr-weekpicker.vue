<template>
  <tr>
    <th class="text-center">
      <a href="#" @click.prevent="lastWeek()">
        <i class="fa fa-arrow-left"></i>
      </a>
    </th>
    <th
      class="text-center text-capitalize text-nowrap"
      v-for="(l, i) in weekDays"
      :key="i"
      :title="l.date"
    >
      <span>{{ l.weekDay }}</span>
    </th>
    <th class="text-center">
      <a href="#" @click.prevent="nextWeek()">
        <i class="fa fa-arrow-right"></i>
      </a>
    </th>
  </tr>
</template>
<script>
export default {
  components: {
    //
  },

  // directives
  // filters

  props: {
    setWithCurrentWeek: {
      default: true
    },
    dayToBegin: {
      default: 0
    }
  },

  data: () => ({
    currentTime: null, // Moment
    weekDays: [], // Array<int>
    iniTime: "", // String
    endTime: "" // String
  }),

  computed: {
    //
  },

  watch: {
    //
  },

  mounted() {
    if (this.setWithCurrentWeek) {
      this.currentTime = this.$options.moment();
      this.updateTimes();
    }
  },

  methods: {
    // setCurrentTime(val = new Date()) {
    //   this.currentTime = val;
    //   this.updateTimes();
    // },
    setTime(val) {
      this.currentTime = val;
      this.updateTimes();
    },
    updateTimes() {
      // const moment = this.$options.moment;
      let iniTime = this.$options
        .moment(this.currentTime)
        .add(-this.currentTime.day() + this.dayToBegin, "days");
      let endTime = iniTime.clone().add(7, "days");
      this.iniTime = iniTime.format("YYYY-MM-DD");
      this.endTime = endTime.format("YYYY-MM-DD");
      this.weekDays = [];
      for (let index = 0; index < 7; index++) {
        this.weekDays.push({
          day: iniTime.day().toString(),
          date: iniTime.format("YYYY-MM-DD"),
          weekDay: iniTime.format("dddd DD")
        });
        iniTime.add(1, "days");
      }
    },
    nextWeek() {
      this.currentTime.add(7, "days");
      this.updateTimes();
      this.$emit("changeWeek", this.$options.moment(this.iniTime).toDate());
    },
    lastWeek() {
      this.currentTime.add(-7, "days");
      this.updateTimes();
      this.$emit("changeWeek", this.$options.moment(this.iniTime).toDate());
    }
  }
};
</script>

<style></style>
