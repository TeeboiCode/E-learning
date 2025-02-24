<template>
  <div class="signup-container">
      <div class="signup-form">
          <h2>Sign Up</h2>
          <p>Create an account to unlock exclusive features.</p>
          <form @submit.prevent="handleSubmit">
              <div class="form-group">
                  <label for="fullName" class="fullName">Full Name</label>
                  <input type="text" id="fullName" v-model="fullName" placeholder="Enter your Name" required />
              </div>
              <div class="form-group">
                  <label for="email" class="email">Email</label>
                  <input type="email" id="email" v-model="email" placeholder="Enter your Email" required />
              </div>
              <div class="form-group password-group">
                  <label for="password" class="password">Password</label>
                  <div class="password-input">
                      <input :type="showPassword ? 'text' : 'password'" id="password" class="passwordInput"
                          v-model="password" placeholder="Enter your Password" required />
                      <span class="eye-icon" @click="togglePasswordVisibility">
                          <i :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"></i>
                      </span>
                  </div>
              </div>
              <div class="form-group terms">
                  <input type="checkbox" id="agree" v-model="agree" required />
                  <label for="agree" class="terms-label">I agree with Terms of Use and Privacy Policy</label>
              </div>
              <button type="submit" class="signup-button">Sign Up</button>
          </form>
          <div class="social-signup">
              <div class="or-divider">
                  <hr />
                  <span>OR</span>
                  <hr />
              </div>
              <button class="google-signup">
                  <i class="fab fa-google"></i>
                  <span>Sign Up with Google</span>
              </button>
          </div>
          <p class="login-link">
              Already have an account? <a href="#">Login</a>
              <i class="fas fa-arrow-right"></i>
          </p>
      </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          fullName: '',
          email: '',
          password: '',
          agree: false,
          showPassword: false
      };
  },
  name: 'AppSignUp',
  methods: {
    
      togglePasswordVisibility() {
          this.showPassword = !this.showPassword;
      }
  }
};
</script>

<style scoped>
.signup-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: white;
}

.signup-form {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  margin-bottom: 1rem;
}

.form-group {
  margin-bottom: 1rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
}

.fullName,
.email,
.password {
  text-align: left;
}

input[type="text"],
input[type="email"],
.passwordInput {
  width: 100%;
  padding: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  outline: 0;
  box-sizing: border-box; /* Ensure padding and border are included in the width */
}

.password-group {
  position: relative;
}

.password-input {
  position: relative;
  width: 100%;
}

.passwordInput {
  padding-right: 40px; /* Add space for the eye icon */
}

.eye-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #888; /* Eye icon color */
}

.terms {
  display: flex;
  flex-direction: row;
  gap: 10px;
}

.terms-label {
  padding-top: 6px;
}

.signup-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #ff7803;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.social-signup {
  text-align: center;
  margin: 1rem 0;
}

.or-divider {
  display: flex;
  align-items: center;
  margin: 1rem 0;
}

.or-divider hr {
  flex: 1;
  border: none;
  border-top: 1px solid #ccc;
}

.or-divider span {
  padding: 0 0.5rem;
}

.google-signup {
  width: 100%;
  padding: 0.75rem;
  background-color: transparent;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.google-signup i {
  margin-right: 0.5rem;
}

.login-link {
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-link a {
  margin-left: 0.25rem;
}

.login-link i {
  margin-left: 0.5rem;
  transform: rotate(45deg);
}

@media (max-width: 768px) {
  .signup-form {
      padding: 1rem;
  }
}
</style>