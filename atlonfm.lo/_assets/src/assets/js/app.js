

// Lazy load
lazyLoadInstance = new LazyLoad({});

// Input mask
var telInputs = document.querySelectorAll('input[type="tel"]');
telInputs.forEach(function(input) {
    var maskOptions = {
        mask: '+{7} (x00) 000-00-00',
        lazy: true,
        definitions: {
            'x': /[1-6,9]/
        }        
    };

  var mask = IMask(input, maskOptions);
});

// Scrol to section
document.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var href = this.getAttribute('href');
      var target = document.querySelector(href);
      var offsetTop = target.offsetTop;
  
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    });
  });

// Uploads files
const inputElement = document.querySelector('input[type="file"]');
const pond = FilePond.create(inputElement);


