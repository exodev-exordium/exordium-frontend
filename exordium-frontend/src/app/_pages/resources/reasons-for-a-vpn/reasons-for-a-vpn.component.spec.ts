import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonsForAVpnComponent } from './reasons-for-a-vpn.component';

describe('ReasonsForAVpnComponent', () => {
  let component: ReasonsForAVpnComponent;
  let fixture: ComponentFixture<ReasonsForAVpnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasonsForAVpnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonsForAVpnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
