(function () {
    'use strict';

    const panels = document.querySelectorAll('article.panel');

    function revealPanel(el) {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
    }

    function initScrollReveal() {
        if (window.innerWidth > 900) {
            return;
        }

        panels.forEach(function (panel) {
            panel.style.opacity = '0';
            panel.style.transform = 'translateY(20px)';
            panel.style.transition = 'opacity 0.6s cubic-bezier(0.77, 0, 0.175, 1), transform 0.6s cubic-bezier(0.77, 0, 0.175, 1)';
        });

        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (entry.isIntersecting) {
                        revealPanel(entry.target);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.15 });

            panels.forEach(function (panel) {
                observer.observe(panel);
            });
        }

        setTimeout(function () {
            panels.forEach(function (panel) {
                revealPanel(panel);
            });
        }, 3000);
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && window.location.hash) {
            window.location.hash = '';
        }
    });

    document.querySelectorAll('.modal-overlay').forEach(function (overlay) {
        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) {
                window.location.hash = '';
            }
        });
    });

    document.addEventListener('DOMContentLoaded', initScrollReveal);
})();

(function () {
    const textarea = document.getElementById('message');
    const counter = document.getElementById('char-count');

    if (!textarea || !counter) {
        return;
    }

    textarea.addEventListener('input', function () {
        counter.textContent = textarea.value.length + ' / 1000';
    });
})();

function showTab(id, btn) {
    document.querySelectorAll('.section').forEach(function (section) {
        section.classList.remove('show');
    });

    document.querySelectorAll('.tab').forEach(function (tab) {
        tab.classList.remove('active');
    });

    document.getElementById('tab-' + id).classList.add('show');
    btn.classList.add('active');
}
