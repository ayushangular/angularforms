import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-forms',
  templateUrl: './hero-forms.component.html',
  styleUrls: ['./hero-forms.component.css']
})
export class HeroFormsComponent {

  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
     
            model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');
            submitted = false;


  onSubmit() { this.submitted = true; }          

  newHero() {
    this.model = new Hero(42, '', '');
  }
}
