document.getElementById("solution-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const location = document.getElementById("location").value;
    const usage = document.getElementById("usage").value;
    const speed = document.getElementById("speed").value;
  
    const output = `
      Based on your location (${location}), we recommend an internet plan for 
      ${usage} use with a speed of ${speed} Mbps. Contact us for details!
    `;
    document.getElementById("solution-output").innerHTML = output;
  });
  