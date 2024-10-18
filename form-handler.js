document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById('uploadForm');
  const statusMessage = document.getElementById('statusMessage');

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the page from refreshing

    const fileInput = document.getElementById('userFile');
    const emailInput = document.getElementById('userEmail');
    const formData = new FormData();

    // Append the file and email to the FormData object
    formData.append('file', fileInput.files[0]);
    formData.append('email', emailInput.value);

    statusMessage.textContent = 'Uploading... Please wait.';

    try {
      const response = await fetch('https://your-username.pythonanywhere.com/upload', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        statusMessage.textContent = 'Your timelapse video has been sent to your email!';
      } else {
        statusMessage.textContent = 'Something went wrong. Please try again.';
      }
    } catch (error) {
      console.error(error);
      statusMessage.textContent = 'Error uploading file. Please try again.';
    }
  });
});
