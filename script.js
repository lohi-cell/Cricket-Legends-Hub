document.addEventListener('DOMContentLoaded', function () {
    // Placeholder for map interactivity
    const mapDiv = document.getElementById('world-map');
    document.addEventListener('DOMContentLoaded', function () {
      // Placeholder for map interactivity
      const mapDiv = document.getElementById('world-map');
      mapDiv.innerHTML = '<p>Interactive Map Coming Soon!</p>';

      // Fan form submission handler
      const fanForm = document.getElementById('fan-form');
      fanForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const story = document.getElementById('story').value;
        if (story) {
        window.alert('Thank you for submitting your story!');
        document.getElementById('story').value = ''; // Clear textarea
        } else {
        window.alert('Please write a story before submitting.');
        }
      });
    });
  
    // Fan form submission handler
    const fanForm = document.getElementById('fan-form');
    fanForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const story = document.getElementById('story').value;
      if (story) {
        window.alert('Thank you for submitting your story!');
        document.getElementById('story').value = ''; // Clear textarea
      } else {
        window.alert('Please write a story before submitting.');
      }
    });
  });
  
