let productsDb = {
  usuario: 
        {
          id: 1,
          email: "lucia.gonzalez@gmail.com",
          usuario: "lu_gonzalez",
          contraseña: "prog2",
          fechaDeNacimiento: "10/05/2003",
          documento: 44983276,
          fotoPerfil: "mujer.jpeg" 
        },
        
  productos: [
        {
          id: 1,
          name: "ADIDAS Ice Dive",
          descripcion: "10ml. Como una verdadera explosión de frescura translúcida y helada, Ice Dive es la fragancia masculina de Adidas para hombres que buscan placeres intensos.",
          image: "adidas.jpg",
          fechaCarga: "30/11/2022"
        },
        {
          id: 2,
          name: "GUCCI Bloom",
          descripcion: "50ml. Capturando el espíritu de las mujeres contemporáneas, diversas yauténticas de Gucci, las notas de Bloom de tuberosa natural y Jazmíncrean un aroma floral blanco inesperadamente rico en la piel.",
          image: "gucci_bloom.jpg",
          fechaCarga: "26/12/2022"
        },
        {
          id: 3,
          name: "MARC JACOBS Daisy",
          descripcion: "100ml. Una eau de toilette florida, fresca y aterciopelada con dejosamaderados, verdes y almizclados.",
          image: "marc-jacobs-daisy.jpg",
          fechaCarga: "12/09/2021"
        },
        {
          id: 4,
          name: "PACO RABANNE Lady Million",
          descripcion: "50ml.  Lady Million Fabulous, nacecon el ímpetu cautivador de la música y el alegre ritmo del baile, paraconvertirse en una fragancia exuberante y adictiva que se completa conuna vibración floral y luz nocturna.",
          image: "paco_rabbane.jpg",
          fechaCarga: "03/09/2022"
        },
        {
          id: 5,
          name: "NINA RICCI Rouge",
          descripcion: "100ml. La fragancia Nina Rouge eau de toilette ofrece la frescura perfecta para épocas de calor. Al caracterizarse por sus aromas ligeros podés usar la cantidad que quieras sin miedo a excederte.",
          image: "nina-ricci.jpg",
          fechaCarga: "08/06/2021"
        },
        {
          id: 6,
          name: "GIORGIO ARMANI Acqua Di Gio",
          descripcion: "30ml. Descubrí el perfume de la masculinidad salvaje, profunda y misteriosa. Familia olfativa: Acuática. Notas de salida: bergamota. Notas de corazón: geranio, romero,salvia. Notas de fondo: pachuli, incienso.",
          image: "armani.jpg",
          fechaCarga: "10/10/2020"
        },
        {
          id: 7,
          name: "DIOR J'adore",
          descripcion: "50ml. Un aroma floral luminoso, alegre, asentado y decidido.",
          image: "dior.jpg",
          fechaCarga: "14/05/2022"
        },
        {
          id: 8,
          name: "ESTEÉ LAUDER Beautiful Belle",
          descripcion: "100ml. Más que una fragancia, es una actitud. DKNY Be Delicious tiene un aromajugoso, fresco y floral que desprende un carisma divertido y espontáneo.",
          image: "esteeLauder_beautifulBelle.jpg",
          fechaCarga: "02/02/2021"
        },
        {
          id: 9,
          name: "DKNY Be delicious",
          descripcion: "100ml. Más que una fragancia, es una actitud. DKNY Be Delicious tiene un aromajugoso, fresco y floral que desprende un carisma divertido y espontáneo.",
          image: "dkny-bedelicious.jpg",
          fechaCarga: "18/03/2023"
        },
        {
          id: 10,
          name: "MICHAEL KORS Wonderlust",
          descripcion: "30ml. Una mezcla de lujosas esencias se combinan con notas de especias de flores orientales. El aroma de esta deliciosa fragancia comienza conuna nota de bergamota italiana y de pimienta rosa. Brotes florales cautivan el provocativo aroma de Michael Kors Wonderlust",
          image: "michaelKors_wonderlust.jpg",
          fechaCarga: "07/03/2021"
        },
      ],
  comentarios: [
    {
      id: 1,
      nombreUsuario: "isabel_lopez",
      textoDelComentario: "Muy buen producto.",
      imagenDePerfil: "mujer.jpeg", 
    },
    {
      id: 2,
      nombreUsuario: "juanperezzz",
      textoDelComentario: "Muy buena duración.",
      imagenDePerfil: "hombre1.jpg", 
    },
    {
      id: 3,
      nombreUsuario: "carrasco_ana",
      textoDelComentario: "Me encantó. Siempre recibo comentarios nuevos sobre lo rico que es.",
      imagenDePerfil: "mujer2.jpg", 
    },
    {
      id: 4,
      nombreUsuario: "mariana_esposito",
      textoDelComentario: "De primerísima calidad.",
      imagenDePerfil: "mujer3.jpg", 
    },
    {
      id: 5,
      nombreUsuario: "soria.fran",
      textoDelComentario: "Una maravilla. Es un aroma con notas de madera, cítrico y con un tono dulce. Me pareció un buen regalo. El aroma es muy duradero y el packaging esta muy cuidado. Le doy 10.",
      imagenDePerfil: "hombre2.jpg", 
    }
  ]
}

module.exports = productsDb