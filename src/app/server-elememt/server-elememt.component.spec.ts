import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerElememtComponent } from './server-elememt.component';

describe('ServerElememtComponent', () => {
  let component: ServerElememtComponent;
  let fixture: ComponentFixture<ServerElememtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServerElememtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerElememtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
