import { Component, OnInit } from "@angular/core";
import { Dwarf } from "../dwarf";
import { DwarfService } from "../dwarf.service";
@Component({
  selector: "app-spark",
  templateUrl: "./spark.component.html",
  styleUrls: ["./spark.component.css"]
})
export class SparkComponent implements OnInit {
  constructor(private dwarfService: DwarfService) {}

  dwarves: Dwarf[];

  getDwarves() {
    // this.dwarves = this.dwarfService.getDwarves();
    this.dwarfService.getDwarves().subscribe(d => {
      this.dwarves = d;
    });
  }

  deleteDwarf(id: string) {
    this.dwarfService.deleteDwarf(id).subscribe();
    this.dwarves = this.dwarves.filter(x => x._id != id);
  }

  ngOnInit() {
    this.getDwarves();
  }
}
