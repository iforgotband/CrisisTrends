/* global
    getMessageCount
    renderFAQ
    bindFAQ
    bootstrapWordCloud
    toggle
    hide
 */
'use strict';

(function () {
  polyfill();
  attachHamburger();
  getMessageCount();
  // renderCarousel(); TODOCAROUSEL
  renderFAQ();
  bindFAQ();
  bootstrapWordCloud();
  scrollToTop();

  var resizeTimer = void 0;
  var w = window.outerWidth;
  window.addEventListener('resize', function (e) {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(function () {
      if (window.outerWidth === w) {
        return;
      }

      w = window.outerWidth;
      var newEvent = new Event('resize-complete');
      newEvent.originalEvent = e;
      window.dispatchEvent(newEvent);
    }, 500);
  });

  /**
       * Attach the hamburger click binders.
       */
  function attachHamburger() {
    document.querySelectorAll('.hamburger')[0].addEventListener('click', function () {
      toggle(document.querySelectorAll('.hamburger-menu'));
    });

    document.querySelectorAll('.hamburger-menu a').forEach(function (element) {
      element.addEventListener('click', function () {
        hide(document.querySelectorAll('.hamburger-menu'));
      });
    });
  }

  /**
     * Custom polyfills that aren't included in es5-shim.
     */
  function polyfill() {
    if (NodeList.prototype.forEach === undefined) {
      NodeList.prototype.forEach = Array.prototype.forEach;
    }
  }

  /**
     * Attach click binder to make #top scroll ALL THE WAY to the top
     */
  function scrollToTop() {
    document.querySelectorAll('a[href="#top"]').forEach(function (element) {
      element.addEventListener('click', function (event) {
        window.scrollTo(0, 0);
        event.preventDefault();
      });
    });
  }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsicG9seWZpbGwiLCJhdHRhY2hIYW1idXJnZXIiLCJnZXRNZXNzYWdlQ291bnQiLCJyZW5kZXJGQVEiLCJiaW5kRkFRIiwiYm9vdHN0cmFwV29yZENsb3VkIiwic2Nyb2xsVG9Ub3AiLCJyZXNpemVUaW1lciIsInciLCJ3aW5kb3ciLCJvdXRlcldpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwibmV3RXZlbnQiLCJFdmVudCIsIm9yaWdpbmFsRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9nZ2xlIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJoaWRlIiwiTm9kZUxpc3QiLCJwcm90b3R5cGUiLCJ1bmRlZmluZWQiLCJBcnJheSIsImV2ZW50Iiwic2Nyb2xsVG8iLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FBUUE7O0FBRUEsQ0FBQyxZQUFXO0FBQ1ZBO0FBQ0FDO0FBQ0FDO0FBQ0E7QUFDQUM7QUFDQUM7QUFDQUM7QUFDQUM7O0FBRUEsTUFBSUMsb0JBQUo7QUFDQSxNQUFJQyxJQUFJQyxPQUFPQyxVQUFmO0FBQ0FELFNBQU9FLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDLFVBQVNDLENBQVQsRUFBWTtBQUM1Q0MsaUJBQWFOLFdBQWI7O0FBRUFBLGtCQUFjTyxXQUFXLFlBQU07QUFDN0IsVUFBSUwsT0FBT0MsVUFBUCxLQUFzQkYsQ0FBMUIsRUFBNkI7QUFDM0I7QUFDRDs7QUFFREEsVUFBSUMsT0FBT0MsVUFBWDtBQUNBLFVBQU1LLFdBQVcsSUFBSUMsS0FBSixDQUFVLGlCQUFWLENBQWpCO0FBQ0FELGVBQVNFLGFBQVQsR0FBeUJMLENBQXpCO0FBQ0FILGFBQU9TLGFBQVAsQ0FBcUJILFFBQXJCO0FBQ0QsS0FUYSxFQVNYLEdBVFcsQ0FBZDtBQVVELEdBYkQ7O0FBZUE7OztBQUdBLFdBQVNkLGVBQVQsR0FBMkI7QUFDekJrQixhQUFTQyxnQkFBVCxDQUEwQixZQUExQixFQUF3QyxDQUF4QyxFQUEyQ1QsZ0JBQTNDLENBQTRELE9BQTVELEVBQXFFLFlBQU07QUFDekVVLGFBQU9GLFNBQVNDLGdCQUFULENBQTBCLGlCQUExQixDQUFQO0FBQ0QsS0FGRDs7QUFJQUQsYUFBU0MsZ0JBQVQsQ0FBMEIsbUJBQTFCLEVBQStDRSxPQUEvQyxDQUF1RCxVQUFTQyxPQUFULEVBQWtCO0FBQ3ZFQSxjQUFRWixnQkFBUixDQUF5QixPQUF6QixFQUFrQyxZQUFXO0FBQzNDYSxhQUFLTCxTQUFTQyxnQkFBVCxDQUEwQixpQkFBMUIsQ0FBTDtBQUNELE9BRkQ7QUFHRCxLQUpEO0FBS0Q7O0FBRUQ7OztBQUdBLFdBQVNwQixRQUFULEdBQW9CO0FBQ2xCLFFBQUl5QixTQUFTQyxTQUFULENBQW1CSixPQUFuQixLQUErQkssU0FBbkMsRUFBOEM7QUFDNUNGLGVBQVNDLFNBQVQsQ0FBbUJKLE9BQW5CLEdBQTZCTSxNQUFNRixTQUFOLENBQWdCSixPQUE3QztBQUNEO0FBQ0Y7O0FBRUQ7OztBQUdBLFdBQVNoQixXQUFULEdBQXVCO0FBQ3JCYSxhQUFTQyxnQkFBVCxDQUEwQixnQkFBMUIsRUFBNENFLE9BQTVDLENBQW9ELFVBQVNDLE9BQVQsRUFBa0I7QUFDcEVBLGNBQVFaLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFVBQUNrQixLQUFELEVBQVc7QUFDM0NwQixlQUFPcUIsUUFBUCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNBRCxjQUFNRSxjQUFOO0FBQ0QsT0FIRDtBQUlELEtBTEQ7QUFNRDtBQUNGLENBOUREIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWxcbiAgICBnZXRNZXNzYWdlQ291bnRcbiAgICByZW5kZXJGQVFcbiAgICBiaW5kRkFRXG4gICAgYm9vdHN0cmFwV29yZENsb3VkXG4gICAgdG9nZ2xlXG4gICAgaGlkZVxuICovXG4ndXNlIHN0cmljdCc7XG5cbihmdW5jdGlvbigpIHtcbiAgcG9seWZpbGwoKTtcbiAgYXR0YWNoSGFtYnVyZ2VyKCk7XG4gIGdldE1lc3NhZ2VDb3VudCgpO1xuICAvLyByZW5kZXJDYXJvdXNlbCgpOyBUT0RPQ0FST1VTRUxcbiAgcmVuZGVyRkFRKCk7XG4gIGJpbmRGQVEoKTtcbiAgYm9vdHN0cmFwV29yZENsb3VkKCk7XG4gIHNjcm9sbFRvVG9wKCk7XG5cbiAgbGV0IHJlc2l6ZVRpbWVyO1xuICBsZXQgdyA9IHdpbmRvdy5vdXRlcldpZHRoO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZnVuY3Rpb24oZSkge1xuICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lcik7XG5cbiAgICByZXNpemVUaW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5vdXRlcldpZHRoID09PSB3KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdyA9IHdpbmRvdy5vdXRlcldpZHRoO1xuICAgICAgY29uc3QgbmV3RXZlbnQgPSBuZXcgRXZlbnQoJ3Jlc2l6ZS1jb21wbGV0ZScpO1xuICAgICAgbmV3RXZlbnQub3JpZ2luYWxFdmVudCA9IGU7XG4gICAgICB3aW5kb3cuZGlzcGF0Y2hFdmVudChuZXdFdmVudCk7XG4gICAgfSwgNTAwKTtcbiAgfSk7XG5cbiAgLyoqXG4gICAqIEF0dGFjaCB0aGUgaGFtYnVyZ2VyIGNsaWNrIGJpbmRlcnMuXG4gICAqL1xuICBmdW5jdGlvbiBhdHRhY2hIYW1idXJnZXIoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhhbWJ1cmdlcicpWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgdG9nZ2xlKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oYW1idXJnZXItbWVudScpKTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5oYW1idXJnZXItbWVudSBhJykuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGhpZGUoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhhbWJ1cmdlci1tZW51JykpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3VzdG9tIHBvbHlmaWxscyB0aGF0IGFyZW4ndCBpbmNsdWRlZCBpbiBlczUtc2hpbS5cbiAgICovXG4gIGZ1bmN0aW9uIHBvbHlmaWxsKCkge1xuICAgIGlmIChOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaCA9IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdHRhY2ggY2xpY2sgYmluZGVyIHRvIG1ha2UgI3RvcCBzY3JvbGwgQUxMIFRIRSBXQVkgdG8gdGhlIHRvcFxuICAgKi9cbiAgZnVuY3Rpb24gc2Nyb2xsVG9Ub3AoKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmPVwiI3RvcFwiXScpLmZvckVhY2goZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufSkoKTtcbiJdfQ==
