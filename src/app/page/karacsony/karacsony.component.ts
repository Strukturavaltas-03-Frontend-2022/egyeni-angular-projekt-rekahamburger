import { Component } from '@angular/core';
import { Art } from 'src/app/model/art';

@Component({
  selector: 'app-karacsony',
  templateUrl: './karacsony.component.html',
  styleUrls: ['./karacsony.component.scss']
})
export class KaracsonyComponent {
  artList: Art[] =[
    {
      id: 1,
      name: 'Zoodiac',
      author: 'Alfons Mucha',
      price: 115000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/zodiac.jpg'
    },

    {
      id: 2,
      name: 'Kaméliás hölgy',
      author: 'Alfons Mucha',
      price: 114500000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Kaméliás hölgy.jpg'
    },
    {
      id: 3,
      name: 'Gyümölcsök',
      author: 'Alfons Mucha',
      price: 112500000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/gyümölcsök.jpg'
    },
    {
      id: 4,
      name: 'Sarah Bernhardt Publicité',
      author: 'Alfons Mucha',
      price: 112500000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/sb.jpg'
    },
    {
      id: 5,
      name: 'Biscuits Champagne',
      author: 'Alfons Mucha',
      price: 17500000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/champagne.jpg'
    },
    {
      id: 6,
      name: 'Bières de la Meuse',
      author: 'Alfons Mucha',
      price: 12500000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)b.d.jpg'
    },
    {
      id: 7,
      name: 'A nap fénypontja',
      author: 'Alfons Mucha',
      price: 17500000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/A nap fénypontja.jpg'
    },
    {
      id: 8,
      name: 'Lady in green',
      author: 'Alfons Mucha',
      price: 17200000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/l in the g.jpg'
    },
    {
      id: 9,
      name: 'La danse',
      author: 'Alfons Mucha',
      price: 17000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/dance2.jpg'
    },
    {
      id: 10,
      name: 'Chocolate ideal',
      author: 'Alfons Mucha',
      price: 11000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Chocolate Ideal.jpg'
    },
    {
      id: 11,
      name: 'Madonna',
      author: 'Alfons Mucha',
      price: 222000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Madonna2 (1).jpg'
    },
    {
      id: 12,
      name: 'La musique',
      author: 'Alfons Mucha',
      price: 111000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/La musique2.jpg'
    },
    {
      id: 13,
      name: 'Princess Hyacinthe',
      author: 'Alfons Mucha',
      price: 300000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/ph2.jpg'
    },
    {
      id: 14,
      name: 'A csók',
      author: 'Gustav Klimt',
      price: 182000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/the kiss.jpg'
    },
    {
      id: 15,
      name: 'The Tree of Life',
      author: 'Gustav Klimt',
      price: 88000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/The Tree of Life.jpg'
    },
    {
      id: 16,
      name: 'The Three Ages of Woman',
      author: 'Gustav Klimt',
      price: 191000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/3 korú nő.jpg'
    },
    {
      id: 17,
      name: 'Beethoven Frieze',
      author: 'Gustav Klimt',
      price: 178000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Beethoven Frieze.png'
    },
    {
      id: 18,
      name: 'Death and Life',
      author: 'Gustav Klimt',
      price: 189000000,
      available: false,
      image: 'src/assets/iloveimg-resized (1)/Beethoven Frieze.png'
    },
    {
      id: 19,
      name: 'Bauerngarten',
      author: 'Gustav Klimt',
      price: 189000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Bauerngarten.jpg'
    },
    {
      id: 20,
      name: 'Lady with Fan',
      author: 'Gustav Klimt',
      price: 189000000,
      available: false,
      image: 'src/assets/iloveimg-resized (1)/lwf.jpeg'
    },
    {
      id: 21,
      name: 'Field of Poppies',
      author: 'Gustav Klimt',
      price: 179000000,
      available: false,
      image: 'src/assets/iloveimg-resized (1)/fop.jpeg'
    },
    {
      id: 22,
      name: 'The Sunflower',
      author: 'Gustav Klimt',
      price: 99000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/sunf.jpeg'
    },
    {
      id: 23,
      name: 'Danae',
      author: 'Gustav Klimt',
      price: 109000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Danae.jpeg'
    },
    {
      id: 24,
      name: 'Lóra támadó jaguár',
      author: 'Henri Rousseau ',
      price: 10000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Lóra támadó jaguár.jpg'
    },
    {
      id: 25,
      name: 'A kígyóbűvölő nő ',
      author: 'Henri Rousseau ',
      price: 15000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/kbüvnő.jpeg'
    },
    {
      id: 26,
      name: 'A Tigris küzdelme',
      author: 'Henri Rousseau ',
      price: 19000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Tigris küzdelme egy bivallyal,.jpg'
    },
    {
      id: 27,
      name: 'Az álom ',
      author: 'Henri Rousseau ',
      price: 21000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Az álom.jpg'
    },
    {
      id: 28,
      name: 'Eiffel-torony',
      author: 'Henri Rousseau ',
      price: 25200000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/.Eiffel-torony.jpg'
    },
    {
      id: 29,
      name: 'Egzotikus táj',
      author: 'Henri Rousseau ',
      price: 25000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Egzotikus táj.jpg'
    },
    {
      id: 30,
      name: 'Karneválest ',
      author: 'Henri Rousseau ',
      price: 20000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Karneválest.jpg'
    },
    {
      id: 31,
      name: 'Alvó cigánylány',
      author: 'Henri Rousseau ',
      price: 18000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Alvó cigánylány.jpg'
    },
    {
      id: 32,
      name: 'Flamingók',
      author: 'Henri Rousseau ',
      price: 25000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Flamingók.jpg'
    },
    {
      id: 33,
      name: 'Önarckép ',
      author: 'Henri Rousseau ',
      price: 25000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/H.R Önarckép.jpg'
    },
    {
      id: 34,
      name: 'Háromkirályok imádása',
      author: 'Sandro Botticelli',
      price: 225000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Háromkirályok imádása.jpg'
    },
    {
      id: 35,
      name: 'Tavasz',
      author: 'Sandro Botticelli',
      price: 295000000,
      available: false,
      image: 'src/assets/iloveimg-resized (1)/Tavasz.jpg'
    },
    {
      id: 36,
      name: 'Vénusz születése',
      author: 'Sandro Botticelli',
      price: 299000000,
      available: false,
      image: 'src/assets/iloveimg-resized (1)/vsz.jpeg'
    },
    {
      id: 37,
      name: 'Madonna del Magnificat ',
      author: 'Sandro Botticelli',
      price: 599000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Madonna del Magnificat.jpg'
    },
    {
      id: 38,
      name: 'Fortitude',
      author: 'Sandro Botticelli',
      price: 499000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/fort.jpeg'
    },
    {
      id: 39,
      name: 'Portré Cosimoval',
      author: 'Sandro Botticelli',
      price: 499000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/cosimo (1).jpeg'
    },
    {
      id: 40,
      name: 'The Trials of Moses',
      author: 'Sandro Botticelli',
      price: 799000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/The Trials of Moses2.jpeg'
    },
    {
      id: 41,
      name: 'Venusz és Mars ',
      author: 'Sandro Botticelli',
      price: 799000000,
      available: false,
      image: 'src/assets/iloveimg-resized (1)/vandm.jpeg'
    },
    {
      id: 42,
      name: 'Idealized Portrait of a Lady',
      author: 'Sandro Botticelli',
      price: 599000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/idea.jpeg'
    },
    {
      id: 43,
      name: 'Mystic Nativity ',
      author: 'Sandro Botticelli',
      price: 899000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/mn.jpeg'
    },
    {
      id: 44,
      name: 'Ecce homo ',
      author: 'Bosch Hieronymus',
      price: 899000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Ecce homo.jpg'
    },
    {
      id: 45,
      name: 'A hét főbűn',
      author: 'Bosch Hieronymus',
      price: 999000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/7fb.jpeg'
    },
    {
      id: 46,
      name: 'Az utolsó ítélet',
      author: 'Bosch Hieronymus',
      price: 919000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Az utolsó ítélet.jpg'
    },
    {
      id: 47,
      name: 'A gyönyörök kertje',
      author: 'Bosch Hieronymus',
      price: 979000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/A gyönyörök kertje.jpg'
    },
    {
      id: 48,
      name: 'A kőoperáció',
      author: 'Bosch Hieronymus',
      price: 919000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/A kőoperáció.jpg'
    },
  ];









}




