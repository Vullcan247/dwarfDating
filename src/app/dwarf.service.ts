import { Injectable } from "@angular/core";
import { Dwarf } from "./dwarf";

@Injectable({
  providedIn: "root"
})
export class DwarfService {
  dwarves: Dwarf[] = [
    //     {id:1, name: "Hatunda",
    //     height: "2 foot and 4 inches",
    //     beardColor: "black",
    //     beardLength: 8,
    //    },
    //    { id:1, name: "Gala",
    //     height: "3 foot and 6 inches",
    //     beardColor: "green",
    //     beardLength: 3,
    //    },
    //    {id:1, name: "Prince",
    //     height: "4 foot and 9 inches",
    //     beardColor: "blue",
    //     beardLength: 0.25,
    //    },
    //   ];
    //   getDwarves() {
    //     return this.dwarves;
    //   }
    //   addDwarf(dwarf: Dwarf){
    //     dwarf.id = 1;
    //     this.dwarves.push(dwarf);
    //   }
  ];
  constructor() {}

  getDwarves() {
    return this.dwarves;
  }

  addDwarf(dwarf: Dwarf) {
    dwarf.id = 1;
    this.dwarves.push(dwarf);
  }
}
