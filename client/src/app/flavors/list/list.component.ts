import { Component, OnInit } from '@angular/core'

import { Flavor } from '../flavor'
import { FlavorService } from '../flavor.service'

import { Base } from '../../bases/base'
import { BaseService } from '../../bases/base.service'

@Component({
  selector: 'flavor-list',
  templateUrl: './list.component.html',
  styleUrls: [
    './list.component.css'
  ],
  providers: [
    FlavorService,
    BaseService
  ]
})
export class FlavorList implements OnInit {
  flavors: Flavor[]
  bases: Base[]
  selectedFlavor: Flavor

  constructor (private flavorService: FlavorService, private baseService: BaseService) {}

  ngOnInit () {
    this.flavorService.getAllFlavors().subscribe((flavors: Flavor[]) => {
      this.flavors = flavors
    })

    this.baseService.getAllBases().subscribe((bases: Base[]) => {
      this.bases = bases

      this.flavors.forEach((flavor, idx) => {
        this.bases.map((base) => {
          if (flavor.baseId === base._id) {
            return (this.flavors[idx].baseName = base.baseName)
          }
        })
      })
    })
  }

  private getIndex = (flavorId: String) => {
    return this.flavors.findIndex((flavor: Flavor) => {
      return flavor._id === flavorId
    })
  }

  selectFlavor (flavor: Flavor) {
    this.selectedFlavor = flavor

    this.flavors.forEach((flavor, idx) => {
      this.bases.map((base) => {
        if (flavor.baseId === base._id) {
          return (this.flavors[idx].baseName = base.baseName)
        }
      })
    })
  }

  createFlavor = (flavor: Flavor) => {
    this.flavors.push(flavor)
    this.selectFlavor(flavor)
    return this.flavors
  }

  createNewFlavor () {
    let flavor: Flavor = {
      flavorName: '',
      baseId: '',
      baseName: ''
    }

    this.selectFlavor(flavor)
  }

  updateFlavor = (flavor: Flavor) => {
    let idx = this.getIndex(flavor._id)

    if (idx !== -1) {
      this.flavors[idx] = flavor
      this.selectFlavor(flavor)
    }

    return this.flavors
  }

  deleteFlavor = (flavorId: String) => {
    let idx = this.getIndex(flavorId)
    if (idx !== -1) {
      this.flavors.splice(idx, 1)
      this.selectFlavor(null)
    }

    return this.flavors
  }
}
