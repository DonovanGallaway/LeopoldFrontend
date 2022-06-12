import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IncomeService } from 'src/app/utils/income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {

  incomeService: IncomeService;

  incomeSourceControl = new FormControl('')
  incomeAmountControl = new FormControl(0)

  constructor(incomeService: IncomeService) {
    this.incomeService = incomeService
   }

  changeEntry(){
    this.incomeService.changeIncome(this.incomeSourceControl.value, parseInt(this.incomeAmountControl.value))
  }


  ngOnInit(): void {
  }

  

}
