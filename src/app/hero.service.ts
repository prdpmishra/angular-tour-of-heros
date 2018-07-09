import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROS } from './mock-heros';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

    getHeros(): Observable<Hero[]> {
	  // TODO: send the message _after_ fetching the heros
	  this.messageService.add('HeroService: fetched heros');
	  return of(HEROS);
	}

	getHero(id: number): Observable<Hero> {
	  // TODO: send the message _after_ fetching the hero
	  this.messageService.add(`HeroService: fetched hero id=${id}`);
	  return of(HEROS.find(hero => hero.id === id));
	}
}
