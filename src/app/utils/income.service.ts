import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})

export class IncomeService {

  totalIncome: number = 0
  incomeSources: any = {}

  sumIncome(){
    const values = Object.values(this.incomeSources)
    this.totalIncome = 0
    values.map(x=>{
      if(typeof(x)==="number"){
        this.totalIncome+=x
      }
    })
  }

  changeIncome(source: string, amount: number){
    this.incomeSources[source] = amount
    this.sumIncome()
  }

  deleteIncome(source: string){
    delete this.incomeSources[source]
    this.sumIncome()
  }



  constructor() { }
  
}
