UNOUNO.util.Loader = function() {
  this.loader = null;
	this.init();
};

UNOUNO.util.Loader.prototype = {

  loadModules: function(config) {
    var page = config.page;
    var stage = config.stage;
    var live = config.live;
    var all = config.all;

    if (typeof page != 'undefined') {
      if (typeof page == 'object') {
        for (i = 0; i < page.length; i++) {
          if (page[i] == 'all' || page[i] == UNOUNO.params.page) {
            if (typeof all != 'undefined') {
              this.loader.require(all);
            }
            if (UNOUNO.params.siteModus == 'stage' && typeof stage != 'undefined') {
              this.loader.require(stage); 
            }
            if (UNOUNO.params.siteModus == 'live' && typeof live != 'undefined') {
              this.loader.require(live); 
            }
          }
        }
      } else {
        if (page == 'all' || page == UNOUNO.params.page) {
          if (typeof all != 'undefined') {
            this.loader.require(all);
          }
          if (UNOUNO.params.siteModus == 'stage' && typeof stage != 'undefined') {
            this.loader.require(stage); 
          }
          if (UNOUNO.params.siteModus == 'live' && typeof live != 'undefined') {
            this.loader.require(live); 
          }
        }
      }
    }
  },

  checkStageAssistent: function(name, loaderCallback) { 
    if (UNOUNO.util.StageAssistent) {
      loaderCallback(); 
    } else { 
      setTimeout(function() { 
        loader.checkStageAssistent(name, loaderCallback); 
      }, 50); 
    } 
  }, 

  checkStageNotes: function(name, loaderCallback) { 
    if (UNOUNO.util.StageNotes) { 
      loaderCallback(); 
    } else { 
      setTimeout(function() { 
        loader.checkStageNotes(name, loaderCallback); 
      }, 50); 
    } 
  }, 

  checkAddressCheckService: function(name, loaderCallback) { 
    if (typeof WS_AddressCheckService != 'undefined') { 
      loaderCallback(); 
    } else { 
      setTimeout(function() { 
        loader.checkAddressCheckService(name, loaderCallback); 
      }, 50); 
    } 
  }, 

  checkAutoCompletion: function(name, loaderCallback) { 
    if (UNOUNO.ajax.AutoCompletionHosting) { 
      loaderCallback(); 
    } else { 
      setTimeout(function() { 
        loader.checkAutoCompletion(name, loaderCallback); 
      }, 50); 
    } 
  }, 

  checkHttpRequest: function(name, loaderCallback) { 
    if (typeof pfx != 'undefined' && pfx.net.HTTPRequest) {
      loaderCallback(); 
    } else {
      setTimeout(function() { 
        loader.checkHttpRequest(name, loaderCallback); 
      }, 50); 
    }
  }, 

  checkWebserviceJson: function(name, loaderCallback) { 
    if (typeof pfx.ws != 'undefined' && pfx.ws.json.BaseStub) { 
      loaderCallback(); 
    } else {
      setTimeout(function() { 
        loader.checkWebserviceJson(name, loaderCallback); 
      }, 50); 
    }
  },

  checkPageNoteService: function(name, loaderCallback) { 
    if (typeof WS_PageNoteService != 'undefined') { 
      loaderCallback(); 
    } else { 
      setTimeout(function() { 
        loader.checkPageNoteService(name, loaderCallback); 
      }, 50); 
    } 
  }, 

  checkClickMap: function(name, loaderCallback) { 
    if (UNOUNO.util.ClickMap) { 
      loaderCallback(); 
    } else { 
      setTimeout(function() { 
        loader.checkClickMap(name, loaderCallback); 
      }, 50); 
    } 
  }, 

  checkUfo: function(name, loaderCallback) { 
    if (typeof UFO != 'undefined') { 
      loaderCallback(); 
    } else { 
      setTimeout(function() { 
        loader.checkUfo(name, loaderCallback); 
      }, 50); 
    } 
  },

  checkCountdown: function(name, loaderCallback) { 
    if (UNOUNO.util.Countdown) { 
      loaderCallback(); 
    } else { 
      setTimeout(function() { 
        loader.checkCountdown(name, loaderCallback); 
      }, 50); 
    } 
  }, 

  checkIngrid: function(name, loaderCallback) { 
    if (UNOUNO.ajax.InputGrid) { 
      loaderCallback(); 
    } else { 
      setTimeout(function() { 
        loader.checkIngrid(name, loaderCallback); 
      }, 50); 
    } 
  }, 

  checkOrderProcess: function(name, loaderCallback) { 
    if (UNOUNO.ajax.OrderProcess) { 
      loaderCallback(); 
    } else { 
      setTimeout(function() { 
        loader.checkOrderProcess(name, loaderCallback); 
      }, 50); 
    } 
  }, 

  checkDomainCheckService: function(name, loaderCallback) { 
    if (typeof WS_DomainCheckService != 'undefined') { 
      loaderCallback(); 
    } else { 
      setTimeout(function() { 
        loader.checkDomainCheckService(name, loaderCallback); 
      }, 50); 
    } 
  }, 

  checkDomainCheck: function(name, loaderCallback) { 
    if (typeof ajaxDomaincheck != 'undefined') { 
      loaderCallback(); 
    } else { 
      setTimeout(function() { 
        loader.checkDomainCheck(name, loaderCallback); 
      }, 50); 
    } 
  }, 

  checkFlashDemo: function(name, loaderCallback) { 
    if (typeof WS_FlashDemoLogService != 'undefined') { 
      loaderCallback(); 
    } else { 
      setTimeout(function() { 
        loader.checkFlashDemo(name, loaderCallback); 
      }, 50); 
    } 
  }, 

  checkFee: function(name, loaderCallback) { 
    if (typeof getFee != 'undefined') { 
      loaderCallback(); 
    } else { 
      setTimeout(function() { 
        loader.checkFee(name, loaderCallback); 
      }, 50); 
    } 
  }, 

  checkFeeService: function(name, loaderCallback) { 
    if (typeof WS_FeeService != 'undefined') { 
      loaderCallback(); 
    } else { 
      setTimeout(function() { 
        loader.checkFeeService(name, loaderCallback); 
      }, 50); 
    } 
  }, 

  checkBankService: function(name, loaderCallback) { 
    if (typeof WS_BankService != 'undefined') { 
      loaderCallback(); 
    } else { 
      setTimeout(function() { 
        loader.checkBankService(name, loaderCallback); 
      }, 50); 
    } 
  }, 

  checkBlzSearch: function(name, loaderCallback) { 
    if (typeof ajaxBankcodeSearch != 'undefined') { 
      loaderCallback(); 
    } else { 
      setTimeout(function() { 
        loader.checkBlzSearch(name, loaderCallback); 
      }, 50); 
    } 
  }, 

  insert: function() { 
    this.loader.insert(this.jsLoad);
  },
  
  init: function() {

    this.loader = new YAHOO.util.YUILoader();
    this.loader.base = '/modules/yui/build/';

    this.loader.addModule({
    	name: 'stagenotes_css',
    	type: 'css',
    	fullpath: '/modules/stagenotes/style/main.css'
    });

    this.loader.addModule({
    	name: 'ws_pagenoteservice',
    	type: 'js',
    	fullpath: '/xml/webservice?wsscript&name=PageNoteService&type=jsonws',
      verifier: this.checkPageNoteService
    });

    // Stagenotes as Part of Stageassistent
    this.loader.addModule({
    	name: 'stagenotes',
    	type: 'js',
    	fullpath: '/modules/stagenotes/script/main-min.js',
      verifier: this.checkStageNotes,
    	requires: ['stagenotes_css', 'dom', 'event', 'animation', 'httprequest', 'webservice_json', 'ws_pagenoteservice']
    });

    this.loader.addModule({
    	name: 'stageassistent_css',
    	type: 'css',
    	fullpath: '/modules/stageassistent/style/main.css'
    });

    // Stageassistent (Toolbox on right upper Corner)
    this.loader.addModule({
    	name: 'stageassistent',
    	type: 'js',
    	fullpath: '/modules/stageassistent/script/main-min.js',
      verifier: this.checkStageAssistent,
    	requires: ['stageassistent_css', 'stagenotes']
    });

    this.loader.addModule({
    	name: 'autocompletion_css',
    	type: 'css',
    	fullpath: '/modules/ajax-addresscheck/style/autocomplete.css'
    });

    this.loader.addModule({
    	name: 'httprequest',
    	type: 'js',
    	fullpath: '/core/script/httpRequest.js',
      verifier: this.checkHttpRequest
    });

    this.loader.addModule({
    	name: 'webservice_json',
    	type: 'js',
    	fullpath: '/core/script/webservice_json.js',
      verifier: this.checkWebserviceJson
    });

    this.loader.addModule({
    	name: 'ws_addresscheckservice',
    	type: 'js',
    	fullpath: '/xml/webservice?wsscript&name=AddressCheckService&type=jsonws',
      verifier: this.checkAddressCheckService,
      requires: ['httprequest', 'webservice_json']
    });

    // Autocopletion for Adressdata
    this.loader.addModule({
    	name: 'autocompletion',
    	type: 'js',
    	fullpath: '/modules/ajax-addresscheck/script/autocomplete-min.js',
      verifier: this.checkAutoCompletion,
    	requires: ['autocompletion_css', 'autocomplete', 'container', 'ws_addresscheckservice']
    });

    // ClickMap for Statistic-Tool
    this.loader.addModule({
    	name: 'clickmap',
    	type: 'js',
    	fullpath: '/modules/unouno/script/clickmap-min.js',
      verifier: this.checkClickMap,
    	requires: ['event', 'dom']
    });

    // Unobstrusive Flash Objects for Loading Flash Objects
    this.loader.addModule({
    	name: 'ufo',
    	type: 'js',
    	fullpath: '/modules/tools/script/ufo-min.js',
      verifier: this.checkUfo
    });

    // JavaScript Countdown
    this.loader.addModule({
    	name: 'countdown',
    	type: 'js',
    	fullpath: '/modules/unouno/script/misc-min.js',
      verifier: this.checkCountdown
    });

    // JavaScript OrderProcess general Scripts
    this.loader.addModule({
    	name: 'order',
    	type: 'js',
    	fullpath: '/modules/ingrid/script/order.js',
      verifier: this.checkOrderProcess
    });

    // JavaScript InputGrid
    this.loader.addModule({
    	name: 'ingrid',
    	type: 'js',
    	fullpath: '/modules/ingrid/script/ingrid.js',
      verifier: this.checkIngrid,
    	requires: ['order', 'event', 'dom']
    });
    
    this.loader.addModule({
	    name: 'ws_domaincheckservice',
      type: 'js',
	    fullpath: '/xml/webservice?wsscript&name=DomainCheckService&type=jsonws',
      verifier: this.checkDomainCheckService,
      requires: ['httprequest', 'webservice_json']
    });

    this.loader.addModule({
	    name: 'domaincheck',
      type: 'js',
	    fullpath: '/common/script/domainCheck.js',
      verifier: this.checkDomainCheck,
      requires: ['dom', 'event', 'animation', 'ws_domaincheckservice']
    });

    this.loader.addModule({
	    name: 'ws_feeservice',
      type: 'js',
	    fullpath: '/xml/webservice?wsscript&name=FeeService&type=jsonws',
      verifier: this.checkFeeService,
      requires: ['httprequest', 'webservice_json']
    });

    this.loader.addModule({
	    name: 'fee',
      type: 'js',
	    fullpath: '/common/script/feeservice.js',
      verifier: this.checkFee,
      requires: ['ws_feeservice']
    });

    this.loader.addModule({
	    name: 'flashdemo',
      type: 'js',
	    fullpath: '/xml/webservice?wsscript&name=FlashDemoLogService&type=jsonws',
      verifier: this.checkFlashDemo,
      requires: ['httprequest', 'webservice_json', 'ufo']
    });

    this.loader.addModule({
    	name: 'container_css',
    	type: 'css',
    	fullpath: '/common/script/yui/build/container/assets/container.css'
    });

    this.loader.addModule({
    	name: 'blzsearch_css',
    	type: 'css',
    	fullpath: '/common/style/layout/blzsearch.css'
    });

    this.loader.addModule({
	    name: 'ws_bankservice',
      type: 'js',
	    fullpath: '/xml/webservice?wsscript&name=BankService&type=jsonws',
      verifier: this.checkBankService
    });

    this.loader.addModule({
	    name: 'blzsearch',
      type: 'js',
	    fullpath: '/modules/blzsearch/script/blzsearch-min.js',
      verifier: this.checkBlzSearch,
      requires: ['dom', 'event', 'animation', 'connection', 'container', 'dragdrop', 'httprequest', 'webservice_json', 'container_css', 'blzsearch_css', 'ws_bankservice']
    });

    addLoadEvent = function(func) {
      var oldonload = window.onload;
      if (typeof window.onload != 'function') {
        window.onload = func;
      } else {
        window.onload = function() {
          oldonload();
          func();
        }
      }
    };
    
    onLoadComplete = function() {
      if (typeof onJSLoad == 'function') { onJSLoad(); }
      if (typeof onStageAssistentLoad == 'function') { onStageAssistentLoad(); }
    };
        
    this.jsLoad = function() {
      // YUI property loadComplete is private so I have to fake it
      var loadComplete = false;
      if (typeof onJSLoad == 'function') { loadComplete = true; onJSLoad(); }
      if (typeof onStageAssistentLoad == 'function') { loadComplete = true; onStageAssistentLoad(); }
      if (!loadComplete) {
        addLoadEvent(onLoadComplete);
      }
    };

  }
}

