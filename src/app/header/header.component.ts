import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  activeSection: string = '';

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.setActiveSection();
  }

  setActiveSection(section?: string) {
    const aboutSection = document.getElementById('about');
    const portfolioSection = document.getElementById('portfolio');
    const contactSection = document.getElementById('contact');
    const scrollPosition = window.pageYOffset;

    if (
      section === 'about' ||
      (aboutSection && scrollPosition >= aboutSection.offsetTop && (!portfolioSection || scrollPosition < portfolioSection.offsetTop))
    ) {
      this.activeSection = 'about';
    } else if (
      section === 'portfolio' ||
      (portfolioSection && scrollPosition >= portfolioSection.offsetTop && (!contactSection || scrollPosition < contactSection.offsetTop))
    ) {
      this.activeSection = 'portfolio';
    } else if (section === 'contact' || (contactSection && scrollPosition >= contactSection.offsetTop)) {
      this.activeSection = 'contact';
    } else {
      this.activeSection = '';
    }
  }

}
