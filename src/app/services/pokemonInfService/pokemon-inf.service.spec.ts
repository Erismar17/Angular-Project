import { TestBed } from '@angular/core/testing';

import { PokemonInfService } from './pokemon-inf.service';

describe('PokemonInfService', () => {
  let service: PokemonInfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokemonInfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
