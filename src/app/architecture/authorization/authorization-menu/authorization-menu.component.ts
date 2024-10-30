import { Component } from '@angular/core';
import {SecurityService} from "../../security/security.service";
import {AuthorizationModule} from "../authorization.module";
import {AuthorizationPaths} from "../authorization-routing.module";
import {SecurityUserRoles} from "../security-user/security-user-routing.module";

@Component({
  selector: 'authorization-menu',
  templateUrl: './authorization-menu.component.html',
  styleUrl: './authorization-menu.component.scss'
})
export class AuthorizationMenuComponent {
  adminMenuOpen: boolean = false;
  public readonly routeLinkSecurityUser : string = AuthorizationPaths.SECURITY_USER;

  public readonly HAS_SECURITYUSER_ACCESS: boolean;

  constructor(public securityService: SecurityService) {
    this.HAS_SECURITYUSER_ACCESS = securityService.hasRoles([SecurityUserRoles.SEARCH,SecurityUserRoles.READ]);
  }

  toggleAdminMenu() {
    this.adminMenuOpen = !this.adminMenuOpen;
  }

  protected readonly SecurityUserRoles = SecurityUserRoles;
}
