let productsDb = {
  usuario: 
        {
          "email": "caro@udesa.edu.ar",
          "usuario": "caro",
          "contraseña": "12345",
          "fecha de nacimiento": "16/03/2003",
          "nro de documento": 204085302,
          "foto de perfil": "foto.jpg" 
        },
  productos: [
        {
          "name": "Adidas",
          "descripcion": "10ml",
          "image": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiX7Y-m6tjcAhWRylkKHSFDBVcQjRx6BAgBEAU&url=https%3A%2F%2Fwww.walgreens.com%2Fstore%2Fc%2Fadidas-moves-him-eau-de-toilette-natural-spray%2FID%3Dprod2412-product&psig=AOvVaw3ZTeiYXbrg5-oo7uIqDcEG&ust=1533658771103926",
          "fecha de carga": 3
        },
        {
          "name": "GUCCI",
          "descripcion": "50ml",
          "image": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj_qf-L69jcAhVnqlkKHeVHAVIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.hsn.com%2Fproducts%2Fgucci-premiere-by-gucci-edp-spray-for-women-17-oz%2F7680166&psig=AOvVaw0OmULSI4hNjfIYdWaB9HVS&ust=1533658923240454",
          "fecha de carga": 4
        },
        {
          "name": "FOGG",
          "descripcion": "100ml",
          "image": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiKr4q169jcAhUSuVkKHfZJC1YQjRx6BAgBEAU&url=https%3A%2F%2Fwww.flipkart.com%2Fperfumes%2Ffogg~brand%2Fpr%3Fsid%3Dt06%252Cr3o%252Caa1&psig=AOvVaw1F90I4cfnjXPAifWeyK5tV&ust=1533659076257931",
          "fecha de carga": 4
        },
        {
          "name": "Paco Rabanne",
          "descripcion": "50ml",
          "image": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj_qf-L69jcAhVnqlkKHeVHAVIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.hsn.com%2Fproducts%2Fgucci-premiere-by-gucci-edp-spray-for-women-17-oz%2F7680166&psig=AOvVaw0OmULSI4hNjfIYdWaB9HVS&ust=1533658923240454",
          "fecha de carga": 4
        },
        {
          "name": "Nina Ricci",
          "descripcion": "50ml",
          "image": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj_qf-L69jcAhVnqlkKHeVHAVIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.hsn.com%2Fproducts%2Fgucci-premiere-by-gucci-edp-spray-for-women-17-oz%2F7680166&psig=AOvVaw0OmULSI4hNjfIYdWaB9HVS&ust=1533658923240454",
          "fecha de carga": 4
        },
        {
          "name": "Giorgio Armani",
          "descripcion": "50ml",
          "image": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj_qf-L69jcAhVnqlkKHeVHAVIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.hsn.com%2Fproducts%2Fgucci-premiere-by-gucci-edp-spray-for-women-17-oz%2F7680166&psig=AOvVaw0OmULSI4hNjfIYdWaB9HVS&ust=1533658923240454",
          "fecha de carga": 4
        },
        {
          "name": "Dior",
          "descripcion": "50ml",
          "image": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj_qf-L69jcAhVnqlkKHeVHAVIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.hsn.com%2Fproducts%2Fgucci-premiere-by-gucci-edp-spray-for-women-17-oz%2F7680166&psig=AOvVaw0OmULSI4hNjfIYdWaB9HVS&ust=1533658923240454",
          "fecha de carga": 4
        },
        {
          "name": "Esteé Lauder",
          "descripcion": "50ml",
          "image": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj_qf-L69jcAhVnqlkKHeVHAVIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.hsn.com%2Fproducts%2Fgucci-premiere-by-gucci-edp-spray-for-women-17-oz%2F7680166&psig=AOvVaw0OmULSI4hNjfIYdWaB9HVS&ust=1533658923240454",
          "fecha de carga": 4
        },
        {
          "name": "DKNY",
          "descripcion": "50ml",
          "image": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj_qf-L69jcAhVnqlkKHeVHAVIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.hsn.com%2Fproducts%2Fgucci-premiere-by-gucci-edp-spray-for-women-17-oz%2F7680166&psig=AOvVaw0OmULSI4hNjfIYdWaB9HVS&ust=1533658923240454",
          "fecha de carga": 4
        },
        {
          "name": "Michael Kors",
          "descripcion": "50ml",
          "image": "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwj_qf-L69jcAhVnqlkKHeVHAVIQjRx6BAgBEAU&url=https%3A%2F%2Fwww.hsn.com%2Fproducts%2Fgucci-premiere-by-gucci-edp-spray-for-women-17-oz%2F7680166&psig=AOvVaw0OmULSI4hNjfIYdWaB9HVS&ust=1533658923240454",
          "fecha de carga": 4
        },
      ],
  comentarios: [
    {
      "nombreUsuario": "Ori",
      "textoDelComentario": "Muy buen producto",
      "imagenDePerfil": "fotoPerfil.jpg", 
    }
  ]
}

module.exports = productsDb