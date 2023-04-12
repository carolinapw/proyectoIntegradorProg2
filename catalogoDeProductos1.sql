INSERT INTO usuarios (id, email, usuario, contrasena, fechaNacimiento, documento)
VALUES (DEFAULT, 'juana_lopez@gmail.com', 'juanaL', '4325', '2001-09-11', 49305896),
(DEFAULT,'luciano_andujar1@gmail.com', 'lucianoA1', '2246', '1999-10-22', 50205798), 
(DEFAULT,'florencia_ruiz1@gmail.com', 'florenciaR1', '3368', '2002-09-06', 55234986),
(DEFAULT,'julian_alvarezz@gmail.com', 'julianAA', '2260', '2001-10-11', 39066321),
(DEFAULT,'carolina_caceress@gmail.com', 'carolinaCc', '3479', '1998-09-08', 40794596);

INSERT INTO productos (id, usuarios_id, nombreProducto, descripcion)
VALUES (DEFAULT, 1, 'ADIDAS Ice Dive', '10ml. Como una verdadera explosión de frescura translúcida y helada, Ice Dive es la fragancia masculina de Adidas para hombres que buscan placeres intensos.'),
(DEFAULT, 3, 'GUCCI Bloom', 'Capturando el espíritu de las mujeres contemporáneas, diversas yauténticas de Gucci, las notas de Bloom de tuberosa natural y Jazmíncrean un aroma floral blanco inesperadamente rico en la piel.'),
(DEFAULT, 2, 'MARC JACOBS Daisy', '100ml. Una eau de toilette florida, fresca y aterciopelada con dejosamaderados y verdes.'),
(DEFAULT, 4, 'PACO RABANNE Lady Million', '50ml. Lady Million Fabulous, nacecon el ímpetu cautivador de la música y el alegre ritmo del baile, paraconvertirse en una fragancia exuberante y adictiva que se completa conuna vibración floral y luz nocturna.'),
(DEFAULT, 4,'NINA RICCI Rouge','100ml. La fragancia Nina Rouge eau de toilette ofrece la frescura perfecta para épocas de calor. Al caracterizarse por sus aromas ligeros podés usar la cantidad que quieras sin miedo a excederte.'),
(DEFAULT, 5,'GIORGIO ARMANI Acqua Di Gio','30ml. Descubrí el perfume de la masculinidad salvaje, profunda y misteriosa. Familia olfativa: Acuática. Notas de salida: bergamota. Notas de corazón: geranio, romero,salvia. Notas de fondo: pachuli, incienso.'),
(DEFAULT, 1,'DIOR Jadore','50ml. Un aroma floral luminoso, alegre, asentado y decidido.'),
(DEFAULT, 3,'ESTEÉ LAUDER Beautiful Belle','100ml. Más que una fragancia, es una actitud. DKNY Be Delicious tiene un aromajugoso, fresco y floral que desprende un carisma divertido y espontáneo.'),
(DEFAULT, 2,'DKNY Be delicious','100ml. Más que una fragancia, es una actitud. DKNY Be Delicious tiene un aromajugoso, fresco y floral que desprende un carisma divertido y espontáneo.'),
(DEFAULT, 5,'MICHAEL KORS Wonderlust','30ml. Una mezcla de lujosas esencias se combinan con notas de especias de flores orientales. El aroma de esta deliciosa fragancia comienza conuna nota de bergamota italiana y de pimienta rosa. Brotes florales cautivan el provocativo aroma de Michael Kors Wonderlust."');


INSERT INTO comentarios (id, productos_id, usuarios_id, texto)
VALUES (DEFAULT, 2, 1, 'Muy buen producto'),
(DEFAULT, 4, 2, 'Muy buena duración.'),
(DEFAULT, 3, 5, 'Me encantó. Siempre recibo comentarios nuevos sobre lo rico que es.'),
(DEFAULT, 9, 2, 'De primerísima calidad.'),
(DEFAULT, 7, 4, 'Una maravilla. Es un aroma con notas de madera, cítrico y con un tono dulce. Me pareció un buen regalo. El aroma es muy duradero y el packaging esta muy cuidado. Le doy 10.');
