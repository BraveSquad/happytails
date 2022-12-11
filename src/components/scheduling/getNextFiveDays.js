

export const getNextFiveDays = () => {
  const numberArray = [0, 1, 2, 3, 4, 5, 6];
  const dateArray = [];

  numberArray.forEach((number) => {
    let date = new Date(new Date().getTime() + 24 * number * 60 * 60 * 1000);
    if (date.getDay() !== 0 && date.getDay() !== 1) {
      let dd = date.getDate();
      let mm = date.getMonth() + 1;
      let yyyy = date.getFullYear();

      if (dd < 10) {
        dd = "0" + dd;
      }

      if (mm < 10) {
        mm = "0" + mm;
      }
      let dayOfWeek = ''
      // eslint-disable-next-line default-case
      switch (date.getDay()) {
        case 2:
          dayOfWeek = "TUE"
          break;
        case 3:
          dayOfWeek = "WED";
          break;
        case 4:
          dayOfWeek = "THUR";
          break;
        case 5:
          dayOfWeek = "FRI";
          break;
        case 6:
          dayOfWeek = "SAT";
          break;
      }

      const showDate = mm + "/" + dd
      const useDate = yyyy + "-" + mm + "-" + dd;

      dateArray.push([showDate, useDate, dayOfWeek, date]);
    }
  });

  return dateArray;
};
export default getNextFiveDays;
