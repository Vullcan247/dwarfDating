import { Injectable } from "@angular/core";
import { Dwarf } from "./dwarf";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Http, Headers, Response } from "@angular/http";

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
  constructor(private http: HttpClient) {}

  // getDwarves() {
  //   return this.dwarves;
  // }

  getDwarves(): Observable<Dwarf[]> {
    return this.http.get<Dwarf[]>(
      "https://forge-server-an.herokuapp.com/api/dwarves"
    );
  }

  addDwarf(dwarf: Dwarf) {
    return this.http.post(
      "https://forge-server-an.herokuapp.com/api/dwarves",
      dwarf
    );
  }

  deleteDwarf(id: string) {
    return this.http.delete(
      "https://forge-server-an.herokuapp.com/api/dwarves/" + id
    );
  }

  // addDwarf(dwarf: Dwarf) {
  //   dwarf.id = 1;
  //   this.dwarves.push(dwarf);
  // }
}
