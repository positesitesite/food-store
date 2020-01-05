
$(document).ready(() => {

  let moveSlide = function(container, slideNum) {
    const
      items = container.find('.slider__item'),
      activeSlide = items.filter('.active'),
      nextSlide = items.eq(slideNum),
      nextSlideIndex = nextSlide.index(), // returns index relatively to parent element
      list = container.find('.slider__items'),
      duration = 500;


    if (nextSlide.length) {
      list.animate({
        'left' : -nextSlideIndex * 100 + '%'
      }, duration, () => {
        activeSlide.removeClass('active');
        nextSlide.addClass('active');
      });
    }


  };


  $('.slider__control-button').on('click', function(e) {
    e.preventDefault();
    
    let $this = $(this),
      container = $this.closest('.slider'),
      items = container.find('.slider__item'),
      activeItem = items.filter('.active'),
      existedItem, edgeItem, reqItem;


    if ($this.is('#slider__right')) {
      existedItem = activeItem.next();
      edgeItem = items.first();
    }

    if ($this.is('#slider__left')) {
      existedItem = activeItem.prev();
      edgeItem = items.last();
    }

    reqItem = existedItem.length ? existedItem.index() : edgeItem.index();

    moveSlide(container, reqItem);


  });


});