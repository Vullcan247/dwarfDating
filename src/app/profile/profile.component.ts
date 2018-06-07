import { Component, OnInit } from "@angular/core";
import { Dwarf } from "../dwarf";
import { DwarfService } from "../dwarf.service";
import { Router } from "@angular/router";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  currentDwarf: Dwarf = new Dwarf();

  favoriteDrinks: string[] = [
    "Beer",
    "Mai-Tai",
    "Dragons Blood",
    "Rob Roy",
    "Elf Earwax",
    "Moonshine",
    "Unicorn Piss",
    "Mud",
    "Fanta",
    "Goat's Milk",
    "Bleach",
    "Toe Juice"
  ];

  occupations: string[] = [
    "smith",
    "Forger",
    "Farmer",
    "Bladesmith",
    "Gemsmith",
    "Miner",
    "Warrior",
    "Mercenary",
    "Bootlegger",
    "Breeder",
    "Mouth Breather"
  ];
  submitDwarf() {
    if (
      this.currentDwarf.name &&
      this.currentDwarf.height &&
      this.currentDwarf.beardColor &&
      this.currentDwarf.beardLength &&
      this.currentDwarf.favoriteDrink &&
      this.currentDwarf.occupation
    ) {
      this.dwarfservice
        .addDwarf(this.currentDwarf)
        .subscribe(() => this.router.navigate(["/spark"]));
    }
  }

  constructor(private dwarfservice: DwarfService, private router: Router) {}

  ngOnInit() {}
}
