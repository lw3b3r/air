import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  products = [
    {
      name: 'Unicorn Farts',
      price: 100,
      description:
        "This air captures the whimsical and delightful scent of unicorn farts, which is said to smell like a combination of cotton candy, rainbows, and glitter. Whether you're a believer in unicorns or just love a good laugh, our Unicorn Farts Air is the perfect addition to your collection. It's sure to bring a smile to your face and a little bit of magic to your day.",
      image: '../../assets/Images/milan-popovic-YjN1l87BUOk-unsplash.jpg',
    },
    {
      name: 'Space Atmosphere',
      price: 100,
      description:
        "Embark on a cosmic journey with our Space Air. This air captures the emptiness and weightlessness of the universe, giving you a unique and rare experience. Whether you're a space enthusiast or just curious about the unknown, our Space Air will transport you to the vast expanse of the cosmos.",
      image: '../../assets/Images/jar-7565705.jpg',
    },
    {
      name: 'Zombie Breath',
      price: 100,
      description:
        "Get ready to experience the undead with our Zombie Breath Air. This air captures the decaying, putrid scent of zombie breath, giving you a taste of the undead. Whether you're a fan of horror movies or just love the thrill of the zombie apocalypse, our Zombie Breath Air will transport you to a post-apocalyptic world. Just be careful not to breathe in too much!",
      image: '../../assets/Images/pexels-nathan-j-hilton-7026665.jpg',
    },
    {
      name: 'Unicorn Farts',
      price: 100,
      description:
        "This air captures the whimsical and delightful scent of unicorn farts, which is said to smell like a combination of cotton candy, rainbows, and glitter. Whether you're a believer in unicorns or just love a good laugh, our Unicorn Farts Air is the perfect addition to your collection. It's sure to bring a smile to your face and a little bit of magic to your day.",
      image: '../../assets/Images/milan-popovic-YjN1l87BUOk-unsplash.jpg',
    },
    {
      name: 'Space Atmosphere',
      price: 100,
      description:
        "Embark on a cosmic journey with our Space Air. This air captures the emptiness and weightlessness of the universe, giving you a unique and rare experience. Whether you're a space enthusiast or just curious about the unknown, our Space Air will transport you to the vast expanse of the cosmos.",
      image: '../../assets/Images/jar-7565705.jpg',
    },
    {
      name: 'Zombie Breath',
      price: 100,
      description:
        "Get ready to experience the undead with our Zombie Breath Air. This air captures the decaying, putrid scent of zombie breath, giving you a taste of the undead. Whether you're a fan of horror movies or just love the thrill of the zombie apocalypse, our Zombie Breath Air will transport you to a post-apocalyptic world. Just be careful not to breathe in too much!",
      image: '../../assets/Images/pexels-nathan-j-hilton-7026665.jpg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // TODO Implement search method
}
