export function concisePara(para) {
  const letters = para.length;
  if (letters > 100) {
    return {
      initial: para.slice(0, 100),
      para: para,
    };
  } else {
    return {
      para: para,
    };
  }
}
