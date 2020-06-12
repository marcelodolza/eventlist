export default {
  data() {
    return {};
  },
  methods: {
    dynamicSort(property) {
      let sortOrder = 1;

      if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
      }

      return (a, b) => {
        if (sortOrder == -1) {
          return b[property].localeCompare(a[property]);
        } else {
          return a[property].localeCompare(b[property]);
        }
      };
    },

    getBasicDate(date) {
      let d = new Date(date);
      return new Date(d.getFullYear(), d.getMonth(), d.getDate());
    }
  }
};
