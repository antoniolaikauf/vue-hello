const {createApp}=Vue;
// creazione dell testo inserito dentro html
createApp({
    data(){
        return{
            titolo : "hello vue"
        }
    }
}).mount("#contenitore");
