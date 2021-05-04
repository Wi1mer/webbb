//alert('hola mundo');

//var precio=10000, cant=12 , dcto=0.3;

//total= (precio - (precio*dcto))*cant;

//alert(total);

//var app = new Vue({
    //el: '#app',
    //data: {
      //mensaje: 'Hola mundo xD',
    //}
  //})

  var app = new Vue({
    el: '#app',
    data: {
      ver:1,
    },
    methods: {
      Main(){
        this.ver=1;
      },
      Videos(){
        this.ver=2;
      },
      Playits(){
        this.ver=3;
      },
      Info(){
        this.ver=4;
      },
      MenhamV(){
        this.ver=5;
      },
      Menham0(){
        this.ver=6;
      }
    },
  })