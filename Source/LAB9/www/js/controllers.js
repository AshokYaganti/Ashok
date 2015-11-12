angular.module('starter.controllers', [])
    .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

    })
	
	.controller('DashCtrl', function($scope) {
  var user = User.getInstance();  
  console.log(user.fullName()); // true
  
  $scope.firstname = user.firstName;
  $scope.lastname = user.lastName;
})
    .controller('MarketBreathCtrl', function ($scope, marketService, $translate, $ionicActionSheet) {

        $scope.markets = marketService.breathMarkets();
        $scope.goWeb = function (market) {
            window.open(market.url, '_blank', 'location=no');
            return false;
        };

        $scope.changeLang = function () {
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    {
                        text: 'English'
                },
                    {
                        text: 'Español'
                }
     ],
                titleText: $translate.instant('lang'),
                cancelText: $translate.instant('cancel'),
                cancel: function () {

                },
                buttonClicked: function (index) {
                    if (index == 0) {
                        $translate.use('en');
                    } else if (index == 1) {
                        $translate.use('es');
                    }
                    return true;
                }
            });
        }
    })


.controller('MajorMarketsCtrl', function ($scope, marketService) {
    $scope.markets = marketService.majorMarkets();
    $scope.goWeb = function (market) {
        window.open(market.url, '_blank', 'location=no');
        return false;
    };
})


.service('ContactService', function () {
    //to create unique contact id
    var uid = 1;
     
    //contacts array to hold list of all contacts
    var contacts = [{
        id: 0,
        'name': 'Viral',
            'email': 'hello@gmail.com',
            'phone': '123-2343-44'
    }];
     
    //save method create a new contact if not already exists
    //else update the existing object
    this.save = function (contact) {
        if (contact.id == null) {
            //if this is new contact, add it in contacts array
            contact.id = uid++;
            contacts.push(contact);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }
 
    }
 
    //simply search contacts list for given id
    //and returns the contact object if found
    this.get = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }
 
    }
     
    //iterate through contacts list and delete 
    //contact if found
    this.delete = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    }
 
    //simply returns the contacts list
    this.list = function () {
        return contacts;
    }
})
 
.service('ContactService', function () {
    //to create unique contact id
    var uid = 1;
     
    //contacts array to hold list of all contacts
    var contacts = [{
        id: 0,
        'name': 'Viral',
            'email': 'hello@gmail.com',
            'phone': '123-2343-44'
    }];
     
    //save method create a new contact if not already exists
    //else update the existing object
    this.save = function (contact) {
        if (contact.id == null) {
            //if this is new contact, add it in contacts array
            contact.id = uid++;
            contacts.push(contact);
        } else {
            //for existing contact, find this contact using id
            //and update it.
            for (i in contacts) {
                if (contacts[i].id == contact.id) {
                    contacts[i] = contact;
                }
            }
        }
 
    }
 
    //simply search contacts list for given id
    //and returns the contact object if found
    this.get = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                return contacts[i];
            }
        }
 
    }
     
    //iterate through contacts list and delete 
    //contact if found
    this.delete = function (id) {
        for (i in contacts) {
            if (contacts[i].id == id) {
                contacts.splice(i, 1);
            }
        }
    }
 
    //simply returns the contacts list
    this.list = function () {
        return contacts;
    }
})
 
.controller('ContactController', function ($scope, ContactService) {
 
    $scope.contacts = ContactService.list();
 
    $scope.saveContact = function () {
        ContactService.save($scope.newcontact);
        $scope.newcontact = {};
    }
 
 
    $scope.delete = function (id) {
 
        ContactService.delete(id);
        if ($scope.newcontact.id == id) $scope.newcontact = {};
    }
 
 
    $scope.edit = function (id) {
        $scope.newcontact = angular.copy(ContactService.get(id));
    }
})


.controller('SectorsCtrl', function ($scope, marketService) {
    $scope.sectors = marketService.sectorMarkets();
})

.controller('SubsectorsCtrl', function ($scope, $stateParams, marketService) {

    sectorIndex = $stateParams['sectorId'];
    $scope.sector = marketService.getSector(sectorIndex);
    $scope.goWeb = function (sector) {
        window.open(sector.url, '_blank', 'location=no');
        return false;
    };
})


.controller('MajorIndexesCtrl', function ($scope, marketService) {
    $scope.markets = marketService.indexMarkets();
    $scope.goWeb = function (market) {
        window.open(market.url, '_blank', 'location=no');
        return false;
    };
})
