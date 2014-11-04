var loader = null;

onYAHOOReady = function() {

  loader = new UNOUNO.util.Loader;
  
  loader.loadModules({
    page: 'all',
    stage: 'stageassistent' 
  });

  loader.loadModules({
    page: 'costs',
    all: 'autocompletion'
  });
  
  loader.loadModules({
    page: ['WebHosting', 'Instant'],
    all: 'domaincheck'
  });
  
  loader.loadModules({
    page: 'mailaddon',
    all: 'fee'
  });
  
  loader.loadModules({
    page: 'popupMailxchangeProduktdemo',
    all: 'ufo'
  });
  
  loader.insert();

}

// this is a hack for preventing IE initialising the Loader before YUI classes are ready

checkForYAHOO = function() { 
  if (typeof YAHOO != 'undefined') {
    onYAHOOReady(); 
  } else { 
    setTimeout(function() { 
      checkForYAHOO(); 
    }, 50); 
  } 
}

checkForYAHOO();
