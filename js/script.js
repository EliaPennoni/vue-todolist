console.log('loaded');

const { createApp } = Vue

createApp({
    data() {
        return {
            myArray: [
                {
                    text: 'svegliarsi:',
                    done: false,
                    toggleDone() {
                        this.done = !this.done;
                    }
                },
                {
                    text: 'lavarsi:',
                    done: false,
                    toggleDone() {
                        this.done = !this.done;
                    }
                },
                {
                    text: 'fare colazione:',
                    done: false,
                    toggleDone() {
                        this.done = !this.done;
                    }
                },
                {
                    text: 'svegliarsi:',
                    done: false,
                    toggleDone() {
                        this.done = !this.done;
                    }
                },
                {
                    text: 'mettersi al computer:',
                    done: false,
                    toggleDone() {
                        this.done = !this.done;
                    }
                },



            ],
            newLi: ''

        };

    },
    methods: {
        taskEseguito(index) {
            this.myArray[index].done = !this.myArray[index].done
        },

        eliminaOggetto(i) {
            this.myArray.splice(i, 1);
        },

        addElement() {

            if (this.newLi.trim() !== '') {
                this.myArray.push({
                    text: this.newLi,
                    done: false,
                    toggleDone() {
                        this.done = !this.done;
                    }
                });
                this.newLi = ''
            }

        }
    }
}).mount('#app')
