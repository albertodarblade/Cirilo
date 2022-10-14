const defaultValue = {
  groupBy: (x, f) =>
    x.reduce((a, b, i) => ((a[f(b, i, x)] ||= []).push(b), a), {}),
};

export default defaultValue;
