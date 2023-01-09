"use strict";

define("nodes/components/driver-hwclouds/component", ["exports", "shared/mixins/node-driver"], function (exports, _nodeDriver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  function _iterableToArrayLimit(arr, i) {
    if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
      return;
    }

    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }

  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var LAYOUT = "PHNlY3Rpb24gY2xhc3M9Imhvcml6b250YWwtZm9ybSI+CiAge3sjaWYgbmVlZEFQSVRva2VufX0KICA8Zm9ybT4KICAgIDxkaXYgY2xhc3M9Im92ZXItaHIgci1tYjIwIj4KICAgICAgPHNwYW4+QWNjb3VudCBBY2Nlc3M8L3NwYW4+CiAgICA8L2Rpdj4KICAgIDxkaXYgY2xhc3M9InJvdyBmb3JtLWdyb3VwIj4KICAgICAgPGRpdiBjbGFzcz0iY29sLW1kLTIiPgogICAgICAgIDxsYWJlbCBjbGFzcz0iZm9ybS1jb250cm9sLXN0YXRpYyI+QVBJIFRva2VuKjwvbGFiZWw+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMTAiPgogICAgICAgIHt7aW5wdXQgdHlwZT0icGFzc3dvcmQiIHZhbHVlPW1vZGVsLmhldHpuZXJDb25maWcuYXBpVG9rZW4gY2xhc3NOYW1lcz0iZm9ybS1jb250cm9sIiBwbGFjZWhvbGRlcj0iWW91ciBIZXR6bmVyIENsb3VkIEFQSSBUb2tlbiJ9fQogICAgICAgIDxwIGNsYXNzPSJoZWxwLWJsb2NrIj5DcmVhdGUgaXQgYnkgc3dpdGNoaW5nIGludG8gdGhlCiAgICAgICAgICA8YSB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIiBocmVmPSJodHRwczovL2NvbnNvbGUuaGV0em5lci5jbG91ZCI+SGV0em5lciBDbG91ZCBDb25zb2xlPC9hPiwgY2hvb3NpbmcgYSBwcm9qZWN0LCBnbyB0byBBY2Nlc3MgJnJhcnI7IFRva2VucyBhbmQgY3JlYXRlIGEgbmV3IEFQSSB0b2tlbiB0aGVyZS48L3A+CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgICB7e3RvcC1lcnJvcnMgZXJyb3JzPWVycm9yc319CiAgICA8ZGl2IGNsYXNzPSJmb290ZXItYWN0aW9ucyI+CiAgICAgIHt7I2lmIGdldHRpbmdEYXRhfX0KICAgICAgPGJ1dHRvbiBjbGFzcz0iYnRuIGJnLXByaW1hcnkgYnRuLWRpc2FibGVkIj4KICAgICAgICA8aSBjbGFzcz0iaWNvbiBpY29uLXNwaW5uZXIgaWNvbi1zcGluIj48L2k+IHt7dCAnZ2VuZXJpYy5sb2FkaW5nJ319PC9idXR0b24+CiAgICAgIHt7ZWxzZX19CiAgICAgIDxidXR0b24ge3thY3Rpb24gImdldERhdGEiIH19IGNsYXNzPSJidG4gYmctcHJpbWFyeSIgZGlzYWJsZWQ9e3tub3QgbW9kZWwuaGV0em5lckNvbmZpZy5hcGlUb2tlbn19PkNvbmZpZ3VyZSBTZXJ2ZXI8L2J1dHRvbj4KICAgICAge3svaWZ9fQogICAgICA8YnV0dG9uIHt7YWN0aW9uICJjYW5jZWwifX0gY2xhc3M9ImJ0biBiZy10cmFuc3BhcmVudCI+e3t0ICdnZW5lcmljLmNhbmNlbCd9fTwvYnV0dG9uPgogICAgPC9kaXY+CiAgPC9mb3JtPgogIHt7ZWxzZX19CiAgPGRpdiBjbGFzcz0iY29udGFpbmVyLWZsdWlkIj4KICAgIHt7IS0tIFRoaXMgcGFydGlhbCBjb250YWlucyB0aGUgcXVhbnRpdHksIG5hbWUsIGFuZCBkZXNjcmlwdGlvbiBmaWVsZHMgLS19fQogICAgPGRpdiBjbGFzcz0ib3Zlci1ociI+CiAgICAgIDxzcGFuPnt7dGVtcGxhdGVPcHRpb25zVGl0bGV9fTwvc3Bhbj4KICAgIDwvZGl2PgogICAgPGRpdiBjbGFzcz0ib3Zlci1ociByLW10MjAgci1tYjIwIj4KICAgICAgPHNwYW4+U2V0dGluZ3M8L3NwYW4+CiAgICA8L2Rpdj4KICAgIDxkaXYgY2xhc3M9InJvdyBmb3JtLWdyb3VwIj4KICAgICAgPGRpdiBjbGFzcz0iY29sLW1kLTIiPgogICAgICAgIDxsYWJlbCBjbGFzcz0iZm9ybS1jb250cm9sLXN0YXRpYyI+UmVnaW9uPC9sYWJlbD4KICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9ImNvbC1tZC0xMCI+CiAgICAgICAgPHNlbGVjdCBjbGFzcz0iZm9ybS1jb250cm9sIiBvbmNoYW5nZT17e2FjdGlvbiAobXV0IG1vZGVsLmhldHpuZXJDb25maWcuc2VydmVyTG9jYXRpb24pIHZhbHVlPSJ0YXJnZXQudmFsdWUiIH19PgogICAgICAgICAge3sjZWFjaCByZWdpb25DaG9pY2VzIGFzIHxjaG9pY2V8fX0KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17e2Nob2ljZS5uYW1lfX0gc2VsZWN0ZWQ9e3tlcSBtb2RlbC5oZXR6bmVyQ29uZmlnLnNlcnZlckxvY2F0aW9uIGNob2ljZS5uYW1lfX0+e3tjaG9pY2UuZW1vaml9fSB7e2Nob2ljZS5jaXR5fX08L29wdGlvbj4KICAgICAgICAgIHt7L2VhY2h9fQogICAgICAgIDwvc2VsZWN0PgogICAgICA8L2Rpdj4KICAgIDwvZGl2PgogICAgPGRpdiBjbGFzcz0icm93IGZvcm0tZ3JvdXAiPgogICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMiI+CiAgICAgICAgPGxhYmVsIGNsYXNzPSJmb3JtLWNvbnRyb2wtc3RhdGljIj5JbWFnZTwvbGFiZWw+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtNCI+CiAgICAgICAgPHNlbGVjdCBjbGFzcz0iZm9ybS1jb250cm9sIiBvbmNoYW5nZT17e2FjdGlvbiAobXV0IG1vZGVsLmhldHpuZXJDb25maWcuaW1hZ2VJZCkgdmFsdWU9InRhcmdldC52YWx1ZSIgfX0+CiAgICAgICAgICB7eyNlYWNoIGltYWdlQ2hvaWNlcyBhcyB8Y2hvaWNlfH19CiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3tjaG9pY2UuaWR9fSBzZWxlY3RlZD17e2VxIG1vZGVsLmhldHpuZXJDb25maWcuaW1hZ2VJZCBjaG9pY2UuaWR9fT57e2Nob2ljZS5kZXNjcmlwdGlvbn19PC9vcHRpb24+CiAgICAgICAgICB7ey9lYWNofX0KICAgICAgICA8L3NlbGVjdD4KICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9ImNvbC1tZC0yIj4KICAgICAgICA8bGFiZWwgY2xhc3M9ImZvcm0tY29udHJvbC1zdGF0aWMiPlNpemU8L2xhYmVsPgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iY29sLW1kLTQiPgogICAgICAgIDxzZWxlY3QgY2xhc3M9ImZvcm0tY29udHJvbCIgb25jaGFuZ2U9e3thY3Rpb24gKG11dCBtb2RlbC5oZXR6bmVyQ29uZmlnLnNlcnZlclR5cGUpIHZhbHVlPSJ0YXJnZXQudmFsdWUiIH19PgogICAgICAgICAge3sjZWFjaCBzaXplQ2hvaWNlcyBhcyB8Y2hvaWNlfH19CiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3tjaG9pY2UubmFtZX19IHNlbGVjdGVkPXt7ZXEgbW9kZWwuaGV0em5lckNvbmZpZy5zZXJ2ZXJUeXBlIGNob2ljZS5uYW1lfX0+e3tjaG9pY2UuZGVzY3JpcHRpb259fSAtIHt7Y2hvaWNlLm1lbW9yeX19R0IgTWVtb3J5IC0ge3tjaG9pY2UuZGlza319R0IgRGlzayBzcGFjZTwvb3B0aW9uPgogICAgICAgICAge3svZWFjaH19CiAgICAgICAgPC9zZWxlY3Q+CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgICA8ZGl2IGNsYXNzPSJyb3cgZm9ybS1ncm91cCI+CiAgICAgIDxkaXYgY2xhc3M9ImNvbC1tZC0yIj4KICAgICAgICA8bGFiZWwgY2xhc3M9ImZvcm0tY29udHJvbC1zdGF0aWMiPgogICAgICAgICAgPGEgaHJlZj0iaHR0cHM6Ly9jbG91ZGluaXQucmVhZHRoZWRvY3MuaW8vZW4vbGF0ZXN0L3RvcGljcy9leGFtcGxlcy5odG1sIiB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIj5DbG91ZC1pbml0IENvbmZpZ3VyYXRpb248L2E+IChvcHRpb25hbCkKICAgICAgICA8L2xhYmVsPgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iY29sLW1kLTEwIj4KICAgICAgICA8dGV4dGFyZWEgdmFsdWU9e3ttb2RlbC5oZXR6bmVyQ29uZmlnLnVzZXJEYXRhfX0gb25jaGFuZ2U9e3thY3Rpb24gKG11dCBtb2RlbC5oZXR6bmVyQ29uZmlnLnVzZXJEYXRhKSB2YWx1ZT0idGFyZ2V0LnZhbHVlIiB9fSByb3dzPSIzIiBzdHlsZT0id2lkdGg6IDEwMCU7IHJlc2l6ZTogdmVydGljYWwiPjwvdGV4dGFyZWE+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMiI+CiAgICAgICAgPGxhYmVsIGNsYXNzPSJmb3JtLWNvbnRyb2wtc3RhdGljIj5OZXR3b3JrcyAoT3B0aW9uYWwuIFlvdSBoYXZlIHRvIGNyZWF0ZSB0aGVzZSBOZXR3b3JrcyBpbiB0aGUgPGEgaHJlZj0iaHR0cHM6Ly9jb25zb2xlLmhldHpuZXIuY2xvdWQiIHRhcmdldD0iX2JsYW5rIiByZWw9Im5vb3BlbmVyIG5vcmVmZXJyZXIiPkhldHpuZXIgQ2xvdWQgQ29uc29sZTwvYT4pPC9sYWJlbD4KICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9ImNvbC1tZC00Ij4KICAgICAgICA8c2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIG9uY2hhbmdlPXt7YWN0aW9uICdtb2RpZnlOZXR3b3JrcycgfX0gbXVsdGlwbGU9InRydWUiPgogICAgICAgICAge3sjZWFjaCBuZXR3b3JrQ2hvaWNlcyBhcyB8bmV0d29ya3x9fQogICAgICAgICAgPG9wdGlvbiB2YWx1ZT17e25ldHdvcmsuaWR9fSBzZWxlY3RlZD17e2FycmF5LWluY2x1ZGVzIG1vZGVsLmhldHpuZXJDb25maWcubmV0d29ya3MgbmV0d29yay5pZH19Pnt7bmV0d29yay5uYW1lfX0gKHt7bmV0d29yay5pcF9yYW5nZX19KTwvb3B0aW9uPgogICAgICAgICAge3svZWFjaH19CiAgICAgICAgPC9zZWxlY3Q+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMiI+CiAgICAgICAgPGRpdiBjbGFzcz0iY2hlY2tib3giPgogICAgICAgICAgPGxhYmVsIGNsYXNzPSJhY2MtbGFiZWwiPnt7aW5wdXQgdHlwZT0iY2hlY2tib3giIGNoZWNrZWQ9bW9kZWwuaGV0em5lckNvbmZpZy51c2VQcml2YXRlTmV0d29ya319CiAgICAgICAgICAgIFVzZSBwcml2YXRlIG5ldHdvcmsgKGZpcnN0IHByaXZhdGUgbmV0d29yayB3aGljaCBpcyBhdHRhY2hlZCB3aWxsIGJlIHVzZWQgZm9yIGNvbW11bmljYXRpb24pCiAgICAgICAgICA8L2xhYmVsPgogICAgICAgIDwvZGl2PgogICAgICA8L2Rpdj4KICAgICAgIDxkaXYgY2xhc3M9ImNvbC1tZC0yIj4KICAgICAgICA8bGFiZWwgY2xhc3M9ImZvcm0tY29udHJvbC1zdGF0aWMiPkZpcmV3YWxscyAoQmV0YSwgb3B0aW9uYWwuIFlvdSBoYXZlIHRvIGNyZWF0ZSB0aGVzZSBGaXJld2FsbHMgaW4gdGhlIDxhIGhyZWY9Imh0dHBzOi8vY29uc29sZS5oZXR6bmVyLmNsb3VkIiB0YXJnZXQ9Il9ibGFuayIgcmVsPSJub29wZW5lciBub3JlZmVycmVyIj5IZXR6bmVyIENsb3VkIENvbnNvbGU8L2E+KTwvbGFiZWw+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtNCI+CiAgICAgICAgPHNlbGVjdCBjbGFzcz0iZm9ybS1jb250cm9sIiBvbmNoYW5nZT17e2FjdGlvbiAnbW9kaWZ5RmlyZXdhbGxzJyB9fSBtdWx0aXBsZT0idHJ1ZSI+CiAgICAgICAgICB7eyNlYWNoIGZpcmV3YWxsQ2hvaWNlcyBhcyB8ZmlyZXdhbGx8fX0KICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3tmaXJld2FsbC5pZH19IHNlbGVjdGVkPXt7YXJyYXktaW5jbHVkZXMgbW9kZWwuaGV0em5lckNvbmZpZy5maXJld2FsbHMgZmlyZXdhbGwuaWR9fT57e2ZpcmV3YWxsLm5hbWV9fTwvb3B0aW9uPgogICAgICAgICAge3svZWFjaH19CiAgICAgICAgPC9zZWxlY3Q+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMiI+CiAgICAgICAgPGxhYmVsIGNsYXNzPSJmb3JtLWNvbnRyb2wtc3RhdGljIj5BZGRpdGlvbmFsIFNTSCBLZXlzPC9sYWJlbD4KICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9ImNvbC1tZC00Ij4KICAgICAgICA8c2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIG9uY2hhbmdlPXt7YWN0aW9uICdtb2RpZnlLZXlzJyB9fSBtdWx0aXBsZT0idHJ1ZSI+CiAgICAgICAgICB7eyNlYWNoIGtleUNob2ljZXMgYXMgfGtleXx9fQogICAgICAgICAgPG9wdGlvbiB2YWx1ZT17e2tleS5pZH19IHNlbGVjdGVkPXt7YXJyYXktaW5jbHVkZXMgbW9kZWwuaGV0em5lckNvbmZpZy5hZGRpdGlvbmFsS2V5IGtleS5wdWJsaWNfa2V5fX0+e3trZXkubmFtZX19ICh7e2tleS5maW5nZXJwcmludH19KTwvb3B0aW9uPgogICAgICAgICAge3svZWFjaH19CiAgICAgICAgPC9zZWxlY3Q+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMiI+CiAgICAgICAgPGxhYmVsIGNsYXNzPSJmb3JtLWNvbnRyb2wtc3RhdGljIj5QbGFjZW1lbnQgZ3JvdXA8L2xhYmVsPgogICAgICAgICAgPHNlbGVjdCBjbGFzcz0iZm9ybS1jb250cm9sIiBvbmNoYW5nZT17e2FjdGlvbiAobXV0IG1vZGVsLmhldHpuZXJDb25maWcucGxhY2VtZW50R3JvdXApIHZhbHVlPSJ0YXJnZXQudmFsdWUiIH19PgogICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSIiIHNlbGVjdGVkPSJ7e25vdCBtb2RlbC5oZXR6bmVyQ29uZmlnLnBsYWNlbWVudEdyb3VwfX0iPjwvb3B0aW9uPgogICAgICAgICAgICB7eyNlYWNoIHBsYWNlbWVudEdyb3VwQ2hvaWNlcyBhcyB8cGxhY2VtZW50R3JvdXB8fX0KICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJ7e3BsYWNlbWVudEdyb3VwLm5hbWV9fSIgc2VsZWN0ZWQ9e3tlcSBtb2RlbC5oZXR6bmVyQ29uZmlnLnBsYWNlbWVudEdyb3VwIHBsYWNlbWVudEdyb3VwLm5hbWV9fT57e3BsYWNlbWVudEdyb3VwLm5hbWV9fSAoe3twbGFjZW1lbnRHcm91cC50eXBlfX0pPC9vcHRpb24+CiAgICAgICAgICAgIHt7L2VhY2h9fQogICAgICAgICAgPC9zZWxlY3Q+CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAgICAge3shLS0gVGhpcyBmb2xsb3dpbmcgY29udGFpbnMgdGhlIE5hbWUsIExhYmVscyBhbmQgRW5naW5lIE9wdGlvbnMgZmllbGRzIC0tfX0KICAgICB7e2Zvcm0tbmFtZS1kZXNjcmlwdGlvbiBtb2RlbD1tb2RlbCBuYW1lUmVxdWlyZWQ9dHJ1ZX19CiAgICAge3tmb3JtLXVzZXItbGFiZWxzIGluaXRpYWxMYWJlbHM9bGFiZWxSZXNvdXJjZS5sYWJlbHMgc2V0TGFiZWxzPShhY3Rpb24gJ3NldExhYmVscycpIGV4cGFuZEFsbD1leHBhbmRBbGwgZXhwYW5kPShhY3Rpb24gZXhwYW5kRm4pIH19CiAgICAge3tmb3JtLWVuZ2luZS1vcHRzIG1hY2hpbmU9bW9kZWwgc2hvd0VuZ2luZVVybD1zaG93RW5naW5lVXJsIH19CiAgICAge3shLS0gVGhpcyBjb21wb25lbnQgc2hvd3MgZXJyb3JzIHByb2R1Y2VkIGJ5IHZhbGlkYXRlKCkgaW4gdGhlIGNvbXBvbmVudCAtLX19CiAgICAge3t0b3AtZXJyb3JzIGVycm9ycz1lcnJvcnN9fQogICAgIHt7IS0tIFRoaXMgY29tcG9uZW50IHNob3dzIHRoZSBDcmVhdGUgYW5kIENhbmNlbCBidXR0b25zIC0tfX0KICAgICB7e3NhdmUtY2FuY2VsIHNhdmU9InNhdmUiIGNhbmNlbD0oYWN0aW9uICJjYW5jZWwiKX19CiAgPC9kaXY+CiAge3svaWZ9fQo8L3NlY3Rpb24+Cg==";
  var computed = Ember.computed;
  var get = Ember.get;
  var set = Ember.set;
  var alias = Ember.computed.alias;
  var service = Ember.inject.service;
  exports.default = Ember.Component.extend(_nodeDriver.default, {
    driverName: 'hwclouds',
    needAPIToken: true,
    config: alias('model.hwcloudsConfig'),
    app: service(),
    init: function init() {
      var decodedLayout = window.atob(LAYOUT);
      var template = Ember.HTMLBars.compile(decodedLayout, {
        moduleName: 'nodes/components/driver-hwclouds/template'
      });
      set(this, 'layout', template);

      this._super.apply(this, arguments);
    },
    bootstrap: function bootstrap() {
      var config = get(this, 'globalStore').createRecord({
        type: 'hwcloudsConfig',
        additionalKey: [],
        serverType: 'cx21',
        serverLocation: 'nbg1',
        imageId: "168855",
        userData: '',
        networks: [],
        firewalls: [],
        usePrivateNetwork: false,
        serverLabel: [''],
        placementGroup: ''
      });
      set(this, 'model.hwcloudsConfig', config);
    },
    validate: function validate() {
      this._super();

      if (!this.get('model.hwcloudsConfig.networks')) {
        this.set('model.hwcloudsConfig.networks', []);
      }

      if (!this.get('model.hwcloudsConfig.firewalls')) {
        this.set('model.hwcloudsConfig.firewalls', []);
      }

      if (!this.get('model.hwcloudsConfig.serverLabel')) {
        this.set('model.hwcloudsConfig.serverLabel', []);
      }

      if (!this.get('model.hwcloudsConfig.additionalKey')) {
        this.set('model.hwcloudsConfig.additionalKey', []);
      }

      var errors = get(this, 'errors') || [];

      if (!get(this, 'model.name')) {
        errors.push('Name is required');
      }

      if (get(errors, 'length')) {
        set(this, 'errors', errors);
        return false;
      } else {
        set(this, 'errors', null);
        return true;
      }
    },
    actions: {
      getData: function getData() {
        this.set('gettingData', true);
        var that = this;
        Promise.all([this.apiRequest('/v1/locations'), this.apiRequest('/v1/images'), this.apiRequest('/v1/server_types'), this.apiRequest('/v1/networks'), this.apiRequest('/v1/ssh_keys'), this.apiRequest('/v1/firewalls'), this.apiRequest('/v1/placement_groups')]).then(function (responses) {
          that.setProperties({
            errors: [],
            needAPIToken: false,
            gettingData: false,
            regionChoices: responses[0].locations.sort(that.sortByNameAscending).map(that.emojiFlag),
            imageChoices: responses[1].images.map(function (image) {
              return _objectSpread({}, image, {
                id: image.id.toString()
              });
            }).sort(that.sortByNameAscending),
            sizeChoices: responses[2].server_types,
            networkChoices: responses[3].networks.map(function (network) {
              return _objectSpread({}, network, {
                id: network.id.toString()
              });
            }).sort(that.sortByNameAscending),
            keyChoices: responses[4].ssh_keys.map(function (key) {
              return _objectSpread({}, key, {
                id: key.id.toString()
              });
            }).sort(that.sortByNameAscending),
            firewallChoices: responses[5].firewalls.map(function (firewall) {
              return _objectSpread({}, firewall, {
                id: firewall.id.toString()
              });
            }).sort(that.sortByNameAscending),
            placementGroupChoices: responses[6].placement_groups.sort(that.sortByNameAscending)
          });
        }).catch(function (err) {
          err.then(function (msg) {
            that.setProperties({
              errors: ['Error received from Hetzner Cloud: ' + msg.error.message],
              gettingData: false
            });
          });
        });
      },
      modifyNetworks: function modifyNetworks(select) {
        var options = _toConsumableArray(select.target.options).filter(function (o) {
          return o.selected;
        }).map(function (o) {
          return o.value;
        });

        this.set('model.hwcloudsConfig.networks', options);
      },
      modifyFirewalls: function modifyFirewalls(select) {
        var options = _toConsumableArray(select.target.options).filter(function (o) {
          return o.selected;
        }).map(function (o) {
          return o.value;
        });

        this.set('model.hwcloudsConfig.firewalls', options);
      },
      setLabels: function setLabels(labels) {
        var labels_list = labels.map(function (l) {
          return l.key + "=" + l.value;
        });
        this.set('model.hwcloudsConfig.serverLabel', labels_list);

        this._super(labels);
      },
      modifyKeys: function modifyKeys(select) {
        var _this = this;

        var options = _toConsumableArray(select.target.options).filter(function (o) {
          return o.selected;
        }).map(function (o) {
          return _this.keyChoices.find(function (keyChoice) {
            return keyChoice.id == o.value;
          })["public_key"];
        });

        this.set('model.hwcloudsConfig.additionalKey', options);
      }
    },
    apiRequest: function apiRequest(path) {
      return fetch('https://api.hetzner.cloud' + path, {
        headers: {
          'Authorization': 'Bearer ' + this.get('model.hwcloudsConfig.apiToken')
        }
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject(res.json());
      });
    },
    emojiFlag: function emojiFlag(location) {
      var offset = 127397;

      var _location$country$mat = location.country.match(/^[A-Z]{2}/).split('').map(function (c) {
        return offset + c.charCodeAt();
      }),
          _location$country$mat2 = _slicedToArray(_location$country$mat, 2),
          a = _location$country$mat2[0],
          b = _location$country$mat2[1];

      location.emoji = String.fromCodePoint([a, b]);
      return location;
    },
    sortByNameAscending: function sortByNameAscending(a, b) {
      return a.name > b.name ? 1 : -1;
    }
  });
});;
"use strict";

define("ui/components/driver-hwclouds/component", ["exports", "nodes/components/driver-hwclouds/component"], function (exports, _component) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});