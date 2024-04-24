function calcIRPF(sallary) {
  if (sallary > 4664.68) {
    return (sallary * 0.275) - 896;
  }

  if (sallary > 3751.06) {
    return (sallary * 0.225) - 662.77;
  }

  if (sallary > 2826.66) {
    return (sallary * 0.15) - 381.44;
  }

  if (sallary > 2259.21) {
    return (sallary * 0.075) - 196.44;
  }

  return 0;
}

function calcInss(sallary) {
  if (sallary > 7786.02) {
    return (7786.02 * 0.14) - 181.18;
  }

  if (sallary > 4000.03) {
    return (sallary * 0.14) - 181.18;
  }

  if (sallary > 2666.68) {
    return (sallary * 0.12) - 101.18;
  }

  if (sallary > 2666.68) {
    return (sallary * 0.09) - 21.18;
  }

  return sallary * 0.075;
}