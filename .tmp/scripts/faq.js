/* global
    hide
    toggle
 */
'use strict';

(function () {
  /**
               * Render the FAQ questions from a file located at /faq.js.
               */
  window.renderFAQ = function () {
    /**
                                   * Destination of all FAQ items
                                   * @type {Element}
                                   */
    var _destination = document.getElementsByClassName('faq-placeholder')[0];

    /**
                                                                               * Template for each wrapper section, including an image.
                                                                               * @type {Element}
                                                                               */
    var _section = document.getElementsByClassName('template faq-section')[0];
    bootstrapTemplate(_section);

    /**
                                  * Template for each wrapper subsection, including an image.
                                  * @type {Element}
                                  */
    var _subsection =
    document.getElementsByClassName('template faq-subsection')[0];
    bootstrapTemplate(_subsection);

    /**
                                     * Template for each question.
                                     * @type {[type]}
                                     */
    var _question = document.
    getElementsByClassName('template faq-question')[0];
    bootstrapTemplate(_question);

    for (var sectionTitle in window.faq) {
      // Since we're working with a global obj, let's make sure we're not
      // screwed by accidental prototyping.
      if (!window.faq.hasOwnProperty(sectionTitle)) {
        continue;
      }

      /** @type {object} Shortcut  */
      var section = window.faq[sectionTitle];

      /** @type {Element} The new section where we're putting the FAQ elements */
      var _thisSection = _section.cloneNode(true);

      // Fill in template data
      _thisSection.querySelectorAll('h1')[0].innerHTML = sectionTitle;
      _thisSection.querySelectorAll('img')[0].src = section.image;

      var _thisDestination = _thisSection.querySelectorAll('.faq-content')[0];

      for (var subsectionTitle in section.questions) {
        if (!section.questions.hasOwnProperty(subsectionTitle)) {
          continue;
        }

        /** @type {object,string} The set of either subsections or questions */
        var subsection = section.questions[subsectionTitle];

        if (typeof subsection === 'string') {
          // we have a question
          addQuestion(subsectionTitle, subsection, _thisDestination);
        } else {
          // we have a subsection
          var _thisSubsection = _subsection.cloneNode(true);

          _thisSubsection.querySelectorAll('h2')[0].innerHTML = subsectionTitle;

          for (var question in subsection) {
            if (!subsection.hasOwnProperty(question)) {
              continue;
            }

            addQuestion(question, subsection[question], _thisSubsection);
          }

          _thisDestination.appendChild(_thisSubsection);
        }
      }
      // Finally, append to the DOM.
      _destination.appendChild(_thisSection);
    }

    /**
       * Bootstrap a template by removing it from the dom and removing the template class.
       *
       * @param {Element} domNode The domNode to bootstrap into a template
       */
    function bootstrapTemplate(domNode) {
      // Remove from DOM
      domNode.parentNode.removeChild(domNode);

      // Remove the template class
      domNode.className = domNode.className.replace('template', '');
    }

    /**
       * Add a question using the global question template to an Element, appendTo.
       * @param {string} question question
       * @param {string} answer answer
       * @param {Element} appendTo Element to append the question to
       */
    function addQuestion(question, answer, appendTo) {
      var _thisQuestion = _question.cloneNode(true);

      _thisQuestion.querySelectorAll('h3')[0].innerHTML = question;
      _thisQuestion.querySelectorAll('p')[0].innerHTML = answer;

      appendTo.appendChild(_thisQuestion);
    }
  };

  /**
      * Bind click events and hide elements from the FAQ
      */
  window.bindFAQ = function () {
    var select = '.faq-content';

    var allElements = document.querySelectorAll(select);
    hide(allElements);

    allElements.forEach(function (e) {
      e.style.cursor = 'auto';

      // Prevent the click listener on the parent from affecting this (i.e. re-hiding this element)
      e.addEventListener('click', function (event) {
        event.stopPropagation();
      });
    });

    var sections = document.querySelectorAll('.faq-section');
    sections.forEach(function (e) {
      e.style.cursor = 'pointer';

      e.addEventListener('click', function () {
        this.querySelectorAll(select).forEach(toggle);
      });
    });
  };
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS5qcyJdLCJuYW1lcyI6WyJ3aW5kb3ciLCJyZW5kZXJGQVEiLCJfZGVzdGluYXRpb24iLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJfc2VjdGlvbiIsImJvb3RzdHJhcFRlbXBsYXRlIiwiX3N1YnNlY3Rpb24iLCJfcXVlc3Rpb24iLCJzZWN0aW9uVGl0bGUiLCJmYXEiLCJoYXNPd25Qcm9wZXJ0eSIsInNlY3Rpb24iLCJfdGhpc1NlY3Rpb24iLCJjbG9uZU5vZGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW5uZXJIVE1MIiwic3JjIiwiaW1hZ2UiLCJfdGhpc0Rlc3RpbmF0aW9uIiwic3Vic2VjdGlvblRpdGxlIiwicXVlc3Rpb25zIiwic3Vic2VjdGlvbiIsImFkZFF1ZXN0aW9uIiwiX3RoaXNTdWJzZWN0aW9uIiwicXVlc3Rpb24iLCJhcHBlbmRDaGlsZCIsImRvbU5vZGUiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJjbGFzc05hbWUiLCJyZXBsYWNlIiwiYW5zd2VyIiwiYXBwZW5kVG8iLCJfdGhpc1F1ZXN0aW9uIiwiYmluZEZBUSIsInNlbGVjdCIsImFsbEVsZW1lbnRzIiwiaGlkZSIsImZvckVhY2giLCJlIiwic3R5bGUiLCJjdXJzb3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJzZWN0aW9ucyIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFJQTs7QUFFQSxDQUFDLFlBQVc7QUFDVjs7O0FBR0FBLFNBQU9DLFNBQVAsR0FBbUIsWUFBTTtBQUN2Qjs7OztBQUlBLFFBQU1DLGVBQWVDLFNBQVNDLHNCQUFULENBQWdDLGlCQUFoQyxFQUFtRCxDQUFuRCxDQUFyQjs7QUFFQTs7OztBQUlBLFFBQU1DLFdBQVdGLFNBQVNDLHNCQUFULENBQWdDLHNCQUFoQyxFQUF3RCxDQUF4RCxDQUFqQjtBQUNBRSxzQkFBa0JELFFBQWxCOztBQUVBOzs7O0FBSUEsUUFBTUU7QUFD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LFFBQU1DLFNBQVMsY0FBZjs7QUFFQSxRQUFNQyxjQUFjbEMsU0FBU1ksZ0JBQVQsQ0FBMEJxQixNQUExQixDQUFwQjtBQUNBRSxTQUFLRCxXQUFMOztBQUVBQSxnQkFBWUUsT0FBWixDQUFvQixVQUFDQyxDQUFELEVBQU87QUFDekJBLFFBQUVDLEtBQUYsQ0FBUUMsTUFBUixHQUFpQixNQUFqQjs7QUFFQTtBQUNBRixRQUFFRyxnQkFBRixDQUFtQixPQUFuQixFQUE0QixVQUFTQyxLQUFULEVBQWdCO0FBQzFDQSxjQUFNQyxlQUFOO0FBQ0QsT0FGRDtBQUdELEtBUEQ7O0FBU0EsUUFBTUMsV0FBVzNDLFNBQVNZLGdCQUFULENBQTBCLGNBQTFCLENBQWpCO0FBQ0ErQixhQUFTUCxPQUFULENBQWlCLFVBQUNDLENBQUQsRUFBTztBQUN0QkEsUUFBRUMsS0FBRixDQUFRQyxNQUFSLEdBQWlCLFNBQWpCOztBQUVBRixRQUFFRyxnQkFBRixDQUFtQixPQUFuQixFQUE0QixZQUFXO0FBQ3JDLGFBQUs1QixnQkFBTCxDQUFzQnFCLE1BQXRCLEVBQThCRyxPQUE5QixDQUFzQ1EsTUFBdEM7QUFDRCxPQUZEO0FBR0QsS0FORDtBQU9ELEdBdkJEO0FBd0JELENBN0lEIiwiZmlsZSI6ImZhcS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGdsb2JhbFxuICAgIGhpZGVcbiAgICB0b2dnbGVcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24oKSB7XG4gIC8qKlxuICAgKiBSZW5kZXIgdGhlIEZBUSBxdWVzdGlvbnMgZnJvbSBhIGZpbGUgbG9jYXRlZCBhdCAvZmFxLmpzLlxuICAgKi9cbiAgd2luZG93LnJlbmRlckZBUSA9ICgpID0+IHtcbiAgICAvKipcbiAgICAgKiBEZXN0aW5hdGlvbiBvZiBhbGwgRkFRIGl0ZW1zXG4gICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICovXG4gICAgY29uc3QgX2Rlc3RpbmF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmFxLXBsYWNlaG9sZGVyJylbMF07XG5cbiAgICAvKipcbiAgICAgKiBUZW1wbGF0ZSBmb3IgZWFjaCB3cmFwcGVyIHNlY3Rpb24sIGluY2x1ZGluZyBhbiBpbWFnZS5cbiAgICAgKiBAdHlwZSB7RWxlbWVudH1cbiAgICAgKi9cbiAgICBjb25zdCBfc2VjdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RlbXBsYXRlIGZhcS1zZWN0aW9uJylbMF07XG4gICAgYm9vdHN0cmFwVGVtcGxhdGUoX3NlY3Rpb24pO1xuXG4gICAgLyoqXG4gICAgICogVGVtcGxhdGUgZm9yIGVhY2ggd3JhcHBlciBzdWJzZWN0aW9uLCBpbmNsdWRpbmcgYW4gaW1hZ2UuXG4gICAgICogQHR5cGUge0VsZW1lbnR9XG4gICAgICovXG4gICAgY29uc3QgX3N1YnNlY3Rpb24gPVxuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGVtcGxhdGUgZmFxLXN1YnNlY3Rpb24nKVswXTtcbiAgICBib290c3RyYXBUZW1wbGF0ZShfc3Vic2VjdGlvbik7XG5cbiAgICAvKipcbiAgICAgKiBUZW1wbGF0ZSBmb3IgZWFjaCBxdWVzdGlvbi5cbiAgICAgKiBAdHlwZSB7W3R5cGVdfVxuICAgICAqL1xuICAgIGNvbnN0IF9xdWVzdGlvbiA9IGRvY3VtZW50XG4gICAgICAuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGVtcGxhdGUgZmFxLXF1ZXN0aW9uJylbMF07XG4gICAgYm9vdHN0cmFwVGVtcGxhdGUoX3F1ZXN0aW9uKTtcblxuICAgIGZvciAobGV0IHNlY3Rpb25UaXRsZSBpbiB3aW5kb3cuZmFxKSB7XG4gICAgICAvLyBTaW5jZSB3ZSdyZSB3b3JraW5nIHdpdGggYSBnbG9iYWwgb2JqLCBsZXQncyBtYWtlIHN1cmUgd2UncmUgbm90XG4gICAgICAvLyBzY3Jld2VkIGJ5IGFjY2lkZW50YWwgcHJvdG90eXBpbmcuXG4gICAgICBpZiAoIXdpbmRvdy5mYXEuaGFzT3duUHJvcGVydHkoc2VjdGlvblRpdGxlKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgLyoqIEB0eXBlIHtvYmplY3R9IFNob3J0Y3V0ICAqL1xuICAgICAgY29uc3Qgc2VjdGlvbiA9IHdpbmRvdy5mYXFbc2VjdGlvblRpdGxlXTtcblxuICAgICAgLyoqIEB0eXBlIHtFbGVtZW50fSBUaGUgbmV3IHNlY3Rpb24gd2hlcmUgd2UncmUgcHV0dGluZyB0aGUgRkFRIGVsZW1lbnRzICovXG4gICAgICBjb25zdCBfdGhpc1NlY3Rpb24gPSBfc2VjdGlvbi5jbG9uZU5vZGUodHJ1ZSk7XG5cbiAgICAgIC8vIEZpbGwgaW4gdGVtcGxhdGUgZGF0YVxuICAgICAgX3RoaXNTZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ2gxJylbMF0uaW5uZXJIVE1MID0gc2VjdGlvblRpdGxlO1xuICAgICAgX3RoaXNTZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpWzBdLnNyYyA9IHNlY3Rpb24uaW1hZ2U7XG5cbiAgICAgIGNvbnN0IF90aGlzRGVzdGluYXRpb24gPSBfdGhpc1NlY3Rpb24ucXVlcnlTZWxlY3RvckFsbCgnLmZhcS1jb250ZW50JylbMF07XG5cbiAgICAgIGZvciAobGV0IHN1YnNlY3Rpb25UaXRsZSBpbiBzZWN0aW9uLnF1ZXN0aW9ucykge1xuICAgICAgICBpZiAoIXNlY3Rpb24ucXVlc3Rpb25zLmhhc093blByb3BlcnR5KHN1YnNlY3Rpb25UaXRsZSkpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKiBAdHlwZSB7b2JqZWN0LHN0cmluZ30gVGhlIHNldCBvZiBlaXRoZXIgc3Vic2VjdGlvbnMgb3IgcXVlc3Rpb25zICovXG4gICAgICAgIGNvbnN0IHN1YnNlY3Rpb24gPSBzZWN0aW9uLnF1ZXN0aW9uc1tzdWJzZWN0aW9uVGl0bGVdO1xuXG4gICAgICAgIGlmICh0eXBlb2Ygc3Vic2VjdGlvbiA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAvLyB3ZSBoYXZlIGEgcXVlc3Rpb25cbiAgICAgICAgICBhZGRRdWVzdGlvbihzdWJzZWN0aW9uVGl0bGUsIHN1YnNlY3Rpb24sIF90aGlzRGVzdGluYXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIHdlIGhhdmUgYSBzdWJzZWN0aW9uXG4gICAgICAgICAgY29uc3QgX3RoaXNTdWJzZWN0aW9uID0gX3N1YnNlY3Rpb24uY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICAgICAgX3RoaXNTdWJzZWN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ2gyJylbMF0uaW5uZXJIVE1MID0gc3Vic2VjdGlvblRpdGxlO1xuXG4gICAgICAgICAgZm9yIChsZXQgcXVlc3Rpb24gaW4gc3Vic2VjdGlvbikge1xuICAgICAgICAgICAgaWYgKCFzdWJzZWN0aW9uLmhhc093blByb3BlcnR5KHF1ZXN0aW9uKSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRkUXVlc3Rpb24ocXVlc3Rpb24sIHN1YnNlY3Rpb25bcXVlc3Rpb25dLCBfdGhpc1N1YnNlY3Rpb24pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF90aGlzRGVzdGluYXRpb24uYXBwZW5kQ2hpbGQoX3RoaXNTdWJzZWN0aW9uKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gRmluYWxseSwgYXBwZW5kIHRvIHRoZSBET00uXG4gICAgICBfZGVzdGluYXRpb24uYXBwZW5kQ2hpbGQoX3RoaXNTZWN0aW9uKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBCb290c3RyYXAgYSB0ZW1wbGF0ZSBieSByZW1vdmluZyBpdCBmcm9tIHRoZSBkb20gYW5kIHJlbW92aW5nIHRoZSB0ZW1wbGF0ZSBjbGFzcy5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZG9tTm9kZSBUaGUgZG9tTm9kZSB0byBib290c3RyYXAgaW50byBhIHRlbXBsYXRlXG4gICAgICovXG4gICAgZnVuY3Rpb24gYm9vdHN0cmFwVGVtcGxhdGUoZG9tTm9kZSkge1xuICAgICAgLy8gUmVtb3ZlIGZyb20gRE9NXG4gICAgICBkb21Ob2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tTm9kZSk7XG5cbiAgICAgIC8vIFJlbW92ZSB0aGUgdGVtcGxhdGUgY2xhc3NcbiAgICAgIGRvbU5vZGUuY2xhc3NOYW1lID0gZG9tTm9kZS5jbGFzc05hbWUucmVwbGFjZSgndGVtcGxhdGUnLCAnJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkIGEgcXVlc3Rpb24gdXNpbmcgdGhlIGdsb2JhbCBxdWVzdGlvbiB0ZW1wbGF0ZSB0byBhbiBFbGVtZW50LCBhcHBlbmRUby5cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcXVlc3Rpb24gcXVlc3Rpb25cbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gYW5zd2VyIGFuc3dlclxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gYXBwZW5kVG8gRWxlbWVudCB0byBhcHBlbmQgdGhlIHF1ZXN0aW9uIHRvXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkUXVlc3Rpb24ocXVlc3Rpb24sIGFuc3dlciwgYXBwZW5kVG8pIHtcbiAgICAgIGNvbnN0IF90aGlzUXVlc3Rpb24gPSBfcXVlc3Rpb24uY2xvbmVOb2RlKHRydWUpO1xuXG4gICAgICBfdGhpc1F1ZXN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ2gzJylbMF0uaW5uZXJIVE1MID0gcXVlc3Rpb247XG4gICAgICBfdGhpc1F1ZXN0aW9uLnF1ZXJ5U2VsZWN0b3JBbGwoJ3AnKVswXS5pbm5lckhUTUwgPSBhbnN3ZXI7XG5cbiAgICAgIGFwcGVuZFRvLmFwcGVuZENoaWxkKF90aGlzUXVlc3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogQmluZCBjbGljayBldmVudHMgYW5kIGhpZGUgZWxlbWVudHMgZnJvbSB0aGUgRkFRXG4gICAqL1xuICB3aW5kb3cuYmluZEZBUSA9ICgpID0+IHtcbiAgICBjb25zdCBzZWxlY3QgPSAnLmZhcS1jb250ZW50JztcblxuICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3QpO1xuICAgIGhpZGUoYWxsRWxlbWVudHMpO1xuXG4gICAgYWxsRWxlbWVudHMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgZS5zdHlsZS5jdXJzb3IgPSAnYXV0byc7XG5cbiAgICAgIC8vIFByZXZlbnQgdGhlIGNsaWNrIGxpc3RlbmVyIG9uIHRoZSBwYXJlbnQgZnJvbSBhZmZlY3RpbmcgdGhpcyAoaS5lLiByZS1oaWRpbmcgdGhpcyBlbGVtZW50KVxuICAgICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBzZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5mYXEtc2VjdGlvbicpO1xuICAgIHNlY3Rpb25zLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGUuc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInO1xuXG4gICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMucXVlcnlTZWxlY3RvckFsbChzZWxlY3QpLmZvckVhY2godG9nZ2xlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xufSkoKTtcbiJdfQ==
