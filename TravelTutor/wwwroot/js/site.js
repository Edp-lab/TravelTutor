function addEventListeners() {
    const allSteppers = document.querySelectorAll('.numeric-stepper-container');

    allSteppers.forEach((stepper) => {
        const decrementButton = stepper.querySelector('#decrement-button');
        const incrementButton = stepper.querySelector('#increment-button');
        let inputField = stepper.querySelector('.numeric-stepper-input-field');
        const minValue = parseInt(inputField.min, 10);
        const maxValue = parseInt(inputField.max, 10);

        const updateButtonStates = () => {
            let currentValue = parseInt(inputField.value, 10);

            // Disable decrement button if currentValue is at minValue
            if (currentValue <= minValue) {
                decrementButton.setAttribute('disabled', true);
            } else {
                decrementButton.removeAttribute('disabled');
            }

            // Disable increment button if currentValue is at maxValue
            if (currentValue >= maxValue) {
                incrementButton.setAttribute('disabled', true);
            } else {
                incrementButton.removeAttribute('disabled');
            }
        };

        incrementButton.addEventListener('click', () => {
            let currentValue = parseInt(inputField.value, 10);
            //inputField.value = currentValue += 1;

            if (currentValue < maxValue) {
                currentValue += 1;
                inputField.value = currentValue;
                inputField.setAttribute('value', `${currentValue}`);
                inputField.setAttribute('aria-valuenow', `${currentValue}`);
                updateButtonStates();
            }
        });

        decrementButton.addEventListener('click', () => {
            let currentValue = parseInt(inputField.value, 10);
            if (currentValue > minValue) {
                currentValue -= 1;
                inputField.value = currentValue;
                inputField.setAttribute('value', `${currentValue}`);
                inputField.setAttribute('aria-valuenow', `${currentValue}`);
                updateButtonStates();
            }
        });

        inputField.addEventListener('input', () => {
            let currentValue = parseInt(inputField.value, 10);

            // Ensure currentValue stays within bounds
            if (currentValue < minValue) {
                currentValue = minValue;
                inputField.value = currentValue;
            } else if (currentValue > maxValue) {
                currentValue = maxValue;
                inputField.value = currentValue;
            }

            inputField.setAttribute('value', `${currentValue}`);
            inputField.setAttribute('aria-valuenow', `${currentValue}`);
            updateButtonStates();
        });
        updateButtonStates();
    });
}
addEventListeners();