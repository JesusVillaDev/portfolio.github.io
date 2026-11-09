/**
 * main.js
 * Lógica interactiva del portafolio de Jesús Gutiérrez Villa.
 * Desarrollado en JavaScript Vanilla puro (ES6+), sin dependencias.
 */

document.addEventListener('DOMContentLoaded', () => {
  initEmailCopy();
  initMobileNavigation();
  initProjectModal();
  initScrollReveal();
  initNavbarScrollAndSpy();
  initNavIndicator();
});

/* ==========================================================================
   1. INDICADOR DESLIZANTE FLUIDO DE LA NAVBAR FLOTANTE
   ========================================================================== */
function initNavIndicator() {
  const navMenu = document.querySelector('.nav-menu');
  const indicator = document.getElementById('nav-indicator-pill');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  if (!navMenu || !indicator || !navLinks.length) return;

  function moveIndicatorTo(element) {
    if (!element) {
      indicator.style.opacity = '0';
      return;
    }
    const linkRect = element.getBoundingClientRect();
    const menuRect = navMenu.getBoundingClientRect();

    indicator.style.width = `${linkRect.width}px`;
    indicator.style.height = `${linkRect.height}px`;
    indicator.style.transform = `translateX(${linkRect.left - menuRect.left}px) translateY(${linkRect.top - menuRect.top}px)`;
    indicator.style.opacity = '1';
  }

  function getActiveLink() {
    return document.querySelector('.nav-menu .nav-link.active') || navLinks[0];
  }

  function syncTextColors(hoveredLink = null) {
    const target = hoveredLink || getActiveLink();
    navLinks.forEach(link => {
      if (link === target) {
        link.style.color = '#052432';
        link.style.fontWeight = '700';
      } else {
        link.style.color = 'var(--color-sand)';
        link.style.fontWeight = '500';
      }
    });
  }

  // Posicionar al cargar con reintento para estabilidad de fuentes
  setTimeout(() => {
    const active = getActiveLink();
    moveIndicatorTo(active);
    syncTextColors();
  }, 120);

  // Al redimensionar la ventana recalcular posición
  window.addEventListener('resize', () => {
    const active = getActiveLink();
    moveIndicatorTo(active);
    syncTextColors();
  }, { passive: true });

  // Hover interactivo fluido con sincronización de contraste
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      moveIndicatorTo(link);
      syncTextColors(link);
    });

    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      moveIndicatorTo(link);
      syncTextColors();
    });
  });

  navMenu.addEventListener('mouseleave', () => {
    const active = getActiveLink();
    moveIndicatorTo(active);
    syncTextColors();
  });

  // Exponer para el scrollspy
  window.__updateNavIndicator = () => {
    const active = getActiveLink();
    moveIndicatorTo(active);
    syncTextColors();
  };
}

/* ==========================================================================
   2. COPIADO DE CORREO DIRECTO CON INTERACCIÓN NATURAL (HOVER + CLICK)
   ========================================================================== */
function initEmailCopy() {
  const EMAIL = 'jesusfgv.dev@gmail.com';
  const interactiveChip = document.getElementById('interactive-email');
  const emailTooltip = document.getElementById('email-tooltip');
  const chipIcon = document.getElementById('email-chip-icon');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');
  let toastTimer = null;
  let revertTimer = null;

  function triggerToast(msg) {
    if (!toast) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');

    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }

  async function copyEmailAction(e) {
    if (e) e.preventDefault();
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        const tempArea = document.createElement('textarea');
        tempArea.value = EMAIL;
        tempArea.style.position = 'fixed';
        tempArea.style.left = '-99999px';
        document.body.appendChild(tempArea);
        tempArea.focus();
        tempArea.select();
        document.execCommand('copy');
        tempArea.remove();
      }

      // Feedback visual directo en el chip
      if (interactiveChip) {
        interactiveChip.classList.add('copied');
      }

      if (emailTooltip) {
        emailTooltip.textContent = '¡Copiado al portapapeles! ✓';
      }

      if (chipIcon) {
        chipIcon.innerHTML = `<i class="fa-solid fa-check"></i>`;
      }

      triggerToast(`✓ Correo copiado: ${EMAIL}`);

      if (revertTimer) clearTimeout(revertTimer);
      revertTimer = setTimeout(() => {
        if (interactiveChip) interactiveChip.classList.remove('copied');
        if (emailTooltip) emailTooltip.textContent = 'Haz clic para copiar';
        if (chipIcon) {
          chipIcon.innerHTML = `<i class="fa-solid fa-envelope"></i>`;
        }
      }, 2500);

    } catch (err) {
      console.error('Error al copiar:', err);
      triggerToast(`Email: ${EMAIL}`);
    }
  }

  if (interactiveChip) {
    interactiveChip.addEventListener('click', copyEmailAction);
    interactiveChip.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        copyEmailAction();
      }
    });
  }

  const legacyBtn = document.getElementById('copy-email-btn');
  if (legacyBtn) {
    legacyBtn.addEventListener('click', copyEmailAction);
  }
}

