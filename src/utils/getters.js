function getRow(position) {
  if (position < 10 && position >= 0) {
    return 0;
  }

  if (position >= 10) {
    return +String(position)[0];
  }

  return false;
}

function getPos(position) {
  if (position < 10) {
    return position;
  } else {
    return +String(position)[1];
  }
}

export { getPos, getRow };