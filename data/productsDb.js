let productsDb = {
  usuario: 
        {
          "email": "lucia.gonzalez@gmail.com",
          "usuario": "lu_gonzalez",
          "contraseña": "prog2",
          "fecha de nacimiento": "10/05/2003",
          "nro de documento": 44983276,
          "foto de perfil": "foto.jpg" 
        },
        
  productos: [
        {
          "id": 1,
          "name": "Adidas",
          "descripcion": "10ml",
          "image": "../public/images/products/adidas.jpg",
          "fecha de carga": "30/11/2022"
        },
        {
          "id": 2,
          "name": "GUCCI",
          "descripcion": "50ml",
          "image": "../public/images/products/gucci_bloom.jpg",
          "fecha de carga": "26/12/2022"
        },
        {
          "id": 3,
          "name": "Marc Jacobs",
          "descripcion": "100ml",
          "image": "../public/images/products/marc-jacobs-daisy.jpg",
          "fecha de carga": "12/09/2021"
        },
        {
          "id": 4,
          "name": "Paco Rabanne",
          "descripcion": "50ml",
          "image": "../public/images/products/paco_rabbane.jpg",
          "fecha de carga": "03/09/2022"
        },
        {
          "id": 5,
          "name": "Nina Ricci",
          "descripcion": "100ml",
          "image": "../public/images/products/nina-ricci.jpg",
          "fecha de carga": "08/06/2021"
        },
        {
          "id": 6,
          "name": "Giorgio Armani",
          "descripcion": "30ml",
          "image": "../public/images/products/armani.jpg",
          "fecha de carga": "10/10/2020"
        },
        {
          "id": 7,
          "name": "Dior",
          "descripcion": "50ml",
          "image": "../public/images/products/dior.jpg",
          "fecha de carga": "14/05/2022"
        },
        {
          "id": 8,
          "name": "Esteé Lauder",
          "descripcion": "100ml",
          "image": "../public/images/products/esteeLauder_beautifulBelle.jpg",
          "fecha de carga": "02/02/2021"
        },
        {
          "id": 9,
          "name": "DKNY",
          "descripcion": "100ml",
          "image": "../public/images/products/dkny-bedelicious.jpg",
          "fecha de carga": "18/03/2023"
        },
        {
          "id": 10,
          "name": "Michael Kors",
          "descripcion": "30ml",
          "image": "../public/images/products/michaelKors_wonderlust.jpg",
          "fecha de carga": "07/03/2021"
        },
      ],
  comentarios: [
    {
      "nombreUsuario": "isabel_lopez",
      "textoDelComentario": "Muy buen producto.",
      "imagenDePerfil": "fotoPerfil.jpg", 
    },
    {
      "nombreUsuario": "juanperezzz",
      "textoDelComentario": "Muy buena duración.",
      "imagenDePerfil": "fotoPerfil.jpg", 
    },
    {
      "nombreUsuario": "carrasco_ana",
      "textoDelComentario": "Me encantó. Siempre recibo comentarios nuevos sobre lo rico que es.",
      "imagenDePerfil": "fotoPerfil.jpg", 
    },
    {
      "nombreUsuario": "mariana_esposito",
      "textoDelComentario": "De primerísima calidad.",
      "imagenDePerfil": "fotoPerfil.jpg", 
    },
    {
      "nombreUsuario": "soria.fran",
      "textoDelComentario": "Una maravilla. Es un aroma con notas de madera, cítrico y con un tono dulce. Me pareció un buen regalo. El aroma es muy duradero y el packaging esta muy cuidado. Le doy 10.",
      "imagenDePerfil": "fotoPerfil.jpg", 
    }
  ]
}

module.exports = productsDb