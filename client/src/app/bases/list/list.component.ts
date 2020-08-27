import { Component, OnInit } from '@angular/core'

import { Base } from '../base'
import { BaseService } from '../base.service'

@Component({
  selector: 'base-list',
  templateUrl: './list.component.html',
  styleUrls: [
    './list.component.css'
  ],
  providers: [
    BaseService
  ]
})
export class BaseList implements OnInit {
  bases: Base[]
  selectedBase: Base

  constructor (private baseService: BaseService) {}

  ngOnInit () {
    this.baseService.getAllBases().subscribe((bases: Base[]) => {
      this.bases = bases
    })
  }

  private getIndex = (baseId: String) => {
    return this.bases.findIndex((base: Base) => {
      return base._id === baseId
    })
  }

  selectBase (base: Base) {
    this.selectedBase = base
  }

  createBase = (base: Base) => {
    this.bases.push(base)
    this.selectBase(base)
    return this.bases
  }

  createNewBase () {
    let base: Base = {
      baseName: '',
      isMilk: false,
      isLactose: false,
      isLight: false
    }

    this.selectBase(base)
  }

  updateBase = (base: Base) => {
    let idx = this.getIndex(base._id)

    if (idx !== -1) {
      this.bases[idx] = base
      this.selectBase(base)
    }

    return this.bases
  }

  deleteBase = (baseId: String) => {
    let idx = this.getIndex(baseId)
    if (idx !== -1) {
      this.bases.splice(idx, 1)
      this.selectBase(null)
    }

    return this.bases
  }
}
