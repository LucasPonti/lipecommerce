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
        "imagen": `${c}`
      },
      {
          "id": 2,
        "nombre": "Curso Java",
        "precio": 18000,
        "imagen": `${java}`
      },
      {
          "id": 3,
        "nombre": "Curso JavaScript",
        "precio": 13000,
        "imagen": `${javascript}`
      },
      {
          "id": 4,
        "nombre": "Curso React",
        "precio": 12000,
        "imagen": `${react}`
      },
      {
          "id": 5,
          "nombre": "Curso Python",
          "precio": 15000,
          "imagen": `${python}`
      }

]

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}