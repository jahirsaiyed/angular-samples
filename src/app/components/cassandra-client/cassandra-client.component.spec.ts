import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CassandraClientComponent } from './cassandra-client.component';

describe('CassandraClientComponent', () => {
  let component: CassandraClientComponent;
  let fixture: ComponentFixture<CassandraClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CassandraClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CassandraClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
