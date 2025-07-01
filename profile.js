// Airbnb-style Profile page JS for TripNest

document.addEventListener('DOMContentLoaded', () => {
    const defaultUser = {
        name: 'John Doe',
        email: 'johndoe@email.com',
        phone: '+91 98765 43210',
        location: 'Mumbai, India',
        gender: 'Male',
        dob: '1995-01-01',
        bio: 'Travel enthusiast and TripNest user.',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        joined: '2022'
    };
    let user = JSON.parse(localStorage.getItem('tripnestUser')) || defaultUser;
    if (!user.joined && user.dob) {
        user.joined = user.dob.split('-')[0] || '2022';
    }
    let editedUser = { ...user };
    let editingField = null;
    let changesMade = false;

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

    // Render view
    function renderView() {
        document.getElementById('profileAvatar').src = user.avatar;
        document.getElementById('profileName').textContent = user.name;
        document.getElementById('profileJoined').textContent = 'Joined in ' + (user.joined || (user.dob ? user.dob.split('-')[0] : '2022'));
        viewEls.name.textContent = user.name;
        viewEls.email.textContent = user.email;
        viewEls.phone.textContent = user.phone;
        viewEls.location.textContent = user.location;
        viewEls.gender.textContent = user.gender;
        viewEls.dob.textContent = user.dob;
        viewEls.bio.textContent = user.bio;
        fields.forEach(f => {
            viewEls[f].style.display = '';
            editEls[f].style.display = 'none';
            if (editEls[f].parentElement) {
                editEls[f].parentElement.classList.remove('editing');
            }
        });
        editingField = null;
        changesMade = false;
        saveBar.style.display = 'none';
    }

    // Start editing a field
    function startEdit(field) {
        if (editingField) {
            viewEls[editingField].style.display = '';
            editEls[editingField].style.display = 'none';
            if (editEls[editingField].parentElement) {
                editEls[editingField].parentElement.classList.remove('editing');
            }
        }
        editingField = field;
        editEls[field].value = user[field];
        viewEls[field].style.display = 'none';
        editEls[field].style.display = '';
        if (editEls[field].parentElement) {
            editEls[field].parentElement.classList.add('editing');
        }
        editEls[field].focus();
        saveBar.style.display = 'flex';
        changesMade = false;
    }

    // Cancel editing
    function cancelEdit() {
        if (editingField) {
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
        // Scroll to top of card for better alignment
        document.querySelector('.profile-card').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // Save changes
    function saveChanges(e) {
        e.preventDefault();
        if (!editingField) return;
        const val = editEls[editingField].value;
        if (val !== user[editingField]) {
            editedUser[editingField] = val;
            changesMade = true;
        }
        // If dob is changed, update joined year
        if (editingField === 'dob') {
            editedUser.joined = val.split('-')[0] || user.joined;
        }
        if (changesMade) {
            user = { ...user, ...editedUser };
            localStorage.setItem('tripnestUser', JSON.stringify(user));
            showToast('Profile updated!');
        }
        renderView();
    }

    // Show toast
    function showToast(msg) {
        toast.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 1800);
    }

    // Inline edit button listeners
    editBtns.forEach(btn => {
        btn.onclick = function() {
            const field = btn.getAttribute('data-field');
            startEdit(field);
        };
    });

    // Listen for input changes to show save bar
    Object.keys(editEls).forEach(f => {
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
    });

    // Cancel button
    cancelBtn.onclick = cancelEdit;

    // Save button
    form.onsubmit = saveChanges;

    // Avatar editing stub
    document.querySelector('.edit-avatar-btn').onclick = () => {
        alert('Avatar editing coming soon!');
    };

    renderView();
}); 