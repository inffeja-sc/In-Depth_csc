// ===== Mobile Menu =====
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('show');
        });
    }
    
    // ===== Calculator Logic =====
    initCalculator();
    
    // ===== Task Solutions Toggle =====
    initTaskToggles();
    
    // ===== Smooth scroll for anchors =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

// ===== Calculator =====
function initCalculator() {
    const calcBtn = document.getElementById('calcBtn');
    if (!calcBtn) return;
    
    calcBtn.addEventListener('click', performCalculation);
    
    // Enter key support
    const input = document.getElementById('numberInput');
    if (input) {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') performCalculation();
        });
    }
}

function performCalculation() {
    const input = document.getElementById('numberInput').value.trim();
    const fromBase = parseInt(document.getElementById('fromBase').value);
    const toBase = parseInt(document.getElementById('toBase').value);
    const resultDiv = document.getElementById('result');
    
    if (!input) {
        resultDiv.innerHTML = '<div class="label">Ошибка</div><div class="value">Введите число</div>';
        return;
    }
    
    try {
        // Validate digits for source base
        const validDigits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const allowedDigits = validDigits.substring(0, fromBase);
        const upperInput = input.toUpperCase();
        
        for (let char of upperInput) {
            if (char !== '.' && !allowedDigits.includes(char)) {
                throw new Error(`Цифра "${char}" недопустима для системы с основанием ${fromBase}`);
            }
        }
        
        // Split integer and fractional parts
        const parts = upperInput.split('.');
        const intPart = parts[0] || '0';
        const fracPart = parts[1] || '';
        
        // Convert integer part to decimal
        let decimalInt = 0;
        for (let i = 0; i < intPart.length; i++) {
            const digit = validDigits.indexOf(intPart[i]);
            decimalInt = decimalInt * fromBase + digit;
        }
        
        // Convert fractional part to decimal
        let decimalFrac = 0;
        for (let i = 0; i < fracPart.length; i++) {
            const digit = validDigits.indexOf(fracPart[i]);
            decimalFrac += digit / Math.pow(fromBase, i + 1);
        }
        
        const decimalValue = decimalInt + decimalFrac;
        
        // Convert decimal to target base
        let resultInt = '';
        let tempInt = decimalInt;
        if (tempInt === 0) resultInt = '0';
        
        while (tempInt > 0) {
            resultInt = validDigits[tempInt % toBase] + resultInt;
            tempInt = Math.floor(tempInt / toBase);
        }
        
        let resultFrac = '';
        let tempFrac = decimalFrac;
        let iterations = 0;
        const maxIterations = 20;
        
        while (tempFrac > 0 && iterations < maxIterations) {
            tempFrac *= toBase;
            const digit = Math.floor(tempFrac);
            resultFrac += validDigits[digit];
            tempFrac -= digit;
            iterations++;
        }
        
        const finalResult = resultInt + (resultFrac ? '.' + resultFrac : '');
        
        resultDiv.innerHTML = `
            <div class="label">${input} (основание ${fromBase}) =</div>
            <div class="value">${finalResult} (основание ${toBase})</div>
            <div class="label" style="margin-top:10px">В десятичной системе: ${decimalValue}</div>
        `;
        
    } catch (error) {
        resultDiv.innerHTML = `<div class="label">Ошибка</div><div class="value" style="color:#ef4444">${error.message}</div>`;
    }
}

// ===== Task Toggles =====
function initTaskToggles() {
    document.querySelectorAll('.toggle-solution').forEach(btn => {
        btn.addEventListener('click', function() {
            const solution = this.nextElementSibling;
            if (solution && solution.classList.contains('solution')) {
                solution.classList.toggle('show');
                this.textContent = solution.classList.contains('show') ? 'Скрыть решение' : 'Показать решение';
            }
        });
    });
}

// ===== Utility: Convert number between bases =====
function convertBase(number, fromBase, toBase) {
    const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const upper = number.toString().toUpperCase();
    const parts = upper.split('.');
    
    let decimalInt = parseInt(parts[0], fromBase);
    let decimalFrac = 0;
    
    if (parts[1]) {
        for (let i = 0; i < parts[1].length; i++) {
            decimalFrac += digits.indexOf(parts[1][i]) / Math.pow(fromBase, i + 1);
        }
    }
    
    let resultInt = decimalInt.toString(toBase).toUpperCase();
    let resultFrac = '';
    let temp = decimalFrac;
    let iter = 0;
    
    while (temp > 0 && iter < 15) {
        temp *= toBase;
        const d = Math.floor(temp);
        resultFrac += digits[d];
        temp -= d;
        iter++;
    }
    
    return resultInt + (resultFrac ? '.' + resultFrac : '');
}
