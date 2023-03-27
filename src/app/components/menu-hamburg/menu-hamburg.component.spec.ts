import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuHamburgComponent } from './menu-hamburg.component';

describe('MenuHamburgComponent', () => {
  let component: MenuHamburgComponent;
  let fixture: ComponentFixture<MenuHamburgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuHamburgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuHamburgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
