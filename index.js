const accordionButtons = document.querySelectorAll('.accordion__button');
const accordionContent = document.querySelectorAll('.accordion__expanded');

function expandContent(e) {
  // identify the item in the accordion that was clicked on
  const expandItemNumber = e.target.dataset.key;
  // identify the corresponding button
  const selectedButton = document.querySelector(`button[data-key="${expandItemNumber}"]`);
  // identify the corresponding expanded content
  const selectedContent = document.querySelector(`div[data-key="${expandItemNumber}"]`);
  // remove the selected item from the list of buttons and content
  const unselectedButtons = [...accordionButtons].filter(button => button.dataset.key !== expandItemNumber);
  const unselectedContent = [...accordionContent].filter(content => content.dataset.key !== expandItemNumber);
  // remove the open class from the buttons and content 
  unselectedButtons.forEach(button => button.classList.remove('open'));
  unselectedContent.forEach(content => content.classList.remove('open'));
  // open the selected one
  selectedButton.classList.toggle('open');
  selectedContent.classList.toggle('open');
}

accordionButtons.forEach(button => button.addEventListener('click', expandContent));
