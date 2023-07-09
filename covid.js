// Simulated data for vaccination centres and slots
const vaccinationCentres = [
    { name: 'Vaccination Centre A', slots: ['9:00 AM', '10:00 AM', '11:00 AM'] },
    { name: 'Vaccination Centre B', slots: ['1:00 PM', '2:00 PM', '3:00 PM'] },
    { name: 'Vaccination Centre C', slots: ['4:00 PM', '5:00 PM', '6:00 PM'] }
  ];
  
  // Function to create slot buttons for a vaccination centre
  function createSlotButtons(slots) {
    const slotButtons = document.createElement('div');
    slotButtons.classList.add('slot-buttons');
    
    slots.forEach(slot => {
      const button = document.createElement('button');
      button.textContent = slot;
      button.classList.add('slot-button');
      slotButtons.appendChild(button);
    });
    
    return slotButtons;
  }
  
  // Function to handle slot button click
  function handleSlotButtonClick(event) {
    const selectedSlot = event.target.textContent;
    // Implement your logic for handling the selected slot here
  }
  
  // Populate vaccination centres and slots
  const vaccinationCentresDiv = document.getElementById('vaccinationCentres');
  
  vaccinationCentres.forEach(vaccinationCentre => {
    const centreDiv = document.createElement('div');
    centreDiv.classList.add('vaccination-centre');
  
    const centreName = document.createElement('h3');
    centreName.textContent = vaccinationCentre.name;
    centreDiv.appendChild(centreName);
  
    const slotButtons = createSlotButtons(vaccinationCentre.slots);
    slotButtons.addEventListener('click', handleSlotButtonClick);
    centreDiv.appendChild(slotButtons);
  
    vaccinationCentresDiv.appendChild(centreDiv);
  });
  