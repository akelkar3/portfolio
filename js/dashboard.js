// Here's my data model
var ViewModel = function(first, last) {
  self=this;
  
  var data= [
    {
      title:"Easy Connect"
      ,skills:"twillio, NodeJs, Web Services, Android, ExpressJS, Facebook API"
      ,id:8
      ,image:'images/easyconnect.jpg'
    },
    {
      title:"SMS Gateway"
      ,skills:"Google Cloud Messaging,Android, NodeJs, Web Services, ExpressJS, MongoDB, AWS Deployment"
      ,id:9
      ,image:'images/smsgateway.jpeg'
    },
    {
      title:"Product Visualization"
      ,skills:"Unity3d, C#, Web Services, iOS, ARKit, Android, ARCore"
      ,id:7
      ,image:'images/productvisualisation.jpg'
    },
    {
      id:1,
    title:"Business Portal"
    ,skills:"HTML5, Knockout.Js, Jquery, JavaScript, Bootstrap, .Net, WebApi, WCF, SQL Server"
    ,image:''
  }
  , {id:2,
    title:"Data Visualization"
    ,skills:"Unity 3d, Vuforia, Hololense"
    ,image:''
  }
  , {id:3,
    title:"Architecture Visualization"
    ,skills:"Unity 3d, Vuforia, android"
    ,image:''
  }
  , {id:4,
    title:"Machine Vision Project"
    ,skills:"Linux, OpenCV, C++, BeagleBone"
    ,image:''
  }
  , {id:5,
    title:"Telecommunication Project"
    ,skills:"MATLAB, GSM Architecture"
    ,image:''
  }
  , {id:6,
    title:"Roomies"
    ,skills:"HTML5, Bootstrap, jQuery, Knockout Js, Node Js, My SQL"
    ,image:''
  }
  
];

 var str= "C#, C++, Java, Python, JavaScript, Swift 4.0, Visual Studio, Unity 3D, OpenGL, OpenCV, Android Studio, Eclipse, Xamarin, MATLAB, XCode, Vuforia, AR Core, AR Kit ,.NET MVC, SQL Server 2012, MVVM, Bootstrap, CSS, NodeJS, MongoDB, ExpressJS, AngularJS, AWS Deployment"
 var skilldata= str.split(',');
self.projects = ko.observableArray(data);
self.skills= ko.observableArray(skilldata);
  
 self.downloadGraphicResume= function (params) {
   window.location="docs/graphicsResume.docx";
 }
self.downloadTheatreResume=function (params) {
  window.location="docs/theatreResume.docx";
}
self.downloadResume =function (params) {
  window.location="docs/AnkitKelkar.pdf";
}

self.openModal =function(project){
  console.log(project);
switch (project) {
  case 1:
  $('#modalTitle').text('Business Portal');
   
  $('#modalBody').text('');
  $('#modalBody').append('<p>•	Maintained and upgraded web application using .NET MVC4, jQuery, Entity framework and SQL Server.</p><p>•	Designed UI for the application using Knockout JS and Bootstrap library.<p/><p>•	Developed reporting for the web application for the users.</p><p>•	Performed various code optimization tasks and load testing.</p><p>•	Drafted proof of concepts for various suggestion for website development to client which were highly appreciated.</p><p>•	Generated Monthly and Weekly status report for team in the Agile development model.</p><p>•	Responsible for team engagement activities.</p>');
    
    break;
 case 2:
 $('#modalTitle').text('Visualization Project')
   
 $('#modalBody').text('');
 $('#modalBody').append('<p>•	Visualized a floor layout using Holo-lens</p><p> •	Implemented Unity Networking for connecting two holo-lenses with server</p><p> •	Visualized shortest available path to the rescue personnel through graphics aid.</p><p> •	Developed Augmented Reality environment using Vuforia.</p> ');
 break;
 case 3:
 $('#modalTitle').text('Architecture Visualization Project')
   
 $('#modalBody').text('');
 $('#modalBody').append('<p>•	Visualized an Urban planning using android application</p><p> •	Visualized data related to neighbourhood through graphics aid.</p><p> •	Developed Augmented Reality environment using Vuforia.</p> ');
 break;
 case 4:
 $('#modalTitle').text('An automation system to sort threaded and unthreaded nuts using Image Processing')
   
 $('#modalBody').text('');
 $('#modalBody').append('<p>•	Installed a machine vision system at the end of manufacturing line. </p><p>•	Sorted the correct and incorrect parts using image processing algorithm.</p><p> •	Reduced human introduced counting errors and increased efficiency by 300%.</p><p>•	Developed the system using Beagle-Bone hardware and OpenCV for image processing.</p><p>•	Designed system’s body and holder on manufacturing line using CATIA.</p>');
 break;
 case 5:
 $('#modalTitle').text('Simulation of Dynamic Channel Allocation (DCA) using interference aware algorithm')
   
 $('#modalBody').text('');
 $('#modalBody').append('<p>•	Performed thorough survey of existing methods of communication channel allocation in telecommunication industry.</p><p>•	Researched for one of the better approaches available. </p><p>•	Simulated a scenario for getting statistical outputs of implementation of the Dynamic Channel Allocation. </p><p>•	Brief introduction about GSM architecture Experience in MATLAB programming and simulation of a communication scenario.</p>');
 break;
 case 6:
 $('#modalTitle').text('Roomies webportal')
   
 $('#modalBody').text('');
 $('#modalBody').append('<p>• Developed a point tracking system for household work distibution.	</p> <p>•	Designed UI for the webportal. </p> <p>• Implemented business logic and database using Node.Js and MySQL </p><p> <a href="http://roomies.gearhostpreview.com">click here to see demo.</a></p>');
 break;
 case 7:
 $('#modalTitle').text('Product Visualization')
   
 $('#modalBody').text('');
 $('#modalBody').append('<p>• Developing an Augmented Reality application for iOS/ Android/ MagicLeap	</p> <p>•	Rendering 3D objects through C# and web service integration. </p> <p>• Compared different technologies available for augmented reality. </p><p>• Implemented continuous integration continuous delivery through Jenkins</p><p> • Implemented MVC framework for Unity3D</p>');
 break;
 case 8:
 $('#modalTitle').text('EasyConnect')
   
 $('#modalBody').text('');
 $('#modalBody').append('<p>• Devloped a multi platform tool for reaching out to homeless people	</p> <p>•	Used Facebook API integration. </p> <p>• Won Wolfram Award at Duke University Hackathon. </p><p><a href="https://devpost.com/software/hackduke-xbkcq7">click here to see details.</a></p><iframe width="300"src="https://www.youtube.com/embed/8Jaxl1Wc_2g" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
 break;
 case 9:
 $('#modalTitle').text('EasyConnect')
   
 $('#modalBody').text('');
 $('#modalBody').append('<p>Created a sms gateway using two components a gateway server and a gateway app. For the developer who wants utilize this gateway. Gateway will generate an API key for all the users to authorize the users and provide them a way to communicate with their registered phone numbers through a gateway server. Where the mapping of the developer, its devices and the webhooks to talk with are stored. Once the developer initiates a communication with gateway server using the message sending api the message is relayed to particular device of the developer. This device has our gateway app which gets a push notification from gateway server and then in turn sends the sms to the respective phone number requested by the developer in the sending api. Whereas when one of these phone numbers receive the sms they talk through the gateway app to our gateway server which figures out which developer is registered with this device/phone number and uses its respective webhook to call the call back api. And the message is relayed to the developer.<p><a href="https://github.com/akelkar3/SMSGatewayAPI">click here to see details.</a></p><iframe width="300" src="https://www.youtube.com/embed/Xsu4XHD3kM8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
 break;
  default:
    break;
}

}
} 

ko.applyBindings(new ViewModel("Planet", "Earth")); // This makes Knockout get to work


