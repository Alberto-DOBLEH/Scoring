import { Component, OnInit, HostListener, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface User {
  id: string;
  name: string;
  email: string;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css', './modal.css']
})
export class HeaderComponent implements OnInit {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);
  // Component state
  activeSection: string = 'proyectos';
  isUserMenuOpen: boolean = false;
  isModalOpen: boolean = false;
  currentForm: 'login' | 'register' = 'login';
  isLoading: boolean = false;
  isAuthenticated: boolean = false;
  currentUser: User | null = null;
  isMobileMenuOpen: boolean = false;
  private lastFocusedElement: HTMLElement | null = null;

  // Forms
  loginForm: FormGroup;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName1: ['', [Validators.required, Validators.minLength(2)]],
      lastName2: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Close mobile menu on outside click
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.isBrowser || !this.isMobileMenuOpen) return;
    const target = event.target as HTMLElement | null;
    const drawer = document.getElementById('mobile-drawer');
    const hamburger = document.querySelector('.hamburger');
    if (drawer && drawer.contains(target)) return;
    if (hamburger && hamburger.contains(target)) return;
    this.closeMobileMenu();
  }

  ngOnInit(): void {
    this.checkAuthState();
    this.activeSection = 'proyectos';
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!this.isBrowser) return;
    const header = document.getElementById('header');
    if (!header) return;
    if (window.scrollY > 20) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }

  navigateTo(section: string): void {
    this.activeSection = section;
    try { this.router.navigate(['/', section]); } catch {}
  }

  handleLogoClick(): void {
    this.activeSection = 'inicio';
    try { this.router.navigate(['/inicio']); } catch {}
    if (this.isBrowser) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  toggleUserMenu(event: Event): void {
    event.stopPropagation();
    this.isUserMenuOpen = !this.isUserMenuOpen;
    if (this.isUserMenuOpen && this.isBrowser) {
      setTimeout(() => document.addEventListener('click', this.closeUserMenuOnClickOutside));
    }
  }

  toggleMobileMenu(event?: Event): void {
    if (event) event.stopPropagation();
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isBrowser) {
      document.body.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
      if (this.isMobileMenuOpen) {
        this.lastFocusedElement = document.activeElement as HTMLElement;
        setTimeout(() => {
          const drawer = document.getElementById('mobile-drawer') as HTMLElement | null;
          drawer?.focus?.();
        }, 0);
      }
    }
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
    if (this.isBrowser) {
      document.body.style.overflow = '';
      // Restaurar foco
      this.lastFocusedElement?.focus?.();
    }
  }

  closeUserMenuOnClickOutside = (): void => {
    this.isUserMenuOpen = false;
    if (this.isBrowser) {
      document.removeEventListener('click', this.closeUserMenuOnClickOutside);
    }
  };

  openModal(type: 'login' | 'register' = 'login'): void {
    this.isModalOpen = true;
    if (this.isBrowser) {
      this.lastFocusedElement = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';
    }
    this.isUserMenuOpen = false;
    setTimeout(() => {
      if (type === 'register') this.switchToRegister();
      else this.switchToLogin();
      // Enfocar el botón de cerrar para accesibilidad
      if (this.isBrowser) {
        const closeBtn = document.querySelector('.close-button') as HTMLElement | null;
        closeBtn?.focus?.();
      }
    }, 100);
  }

  closeModal(): void {
    this.isModalOpen = false;
    if (this.isBrowser) {
      document.body.style.overflow = '';
      // Restaurar foco
      this.lastFocusedElement?.focus?.();
    }
    this.resetForms();
  }

  closeModalOnOverlay(event: Event): void {
    if (event.target === event.currentTarget) this.closeModal();
  }

  switchToLogin(): void {
    if (this.currentForm === 'login') return;
    this.currentForm = 'login';
  }

  switchToRegister(): void {
    if (this.currentForm === 'register') return;
    this.currentForm = 'register';
  }

  async handleLogin(): Promise<void> {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    try {
      this.isLoading = true;
      await new Promise(r => setTimeout(r, 1000));
      const response = {
        success: true,
        token: 'fake-jwt-token-' + Date.now(),
        user: { id: '1', name: 'Usuario Demo', email: this.loginForm.value.email }
      };
      this.handleAuthSuccess(response);
      alert('¡Bienvenido de vuelta!');
      setTimeout(() => this.closeModal(), 1200);
    } catch (e) {
      alert('Error de conexión. Inténtalo más tarde.');
    } finally {
      this.isLoading = false;
    }
  }

  async onRegister(): Promise<void> {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
    try {
      this.isLoading = true;
      await new Promise(r => setTimeout(r, 1000));
      const fullName = `${this.registerForm.value.firstName} ${this.registerForm.value.lastName1} ${this.registerForm.value.lastName2}`.trim();
      const response = {
        success: true,
        token: 'fake-jwt-token-' + Date.now(),
        user: { id: '1', name: fullName, email: this.registerForm.value.email }
      };
      this.handleAuthSuccess(response);
      alert('¡Cuenta creada exitosamente!');
      setTimeout(() => this.closeModal(), 1200);
    } catch (e) {
      alert('Error de conexión. Inténtalo más tarde.');
    } finally {
      this.isLoading = false;
    }
  }

  handleLogout(): void {
    if (this.isBrowser) {
      localStorage.removeItem('authToken');
      localStorage.removeItem('currentUser');
    }
    this.isAuthenticated = false;
    this.currentUser = null;
    this.isUserMenuOpen = false;
    if (this.isBrowser) {
      alert('Sesión cerrada correctamente');
    }
  }

  private checkAuthState(): void {
    if (!this.isBrowser) return;
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('currentUser');
    if (token && userData) {
      try {
        this.currentUser = JSON.parse(userData);
        this.isAuthenticated = true;
      } catch (e) {
        this.handleLogout();
      }
    }
  }

  private handleAuthSuccess(response: any): void {
    if (this.isBrowser) {
      if (response.token) localStorage.setItem('authToken', response.token);
      if (response.user) {
        this.currentUser = response.user;
        localStorage.setItem('currentUser', JSON.stringify(response.user));
      }
    } else if (response.user) {
      this.currentUser = response.user;
    }
    this.isAuthenticated = true;
  }

  // Keyboard navigation
  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.isBrowser) return;
    if (event.key === 'Escape') {
      if (this.isModalOpen) { this.closeModal(); event.preventDefault(); return; }
      if (this.isMobileMenuOpen) { this.closeMobileMenu(); event.preventDefault(); return; }
    }
    if (event.key === 'Tab') {
      if (this.isModalOpen) {
        const container = document.getElementById('auth-modal');
        if (container) this.trapFocus(event, container);
      } else if (this.isMobileMenuOpen) {
        const drawer = document.getElementById('mobile-drawer');
        if (drawer) this.trapFocus(event, drawer);
      }
    }
  }

  private trapFocus(event: KeyboardEvent, container: HTMLElement): void {
    const focusable = container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length === 0) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const active = document.activeElement as HTMLElement | null;
    if (event.shiftKey) {
      if (active === first || !container.contains(active)) {
        last.focus();
        event.preventDefault();
      }
    } else {
      if (active === last || !container.contains(active)) {
        first.focus();
        event.preventDefault();
      }
    }
  }

  private resetForms(): void {
    this.loginForm.reset();
    this.registerForm.reset();
    this.currentForm = 'login';
  }
}
