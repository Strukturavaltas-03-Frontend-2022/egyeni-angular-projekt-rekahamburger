import { Component } from '@angular/core';
import { Art } from 'src/app/model/art';

@Component({
  selector: 'app-szecesszio',
  templateUrl: './szecesszio.component.html',
  styleUrls: ['./szecesszio.component.scss']
})
export class SzecesszioComponent {
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
      id: 3,
      name: 'Kaméliás hölgy',
      author: 'Alfons Mucha',
      price: 114500000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Kaméliás hölgy.jpg'
    },
    {
      id: 5,
      name: 'Gyümölcsök',
      author: 'Alfons Mucha',
      price: 112500000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/gyümölcsök.jpg'
    },
    {
      id: 6,
      name: 'Sarah Bernhardt Publicité',
      author: 'Alfons Mucha',
      price: 112500000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/sb.jpg'
    },
    {
      id: 7,
      name: 'Biscuits Champagne',
      author: 'Alfons Mucha',
      price: 17500000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/champagne.jpg'
    },
    {
      id: 8,
      name: 'Bières de la Meuse',
      author: 'Alfons Mucha',
      price: 12500000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)b.d.jpg'
    },
    {
      id: 9,
      name: 'A nap fénypontja',
      author: 'Alfons Mucha',
      price: 17500000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/A nap fénypontja.jpg'
    },
    {
      id: 10,
      name: 'Lady in green',
      author: 'Alfons Mucha',
      price: 17200000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/l in the g.jpg'
    },
    {
      id: 11,
      name: 'La danse',
      author: 'Alfons Mucha',
      price: 17000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/dance2.jpg'
    },
    {
      id: 12,
      name: 'Chocolate ideal',
      author: 'Alfons Mucha',
      price: 11000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Chocolate Ideal.jpg'
    },
    {
      id: 13,
      name: 'Madonna',
      author: 'Alfons Mucha',
      price: 222000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Madonna2 (1).jpg'
    },
    {
      id: 14,
      name: 'La musique',
      author: 'Alfons Mucha',
      price: 111000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/La musique2.jpg'
    },
    {
      id: 15,
      name: 'Princess Hyacinthe',
      author: 'Alfons Mucha',
      price: 300000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/ph2.jpg'
    },
    {
      id: 16,
      name: 'A csók',
      author: 'Gustav Klimt',
      price: 182000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/the kiss.jpg'
    },
    {
      id: 17,
      name: 'The Tree of Life',
      author: 'Gustav Klimt',
      price: 88000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/The Tree of Life.jpg'
    },
    {
      id: 18,
      name: 'The Three Ages of Woman',
      author: 'Gustav Klimt',
      price: 191000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/3 korú nő.jpg'
    },
    {
      id: 19,
      name: 'Beethoven Frieze',
      author: 'Gustav Klimt',
      price: 178000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Beethoven Frieze.png'
    },
    {
      id: 20,
      name: 'Death and Life',
      author: 'Gustav Klimt',
      price: 189000000,
      available: false,
      image: 'src/assets/iloveimg-resized (1)/Beethoven Frieze.png'
    },
    {
      id: 21,
      name: 'Bauerngarten',
      author: 'Gustav Klimt',
      price: 189000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Bauerngarten.jpg'
    },
    {
      id: 22,
      name: 'Lady with Fan',
      author: 'Gustav Klimt',
      price: 189000000,
      available: false,
      image: 'src/assets/iloveimg-resized (1)/lwf.jpeg'
    },
    {
      id: 23,
      name: 'Field of Poppies',
      author: 'Gustav Klimt',
      price: 179000000,
      available: false,
      image: 'src/assets/iloveimg-resized (1)/fop.jpeg'
    },
    {
      id: 24,
      name: 'The Sunflower',
      author: 'Gustav Klimt',
      price: 99000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/sunf.jpeg'
    },
    {
      id: 25,
      name: 'Danae',
      author: 'Gustav Klimt',
      price: 109000000,
      available: true,
      image: 'src/assets/iloveimg-resized (1)/Danae.jpeg'
    },
  ];
}
