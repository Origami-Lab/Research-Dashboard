export const toShortFormat = date => {
  const month_names = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12'
  ];

  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const month_index = date.getMonth();
  const year = date.getFullYear();

  return `${day}/${month_names[month_index]}/${year}`;
};

export const limit = (val, max) => {
  if (val.length === 1 && val[0] > max[0]) {
    val = `0${val}`;
  }

  if (val.length === 2) {
    if (Number(val) === 0) {
      val = '01';
    } else if (val > max) {
      val = max;
    }
  }

  return val;
};

export const getGetOrdinal = n => {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

export const validateEmail = email => {
  const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};
