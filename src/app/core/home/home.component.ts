import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from "@angular/material/sidenav";
import {BreakpointObserver} from "@angular/cdk/layout";
import {NavigationEnd, Router} from "@angular/router";
import {delay} from "rxjs";
import {UntilDestroy, untilDestroyed} from "@ngneat/until-destroy";
import {filter} from "rxjs/operators";
import {SecurityService} from "../../architecture/security/security.service";

@UntilDestroy()
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;

  public hasReadAllPermission;

  constructor(public securityService: SecurityService,
              private observer: BreakpointObserver, private router: Router) {
    this.hasReadAllPermission = securityService.hasRoles('ROLE_CATEGORY_READ_ALL');
  }


  ngAfterViewInit() {
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });
  }

}
