'use strict';

(function () {
  var MESSAGE_URL = '//direct.crisistextline.org/trends/data/messages.txt';
  var messageDiv = document.getElementById('message-count');

  var currentVal = parseInt(messageDiv.innerHTML.replace(/,/g, ''), 10);

  window.getMessageCount = function () {
    var xhr = new XMLHttpRequest();

    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        incrementValue(xhr.responseText);
      } else {
        fail();
      }
    });

    xhr.addEventListener('error', function () {
      fail();
    });

    xhr.open('GET', MESSAGE_URL);
    xhr.send();
  };

  /**
      * Failure handler for a failed XHR request. Let's just populate with a sane,
      * true-enough value.
      */
  function fail() {
    incrementValue('42865124');
  }

  /**
     * Increment the current value by the difference from current to desired / 2.
     *
     * @param  {integer} intVal Value we're shooting for
     */
  function incrementValue(intVal) {
    intVal = parseInt(intVal, 10);

    var difference = intVal - currentVal;

    currentVal += Math.ceil(difference / 2);

    updateDisplay();

    if (currentVal !== intVal) {
      setTimeout(function () {
        incrementValue(intVal);
      }, 125 - Math.log(difference) * 5);
    }
  }

  /**
     * Update the display to currentValue, formatted in 1,231,131,232 format
     */
  function updateDisplay() {
    // format the string with commas every 3 places
    messageDiv.innerHTML = currentVal.
    toString().
    replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lc3NhZ2UtY291bnQuanMiXSwibmFtZXMiOlsiTUVTU0FHRV9VUkwiLCJtZXNzYWdlRGl2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN1cnJlbnRWYWwiLCJwYXJzZUludCIsImlubmVySFRNTCIsInJlcGxhY2UiLCJ3aW5kb3ciLCJnZXRNZXNzYWdlQ291bnQiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdGF0dXMiLCJpbmNyZW1lbnRWYWx1ZSIsInJlc3BvbnNlVGV4dCIsImZhaWwiLCJvcGVuIiwic2VuZCIsImludFZhbCIsImRpZmZlcmVuY2UiLCJNYXRoIiwiY2VpbCIsInVwZGF0ZURpc3BsYXkiLCJzZXRUaW1lb3V0IiwibG9nIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLENBQUMsWUFBVztBQUNWLE1BQU1BLGNBQWMsc0RBQXBCO0FBQ0EsTUFBTUMsYUFBYUMsU0FBU0MsY0FBVCxDQUF3QixlQUF4QixDQUFuQjs7QUFFQSxNQUFJQyxhQUFhQyxTQUFTSixXQUFXSyxTQUFYLENBQXFCQyxPQUFyQixDQUE2QixJQUE3QixFQUFtQyxFQUFuQyxDQUFULEVBQWlELEVBQWpELENBQWpCOztBQUVBQyxTQUFPQyxlQUFQLEdBQXlCLFlBQU07QUFDN0IsUUFBTUMsTUFBTSxJQUFJQyxjQUFKLEVBQVo7O0FBRUFELFFBQUlFLGdCQUFKLENBQXFCLE1BQXJCLEVBQTZCLFlBQU07QUFDakMsVUFBSUYsSUFBSUcsTUFBSixLQUFlLEdBQW5CLEVBQXdCO0FBQ3RCQyx1QkFBZUosSUFBSUssWUFBbkI7QUFDRCxPQUZELE1BRU87QUFDTEM7QUFDRDtBQUNGLEtBTkQ7O0FBUUFOLFFBQUlFLGdCQUFKLENBQXFCLE9BQXJCLEVBQThCLFlBQU07QUFDbENJO0FBQ0QsS0FGRDs7QUFJQU4sUUFBSU8sSUFBSixDQUFTLEtBQVQsRUFBZ0JqQixXQUFoQjtBQUNBVSxRQUFJUSxJQUFKO0FBQ0QsR0FqQkQ7O0FBbUJBOzs7O0FBSUEsV0FBU0YsSUFBVCxHQUFnQjtBQUNkRixtQkFBZSxVQUFmO0FBQ0Q7O0FBRUQ7Ozs7O0FBS0EsV0FBU0EsY0FBVCxDQUF3QkssTUFBeEIsRUFBZ0M7QUFDOUJBLGFBQVNkLFNBQVNjLE1BQVQsRUFBaUIsRUFBakIsQ0FBVDs7QUFFQSxRQUFNQyxhQUFhRCxTQUFTZixVQUE1Qjs7QUFFQUEsa0JBQWNpQixLQUFLQyxJQUFMLENBQVVGLGFBQWEsQ0FBdkIsQ0FBZDs7QUFFQUc7O0FBRUEsUUFBSW5CLGVBQWVlLE1BQW5CLEVBQTJCO0FBQ3pCSyxpQkFBVyxZQUFNO0FBQ2ZWLHVCQUFlSyxNQUFmO0FBQ0QsT0FGRCxFQUVHLE1BQU1FLEtBQUtJLEdBQUwsQ0FBU0wsVUFBVCxJQUF1QixDQUZoQztBQUdEO0FBQ0Y7O0FBRUQ7OztBQUdBLFdBQVNHLGFBQVQsR0FBeUI7QUFDdkI7QUFDQXRCLGVBQVdLLFNBQVgsR0FBdUJGO0FBQ3BCc0IsWUFEb0I7QUFFcEJuQixXQUZvQixDQUVaLHVCQUZZLEVBRWEsR0FGYixDQUF2QjtBQUdEO0FBQ0YsQ0EvREQiLCJmaWxlIjoibWVzc2FnZS1jb3VudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuKGZ1bmN0aW9uKCkge1xuICBjb25zdCBNRVNTQUdFX1VSTCA9ICcvL2RpcmVjdC5jcmlzaXN0ZXh0bGluZS5vcmcvdHJlbmRzL2RhdGEvbWVzc2FnZXMudHh0JztcbiAgY29uc3QgbWVzc2FnZURpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlLWNvdW50Jyk7XG5cbiAgbGV0IGN1cnJlbnRWYWwgPSBwYXJzZUludChtZXNzYWdlRGl2LmlubmVySFRNTC5yZXBsYWNlKC8sL2csICcnKSwgMTApO1xuXG4gIHdpbmRvdy5nZXRNZXNzYWdlQ291bnQgPSAoKSA9PiB7XG4gICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgIGlmICh4aHIuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgaW5jcmVtZW50VmFsdWUoeGhyLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmYWlsKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcignZXJyb3InLCAoKSA9PiB7XG4gICAgICBmYWlsKCk7XG4gICAgfSk7XG5cbiAgICB4aHIub3BlbignR0VUJywgTUVTU0FHRV9VUkwpO1xuICAgIHhoci5zZW5kKCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEZhaWx1cmUgaGFuZGxlciBmb3IgYSBmYWlsZWQgWEhSIHJlcXVlc3QuIExldCdzIGp1c3QgcG9wdWxhdGUgd2l0aCBhIHNhbmUsXG4gICAqIHRydWUtZW5vdWdoIHZhbHVlLlxuICAgKi9cbiAgZnVuY3Rpb24gZmFpbCgpIHtcbiAgICBpbmNyZW1lbnRWYWx1ZSgnNDI4NjUxMjQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZW1lbnQgdGhlIGN1cnJlbnQgdmFsdWUgYnkgdGhlIGRpZmZlcmVuY2UgZnJvbSBjdXJyZW50IHRvIGRlc2lyZWQgLyAyLlxuICAgKlxuICAgKiBAcGFyYW0gIHtpbnRlZ2VyfSBpbnRWYWwgVmFsdWUgd2UncmUgc2hvb3RpbmcgZm9yXG4gICAqL1xuICBmdW5jdGlvbiBpbmNyZW1lbnRWYWx1ZShpbnRWYWwpIHtcbiAgICBpbnRWYWwgPSBwYXJzZUludChpbnRWYWwsIDEwKTtcblxuICAgIGNvbnN0IGRpZmZlcmVuY2UgPSBpbnRWYWwgLSBjdXJyZW50VmFsO1xuXG4gICAgY3VycmVudFZhbCArPSBNYXRoLmNlaWwoZGlmZmVyZW5jZSAvIDIpO1xuXG4gICAgdXBkYXRlRGlzcGxheSgpO1xuXG4gICAgaWYgKGN1cnJlbnRWYWwgIT09IGludFZhbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGluY3JlbWVudFZhbHVlKGludFZhbCk7XG4gICAgICB9LCAxMjUgLSBNYXRoLmxvZyhkaWZmZXJlbmNlKSAqIDUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGRpc3BsYXkgdG8gY3VycmVudFZhbHVlLCBmb3JtYXR0ZWQgaW4gMSwyMzEsMTMxLDIzMiBmb3JtYXRcbiAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgLy8gZm9ybWF0IHRoZSBzdHJpbmcgd2l0aCBjb21tYXMgZXZlcnkgMyBwbGFjZXNcbiAgICBtZXNzYWdlRGl2LmlubmVySFRNTCA9IGN1cnJlbnRWYWxcbiAgICAgIC50b1N0cmluZygpXG4gICAgICAucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJywnKTtcbiAgfVxufSkoKTtcbiJdfQ==
