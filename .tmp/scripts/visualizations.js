'use strict';(function () {
  var DASHBOARD_URL = '//public.tableausoftware.com/views/crisistrends2dec132016/WorkingDashMobile?:embed=y&:showVizHome=no&:host_url=https%3A%2F%2Fpublic.tableausoftware.com%2F&:tabs=no&:toolbar=top&:animate_transition=yes&:display_static_image=no&:display_spinner=yes&:display_overlay=yes&:display_count=yes&:loadOrderID=0';

  var loaded = false;

  window.addEventListener('scroll', loadDashboard);
  window.addEventListener('resize-complete', reflowDashboard);

  adjustHeight();

  /**
                   * Load the dashboard if it hasn't been loaded yet.
                   *
                   * @param {boolean} reload true if we want to force reloading the dashboard
                   */
  function loadDashboard(reload) {
    if (!loaded || reload === true) {
      document.getElementById('viz').src = DASHBOARD_URL;
      loaded = true;
    }
  }

  /**
     * Reload the dashboard in response to screen size change.
     */
  function reflowDashboard() {
    loadDashboard(true);
    adjustHeight();
  }

  /**
     * Adjust the height of the data viz.
     */
  function adjustHeight() {
    var viz = document.getElementById('viz');

    if (viz.offsetWidth <= 500) {
      viz.height = 1950;
    } else {
      viz.height = 2600;
    }
  }
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpc3VhbGl6YXRpb25zLmpzIl0sIm5hbWVzIjpbIkRBU0hCT0FSRF9VUkwiLCJsb2FkZWQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwibG9hZERhc2hib2FyZCIsInJlZmxvd0Rhc2hib2FyZCIsImFkanVzdEhlaWdodCIsInJlbG9hZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzcmMiLCJ2aXoiLCJvZmZzZXRXaWR0aCIsImhlaWdodCJdLCJtYXBwaW5ncyI6ImFBQUEsQ0FBQyxZQUFXO0FBQ1YsTUFBTUEsZ0JBQWdCLCtTQUF0Qjs7QUFFQSxNQUFJQyxTQUFTLEtBQWI7O0FBRUFDLFNBQU9DLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxhQUFsQztBQUNBRixTQUFPQyxnQkFBUCxDQUF3QixpQkFBeEIsRUFBMkNFLGVBQTNDOztBQUVBQzs7QUFFQTs7Ozs7QUFLQSxXQUFTRixhQUFULENBQXVCRyxNQUF2QixFQUErQjtBQUM3QixRQUFJLENBQUNOLE1BQUQsSUFBV00sV0FBVyxJQUExQixFQUFnQztBQUM5QkMsZUFBU0MsY0FBVCxDQUF3QixLQUF4QixFQUErQkMsR0FBL0IsR0FBcUNWLGFBQXJDO0FBQ0FDLGVBQVMsSUFBVDtBQUNEO0FBQ0Y7O0FBRUQ7OztBQUdBLFdBQVNJLGVBQVQsR0FBMkI7QUFDekJELGtCQUFjLElBQWQ7QUFDQUU7QUFDRDs7QUFFRDs7O0FBR0EsV0FBU0EsWUFBVCxHQUF3QjtBQUN0QixRQUFNSyxNQUFNSCxTQUFTQyxjQUFULENBQXdCLEtBQXhCLENBQVo7O0FBRUEsUUFBSUUsSUFBSUMsV0FBSixJQUFtQixHQUF2QixFQUE0QjtBQUMxQkQsVUFBSUUsTUFBSixHQUFhLElBQWI7QUFDRCxLQUZELE1BRU87QUFDTEYsVUFBSUUsTUFBSixHQUFhLElBQWI7QUFDRDtBQUNGO0FBQ0YsQ0ExQ0QiLCJmaWxlIjoidmlzdWFsaXphdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gIGNvbnN0IERBU0hCT0FSRF9VUkwgPSAnLy9wdWJsaWMudGFibGVhdXNvZnR3YXJlLmNvbS92aWV3cy9jcmlzaXN0cmVuZHMyZGVjMTMyMDE2L1dvcmtpbmdEYXNoTW9iaWxlPzplbWJlZD15JjpzaG93Vml6SG9tZT1ubyY6aG9zdF91cmw9aHR0cHMlM0ElMkYlMkZwdWJsaWMudGFibGVhdXNvZnR3YXJlLmNvbSUyRiY6dGFicz1ubyY6dG9vbGJhcj10b3AmOmFuaW1hdGVfdHJhbnNpdGlvbj15ZXMmOmRpc3BsYXlfc3RhdGljX2ltYWdlPW5vJjpkaXNwbGF5X3NwaW5uZXI9eWVzJjpkaXNwbGF5X292ZXJsYXk9eWVzJjpkaXNwbGF5X2NvdW50PXllcyY6bG9hZE9yZGVySUQ9MCc7XG5cbiAgbGV0IGxvYWRlZCA9IGZhbHNlO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBsb2FkRGFzaGJvYXJkKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZS1jb21wbGV0ZScsIHJlZmxvd0Rhc2hib2FyZCk7XG5cbiAgYWRqdXN0SGVpZ2h0KCk7XG5cbiAgLyoqXG4gICAqIExvYWQgdGhlIGRhc2hib2FyZCBpZiBpdCBoYXNuJ3QgYmVlbiBsb2FkZWQgeWV0LlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlbG9hZCB0cnVlIGlmIHdlIHdhbnQgdG8gZm9yY2UgcmVsb2FkaW5nIHRoZSBkYXNoYm9hcmRcbiAgICovXG4gIGZ1bmN0aW9uIGxvYWREYXNoYm9hcmQocmVsb2FkKSB7XG4gICAgaWYgKCFsb2FkZWQgfHwgcmVsb2FkID09PSB0cnVlKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndml6Jykuc3JjID0gREFTSEJPQVJEX1VSTDtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJlbG9hZCB0aGUgZGFzaGJvYXJkIGluIHJlc3BvbnNlIHRvIHNjcmVlbiBzaXplIGNoYW5nZS5cbiAgICovXG4gIGZ1bmN0aW9uIHJlZmxvd0Rhc2hib2FyZCgpIHtcbiAgICBsb2FkRGFzaGJvYXJkKHRydWUpO1xuICAgIGFkanVzdEhlaWdodCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkanVzdCB0aGUgaGVpZ2h0IG9mIHRoZSBkYXRhIHZpei5cbiAgICovXG4gIGZ1bmN0aW9uIGFkanVzdEhlaWdodCgpIHtcbiAgICBjb25zdCB2aXogPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndml6Jyk7XG5cbiAgICBpZiAodml6Lm9mZnNldFdpZHRoIDw9IDUwMCkge1xuICAgICAgdml6LmhlaWdodCA9IDE5NTA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZpei5oZWlnaHQgPSAyNjAwO1xuICAgIH1cbiAgfVxufSkoKTtcbiJdfQ==
