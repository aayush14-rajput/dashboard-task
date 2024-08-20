import create from 'zustand';

const useStore = create((set) => ({
  checkButton: false,
  setCheckButton: (check) => set({ checkButton: check }),

  submit: false,
  setSubmit: (check) => set({ submit: check }),

  cspm1: true,
  setCspm1: (check) => set({ cspm1: check }),
  cspm2: true,
  setCspm2: (check) => set({ cspm2: check }),

  cwpp1: true,
  setCwpp1: (check) => set({ cwpp1: check }),
  cwpp2: true,
  setCwpp2: (check) => set({ cwpp2: check }),

  registry1: true,
  setregistry1: (check) => set({ registry1: check }),
  registry2: true,
  setregistry2: (check) => set({ registry2: check }),
}));

export default useStore;