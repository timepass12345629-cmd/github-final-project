document.addEventListener('DOMContentLoaded', () => {
  const principalInput = document.getElementById('principal');
  const rateInput = document.getElementById('rate');
  const rateDisplay = document.getElementById('rate-display');
  const yearsSelect = document.getElementById('years');
  const computeBtn = document.getElementById('compute-btn');
  const resetBtn = document.getElementById('reset-btn');
  const resultsPanel = document.getElementById('results-panel');

  const resultInterest = document.getElementById('result-interest');
  const resultPrincipal = document.getElementById('result-principal');
  const resultTotal = document.getElementById('result-total');
  const resultTargetYear = document.getElementById('result-target-year');

  // Update slider label on input
  rateInput.addEventListener('input', (e) => {
    rateDisplay.textContent = `${parseFloat(e.target.value).toFixed(2)}%`;
  });

  // Calculate Simple Interest
  function calculateInterest() {
    const principal = parseFloat(principalInput.value);
    const rate = parseFloat(rateInput.value);
    const years = parseInt(yearsSelect.value, 10);

    if (isNaN(principal) || principal <= 0) {
      alert('Please enter a positive principal amount.');
      principalInput.focus();
      return;
    }

    const interest = (principal * rate * years) / 100;
    const totalAmount = principal + interest;
    const currentYear = new Date().getFullYear();
    const targetYear = currentYear + years;

    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    resultInterest.textContent = formatter.format(interest);
    resultPrincipal.textContent = formatter.format(principal);
    resultTotal.textContent = formatter.format(totalAmount);
    resultTargetYear.textContent = `${targetYear}`;

    resultsPanel.classList.remove('hidden');
  }

  computeBtn.addEventListener('click', calculateInterest);

  resetBtn.addEventListener('click', () => {
    resultsPanel.classList.add('hidden');
    rateDisplay.textContent = '10.00%';
  });
});
