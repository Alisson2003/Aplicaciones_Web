// OBJETOS

const user = {
    name: "Lizbeth Yamileth",
    lastName: "",
    age: 26,
    address: {
        city: "Quito",
        hometown: "San Gabriel",
        facebook: {
            starting: "Diciembre de 2014"
        }
    }
};

const { name, lastName, age, address } = user;
console.log(name, lastName, age, address);

// ARREGLOS 

const sugerencias = [
    {
        name: "Evelin",
        lastName: "Estefania",
        edad: 22,
        direccion: "Av. Amazonas y Colón, Quito",
        telefono: "0987654321",
        amigosEnComun: 3
        },
        {
        name: "Mateo",
        lastName: "Bernal",
        edad: 25,
        direccion: "Calle 10 de Agosto, Latacunga",
        telefono: "0961122334",
        amigosEnComun: 6
        },
        {
        name: "Giuli",
        lastName: "Merchán",
        edad: 21,
        direccion: "Av. Simón Bolívar, Ambato",
        telefono: "0954433221",
        amigosEnComun: 6
        }
    ];

    const sugerenciasUpper = sugerencias.map(persona => {
    return {
        name: persona.name.toUpperCase(),
        lastName: persona.lastName.toUpperCase(),
        edad: persona.edad,
        direccion: persona.direccion.toUpperCase(),
        telefono: persona.telefono,
        amigosEnComun: persona.amigosEnComun
        };
    });
    
console.log(sugerenciasUpper);
