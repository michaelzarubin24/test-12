import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShavermaComponent } from './shaverma.component';

describe('ShavermaComponent', () => {
  let component: ShavermaComponent;
  let fixture: ComponentFixture<ShavermaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShavermaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShavermaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
