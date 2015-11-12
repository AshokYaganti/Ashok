var User = (function () {
  // Instance stores a reference to the Singleton
  var instance;

  function init() {
    // Singleton
    // Private methods and variables
    function privateMethod(){
        console.log( "Private Method" );
    }

    var privateVariable = "Private Varialble";

    return {
      // Public methods
      fullName: function () {
        return instance.firstName +" "+instance.lastName;
      },
      //Public Properties
      firstName : "Ashok",
      lastName : "Yaganti"
    };
  };

  return {
    // Get the Singleton instance if one exists
    // or create one if it doesn't
    getInstance: function () {
      if ( !instance ) {
        instance = init();
      }
      return instance;
    }
  };
})();