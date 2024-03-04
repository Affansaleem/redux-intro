const initialAccountState = { balance: 0, loan: 0, loanPurpose: "" };

export default function accountReducer(state = initialAccountState, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payLoad,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payLoad,
      };
    case "account/requestLoan":
      return {
        ...state,
        balance: state.balance + action.payLoad.amount,
        loanPurpose: action.payLoad.purpose,
        loan: action.payLoad.amount,
      };
    case "account/payLoan":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
      };

    default:
      return state;
  }
}
export function deposit(amount) {
  return {
    type: "account/deposit",
    payLoad: amount,
  };
}
export function withdraw(amount) {
  return {
    type: "account/withdraw",
    payLoad: amount,
  };
}
export function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payLoad: { amount, purpose },
  };
}
export function payLoan(amount, purpose) {
  return {
    type: "account/payLoan",
  };
}
