/*

    Attraverso l'apposita API di Boolean
    https://flynn.boolean.careers/exercises/api/random/mail
    generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

*/


// Estraggo la funzioe createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da mandare in pagina
createApp({
    data() {
        return {
            url: 'https://flynn.boolean.careers/exercises/api/random/mail',
            emails: [],
        };
    },
    mounted() {
        console.log('ciao');

        for (let i = 0; i < 10; i++) {
            axios.get(this.url).then((res) => {
                console.log('La nuova mail che ho ottenuto è:',res.data.response,i);
                console.log('La lunghezza dell array è', this.emails.length);

                this.emails.push(res.data.response);

                if (this.emails.length == 10) {
                    this.finished = true;
                }
            });  
        }    

        console.log('raghi');

        console.log(this.emails);
    }

// Monto l'istanza di Vue in pagina
}).mount('#app');