import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @ViewChild('menu') menu!: ElementRef;
  @ViewChild('menuButton') menuButton!: ElementRef;
  isMenuOpen: boolean = false;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeMenu();
      }
    });
  }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateMenuIcon();
  }

  closeMenu(): void {
    this.isMenuOpen = false;
    this.updateMenuIcon();
  }

  private updateMenuIcon(): void {
    const icon: HTMLImageElement | null = this.menuButton.nativeElement.querySelector('.icon');
    if (icon) {
      icon.src = this.isMenuOpen ? "assets/images/svg/close_white.svg" : "assets/images/svg/menu_white.svg";
    }
  }
}

