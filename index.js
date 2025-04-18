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

function yearlyCLTsalary(salary, vr = 0) {
  const fgts = calcFgts(salary);
  const inss = calcInss(salary);
  const irpf = calcIRPF(salary - inss);

  const monthSalary = salary + fgts + vr - irpf - inss;

  return monthSalary * 13.3
}

function yearlyPJSimple(salary) {
  const employeeSalary = salary > 2000 ? 2000 : salary;
  const inss = calcInss(employeeSalary);
  const irpf = calcIRPF(employeeSalary - inss);
  const irpj = salary * 0.15;

  const monthSalary = salary - inss - irpj - irpf;
   
  return monthSalary * 12
}

function yearlyPJComplex(salary) {
  const employeeSalary = salary * 0.28;
  const inss = calcInss(employeeSalary);
  const irpf = calcIRPF(employeeSalary - inss);
  const irpj = salary * 0.06;

  const monthSalary = salary - inss - irpj - irpf;
   
  return monthSalary * 12
}

const formatNumber = new Intl.NumberFormat('pt-BR', { 
  style: 'currency', 
  currency: 'BRL', 
  minimumFractionDigits: 2, 
  maximumFractionDigits: 3 
})

for (let i = 0; i < 23; i++) {
  const salary = 1000 * i;
  const VR = 0;

  const clt = yearlyCLTsalary(salary, VR);
  const pj1 = yearlyPJSimple(salary);
  const pj2 = yearlyPJComplex(salary);

  console.log({
    'Salary': salary,
    'CLT': formatNumber.format(clt),
    'PJ Simples': formatNumber.format(pj1),
    'PJ Fator R': formatNumber.format(pj2),
    'CLT > simples': (clt / pj1).toFixed(2),
    'CLT > Fator R': (clt / pj2).toFixed(2),
    'Simples > Fator R': (pj1 / pj2).toFixed(2)
  }) 
}


// hello mac world