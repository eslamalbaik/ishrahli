import { createSlice } from '@reduxjs/toolkit';

// الحالة الأولية
const initialState = {
  selectedStage: "",
  selectedGrade: "",
  selectedSemester: "",
};

// إنشاء slice للفلاتر
const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setStage: (state, action) => {
      state.selectedStage = action.payload;
      state.selectedGrade = ""; // إعادة ضبط الصف عند تغيير المرحلة
    },
    setGrade: (state, action) => {
      state.selectedGrade = action.payload;
    },
    setSemester: (state, action) => {
      state.selectedSemester = action.payload;
    },
    resetFilters: (state) => {
      state.selectedStage = "";
      state.selectedGrade = "";
      state.selectedSemester = "";
    },
  },
});

export const { setStage, setGrade, setSemester, resetFilters } = filterSlice.actions;

export default filterSlice.reducer;
