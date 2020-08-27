import { Component, Input } from '@angular/core'

import { Flavor } from '../flavor'
import { FlavorService } from '../flavor.service'
import { Base } from '../../bases/base'

@Component({
  selector: 'flavor-detail',
  templateUrl: './detail.component.html',
  styleUrls: [
    './detail.component.css'
  ]
})
export class FlavorDetail {
  @Input() flavor: Flavor

  @Input() bases: Base[]

  @Input() createHandler: Function

  @Input() updateHandler: Function

  @Input() deleteHandler: Function

  constructor (private flavorService: FlavorService) {}

  createFlavor (flavor: Flavor) {
    this.flavorService.createFlavor(flavor).subscribe((newFlavor: Flavor) => {
      this.createHandler(newFlavor)
    })
  }

  updateFlavor (flavor: Flavor): void {
    this.flavorService.updateFlavor(flavor).subscribe((updatedFlavor: Flavor) => {
      this.updateHandler(updatedFlavor)
    })
  }

  deleteFlavor (flavorId: String): void {
    this.flavorService.deleteFlavor(flavorId).subscribe((deletedFlavorId: String) => {
      this.deleteHandler(deletedFlavorId)
    })
  }
}
