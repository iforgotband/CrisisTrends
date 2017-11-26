'use strict'; /* eslint-env browser */
/**
                                        * Toggle the display of an element.
                                        *
                                        * @param  {element} e The element to toggle.
                                        *
                                        * @return {element}   The element that was toggled.
                                        */
window.toggle = function (e) {
  if (e instanceof NodeList) {
    e.forEach(toggle);
    return e;
  }

  if (e.style.display === 'inherit') {
    return hide(e);
  }

  return show(e);
};

/**
    * Hide an element or elements.
    *
    * @param  {element|NodeList} e The element(s) to hide
    *
    * @return {element} The element hidden
    */
window.hide = function (e) {
  if (e instanceof NodeList) {
    e.forEach(hide);
  } else {
    e.style.display = 'none';
  }

  return e;
};

/**
    * Unhide an element.
    *
    * @param  {element} e The element to unhide.
    *
    * @return {element} The element unhidden
    */
window.show = function (e) {
  if (e instanceof NodeList) {
    e.forEach(hide);
  } else {
    e.style.display = 'inherit';
  }

  return e;
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZ2dsZS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJ0b2dnbGUiLCJlIiwiTm9kZUxpc3QiLCJmb3JFYWNoIiwic3R5bGUiLCJkaXNwbGF5IiwiaGlkZSIsInNob3ciXSwibWFwcGluZ3MiOiJjQUFBO0FBQ0E7Ozs7Ozs7QUFPQUEsT0FBT0MsTUFBUCxHQUFnQixVQUFTQyxDQUFULEVBQVk7QUFDMUIsTUFBSUEsYUFBYUMsUUFBakIsRUFBMkI7QUFDekJELE1BQUVFLE9BQUYsQ0FBVUgsTUFBVjtBQUNBLFdBQU9DLENBQVA7QUFDRDs7QUFFRCxNQUFJQSxFQUFFRyxLQUFGLENBQVFDLE9BQVIsS0FBb0IsU0FBeEIsRUFBbUM7QUFDakMsV0FBT0MsS0FBS0wsQ0FBTCxDQUFQO0FBQ0Q7O0FBRUQsU0FBT00sS0FBS04sQ0FBTCxDQUFQO0FBQ0QsQ0FYRDs7QUFhQTs7Ozs7OztBQU9BRixPQUFPTyxJQUFQLEdBQWMsVUFBU0wsQ0FBVCxFQUFZO0FBQ3hCLE1BQUlBLGFBQWFDLFFBQWpCLEVBQTJCO0FBQ3pCRCxNQUFFRSxPQUFGLENBQVVHLElBQVY7QUFDRCxHQUZELE1BRU87QUFDTEwsTUFBRUcsS0FBRixDQUFRQyxPQUFSLEdBQWtCLE1BQWxCO0FBQ0Q7O0FBRUQsU0FBT0osQ0FBUDtBQUNELENBUkQ7O0FBVUE7Ozs7Ozs7QUFPQUYsT0FBT1EsSUFBUCxHQUFjLFVBQVNOLENBQVQsRUFBWTtBQUN4QixNQUFJQSxhQUFhQyxRQUFqQixFQUEyQjtBQUN6QkQsTUFBRUUsT0FBRixDQUFVRyxJQUFWO0FBQ0QsR0FGRCxNQUVPO0FBQ0xMLE1BQUVHLEtBQUYsQ0FBUUMsT0FBUixHQUFrQixTQUFsQjtBQUNEOztBQUVELFNBQU9KLENBQVA7QUFDRCxDQVJEIiwiZmlsZSI6InRvZ2dsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgYnJvd3NlciAqL1xuLyoqXG4gKiBUb2dnbGUgdGhlIGRpc3BsYXkgb2YgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtlbGVtZW50fSBlIFRoZSBlbGVtZW50IHRvIHRvZ2dsZS5cbiAqXG4gKiBAcmV0dXJuIHtlbGVtZW50fSAgIFRoZSBlbGVtZW50IHRoYXQgd2FzIHRvZ2dsZWQuXG4gKi9cbndpbmRvdy50b2dnbGUgPSBmdW5jdGlvbihlKSB7XG4gIGlmIChlIGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcbiAgICBlLmZvckVhY2godG9nZ2xlKTtcbiAgICByZXR1cm4gZTtcbiAgfVxuXG4gIGlmIChlLnN0eWxlLmRpc3BsYXkgPT09ICdpbmhlcml0Jykge1xuICAgIHJldHVybiBoaWRlKGUpO1xuICB9XG5cbiAgcmV0dXJuIHNob3coZSk7XG59XG5cbi8qKlxuICogSGlkZSBhbiBlbGVtZW50IG9yIGVsZW1lbnRzLlxuICpcbiAqIEBwYXJhbSAge2VsZW1lbnR8Tm9kZUxpc3R9IGUgVGhlIGVsZW1lbnQocykgdG8gaGlkZVxuICpcbiAqIEByZXR1cm4ge2VsZW1lbnR9IFRoZSBlbGVtZW50IGhpZGRlblxuICovXG53aW5kb3cuaGlkZSA9IGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xuICAgIGUuZm9yRWFjaChoaWRlKTtcbiAgfSBlbHNlIHtcbiAgICBlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH1cblxuICByZXR1cm4gZTtcbn1cblxuLyoqXG4gKiBVbmhpZGUgYW4gZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0gIHtlbGVtZW50fSBlIFRoZSBlbGVtZW50IHRvIHVuaGlkZS5cbiAqXG4gKiBAcmV0dXJuIHtlbGVtZW50fSBUaGUgZWxlbWVudCB1bmhpZGRlblxuICovXG53aW5kb3cuc2hvdyA9IGZ1bmN0aW9uKGUpIHtcbiAgaWYgKGUgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xuICAgIGUuZm9yRWFjaChoaWRlKTtcbiAgfSBlbHNlIHtcbiAgICBlLnN0eWxlLmRpc3BsYXkgPSAnaW5oZXJpdCc7XG4gIH1cblxuICByZXR1cm4gZTtcbn1cbiJdfQ==
