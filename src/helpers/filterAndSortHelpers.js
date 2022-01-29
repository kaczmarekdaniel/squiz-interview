export function SortArrayAlphabetASC(x, y) {
  if (x.name < y.name) {
    return -1;
  }
  if (x.name > y.name) {
    return 1;
  }
  return 0;
}

export function SortArrayAlphabetDESC(x, y) {
  if (x.name > y.name) {
    return -1;
  }
  if (x.name < y.name) {
    return 1;
  }
  return 0;
}

export function SortArrayEmployeesASC(x, y) {
  if (x.numberOfEmployees > y.numberOfEmployees) {
    return -1;
  }
  if (x.numberOfEmployees < y.numberOfEmployees) {
    return 1;
  }
  return 0;
}

export function SortArrayEmployeesDESC(x, y) {
  if (x.numberOfEmployees < y.numberOfEmployees) {
    return -1;
  }
  if (x.numberOfEmployees > y.numberOfEmployees) {
    return 1;
  }
  return 0;
}

export const handleRemoveItem = (e, stateToRemove, setStateToRemove) => {
  setStateToRemove(stateToRemove.filter((item) => item !== e.value));
};

export const handleAddItem = (e, stateToAdd, setStateToAdd) => {
  setStateToAdd([...stateToAdd, e.value]);
};
