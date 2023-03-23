function convertLocationToSlugTag(location) {
  return location
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");
}
export { convertLocationToSlugTag };
