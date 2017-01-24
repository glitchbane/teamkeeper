/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { OrgDataService } from './org-data.service';

describe('OrgDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrgDataService]
    });
  });

  it('should ...', inject([OrgDataService], (service: OrgDataService) => {
    expect(service).toBeTruthy();
  }));
});
