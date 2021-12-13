import c from './c.jpg'
import javascript from './javascript.jpg'
import python from './python.jpg'
import react from './react.png'
import java from './java.jpg'

const productos = [
    {
        "id": 1,
        "nombre": "Curso C++",
        "precio": 18000,
        "imagen": `${c}`,
        "tutor": "Aun no asignado",
        "horas": 120,
        "descripcion" : "Curso React de 0 a Experto",
        "inicio": "12/12/21",
        "fin": "03/04/2022",
        "categoria": "Principiante"
      },
      {
          "id": 2,
          "nombre": "Curso Java",
          "precio": 18000,
          "imagen": `${java}`,
          "tutor": "Aun no asignado",
          "horas": 120,
          "descripcion" : "Curso Java de 0 a Experto",
          "inicio": "13/12/21",
          "fin": "04/04/2022",
          "categoria": "Intermedio"
      },
      {
          "id": 3,
          "nombre": "Curso JavaScript",
          "precio": 13000,
          "imagen": `${javascript}`,
          "tutor": "Aun no asignado",
          "horas": 120,
          "descripcion" : "Curso Javascript de 0 a Experto",
          "inicio": "14/12/21",
          "fin": "05/04/2022",
          "categoria": "Avanzado"
      },
      {
          "id": 4,
          "nombre": "Curso React",
          "precio": 12000,
          "imagen": `${react}`,
          "tutor": "Aun no asignado",
          "horas": 120,
          "descripcion" : "Curso React de 0 a Experto",
          "inicio": "15/12/21",
          "fin": "06/04/22",
          "categoria": "Intermedio"
      },
      {
          "id": 5,
          "nombre": "Curso Python",
          "precio": 15000,
          "imagen": `${python}`,
          "tutor": "Aun no asignado",
          "horas": 120,
          "descripcion" : "Curso Python Avanzado",
          "inicio": "16/12/21",
          "fin": "06/04/22",
          "categoria": "Principiante"
      }

]

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}

export const getItem = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos[id])
        console.log(productos[id])
    }, 2000);
  })
}

export const getProductbyId = (id) => {
    return new Promise ((resolve, reject) => {
        const product = productos.find(prod => parseInt(prod.id) === parseInt(id))
        setTimeout(() => {
            resolve(product)
            console.log(product)
        }, 1000);
    })
}

export const getProductbyCategory = (category) => {
    return new Promise ((resolve, reject) => {
        console.log('por props',category)
        const newArray = [];
        setTimeout(() => {
            for(let i=0; i < 5; i++) {
                console.log('de BD' , productos[i].categoria)
                if (category === productos[i].categoria) {
                    newArray.push(productos[i])
                    console.log(productos[i])
                }
                resolve(newArray)
            }
        }, 1000);
    })
}