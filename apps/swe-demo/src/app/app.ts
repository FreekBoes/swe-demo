//apps/swe-demo/src/app/app.ts
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { NavbarContainer } from "@swe-demo/swe-demo-feature";
import { Navbar } from "@swe-demo/swe-demo-ui";

@Component({
  imports: [RouterModule, NavbarContainer, Navbar],
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrl: "./app.css",
})
export class App {
  protected title = "swe-demo";

  constructor() {
  console.log(import.meta.env['NG_APP_TEST_VALUE'])
  };
  
}
