function interlockable(a, b) {
  a = a.toString(2);
  b = b.toString(2);

  let firstIndex = a.length - 1;
  let secondIndex = b.length - 1;

  while (firstIndex > -1 && secondIndex > -1) {
    if (a[firstIndex] + b[secondIndex] == 11) {
      return false;
    }

    firstIndex--;
    secondIndex--;
  }

  return true;
}
