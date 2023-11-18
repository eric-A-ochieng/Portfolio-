

document.getElementById('downloadButton').addEventListener('click', function() {
    
    var downloadLink = document.createElement('a');
    downloadLink.href = 'file:///C:/Users/hp/Documents/Eric%20Otieno%20resume.pdf'; 
    downloadLink.download = 'Eric Otieno resume.pdf';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  });
  