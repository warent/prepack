(function() {
  s = new Set([1,2,3,42]);
  s.add(s);
  inspect = function() { return s.size + ":" + Array.from(s.values()).join(","); }
})();