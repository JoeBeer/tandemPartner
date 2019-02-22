import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatroomItemComponent } from './chatroom-item.component';

describe('ChatroomItemComponent', () => {
  let component: ChatroomItemComponent;
  let fixture: ComponentFixture<ChatroomItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatroomItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatroomItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
