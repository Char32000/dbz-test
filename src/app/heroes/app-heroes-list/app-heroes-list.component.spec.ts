import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeroesListComponent } from './app-heroes-list.component';

describe('AppHeroesListComponent', () => {
  let component: AppHeroesListComponent;
  let fixture: ComponentFixture<AppHeroesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppHeroesListComponent]
    });
    fixture = TestBed.createComponent(AppHeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
