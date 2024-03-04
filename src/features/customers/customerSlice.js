import { createSlice } from "@reduxjs/toolkit";

const initialCustomerState = { fullName: "", nationalId: "", createdAt: "" };

const customerSlice = createSlice({
  name: "customer",
  initialState: initialCustomerState,
  reducers: {
    createCustomer: {
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
            createdAt: new Date().toISOString(),
          },
        };
      },

      reducer(state, action) {
        // if (!state.fullName && !state.nationalId) return;
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },
    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});
export const { createCustomer, updateName } = customerSlice.actions;
export default customerSlice.reducer;
// export default function customerReducer(state = initialCustomerState, action) {
//   switch (action.type) {
//     case "customer/createCustomer":
//       return {
//         ...state,
//         fullName: action.payLoad.fullName,
//         nationalId: action.payLoad.nationalId,
//         createdAt: new Date().toISOString(),
//       };
//     case "customer/updateName":
//       return {
//         ...state,
//         fullName: action.payLoad,
//       };

//     default:
//       return state;
//   }
// }

// export function createCustomer(fullName, nationalId) {
//   return {
//     type: "customer/createCustomer",
//     payLoad: { fullName, nationalId },
//   };
// }
// export function updateName(fullName) {
//   return {
//     type: "customer/updateName",
//     payLoad: fullName,
//   };
// }
