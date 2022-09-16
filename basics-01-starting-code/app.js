// const app = Vue.createApp({
//     data: function () {
// return {
//     courseGoalA: 'Finish the Vue',
//     courseGoalB: '<h2>master the Vue </h2>',
//     vueLink: 'https://vuejs.org/'
// };
//     return {
//         counter: 0,
//         name: '',
//         confirmedName: '',
//         fullName: '',
//     };
// },
// watch: {

//     counter(value) {
//         if (value > 50) {
//             this.counter = 0;
//         }
//     },
// name(value) {
//     if (value === '') {
//         this.fullName = "";
//     }
//     else {
//         this.fullName = value + " " + 'Kapoor';
//     }
// },
// computed: {
// fullName() {
//     console.log('Running again..');
//     if (this.name === '') {
//         return '';
//     }
//     return this.name + ' ' + 'Kapoor';
// }
// },

// methods: {

//     outputFullName() {
//         if (this.name === '') {
//             return '';
//         }
//         return this.name + ' ' + 'Kapoor';
//     },
//     add(num) {
//         this.counter = this.counter + num;
//     },

//     remove(num) {
//         this.counter = this.counter - num;
//     },

//     setName(event, lastName) {
//         // this.name = event.target.value + ' ' + lastName;
//     this.name = event.target.value;
// },
// submitForm(event) {
//     // event.preventDefault();
//     alert("Submitted");
// },
// confirmedName() {
//     this.confirmedName = this.name;
// },
//     resetInput() {
//         this.name = '';
//     },
// }
// methods: {
//     outputGoal() {
//         const randomNumber = Math.random();
//         if (randomNumber < 0.5) {
//             return this.courseGoalA;
//         } else {
//             return this.courseGoalB;
//         }
//     }
// }
// });

// app.mount('#user-goal');
// app.mount('#events');


//Dynamic Styling
// const app = Vue.createApp({
//     data() {
//         return {
//             boxASelected: false,
//             boxBSelected: false,
//             boxCSelected: false,

//         };
//     },
//     computed: {
//         boxAClasses() {
//             return { active: this.boxASelected };
//         }
//     },
//     methods: {
//         boxSelected(box) {
//             if (box === 'A') {
//                 this.boxASelected = !this.boxASelected;
//             }
//             elseif(box === 'B'){
//                 this.boxBSelected = !this.boxBSelected;
//             }
//             elseif(box === 'C'){
//                 this.boxCSelected = !this.boxCSelected;

//             }
//         }
//     },
// });

// app.mount('#styling');


//Rendering Conditional Content
const app = Vue.createApp({
    data() {
        return {
            enteredGoalValue: '',
            goals: []
        };
    },
    methods: {
        addGoal() {
            // this.goals.push(this.enteredGoalValue);
            this.goals.push(this.$refs.userText);
        },
        removeGoal(idx) {
            this.goals.splice(idx, 1);
        }
    }
});

app.mount('#user-goals');

