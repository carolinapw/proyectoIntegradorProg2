let productsDb = {
  usuario: 
        {
          email: "lucia.gonzalez@gmail.com",
          usuario: "lu_gonzalez",
          contraseña: "prog2",
          fechaDeNacimiento: "10/05/2003",
          documento: 44983276,
          fotoPerfil: "foto.jpg" 
        },
        
  productos: [
        {
          id: 1,
          name: "Adidas",
          descripcion: "10ml",
          image: "adidas.jpg",
          fechaCarga: "30/11/2022"
        },
        {
          id: 2,
          name: "GUCCI",
          descripcion: "50ml",
          image: "gucci_bloom.jpg",
          fechaCarga: "26/12/2022"
        },
        {
          id: 3,
          name: "Marc Jacobs",
          descripcion: "100ml",
          image: "marc-jacobs-daisy.jpg",
          fechaCarga: "12/09/2021"
        },
        {
          id: 4,
          name: "Paco Rabanne",
          descripcion: "50ml",
          image: "paco_rabbane.jpg",
          fechaCarga: "03/09/2022"
        },
        {
          id: 5,
          name: "Nina Ricci",
          descripcion: "100ml",
          image: "nina-ricci.jpg",
          fechaCarga: "08/06/2021"
        },
        {
          id: 6,
          name: "Giorgio Armani",
          descripcion: "30ml",
          image: "armani.jpg",
          fechaCarga: "10/10/2020"
        },
        {
          id: 7,
          name: "Dior",
          descripcion: "50ml",
          image: "dior.jpg",
          fechaCarga: "14/05/2022"
        },
        {
          id: 8,
          name: "Esteé Lauder",
          descripcion: "100ml",
          image: "esteeLauder_beautifulBelle.jpg",
          fechaCarga: "02/02/2021"
        },
        {
          id: 9,
          name: "DKNY",
          descripcion: "100ml",
          image: "dkny-bedelicious.jpg",
          fechaCarga: "18/03/2023"
        },
        {
          id: 10,
          name: "Michael Kors",
          descripcion: "30ml",
          image: "michaelKors_wonderlust.jpg",
          fechaCarga: "07/03/2021"
        },
      ],
  comentarios: [
    {
      id: 1,
      nombreUsuario: "isabel_lopez",
      textoDelComentario: "Muy buen producto.",
      imagenDePerfil: "fotoPerfil.jpg", 
    },
    {
      id: 2,
      nombreUsuario: "juanperezzz",
      textoDelComentario: "Muy buena duración.",
      imagenDePerfil: "fotoPerfil.jpg", 
    },
    {
      id: 3,
      nombreUsuario: "carrasco_ana",
      textoDelComentario: "Me encantó. Siempre recibo comentarios nuevos sobre lo rico que es.",
      imagenDePerfil: "fotoPerfil.jpg", 
    },
    {
      id: 4,
      nombreUsuario: "mariana_esposito",
      textoDelComentario: "De primerísima calidad.",
      imagenDePerfil: "fotoPerfil.jpg", 
    },
    {
      id: 5,
      nombreUsuario: "soria.fran",
      textoDelComentario: "Una maravilla. Es un aroma con notas de madera, cítrico y con un tono dulce. Me pareció un buen regalo. El aroma es muy duradero y el packaging esta muy cuidado. Le doy 10.",
      imagenDePerfil: "fotoPerfil.jpg", 
    }
  ]
}

module.exports = productsDb