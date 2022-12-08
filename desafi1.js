class ProductManager {
  constructor (){
    this.products=[];
  }
  addProduct(product){
    let claves = [ 'title', 'description', 'price', 'thumbnail', 'code', 'stock' ];
    let entran = Object.keys(product)
    let valido = true
    let valido2 = true

    for ( let i=0; i<claves.length; i++ ){
      if (entran.indexOf(claves[i]) < 0){
        valido = false 
      }
    }

    console.log('index',claves.indexOf('description'))
    console.log(Object.keys(product))

    if(this.products.some(product22 => product22.code === product.code)){
      valido2 = true
    }else{valido2 = false}


    if (valido){

      if (this.products.length === 0){
        let producto = {...product, id:1}
        this.products.push(producto)
      }
      else{
        let id = this.products.map(p => p.id)
        let idMax = Math.max(...id) +1;
        let producto = {...product, id:idMax}
        this.products.push(producto)
      }
    }

  }
  getProducts(){
    return this.products
  }  
}


const productManager = new ProductManager()



productManager.addProduct(
  {title : 'belu',
  description: 'linda',
  price: 123,
  thumbnail: 'foto', 
  code:'23',
  stock:2  
}
)
productManager.addProduct(
  {title : 'u',
  description: 'la',
  price: 123,
  thumbnail: 'foto', 
  code:'25',
  stock:2  
}
)
productManager.addProduct(
  {title : 'u',
  description: 'la',
  thumbnail: 'foto', 
  code:'25',
  stock:2  
}
)



console.log(productManager.getProducts())


