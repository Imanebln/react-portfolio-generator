import { configureStore, createSlice } from "@reduxjs/toolkit";

// 👇 create actions using createSlice
export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      image: "",
      fullname: "",
      email: "",
      phone: "",
      age: null,
      profile: "",
      skills: [],
      experiences: [],
      education: [],
    },
  },
  reducers: {
    changeFullname: (state, action) => {
      state.user.fullname = action.payload;
    },

    changeEmail: (state, action) => {
      state.user.email = action.payload;
    },

    changePhone: (state, action) => {
      state.user.phone = action.payload;
    },

    changeAge: (state, action) => {
      state.user.age = action.payload;
    },

    changeProfile: (state, action) => {
      state.user.profile = action.payload;
    },

    addImage: (state, action) => {
      state.user.image = action.payload;
    },

    addSkill: (state, action) => {
      state.user.skills = [...state.user.skills, action.payload];
    },

    addExperience: (state, action) => {
      state.user.experiences = [...state.user.experiences, action.payload];
    },

    addEducation: (state, action) => {
      state.user.education = [...state.user.education, action.payload];
    },

    removeSkill: (state, action) => {
      state.user.skills = state.user.skills.filter(
        (skill) => skill !== action.payload
      );
    },

    removeExperience: (state, action) => {
      state.user.experiences = state.user.experiences.filter(
        (experience) => experience.title !== action.payload
      );
    },
    removeEducation: (state, action) => {
      state.user.education = state.user.education.filter(
        (edu) => edu.title !== action.payload
      );
    },
  },
});

// 👇 export reducer actions
export const {
  addSkill,
  addExperience,
  addEducation,
  addImage,
  removeEducation,
  removeExperience,
  removeSkill,
  changeAge,
  changeEmail,
  changeFullname,
  changePhone,
  changeProfile,
} = userSlice.actions;

// 👇 configure store
export const store = configureStore({
  reducer: userSlice.reducer,
});
