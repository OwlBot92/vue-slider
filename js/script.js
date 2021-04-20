
var app = new Vue({
    el: '#root',
    data: {
        activeImgIndex: 0,
        //array che contiene il path delle immagini da caricare
        images: [
            "img/campagna.jpg",
            "img/cascate.webp",
            "img/fiori.jpeg",
            "img/montagne.webp"
        ],
        //array di classi 
        bgClasses: ["bg1", "bg2", "bg3", "bg4"]
    },
    //funzioni per scorrere le immagini
    methods:{        
        leftClick(){
            (this.activeImgIndex <= 0) ? this.activeImgIndex = this.images.length-1 : this.activeImgIndex--;
        },
        rightClick(){
            (this.activeImgIndex >= this.images.length-1) ? this.activeImgIndex = 0 : this.activeImgIndex++;
        },
    },
    //ogni 3 secondi chiama la funzione rightClick per far scorrere le immagini
    created(){
        setInterval(() => this.rightClick(), 3000);
    }
})