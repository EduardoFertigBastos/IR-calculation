function calcIRPF(salary) {
  if (salary > 4664.68) {
    return (salary * 0.275) - 896;
  }

  if (salary > 3751.06) {
    return (salary * 0.225) - 662.77;
  }

  if (salary > 2826.66) {
    return (salary * 0.15) - 381.44;
  }

  if (salary > 2259.21) {
    return (salary * 0.075) - 196.44;
  }

  return 0;
}

function calcFgts(salary) {
  return salary * 0.08;
}

function calcInss(salary) {
  if (salary > 7786.02) {
    return (7786.02 * 0.14) - 181.18;
  }

  if (salary > 4000.03) {
    return (salary * 0.14) - 181.18;
  }

  if (salary > 2666.68) {
    return (salary * 0.12) - 101.18;
  }

  if (salary > 2666.68) {
    return (salary * 0.09) - 21.18;
  }

  return salary * 0.075;
}

function yearlyCLTsalary(salary, vr) {
  const fgts = calcFgts(salary);
  const inss = calcInss(salary);
  
  const salaryDiscounted
}