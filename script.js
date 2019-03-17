addNavEventListeners(); 
addArticleEventListeners();
addWindowEventListeners();
addModalEventListeners();
 
 
 
 // Navigation menu can be toggled
  function addNavEventListeners() {

    const nav = document.querySelector('nav');

    const navClickHandler = function() {
      this.classList.toggle('open');
      event.stopPropagation();
    };

    nav.addEventListener('click', navClickHandler);

    const bodyClickHandler = function() {
      nav.classList.remove('open');
    };

    document.body.addEventListener('click', bodyClickHandler);
  }

  // Product details can be expanded
  function addArticleEventListeners() {

    const articles = document.querySelectorAll('#projects article');

    for (let article of articles) {
      let button = article.querySelector('button');

      button.addEventListener('click', function() {
        article.classList.toggle('expanded');
        button.innerHTML = article.classList.contains('expanded') ?
          'Hide Details' : 'Show Details';
      });
    }
  }

  // Resizing the window resets open/closed product details
  // Resizing the window resets nav visibility
  function addWindowEventListeners() {

    const windowResizeHandler = function() {

      const nav = document.querySelector('nav');
      nav.classList.remove('open');

      const articles = document.querySelectorAll('#projects article');
      
      for (let article of articles) {
        article.classList.remove('expanded');
      }
    };

    window.addEventListener('resize', windowResizeHandler); 
  }

    // Modal can be opened
    function addModalEventListeners() {

      const modalTriggerElement = document.querySelector('#modal-trigger');
  
      const modalTriggerClickHandler = function() {
        document.body.classList.add('modal-open');
      };
  
      modalTriggerElement.addEventListener('click', modalTriggerClickHandler);
  
      // Modal can be closed
      const modalCloseButton = document.querySelector('#modal button');
  
      const modalCloseButtonClickHandler = function() {
        document.body.classList.remove('modal-open');
      };
  
      modalCloseButton.addEventListener('click', modalCloseButtonClickHandler);
    }


    