# Simple Interest Calculator

A simple, user-friendly tool to calculate the simple interest accrued on a principal amount over a given time period at a specified annual interest rate.

---

## 📌 Table of Contents
- [Overview](#overview)
- [Formula](#formula)
- [Features](#features)
- [Repository Structure](#repository-structure)
- [How to Use](#how-to-use)
  - [1. Shell Script (`simple-interest.sh`)](#1-shell-script-simple-interestsh)
  - [2. Interactive Web Calculator (`index.html`)](#2-interactive-web-calculator-indexhtml)
- [Input & Output Specifications](#input--output-specifications)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 Overview
The **Simple Interest Calculator** project provides a lightweight and accessible way to calculate simple interest on investments or loans. This repository includes both a command-line Bash script designed for quick terminal execution and an interactive, modern web application for visual calculation.

This project was built as part of the Git and GitHub hands-on curriculum.

---

## 🧮 Formula

The simple interest is calculated using the standard mathematical formula:

$$\text{Simple Interest } (SI) = \frac{P \times R \times T}{100}$$

$$\text{Total Amount } (A) = P + SI$$

Where:
- **$P$** = Principal amount (the initial sum of money borrowed or invested)
- **$R$** = Annual rate of interest (percentage per year)
- **$T$** = Time duration (in years)
- **$SI$** = Simple Interest earned or owed
- **$A$** = Total amount accumulated ($Principal + Interest$)

---

## ✨ Features
- **Shell Script Execution**: Fast interactive CLI calculation using `bash`.
- **Interactive Web Interface**: Beautiful, responsive UI with real-time breakdown and visual result cards.
- **Input Validation**: Ensures valid positive numbers for principal, interest rate, and tenure.
- **Accurate Floating Point Computation**: Handles whole numbers as well as decimal interest rates and tenures.

---

## 📁 Repository Structure

```text
.
├── README.md             # Project documentation and details
├── LICENSE               # Apache 2.0 Open Source License
├── simple-interest.sh    # Bash script to calculate simple interest in terminal
├── index.html            # Web interface for the calculator
├── style.css             # Styling and responsive design for web interface
└── script.js             # Logic and computation for web interface
```

---

## 🚀 How to Use

### 1. Shell Script (`simple-interest.sh`)

1. **Clone the repository**:
   ```bash
   git clone <REPOSITORY_URL>
   cd <REPOSITORY_NAME>
   ```

2. **Make the script executable**:
   ```bash
   chmod +x simple-interest.sh
   ```

3. **Run the script**:
   ```bash
   ./simple-interest.sh
   ```

4. **Follow the interactive prompts**:
   ```text
   Enter the principal:
   1000
   Enter rate of interest per year:
   5
   Enter time period in years:
   2
   The simple interest is:
   100
   ```

---

### 2. Interactive Web Calculator (`index.html`)

Simply open `index.html` in any web browser, or launch it with a local server:
- Double-click `index.html` to open in your default browser.
- Enter the Principal Amount, Annual Interest Rate (%), and Time Period (Years).
- Click **"Calculate Interest"** to view the breakdown.

---

## 📊 Input & Output Specifications

| Parameter | Symbol | Data Type | Example | Description |
| :--- | :---: | :---: | :---: | :--- |
| **Principal** | $P$ | Numeric | `10000` | Initial capital amount |
| **Rate** | $R$ | Numeric (%) | `7.5` | Annual interest percentage |
| **Time** | $T$ | Numeric (Years) | `3` | Duration in years |
| **Simple Interest** | $SI$ | Numeric | `2250` | Total interest generated |
| **Total Amount** | $A$ | Numeric | `12250` | Principal + Simple Interest |

---

## 🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to fork this repository, open a pull request, or submit an issue to improve calculation methods and styling.

---

## 📄 License
This project is licensed under the [Apache License 2.0](LICENSE).
