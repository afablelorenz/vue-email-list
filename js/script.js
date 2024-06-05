const { createApp } = Vue 


createApp({
    data(){
        return{
            randomEmail: [],
        }
    },
    methods:{
        get(){
            
        }
    },
    created(){
        this.getData();
    },
}).mount('#app');