const initialCustomerState = { fullName: "", nationalId: "", createdAt: "" };

export default function customerReducer(state = initialCustomerState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payLoad.fullName,
        nationalId: action.payLoad.nationalId,
        createdAt: new Date().toISOString(),
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payLoad,
      };

    default:
      return state;
  }
}

export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payLoad: { fullName, nationalId },
  };
}
export function updateName(fullName) {
  return {
    type: "customer/updateName",
    payLoad: fullName,
  };
}
