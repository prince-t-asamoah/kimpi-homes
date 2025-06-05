import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MessagesViewerComponent } from './messages-viewer.component';

describe('MessagesViewerComponent', () => {
  let component: MessagesViewerComponent;
  let fixture: ComponentFixture<MessagesViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessagesViewerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MessagesViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
