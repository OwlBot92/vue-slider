
var app = new Vue({
    el: '#root',
    data: {
        activeImgIndex: 0,
        images: [
            "img/campagna.jpg",
            "img/cascate.webp",
            "img/fiori.jpeg",
            "img/montagne.webp"
        ]
    },
    methods:{        
        leftClick(){
            (this.activeImgIndex <= 0) ? this.activeImgIndex = this.images.length-1 : this.activeImgIndex--;
        },
        rightClick(){
            (this.activeImgIndex >= this.images.length-1) ? this.activeImgIndex = 0 : this.activeImgIndex++;
        }
    },
    created(){
        setInterval(() => { 
            this.rightClick();
        }, 3000);
    }
})