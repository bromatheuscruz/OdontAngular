import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-home-screen",
  templateUrl: "./home-screen.component.html",
  styleUrls: ["./home-screen.component.css"]
})
export class HomeScreenComponent implements OnInit {
  constructor(private router: Router) {
    this.sidenarNavigationItems = [
      {
        name: "Dashboard",
        route: "dashboard"
      },
      {
        name: "Agendamento",
        route: "scheduling"
      },
      {
        name: "Cliente",
        route: "pacient"
      },
      {
        name: "Pagamento",
        route: "payment"
      },
      
    ];
  }
  
  sidenarNavigationItems: ItemSidebarNavigation[];

  navigateTo = (route: string): void => {
    this.router.navigate([`home/${route}`]);
  }
  

  ngOnInit() {}
}

interface ItemSidebarNavigation {
  name: string;
  route: string;
}
