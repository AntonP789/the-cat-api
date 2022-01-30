export const getParams = (params) => {
  const searchParams = new URLSearchParams(params).toString();
  return searchParams || '';
};
export const removeEmptyStrKey = (obj) => {
  for (const key in obj) {
    if (obj[key] === '') delete obj[key];
  }
  return obj;
}
