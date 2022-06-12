import { TestBed } from '@angular/core/testing';

import { IncomeService } from './income.service';

describe('IncomeService', () => {
  let service: IncomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have an ability to add an income source', ()=>{
    service.changeIncome("Cool Corp Salary", 5000)
    expect(service.incomeSources["Cool Corp Salary"]).toEqual(5000)
  })

  it('should have an ability to change an income source', ()=>{
    service.changeIncome('Cool Corp Salary', 5000)
    service.changeIncome('Cool Corp Salary', 6000)
    expect(service.incomeSources['Cool Corp Salary']).toEqual(6000)
  })

  it('should be able to delete an income source', ()=>{
    service.changeIncome('Cool Corp Salary', 5000)
    service.deleteIncome('Cool Corp Salary')
    expect(service.incomeSources['Cool Corp Salary']).toBeUndefined()
  })

  it('should be able to give a total amount of income', ()=>{
    service.changeIncome('abc', 4000)
    service.changeIncome('def', 1000)
    service.changeIncome('efg', 5000)
    service.sumIncome()
    expect(service.totalIncome).toEqual(10000)
  })
});
