import { Component, HostListener } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css'
})
export class ScrollToTopComponent {
  showScrollButton = false;
  faArrowUp = faArrowUp;
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    
    this.showScrollButton = (scrollHeight - scrollTop) <= clientHeight + 100; 
  }

  scrollToTop() {
    
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
