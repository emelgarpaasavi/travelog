function isValidBudget(budget) {
  if (budget <= 0) {
    console.log("returned false");
    return false;
  }
  return true
}

export { isValidBudget };
