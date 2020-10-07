import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileDeviceFeaturesComponent } from './mobile-device-features.component';

describe('MobileDeviceFeaturesComponent', () => {
  let component: MobileDeviceFeaturesComponent;
  let fixture: ComponentFixture<MobileDeviceFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileDeviceFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobileDeviceFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
