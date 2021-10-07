Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    }
  },
  computed: {
    rotateTransform() {
      return { transform: 'rotateX(' + this.rotateX + 'deg)' + 'rotateY(' + this.rotateY + 'deg)' + 'rotateZ(' + this.rotateZ + 'deg)' }
    },
    perspectiveTransform() {
      return { perspective: this.perspective + 'px' }
    }
  },
  methods: {
    resetAttrs() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
    copyAttrs() {
      const attr = 'transform:' + 'rotateX(' + this.rotateX + 'deg)' + 'rotateY(' + this.rotateY + 'deg)' + 'rotateZ(' + this.rotateZ + 'deg);' + 'perspective: ' + this.perspective + 'px';
      console.log(attr);
      navigator.clipboard.writeText(attr).then(() => {
        alert('the attribute successfully copied!');
      }, (err) => {
        console.error('Async: Could not copy text: ', err);
      });
    }


  }

}).mount('#app')
