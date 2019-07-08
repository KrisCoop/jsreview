//Our counter prototype is broken. Can you spot, what's wrong here?

function Counter() {
  this.value = 0;
}

Counter.prototype.increase = function() {
  this.value++;
};

Counter.prototype.getValue = function() {
   return this.value;
};

Counter.prototype.reset =  function() {
  this.value = 0;
};

/// So, I think you guys gave me the solved version of this kata, rather than the unsolved broken version. Because this tang runs nicely y'all.


