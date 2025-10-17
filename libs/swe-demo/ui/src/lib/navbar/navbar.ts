//navbar.ts
import { Component, EventEmitter, Input, Output } from "@angular/core";
import { RouterModule } from "@angular/router";

export interface NavItem {
  label: string;
  path: string;
  icon?: string; // optional material icon name
}

@Component({
  selector: "lib-navbar",
  imports: [RouterModule],
  templateUrl: "./navbar.html",
  styleUrl: "./navbar.css",
})
export class Navbar {
  @Input() items: NavItem[] = [];
  @Input() showUser = false;
  @Output() navigate = new EventEmitter<string>();
  @Output() logout = new EventEmitter<void>();
}