/* ==========================================================================
   3. NAVEGACIÓN MÓVIL
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobile-toggle');
  const drawer = document.getElementById('mobile-drawer');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      drawer.classList.add('open');
      drawer.setAttribute('aria-hidden', 'false');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  });

  drawer.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      drawer.setAttribute('aria-hidden', 'true');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* ==========================================================================
   4. MODAL DE FICHA TÉCNICA (DEEP DIVE DE CASO DE ESTUDIO)
   ========================================================================== */
function initProjectModal() {
  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  const closeBtn = document.getElementById('modal-close-btn');

  if (!modal || !modalContent) return;

  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.open-modal-btn');
    if (!btn) return;

    const projectId = btn.getAttribute('data-project-id');
    const project = (typeof PROJECTS_DATA !== 'undefined')
      ? PROJECTS_DATA.find(p => p.id === projectId)
      : null;

    if (!project) return;

    renderProjectModal(project, modalContent);
    openModal(modal);
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => closeModal(modal));
  }

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modal);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal(modal);
    }
  });
}

function openModal(modal) {
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal(modal) {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function renderProjectModal(project, container) {
  const highlightsHtml = project.highlights && project.highlights.length ? `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 1rem; margin: 1.5rem 0;">
      ${project.highlights.map(h => `
        <div style="background: rgba(8, 58, 79, 0.45); border: 1px solid var(--border-subtle); border-radius: 12px; padding: 1rem;">
          <div style="font-family: var(--font-mono); font-size: 0.75rem; font-weight: 700; color: var(--color-gold); text-transform: uppercase; margin-bottom: 0.35rem;">${h.label}</div>
          <div style="font-family: var(--font-rome); font-size: 0.85rem; color: var(--color-sand); line-height: 1.5; text-align: justify; text-justify: inter-word;">${h.desc}</div>
        </div>
      `).join('')}
    </div>
  ` : '';

  const featuresHtml = project.technicalFeatures && project.technicalFeatures.length ? `
    <div style="margin-bottom: 1.5rem;">
      <h4 style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-aqua); margin-bottom: 0.75rem;">Características Técnicas & Arquitectura:</h4>
      <ul style="list-style: none; padding: 0; display: flex; flex-direction: column; gap: 0.65rem;">
        ${project.technicalFeatures.map(f => `
          <li style="display: flex; align-items: flex-start; gap: 0.5rem; font-family: var(--font-rome); font-size: 0.875rem; color: var(--color-sand); line-height: 1.55; text-align: justify; text-justify: inter-word;">
            <span style="color: var(--color-gold); font-weight: bold; flex-shrink: 0;">›</span>
            <span>${f}</span>
          </li>
        `).join('')}
      </ul>
    </div>
  ` : '';

  // Acciones en la cabecera/pie del modal con estricta jerarquía de botones
  let actionButtonsHtml = '';
  if (project.liveUrl) {
    actionButtonsHtml += `
      <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <i class="fa-solid fa-arrow-up-right-from-square" style="font-size: 0.8rem;"></i>
        <span>${project.id === 'enfocakids' ? 'Visitar Plataforma' : 'Probar Demo'}</span>
      </a>
    `;
  }
  if (project.githubUrl) {
    actionButtonsHtml += `
      <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
        <i class="fa-brands fa-github" style="font-size: 0.9rem;"></i>
        <span>Código en GitHub</span>
      </a>
    `;
  }

  container.innerHTML = `
    <!-- Cabecera del Modal (Sin indicación innecesaria de rol) -->
    <div style="margin-bottom: 1.25rem; padding-right: 2rem;">
      <div style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.5rem;">
        <span class="badge-label ${project.badgeType || 'tool'}" style="margin-bottom: 0;">${project.categoryLabel}</span>
        <span style="font-family: var(--font-mono); font-size: 0.75rem; color: var(--color-teal-light);">• ${project.statusBadge}</span>
      </div>
      <h3 id="modal-title" style="font-family: var(--font-barcelona); font-size: 2.15rem; font-weight: 700; color: var(--color-sand); margin-bottom: 0.25rem; line-height: 1.15;">${project.title}</h3>
    </div>

    <!-- Imagen de Demostración a sangre total -->
    <div style="border-radius: 12px; overflow: hidden; background: #052432; border: 1px solid var(--border-subtle); margin-bottom: 1.5rem;">
      <img src="${project.image}" alt="${project.title}" style="width: 100%; max-height: 380px; object-fit: cover; object-position: top; display: block;">
    </div>

    <!-- Highlights -->
    ${highlightsHtml}

    <!-- Reto / Problema -->
    <div style="margin-bottom: 1.25rem;">
      <h4 style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-teal-light); margin-bottom: 0.35rem;">El Desafío / Problema:</h4>
      <p style="font-family: var(--font-rome); font-size: 0.925rem; color: var(--color-sand); line-height: 1.6; text-align: justify; text-justify: inter-word;">${project.challenge}</p>
    </div>

    <!-- Solución -->
    <div style="margin-bottom: 1.25rem;">
      <h4 style="font-family: var(--font-mono); font-size: 0.8rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; color: var(--color-teal-light); margin-bottom: 0.35rem;">Solución de Ingeniería:</h4>
      <p style="font-family: var(--font-rome); font-size: 0.925rem; color: var(--color-sand); line-height: 1.6; text-align: justify; text-justify: inter-word;">${project.solution}</p>
    </div>

    <!-- Características Técnicas -->
    ${featuresHtml}

    <!-- Nota para el Evaluador -->
    <div class="evaluator-box" style="margin-bottom: 1.5rem;">
      <div class="evaluator-label">Impacto para el evaluador:</div>
      <p class="evaluator-text">${project.evaluatorNotes}</p>
    </div>

    <!-- Tags del Stack -->
    <div class="tech-tag-list" style="margin-bottom: 2rem;">
      ${project.tags.map(t => `<span class="tech-tag">${t}</span>`).join('')}
    </div>

    <!-- Acciones Inferiores -->
    <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle);">
      <div style="display: flex; gap: 0.75rem; flex-wrap: wrap;">${actionButtonsHtml}</div>
      <a href="mailto:jesusfgv.dev@gmail.com?subject=Consulta sobre proyecto ${encodeURIComponent(project.title)}" class="btn btn-secondary btn-sm">
        <i class="fa-solid fa-envelope" style="font-size: 0.85rem;"></i>
        <span>Preguntar sobre este proyecto</span>
      </a>
    </div>
  `;
}

/* ==========================================================================
   5. ANIMACIONES DE ENTRADA (SCROLL REVEAL FLUIDO)
   ========================================================================== */
function initScrollReveal() {
  const elements = document.querySelectorAll('.reveal-on-scroll');
  if (!elements.length) return;

  if (!('IntersectionObserver' in window)) {
    elements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, {
    rootMargin: '0px 0px -40px 0px',
    threshold: 0.08
  });

  elements.forEach(el => observer.observe(el));
}

/* ==========================================================================
   6. NAVBAR SCROLL EFFECT & SCROLLSPY ACTIVO
   ========================================================================== */
function initNavbarScrollAndSpy() {
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu .nav-link');

  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 20) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  if (sections.length && navLinks.length && ('IntersectionObserver' in window)) {
    const spyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
          if (typeof window.__updateNavIndicator === 'function') {
            window.__updateNavIndicator();
          }
        }
      });
    }, {
      rootMargin: '-20% 0px -65% 0px',
      threshold: 0
    });

    sections.forEach(sec => spyObserver.observe(sec));
  }
}
