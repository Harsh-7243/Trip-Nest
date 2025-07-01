// Enhanced JS for TripNest Prime Membership page

document.addEventListener('DOMContentLoaded', () => {
    const joinBtns = document.querySelectorAll('.prime-join-btn');
    let modal = null;
    let lastSelectedPlan = null;

    joinBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const planCard = btn.closest('.prime-plan-card');
            document.querySelectorAll('.prime-plan-card').forEach(card => card.classList.remove('prime-selected'));
            planCard.classList.add('prime-selected');
            lastSelectedPlan = planCard;
            showModal(planCard);
        });
    });

    function showModal(planCard) {
        const plan = planCard.getAttribute('data-plan');
        const planName = planCard.querySelector('h3').textContent;
        const planPrice = planCard.querySelector('.prime-price').textContent;
        const planNote = planCard.querySelector('.prime-family-note')?.textContent || '';
        // Remove any existing modal
        if (modal) modal.remove();
        modal = document.createElement('div');
        modal.className = 'prime-modal';
        modal.innerHTML = `
            <div class="prime-modal-content" tabindex="0">
                <button class="prime-modal-close" title="Close">&times;</button>
                <div class="prime-modal-header"><i class="fas fa-crown prime-crown"></i> <span>Confirm Your Plan</span></div>
                <div class="prime-modal-body">
                    <h2>${planName}</h2>
                    <div class="prime-modal-price">${planPrice}</div>
                    <div class="prime-modal-note">${planNote}</div>
                </div>
                <button class="prime-modal-confirm">Confirm & Join</button>
            </div>
        `;
        document.body.appendChild(modal);
        setTimeout(() => modal.classList.add('show'), 10);
        // Focus for accessibility
        modal.querySelector('.prime-modal-content').focus();
        // Close modal
        modal.querySelector('.prime-modal-close').onclick = closeModal;
        modal.onclick = e => { if (e.target === modal) closeModal(); };
        // Confirm
        modal.querySelector('.prime-modal-confirm').onclick = () => {
            closeModal();
            showToast(`You have joined the ${planName} plan! (Demo only)`);
        };
        // Keyboard accessibility
        modal.querySelector('.prime-modal-content').onkeydown = (e) => {
            if (e.key === 'Escape') closeModal();
            if (e.key === 'Enter') {
                modal.querySelector('.prime-modal-confirm').click();
            }
        };
    }
    function closeModal() {
        if (modal) {
            modal.classList.remove('show');
            setTimeout(() => modal && modal.remove(), 300);
        }
    }
    function showToast(msg) {
        let toast = document.createElement('div');
        toast.className = 'prime-toast';
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(() => toast.classList.add('show'), 50);
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 350);
        }, 1800);
    }
});

// Optional: Add .prime-selected style in CSS for visual feedback 