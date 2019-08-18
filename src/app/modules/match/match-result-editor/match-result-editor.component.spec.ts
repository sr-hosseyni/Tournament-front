import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchResultEditorComponent } from './match-result-editor.component';

describe('MatchResultEditorComponent', () => {
  let component: MatchResultEditorComponent;
  let fixture: ComponentFixture<MatchResultEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchResultEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchResultEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
