export const sortByStatusAsc = (arrObjects) => {
  if (arrObjects && arrObjects.length > 0) {
    let arrDisable = arrObjects.filter((el) => el.status == "disabled");
    let arrEnable = arrObjects.filter((el) => el.status == "enabled");
    return [...arrEnable, ...arrDisable];
  }
  return arrObjects;
};
