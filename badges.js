// ===== NEW BADGE FUNCTIONALITY =====
// Adds "NEW" badges to comics published in the past 15 days

document.addEventListener('DOMContentLoaded', function() {
  // Function to parse date string (e.g., "14 Jan 2026") and return Date object
  function parseDate(dateStr) {
    return new Date(dateStr.trim());
  }

  // Add new badges to comics published in the past 20 days
  function addNewBadges() {
    const today = new Date();
    const twentyDaysAgo = new Date(today.getTime() - 20 * 24 * 60 * 60 * 1000);
    
    const comicCards = document.querySelectorAll('.comic-card');
    
    comicCards.forEach(card => {
      const dateElement = card.querySelector('.date');
      if (dateElement) {
        const dateStr = dateElement.textContent.trim();
        const comicDate = parseDate(dateStr);
        
        // If comic is within past 20 days, add the new badge
        if (comicDate >= twentyDaysAgo && comicDate <= today) {
          // Check if badge doesn't already exist
          if (!card.querySelector('.badge-new')) {
            const badge = document.createElement('div');
            badge.className = 'badge-new';
            badge.textContent = 'NEW';
            card.style.position = 'relative'; // Ensure card is positioned relative
            card.insertBefore(badge, card.firstChild);
          }
        }
      }
    });
  }
  
  // Call immediately to add badges
  addNewBadges();
});
