angular.module('api.GuestList', [])
.factory('GuestList', function($http, $q){

    var addAttendee = function(){

        var defer = $q.defer()
        var self = this

        $http({
          method: 'POST',
          url: '/',
          params: self.newGuest
        }).then(function successCallback(response) {

          var thisGuest = {
            name: self.newGuest.name,
            email: self.newGuest.email
          }

          self.guests.push(thisGuest)

          self.alert.message = 'Thank you for registering ' + thisGuest.name
          self.alert.active = true

          self.resetForm()

          defer.resolve({ success: true, data: response });
        }, function errorCallback(err) {
          defer.resolve({error: true, data: err })
        });

        return defer.promise
    }

    var removeAttendee = function(email, index){

        var defer = $q.defer()
        var self = this

        $http({
          method: 'DELETE',
          url: '/'+email,
        }).then(function successCallback(response) {
          console.log("got delete repsonse ", response)

          self.guests.splice(index, 1)

          defer.resolve({ success: true, data: response });
        }, function errorCallback(err) {
          console.log("got delete err ", err)
          defer.resolve({error: true, data: err })
        });

        return defer.promise
    }

     var resetForm = function(){
      this.newGuest.name = ''
      this.newGuest.email = ''
     }

    return {
    	guests: [],
      addAttendee: addAttendee,
      removeAttendee: removeAttendee,
      newGuest: {
          name: '',
          email: ''
      },
      resetForm: resetForm,
      alert: {
        message: '',
        active: false
      }
    };

});