import { TestBed } from '@angular/core/testing';

import { CassandraServiceService } from './cassandra-service.service';

describe('CassandraServiceService', () => {
  let service: CassandraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CassandraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
