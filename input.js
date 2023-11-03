/*
filterName
[1] check if name is empty
[2] check for space(star + end)
[3] check if name lenght > 10
[4] check if name not start with underscore
*/

function filterName(name) {
  if (name === undefined) {
    return "unknown";
  }

  if (name.startsWith(" ") || name.endsWith(" ")) {
    return name.trim();
  }

  if (name.length > 10) {
    return name.trim().slice(0, 10);
  }

  if (name.startsWith("_")) {
    return name.trim().slice(1);
  }
  return name;
}

module.exports = filterName;
