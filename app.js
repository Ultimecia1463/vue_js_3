const app = Vue.createApp({
    //data -> dfunctions
    //template: '<h2>i am a template</h2>'
    data(){
        return{
            title:'yooooooooo',
            name:'neegers',
            age:10
        }   
    }
    ,methods:{
        changetitle(){
            console.log('you clicked me')
            this.title='fuck you'
        }
    }
})

app.mount('#app')