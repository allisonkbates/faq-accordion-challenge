const accordionButtons = document.querySelectorAll('.accordion__button');
const accordionArrows = document.querySelectorAll('.accordion__arrow');
const accordionExpanded = document.querySelectorAll('.accordion__expanded');

function expandAccordion(e) {
  // remove open classes from all items
  accordionArrows.forEach(arrow => arrow.classList.remove('open-arrow'));
  accordionExpanded.forEach(expand => expand.classList.remove('open'));
  console.log('remove')
  // identify which item was clicked
  const expandItemNumber = e.target.dataset.key;
  const arrow = document.querySelector(`img[data-key="${expandItemNumber}"]`);
  const expandContent = document.querySelector(`div[data-key="${expandItemNumber}"]`);
  // open the corresponding item
  arrow.classList.toggle('open-arrow')
  expandContent.classList.toggle('open');
  console.log('open');
}

function flipArrows(e) {
  // identify the one that's clicked on
  const expandItemNumber = e.target.dataset.key;
  const arrow = document.querySelector(`img[data-key="${expandItemNumber}"]`);
  const expandContent = document.querySelector(`div[data-key="${expandItemNumber}"]`);
  
  // filter this one out and remove open classes from the other ones
  const unselectedArrows = [...accordionArrows].filter(arrow => arrow.dataset.key !== expandItemNumber);
  unselectedArrows.forEach(arrow => arrow.classList.remove('open-arrow'));
  const unselectedContent = [...accordionExpanded].filter(arrow => arrow.dataset.key !== expandItemNumber);
  unselectedContent.forEach(arrow => arrow.classList.remove('open'));
  
  // toggle the one that was clicked on
  arrow.classList.toggle('open-arrow');
  expandContent.classList.toggle('open');
}

accordionButtons.forEach(button => button.addEventListener('click', flipArrows));