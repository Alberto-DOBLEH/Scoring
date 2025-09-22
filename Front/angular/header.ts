import { Component, OnInit, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
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
  styleUrls: ['./header.css']
})
export class HeaderComponent implements OnInit {
  // Estado
  activeSection: string = 'inicio';
  isUserMenuOpen: boolean = false;
  isModalOpen: boolean = false;
  currentForm: 'login' | 'register' = 'login';
  isLoading: boolean = false;
  isAuthenticated: boolean = false;
  currentUser: User | null = null;

  // Formularios
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

  ngOnInit(): void {
    this.checkAuthState();
    this.activeSection = 'inicio';
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleUserMenu(event: Event): void {
    event.stopPropagation();
    this.isUserMenuOpen = !this.isUserMenuOpen;
    if (this.isUserMenuOpen) {
      setTimeout(() => document.addEventListener('click', this.closeUserMenuOnClickOutside));
    }
  }

  closeUserMenuOnClickOutside = (): void => {
    this.isUserMenuOpen = false;
    document.removeEventListener('click', this.closeUserMenuOnClickOutside);
  };

  openModal(type: 'login' | 'register' = 'login'): void {
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
    this.isUserMenuOpen = false;
    setTimeout(() => {
      if (type === 'register') this.switchToRegister();
      else this.switchToLogin();
    }, 100);
  }

  closeModal(): void {
    this.isModalOpen = false;
    document.body.style.overflow = '';
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
      console.error(e);
      alert('Error de conexión. Inténtalo más tarde.');
    } finally {
      this.isLoading = false;
    }
  }

  async handleRegister(): Promise<void> {
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
      console.error(e);
      alert('Error de conexión. Inténtalo más tarde.');
    } finally {
      this.isLoading = false;
    }
  }

  handleLogout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('currentUser');
    this.isAuthenticated = false;
    this.currentUser = null;
    this.isUserMenuOpen = false;
    alert('Sesión cerrada correctamente');
  }

  private checkAuthState(): void {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('currentUser');
    if (token && userData) {
      try {
        this.currentUser = JSON.parse(userData);
        this.isAuthenticated = true;
      } catch (e) {
        console.error('Error parsing user data', e);
        this.handleLogout();
      }
    }
  }

  private handleAuthSuccess(response: any): void {
    if (response.token) localStorage.setItem('authToken', response.token);
    if (response.user) {
      this.currentUser = response.user;
      localStorage.setItem('currentUser', JSON.stringify(response.user));
    }
    this.isAuthenticated = true;
  }

  private resetForms(): void {
    this.loginForm.reset();
    this.registerForm.reset();
    this.currentForm = 'login';
  }
}
