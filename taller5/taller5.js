
let user ={
    name1: "Luis",
    lastname1:"Oña",
    
    name2: "Alisson",
    lastname2:"Viracocha",
   
    name3: "Karla",
    lastname3:"Rodriguez",
    


}
console.log(user)

let camisetas={
    equipos:["liga de Quito",'Barcelona','independiente del valle']
}    
    //unir MediaElementAudioSourceNode
    const allInformation={...user,...camisetas}
    console.log(allInformation)

    // es6
    const nameDevice ="lCamiseta Conmemorativa BSC 100 Años"
    const precie=74.99
    const newProduct ={
        nameDevice,
        precie
    }
    console.log(newProduct)


     // Functions

    

     function mostrarBienvenida(nombre){
        console.log(`Bienvenido - ${nombre}`);
    }

    

    function registrarUsuario (callback){
        const nombre="Luis, carla,alisson"
        callback(nombre)
    }

    // callback
    // pasa de una funcion a otra
    registrarUsuario(mostrarBienvenida)

    const productosDescuentos =["camiseta arquero alterna BSC","camiseta arquero BS"]
    const price =[78.99,45.99,80]

    // for each
    productosDescuentos.forEach((productosDescuentos)=>{console.log(productosDescuentos)})

    // map =iterasu contenido
    const newProductsOption =productosDescuentos.map((p)=>{console.log(p.toLocaleUpperCase())})

    // map =iterasu contenido
    const newProductsOptionTree =productosDescuentos.map((p)=>{console.log(p.toLocaleUpperCase())})
    const busqueda =productosDescuentos.filter(p=>p !=="camiseta arquero BS")
    console.log(busqueda)    

    // operador de propagancion

    const newItems =[...productosDescuentos,...price]

    const findItem = productosDescuentos.find(p=>p ==="balon conmemorativa")
    console.log(findItem)
    
    productosDescuentos.push(" medias BSC")
    productosDescuentos.unshift("Camiseta Arquero BSC Conmemorativa 2024")  // agrega al inicio y al final

    productosDescuentos.pop()
    productosDescuentos.shift()


    
    const newItemsSlice= productosDescuentos.slice(0,2)
    console.log(newItemsSlice)

    productosDescuentos.includes("Camiseta Aniversario Arquero BSC Marathon 2024")? console.log("existe"):console.log("No existe")

    productosDescuentos.length===3? console.log("decuento"): console.log("no descuento")

    const subtotal= price.reduce((ac,price)=>{ac+price,0})   // ac es el acumular que inicalmente va a aprtir con el valor de cero


