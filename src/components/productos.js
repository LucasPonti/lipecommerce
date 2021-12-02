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
        "tutor": " Lucas Ponti",
        "horas": 120,
        "descripcion" : "Curso React de 0 a Experto",
        "inicio": "12/12/21",
        "fin": "03/04/2022"
      },
      {
          "id": 2,
          "nombre": "Curso Java",
          "precio": 18000,
          "imagen": `${java}`,
          "tutor": "",
          "horas": 120,
          "descripcion" : "",
          "inicio": "",
          "fin": ""
      },
      {
          "id": 3,
          "nombre": "Curso JavaScript",
          "precio": 13000,
          "imagen": `${javascript}`,
          "tutor": "",
          "horas": 120,
          "descripcion" : "",
          "inicio": "",
          "fin": ""
      },
      {
          "id": 4,
          "nombre": "Curso React",
          "precio": 12000,
          "imagen": `${react}`,
          "tutor": "",
          "horas": 120,
          "descripcion" : "",
          "inicio": "",
          "fin": ""
      },
      {
          "id": 5,
          "nombre": "Curso Python",
          "precio": 15000,
          "imagen": `${python}`,
          "tutor": "",
          "horas": 120,
          "descripcion" : "",
          "inicio": "",
          "fin": ""
      }

]

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    })
}

export const getItem = (llave) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(console.log(productos[llave]))
    }, 2000);
  })
}