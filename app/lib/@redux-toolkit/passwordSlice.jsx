import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  password: '',
  confirmPassword: '',
  isMatch: true,
  strengthLevel: '',
  strengthClass: '',
  showPassword: false,
};

const passwordSlice = createSlice({
  name: 'password',
  initialState,
  reducers: {
    setPassword(state, action) {
      state.password = action.payload;
      const value = action.payload;

      // Password strength criteria
      const hasUpperCase = /[A-Z]/.test(value); 
      const hasLowerCase = /[a-z]/.test(value); 
      const hasArabic = /[\u0600-\u06FF]/.test(value);
      const hasNumbers = /\d/.test(value);
      const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(value);
      const hasMinLength = value.length >= 8;
      const hasLetters = hasUpperCase || hasLowerCase || hasArabic;

      const strengthCriteria = [
        hasLetters,
        hasNumbers,
        hasSpecial,
      ];
      const strengthCount = strengthCriteria.filter(Boolean).length;

      if (hasMinLength) {
        switch (strengthCount) {
          case 0:
            state.strengthLevel = "ضعيفة جدا";
            state.strengthClass = "bg-red-500";
            break;
          case 1:
            state.strengthLevel = "ضعيفة";
            state.strengthClass = "bg-orange-500";
            break;
          case 2:
            state.strengthLevel = "متوسطة";
            state.strengthClass = "bg-yellow-500";
            break;
          case 3:
            state.strengthLevel = "قوية";
            state.strengthClass = "bg-green-500";
            break;
          default:
            state.strengthLevel = "";
            state.strengthClass = "";
        }
      } else {
        state.strengthLevel = "ضعيفة";
        state.strengthClass = "bg-red-500";
      }

      // Check if the confirmPassword still matches after password change
      state.isMatch = state.confirmPassword === state.password;
    },
    
    setConfirmPassword(state, action) {
      state.confirmPassword = action.payload;
      state.isMatch = action.payload === state.password; // Check if passwords match
    },

    toggleShowPassword(state) {
      state.showPassword = !state.showPassword;
    },
  },
});

export const { setPassword, setConfirmPassword, toggleShowPassword } = passwordSlice.actions;
export default passwordSlice.reducer;
