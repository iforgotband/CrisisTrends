'use strict'; /*
               *
               *  Web Starter Kit
               *  Copyright 2015 Google Inc. All rights reserved.
               *
               *  Licensed under the Apache License, Version 2.0 (the "License");
               *  you may not use this file except in compliance with the License.
               *  You may obtain a copy of the License at
               *
               *    https://www.apache.org/licenses/LICENSE-2.0
               *
               *  Unless required by applicable law or agreed to in writing, software
               *  distributed under the License is distributed on an "AS IS" BASIS,
               *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
               *  See the License for the specific language governing permissions and
               *  limitations under the License
               *
               */

(function () {
  'use strict';

  // Check to make sure service workers are supported in the current browser,
  // and that the current page is accessed from a secure origin. Using a
  // service worker from an insecure origin will trigger JS console errors. See
  // http://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features
  var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
  // [::1] is the IPv6 localhost address.
  window.location.hostname === '[::1]' ||
  // 127.0.0.1/8 is considered localhost for IPv4.
  window.location.hostname.match(
  /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9\-]*[A-Za-z0-9])$/));



  if ('serviceWorker' in navigator && (
  window.location.protocol === 'https:' || isLocalhost)) {
    navigator.serviceWorker.register('service-worker.js').
    then(function (registration) {
      // updatefound is fired if service-worker.js changes.
      registration.onupdatefound = function () {
        // updatefound is also fired the very first time the SW is installed,
        // and there's no need to prompt for a reload at that point.
        // So check here to see if the page is already controlled,
        // i.e. whether there's an existing service worker.
        if (navigator.serviceWorker.controller) {
          // The updatefound event implies that registration.installing is set:
          // https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#service-worker-container-updatefound-event
          var installingWorker = registration.installing;

          installingWorker.onstatechange = function () {
            switch (installingWorker.state) {
              case 'installed':
                // At this point, the old content will have been purged and the
                // fresh content will have been added to the cache.
                // It's the perfect time to display a "New content is
                // available; please refresh." message in the page's interface.
                break;

              case 'redundant':
                throw new Error('The installing ' +
                'service worker became redundant.');

              default:
              // Ignore
            }
          };
        }
      };
    }).catch(function (e) {
      console.error('Error during service worker registration:', e);
    });
  }

  // Your custom JavaScript goes here
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndzdC5qcyJdLCJuYW1lcyI6WyJpc0xvY2FsaG9zdCIsIkJvb2xlYW4iLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhvc3RuYW1lIiwibWF0Y2giLCJuYXZpZ2F0b3IiLCJwcm90b2NvbCIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciIsInRoZW4iLCJyZWdpc3RyYXRpb24iLCJvbnVwZGF0ZWZvdW5kIiwiY29udHJvbGxlciIsImluc3RhbGxpbmdXb3JrZXIiLCJpbnN0YWxsaW5nIiwib25zdGF0ZWNoYW5nZSIsInN0YXRlIiwiRXJyb3IiLCJjYXRjaCIsImUiLCJjb25zb2xlIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJjQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUJBLENBQUMsWUFBVztBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsY0FBY0MsUUFBUUMsT0FBT0MsUUFBUCxDQUFnQkMsUUFBaEIsS0FBNkIsV0FBN0I7QUFDeEI7QUFDQUYsU0FBT0MsUUFBUCxDQUFnQkMsUUFBaEIsS0FBNkIsT0FGTDtBQUd4QjtBQUNBRixTQUFPQyxRQUFQLENBQWdCQyxRQUFoQixDQUF5QkMsS0FBekI7QUFDRSwrR0FERixDQUpnQixDQUFwQjs7OztBQVNBLE1BQUksbUJBQW1CQyxTQUFuQjtBQUNDSixTQUFPQyxRQUFQLENBQWdCSSxRQUFoQixLQUE2QixRQUE3QixJQUF5Q1AsV0FEMUMsQ0FBSixFQUM0RDtBQUMxRE0sY0FBVUUsYUFBVixDQUF3QkMsUUFBeEIsQ0FBaUMsbUJBQWpDO0FBQ0NDLFFBREQsQ0FDTSxVQUFTQyxZQUFULEVBQXVCO0FBQzNCO0FBQ0FBLG1CQUFhQyxhQUFiLEdBQTZCLFlBQVc7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFJTixVQUFVRSxhQUFWLENBQXdCSyxVQUE1QixFQUF3QztBQUN0QztBQUNBO0FBQ0EsY0FBTUMsbUJBQW1CSCxhQUFhSSxVQUF0Qzs7QUFFQUQsMkJBQWlCRSxhQUFqQixHQUFpQyxZQUFXO0FBQzFDLG9CQUFRRixpQkFBaUJHLEtBQXpCO0FBQ0UsbUJBQUssV0FBTDtBQUNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUYsbUJBQUssV0FBTDtBQUNFLHNCQUFNLElBQUlDLEtBQUosQ0FBVTtBQUNBLGtEQURWLENBQU47O0FBR0Y7QUFDRTtBQWJKO0FBZUQsV0FoQkQ7QUFpQkQ7QUFDRixPQTVCRDtBQTZCRCxLQWhDRCxFQWdDR0MsS0FoQ0gsQ0FnQ1MsVUFBU0MsQ0FBVCxFQUFZO0FBQ25CQyxjQUFRQyxLQUFSLENBQWMsMkNBQWQsRUFBMkRGLENBQTNEO0FBQ0QsS0FsQ0Q7QUFtQ0Q7O0FBRUQ7QUFDRCxDQXhERCIsImZpbGUiOiJ3c3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICpcbiAqICBXZWIgU3RhcnRlciBLaXRcbiAqICBDb3B5cmlnaHQgMjAxNSBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiAgICBodHRwczovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlXG4gKlxuICovXG5cbihmdW5jdGlvbigpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIC8vIENoZWNrIHRvIG1ha2Ugc3VyZSBzZXJ2aWNlIHdvcmtlcnMgYXJlIHN1cHBvcnRlZCBpbiB0aGUgY3VycmVudCBicm93c2VyLFxuICAvLyBhbmQgdGhhdCB0aGUgY3VycmVudCBwYWdlIGlzIGFjY2Vzc2VkIGZyb20gYSBzZWN1cmUgb3JpZ2luLiBVc2luZyBhXG4gIC8vIHNlcnZpY2Ugd29ya2VyIGZyb20gYW4gaW5zZWN1cmUgb3JpZ2luIHdpbGwgdHJpZ2dlciBKUyBjb25zb2xlIGVycm9ycy4gU2VlXG4gIC8vIGh0dHA6Ly93d3cuY2hyb21pdW0ub3JnL0hvbWUvY2hyb21pdW0tc2VjdXJpdHkvcHJlZmVyLXNlY3VyZS1vcmlnaW5zLWZvci1wb3dlcmZ1bC1uZXctZmVhdHVyZXNcbiAgY29uc3QgaXNMb2NhbGhvc3QgPSBCb29sZWFuKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSA9PT0gJ2xvY2FsaG9zdCcgfHxcbiAgICAgIC8vIFs6OjFdIGlzIHRoZSBJUHY2IGxvY2FsaG9zdCBhZGRyZXNzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lID09PSAnWzo6MV0nIHx8XG4gICAgICAvLyAxMjcuMC4wLjEvOCBpcyBjb25zaWRlcmVkIGxvY2FsaG9zdCBmb3IgSVB2NC5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5tYXRjaChcbiAgICAgICAgL14oKFthLXpBLVowLTldfFthLXpBLVowLTldW2EtekEtWjAtOVxcLV0qW2EtekEtWjAtOV0pXFwuKSooW0EtWmEtejAtOV18W0EtWmEtejAtOV1bQS1aYS16MC05XFwtXSpbQS1aYS16MC05XSkkL1xuICAgICAgKVxuICAgICk7XG5cbiAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IgJiZcbiAgICAgICh3aW5kb3cubG9jYXRpb24ucHJvdG9jb2wgPT09ICdodHRwczonIHx8IGlzTG9jYWxob3N0KSkge1xuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzZXJ2aWNlLXdvcmtlci5qcycpXG4gICAgLnRoZW4oZnVuY3Rpb24ocmVnaXN0cmF0aW9uKSB7XG4gICAgICAvLyB1cGRhdGVmb3VuZCBpcyBmaXJlZCBpZiBzZXJ2aWNlLXdvcmtlci5qcyBjaGFuZ2VzLlxuICAgICAgcmVnaXN0cmF0aW9uLm9udXBkYXRlZm91bmQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gdXBkYXRlZm91bmQgaXMgYWxzbyBmaXJlZCB0aGUgdmVyeSBmaXJzdCB0aW1lIHRoZSBTVyBpcyBpbnN0YWxsZWQsXG4gICAgICAgIC8vIGFuZCB0aGVyZSdzIG5vIG5lZWQgdG8gcHJvbXB0IGZvciBhIHJlbG9hZCBhdCB0aGF0IHBvaW50LlxuICAgICAgICAvLyBTbyBjaGVjayBoZXJlIHRvIHNlZSBpZiB0aGUgcGFnZSBpcyBhbHJlYWR5IGNvbnRyb2xsZWQsXG4gICAgICAgIC8vIGkuZS4gd2hldGhlciB0aGVyZSdzIGFuIGV4aXN0aW5nIHNlcnZpY2Ugd29ya2VyLlxuICAgICAgICBpZiAobmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIuY29udHJvbGxlcikge1xuICAgICAgICAgIC8vIFRoZSB1cGRhdGVmb3VuZCBldmVudCBpbXBsaWVzIHRoYXQgcmVnaXN0cmF0aW9uLmluc3RhbGxpbmcgaXMgc2V0OlxuICAgICAgICAgIC8vIGh0dHBzOi8vc2xpZ2h0bHlvZmYuZ2l0aHViLmlvL1NlcnZpY2VXb3JrZXIvc3BlYy9zZXJ2aWNlX3dvcmtlci9pbmRleC5odG1sI3NlcnZpY2Utd29ya2VyLWNvbnRhaW5lci11cGRhdGVmb3VuZC1ldmVudFxuICAgICAgICAgIGNvbnN0IGluc3RhbGxpbmdXb3JrZXIgPSByZWdpc3RyYXRpb24uaW5zdGFsbGluZztcblxuICAgICAgICAgIGluc3RhbGxpbmdXb3JrZXIub25zdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgc3dpdGNoIChpbnN0YWxsaW5nV29ya2VyLnN0YXRlKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2luc3RhbGxlZCc6XG4gICAgICAgICAgICAgICAgLy8gQXQgdGhpcyBwb2ludCwgdGhlIG9sZCBjb250ZW50IHdpbGwgaGF2ZSBiZWVuIHB1cmdlZCBhbmQgdGhlXG4gICAgICAgICAgICAgICAgLy8gZnJlc2ggY29udGVudCB3aWxsIGhhdmUgYmVlbiBhZGRlZCB0byB0aGUgY2FjaGUuXG4gICAgICAgICAgICAgICAgLy8gSXQncyB0aGUgcGVyZmVjdCB0aW1lIHRvIGRpc3BsYXkgYSBcIk5ldyBjb250ZW50IGlzXG4gICAgICAgICAgICAgICAgLy8gYXZhaWxhYmxlOyBwbGVhc2UgcmVmcmVzaC5cIiBtZXNzYWdlIGluIHRoZSBwYWdlJ3MgaW50ZXJmYWNlLlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgIGNhc2UgJ3JlZHVuZGFudCc6XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgaW5zdGFsbGluZyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3NlcnZpY2Ugd29ya2VyIGJlY2FtZSByZWR1bmRhbnQuJyk7XG5cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAvLyBJZ25vcmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGR1cmluZyBzZXJ2aWNlIHdvcmtlciByZWdpc3RyYXRpb246JywgZSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBZb3VyIGN1c3RvbSBKYXZhU2NyaXB0IGdvZXMgaGVyZVxufSkoKTtcbiJdfQ==
