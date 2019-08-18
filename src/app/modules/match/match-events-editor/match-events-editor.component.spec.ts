import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchEventsEditorComponent } from './match-events-editor.component';

describe('MatchEventEditorComponent', () => {
  let component: MatchEventsEditorComponent;
  let fixture: ComponentFixture<MatchEventsEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchEventsEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchEventsEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
