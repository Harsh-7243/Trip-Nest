// Authentication functionality

// Toggle password visibility
function togglePassword(inputId) {
  const input = document.getElementById(inputId)
  const icon = document.getElementById(inputId + "Icon")

  if (input.type === "password") {
    input.type = "text"
    icon.className = "fas fa-eye-slash"
  } else {
    input.type = "password"
    icon.className = "fas fa-eye"
  }
}

// Handle login form submission
function handleLogin(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const email = formData.get("email")
  const password = formData.get("password")
  const remember = formData.get("remember")

  // Only allow the specific email and password
  if (email !== 'srivastavaharsh1108@gmail.com' || password !== 'harshjeet') {
    alert('Invalid email or password.');
    event.target.querySelector('button[type="submit"]').disabled = false;
    return;
  }

  // Simulate login process
  console.log("Login attempt:", { email, password, remember })

  // Show loading state
  const submitButton = event.target.querySelector('button[type="submit"]')
  const originalText = submitButton.textContent
  submitButton.textContent = "Signing in..."
  submitButton.disabled = true

  // Simulate API call
  setTimeout(() => {
    // Save user info to localStorage for navbar/profile
    localStorage.setItem('tripnestUser', JSON.stringify({
      name: 'Harshjeet Srivastava',
      email: email,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    }))
    // Reset button
    submitButton.textContent = originalText
    submitButton.disabled = false

    // Simulate successful login
    alert("Login successful! Redirecting...")
    window.location.href = "index.html"
  }, 2000)
}

// Handle signup form submission
function handleSignup(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const firstName = formData.get("firstName")
  const lastName = formData.get("lastName")
  const email = formData.get("email")
  const password = formData.get("password")
  const confirmPassword = formData.get("confirmPassword")
  const terms = formData.get("terms")

  // Only allow the specific email and password
  if (email !== 'srivastavaharsh1108@gmail.com' || password !== 'harshjeet') {
    alert('You can only sign up with the email srivastavaharsh1108@gmail.com and password harshjeet.');
    event.target.querySelector('button[type="submit"]').disabled = false;
    return;
  }

  // Validate passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match")
    return
  }

  // Validate terms acceptance
  if (!terms) {
    alert("Please accept the Terms of Service and Privacy Policy")
    return
  }

  // Simulate signup process
  console.log("Signup attempt:", { firstName, lastName, email, password })

  // Show loading state
  const submitButton = event.target.querySelector('button[type="submit"]')
  const originalText = submitButton.textContent
  submitButton.textContent = "Creating account..."
  submitButton.disabled = true

  // Simulate API call
  setTimeout(() => {
    // Save user info to localStorage for navbar/profile
    localStorage.setItem('tripnestUser', JSON.stringify({
      name: firstName + ' ' + lastName,
      email: email,
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    }))
    // Reset button
    submitButton.textContent = originalText
    submitButton.disabled = false

    // Simulate successful signup
    alert("Account created successfully! Redirecting to main page.")
    window.location.href = "index.html"
  }, 2000)
}

// Social login functions
function loginWithGoogle() {
  alert("Google login would be implemented here")
}

function loginWithFacebook() {
  alert("Facebook login would be implemented here")
}

function signupWithGoogle() {
  alert("Google signup would be implemented here")
}

function signupWithFacebook() {
  alert("Facebook signup would be implemented here")
}

// Form validation
document.addEventListener("DOMContentLoaded", () => {
  // Add real-time validation
  const emailInputs = document.querySelectorAll('input[type="email"]')
  emailInputs.forEach((input) => {
    input.addEventListener("blur", validateEmail)
  })

  const passwordInputs = document.querySelectorAll('input[type="password"]')
  passwordInputs.forEach((input) => {
    input.addEventListener("input", validatePassword)
  })
})

function validateEmail(event) {
  const email = event.target.value
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

  if (email && !emailRegex.test(email)) {
    event.target.style.borderColor = "#dc2626"
    showValidationMessage(event.target, "Please enter a valid email address")
  } else {
    event.target.style.borderColor = "#ccc"
    hideValidationMessage(event.target)
  }
}

function validatePassword(event) {
  const password = event.target.value
  const minLength = 8

  if (password && password.length < minLength) {
    event.target.style.borderColor = "#dc2626"
    showValidationMessage(event.target, `Password must be at least ${minLength} characters`)
  } else {
    event.target.style.borderColor = "#ccc"
    hideValidationMessage(event.target)
  }
}

function showValidationMessage(input, message) {
  hideValidationMessage(input) // Remove existing message

  const messageElement = document.createElement("div")
  messageElement.className = "validation-message"
  messageElement.style.color = "#dc2626"
  messageElement.style.fontSize = "12px"
  messageElement.style.marginTop = "4px"
  messageElement.textContent = message

  input.parentNode.appendChild(messageElement)
}

function hideValidationMessage(input) {
  const existingMessage = input.parentNode.querySelector(".validation-message")
  if (existingMessage) {
    existingMessage.remove()
  }
}
