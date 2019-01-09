var ViewModel = function(first, last) {
    var self= this;
    self.guests=ko.observable('');
    self.name =ko.observable('');
 self.accept = function (params) {
    if(self.name() == '' )return;
    if(self.guests() =='')return;
    console.log('fire');
    $.ajax({
        method: "POST",
        contentType: 'application/json',
        
        data: JSON.stringify({
            name:self.name(),
            email: self.guests(),
       }),
            url: "http:/rsvp.gear.host/api/Loan/RSVP",
            success: function(result) {
                //Write your code here
                console.log(result);
              
                },
            error:
            function(result) {
                //Write your code here
                $.toast({heading:'error',text:'SOME ERROR',icon:'error'});
                }
        
      });

 }

} 

ko.applyBindings(new ViewModel("Planet", "Earth")); // This makes Knockout get to work
