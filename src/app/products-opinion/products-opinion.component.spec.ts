import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOpinionComponent } from './products-opinion.component';

describe('ProductsOpinionComponent', () => {
  let component: ProductsOpinionComponent;
  let fixture: ComponentFixture<ProductsOpinionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsOpinionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
