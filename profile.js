// Modern Profile page JS for TripNest

document.addEventListener('DOMContentLoaded', () => {
    const defaultUser = {
        name: 'John Doe',
        email: 'johndoe@email.com',
        phone: '+91 98765 43210',
        location: 'Mumbai, India',
        gender: 'Male',
        dob: '1995-01-01',
        bio: 'Travel enthusiast and TripNest user.',
        avatar: 'images/profile-placeholder.svg',
        joined: '2022',
        trips: 12,
        reviews: 8,
        bookmarks: 15
    };
    let user = JSON.parse(localStorage.getItem('tripnestUser')) || defaultUser;
    if (!user.joined && user.dob) {
        user.joined = user.dob.split('-')[0] || '2022';
    }
    // Add stats if they don't exist
    if (!user.trips) user.trips = defaultUser.trips;
    if (!user.reviews) user.reviews = defaultUser.reviews;
    if (!user.bookmarks) user.bookmarks = defaultUser.bookmarks;
    
    let editedUser = { ...user };
    let editingField = null;
    let changesMade = false;
    let avatarChanged = false;

    // Elements
    const fields = ['name','email','phone','location','gender','dob','bio'];
    const viewEls = {
        name: document.getElementById('viewName'),
        email: document.getElementById('viewEmail'),
        phone: document.getElementById('viewPhone'),
        location: document.getElementById('viewLocation'),
        gender: document.getElementById('viewGender'),
        dob: document.getElementById('viewDOB'),
        bio: document.getElementById('viewBio'),
    };
    const editEls = {
        name: document.getElementById('editName'),
        email: document.getElementById('editEmail'),
        phone: document.getElementById('editPhone'),
        location: document.getElementById('editLocation'),
        gender: document.getElementById('editGender'),
        dob: document.getElementById('editDOB'),
        bio: document.getElementById('editBio'),
    };
    const editBtns = document.querySelectorAll('.edit-field-btn');
    const saveBar = document.getElementById('profileSaveBar');
    const cancelBtn = document.querySelector('.cancel-profile-btn');
    const form = document.getElementById('profileForm');
    const toast = document.getElementById('profileToast');
    const fieldRows = document.querySelectorAll('.profile-field-row');
    const avatarInput = document.getElementById('avatarInput');
    const avatarImg = document.getElementById('profileAvatar');
    const editAvatarBtn = document.querySelector('.edit-avatar-btn');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.profile-tab-content');
    const navBackBtn = document.querySelector('.nav-back-btn');

    // Render view
    function renderView() {
        document.getElementById('profileAvatar').src = user.avatar;
        document.getElementById('profileName').textContent = user.name;
        document.getElementById('profileJoined').textContent = 'Joined in ' + (user.joined || (user.dob ? user.dob.split('-')[0] : '2022'));
        
        // Update stats
        document.getElementById('tripsCount').textContent = user.trips;
        document.getElementById('reviewsCount').textContent = user.reviews;
        document.getElementById('bookmarksCount').textContent = user.bookmarks;
        
        viewEls.name.textContent = user.name;
        viewEls.email.textContent = user.email;
        viewEls.phone.textContent = user.phone;
        viewEls.location.textContent = user.location;
        viewEls.gender.textContent = user.gender;
        viewEls.dob.textContent = user.dob;
        viewEls.bio.textContent = user.bio;
        fields.forEach(f => {
            if (viewEls[f] && editEls[f]) {
                viewEls[f].style.display = '';
                editEls[f].style.display = 'none';
                if (editEls[f].parentElement) {
                    editEls[f].parentElement.classList.remove('editing');
                }
            }
        });
        editingField = null;
        changesMade = false;
        saveBar.style.display = 'none';
    }

    // Start editing a field
    function startEdit(field) {
        if (editingField && viewEls[editingField] && editEls[editingField]) {
            viewEls[editingField].style.display = '';
            editEls[editingField].style.display = 'none';
            if (editEls[editingField].parentElement) {
                editEls[editingField].parentElement.classList.remove('editing');
            }
        }
        editingField = field;
        if (viewEls[field] && editEls[field]) {
            editEls[field].value = user[field];
            viewEls[field].style.display = 'none';
            editEls[field].style.display = '';
            if (editEls[field].parentElement) {
                editEls[field].parentElement.classList.add('editing');
            }
            editEls[field].focus();
            saveBar.style.display = 'flex';
        }
        changesMade = false;
    }

    // Cancel editing
    function cancelEdit() {
        if (editingField && viewEls[editingField] && editEls[editingField]) {
            viewEls[editingField].style.display = '';
            editEls[editingField].style.display = 'none';
            if (editEls[editingField].parentElement) {
                editEls[editingField].parentElement.classList.remove('editing');
            }
        }
        editingField = null;
        changesMade = false;
        saveBar.style.display = 'none';
        editedUser = { ...user };
    }

    // Save changes
    function saveChanges(e) {
        if (e) e.preventDefault();
        // Save if a field is being edited or avatar was changed
        if (!editingField && !avatarChanged) return;
        let val;
        if (editingField && editEls[editingField]) {
            val = editEls[editingField].value;
            if (val !== user[editingField]) {
                editedUser[editingField] = val;
                changesMade = true;
            }
            // If dob is changed, update joined year
            if (editingField === 'dob') {
                editedUser.joined = val.split('-')[0] || user.joined;
            }
        }
        if (changesMade || avatarChanged) {
            user = { ...user, ...editedUser };
            localStorage.setItem('tripnestUser', JSON.stringify(user));
            showToast('Profile updated successfully!');
        }
        avatarChanged = false;
        renderView();
    }

    // Show toast
    function showToast(msg) {
        toast.textContent = msg;
        toast.classList.add('show');
        toast.setAttribute('role', 'status');
        toast.setAttribute('aria-live', 'polite');
        setTimeout(() => toast.classList.remove('show'), 2000);
    }

    // Tab functionality
    function switchTab(tabId) {
        tabButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-tab') === tabId) {
                btn.classList.add('active');
            }
        });
        
        tabContents.forEach(content => {
            content.classList.remove('active');
            if (content.id === tabId) {
                content.classList.add('active');
            }
        });
    }

    // Initialize tabs
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // Set default active tab
    switchTab('personalInfo');

    // Inline edit button listeners
    editBtns.forEach(btn => {
        btn.onclick = function() {
            const field = btn.getAttribute('data-field');
            startEdit(field);
        };
    });

    // Listen for input changes to show save bar
    Object.keys(editEls).forEach(f => {
        if (editEls[f]) {
            editEls[f].addEventListener('input', () => {
                changesMade = (editEls[f].value !== user[f]);
                saveBar.style.display = changesMade ? 'flex' : 'none';
            });
            // Keyboard accessibility
            editEls[f].addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    form.requestSubmit();
                } else if (e.key === 'Escape') {
                    cancelEdit();
                }
            });
        }
    });

    // Cancel button
    if (cancelBtn) {
        cancelBtn.onclick = cancelEdit;
    }

    // Save button
    if (form) {
        form.onsubmit = saveChanges;
    }

    // Avatar editing
    if (editAvatarBtn && avatarInput) {
        editAvatarBtn.onclick = () => {
            avatarInput.click();
        };
        avatarInput.onchange = function() {
            const file = this.files[0];
            if (file && file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    avatarImg.src = e.target.result;
                    editedUser.avatar = e.target.result;
                    saveBar.style.display = 'flex';
                    changesMade = true;
                    avatarChanged = true;
                };
                reader.readAsDataURL(file);
            }
        };
    }

    // Back button functionality
    if (navBackBtn) {
        navBackBtn.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }

    renderView();
});
