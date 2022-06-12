import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IncomeService } from 'src/app/utils/income.service';

import { IncomeComponent } from './income.component';

describe('IncomeComponent', () => {
  let component: IncomeComponent;
  let fixture: ComponentFixture<IncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeComponent);
    component = fixture.componentInstance;
    component.incomeService.changeIncome('abc', 5000)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the income service', ()=>{
    expect(component.incomeService).toBeDefined()
  })

  it('should be able to list the different income sources and their amounts', ()=>{
    const compiled: HTMLElement = fixture.nativeElement
    const incSources = compiled.querySelectorAll('.income-source')
    expect(incSources[0].textContent).toBeTruthy()
  })

  it('should have a Form Control for income source', ()=>{
    expect(component.incomeSourceControl).toBeDefined()
  })

  it('should have a Form Control for income amount', ()=>{
    expect(component.incomeAmountControl).toBeDefined()
  })

  it('should be able to add an income source with the form', ()=>{
    component.incomeSourceControl.setValue('def')
    component.incomeAmountControl.setValue(1000)
    component.changeEntry()
    expect(component.incomeService.incomeSources['def']).toEqual(1000)
  })

  it('should update total income when form is submitted', ()=>{
    const totalIncome = component.incomeService.totalIncome
    component.incomeSourceControl.setValue('increase test')
    component.incomeAmountControl.setValue(1000)
    component.changeEntry()
    expect(component.incomeService.totalIncome).toBeGreaterThan(totalIncome)
  })
});
