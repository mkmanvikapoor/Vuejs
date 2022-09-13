const app = Vue.createApp({
    data: function () {
        return {
            courseGoalA: 'Finish the Vue',
            courseGoalB: '<h2>master the Vue </h2>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');