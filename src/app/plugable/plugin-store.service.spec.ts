import { TestBed, inject } from '@angular/core/testing';

import { PluginStoreService } from './plugin-store.service';

describe('PluginStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PluginStoreService]
    });
  });

  it('should be created', inject([PluginStoreService], (service: PluginStoreService) => {
    expect(service).toBeTruthy();
  }));
});
