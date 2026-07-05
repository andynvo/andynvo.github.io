// Fetch the data dictionary
fetch('../dictionary.json')
    .then(response => response.json())
    .then(data => {
        // Get all elements with the 'tooltip-term' class
        const terms = document.querySelectorAll('.tooltip-term');
        const customTooltip = document.getElementById('custom-tooltip');

        terms.forEach(term => {
            term.addEventListener('mouseover', function (e) {
                // Get the term key from the data attribute
                const termKey = this.innerText.toLowerCase();
                // Get the definition from the dictionary
                const definition = data[termKey];

                if (definition) {
                    // Set the tooltip content and make it visible
                    customTooltip.textContent = definition;
                    customTooltip.style.visibility = 'visible';
                    
                    // Position the tooltip near the mouse (adjust as needed)
                    customTooltip.style.top = (e.pageY + 10) + 'px';
                    customTooltip.style.left = (e.pageX + 10) + 'px';
                }
            });

            term.addEventListener('mouseout', function () {
                // Hide the tooltip when the mouse leaves
                customTooltip.style.visibility = 'hidden';
                customTooltip.textContent = '';
            });

            // Update tooltip position if the mouse moves within the element
            term.addEventListener('mousemove', function(e) {
                customTooltip.style.top = (e.pageY + 10) + 'px';
                customTooltip.style.left = (e.pageX + 10) + 'px';
            });
        });
    })
    .catch(error => console.error('Error fetching the data dictionary:', error));
