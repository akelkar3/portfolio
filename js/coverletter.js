var ViewModel = function(first, last) {
    self=this;
    self.company = ko.observable();
    self.position = ko.observable();
    self.JD1=ko.observable(" ");
    self.JD2=ko.observable(" ");
    self.JD3=ko.observable(" ");
    self.JD4=ko.observable(" ");
self.letter = ko. observable(" ");
   
self.create= function(){
    self.letter(self.company()+"<br/>"+self.position()
  
    +"<br/>Dear Recruiting Team,<br/> "
     
    +"<br/>I am writing to apply for the Web intern position as posted on your website. My full-stack web development experience, proven creative and quality front-end development, and communication skills make me well suited for this position."
     
    +"<br/>I would be proud to work with"+self.company()+", one of the fastest growing companies in USA, through the opportunity which interests me most. I have been working with Infosys Ltd. as a Senior Systems Engineer for a US based client. This experience has helped me in gaining good experience in front-end web technologies- JavaScript, jQuery, AJAX, CSS, Angular JS and object-oriented programming language such as C# as well a very good exposure to relational database SQL Server." 
    +"<br/>I have been involved in  developing proof of concepts for front end of the deployed web-application. This experience has enabled me to visualize and craft corporate and creative UI/UX."
    +"<br/>I am eager to work with "+self.company()+   " and I feel my skills will be a valuable contribution."
     +"<br/>During my experience at Infosys Ltd. I have honed my time management skills, detail oriented approach and on time delivery commitment due to a global customer experience in the corporate setup." 
    +"<br/>I believe my profound experience in "
    +"<br/>"+self.JD1()
    +"<br/>"+self.JD2()
    +"<br/>"+self.JD3()
    +"<br/>"+self.JD4()
    +"<br/>makes me competent for this opportunity"
    +"<br/>Overall I really enjoy bringing creativity and technology to one another."
     
    +"<br/>I am looking forward to your response, please contact me for any additional information."
    
    +"<br/>Sincerely,"
    +"<br/>Ankit Kelkar")
       
    $('#letter').append(self.letter ());
}

} 

ko.applyBindings(new ViewModel("Planet", "Earth")); // This makes Knockout get to work
