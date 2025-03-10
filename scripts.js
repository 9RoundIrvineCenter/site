document.addEventListener('DOMContentLoaded', function() {
  const showMoreLink = document.getElementById('show-more');
  const shortContent = document.querySelector('.short-content');

  showMoreLink.addEventListener('click', function(event) {
    event.preventDefault();
    shortContent.style.display = 'block';
    showMoreLink.style.display = 'none';
  });
});
