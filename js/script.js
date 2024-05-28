var typed = new Typed('#typed', {
  strings: ['Larry Daniels |', 'Developer |','Designer |'],
  typeSpeed: 25,
  startDelay: 200,
  backDelay: 1000,
  backSpeed: 25,
  // fadeOut: true,
  loop: true,
  loopCount: Infinity,
  showCursor: false
  // cursorChar: '...'

});
// ***************************
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
// ***************************
