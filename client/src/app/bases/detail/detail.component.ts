import { Component, Input } from '@angular/core'

import { Base } from '../base'
import { BaseService } from '../base.service'

@Component({
  selector: 'base-detail',
  templateUrl: './detail.component.html',
  styleUrls: [
    './detail.component.css'
  ]
})
export class BaseDetail {
  @Input() base: Base

  @Input() createHandler: Function

  @Input() updateHandler: Function

  @Input() deleteHandler: Function

  constructor (private baseService: BaseService) {}

  createBase (base: Base) {
    this.baseService.createBase(base).subscribe((newBase: Base) => {
      this.createHandler(newBase)
    })
  }

  updateBase (base: Base): void {
    this.baseService.updateBase(base).subscribe((updatedBase: Base) => {
      this.updateHandler(updatedBase)
    })
  }

  deleteBase (baseId: String): void {
    this.baseService.deleteBase(baseId).subscribe((deletedBaseId: String) => {
      this.deleteHandler(deletedBaseId)
    })
  }
}
