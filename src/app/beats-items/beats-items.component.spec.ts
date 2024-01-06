import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeatsItemsComponent } from './beats-items.component';

describe('BeatsItemsComponent', () => {
  let component: BeatsItemsComponent;
  let fixture: ComponentFixture<BeatsItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeatsItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeatsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
