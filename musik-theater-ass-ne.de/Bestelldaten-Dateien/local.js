var featwindow;
var flashwindow;

function openFlashPopup(file, width, height) {
  flashpopup = window.open('/xml/order/popupFlash?flashfile=' + file, 'flashpopup', 'width=' + width + ', height=' + height + ', scrollbars=' + scrollbars);
  flashpopup.focus();
  return false;
}

function openFlashFile(file, width, height) {
  document.write('<object classid="CLSID:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="https://active.macromedia.com/flash2/cabs/swflash.cab#version=4,0,0,0" height="' + height + '" width="' + width + '">');
  document.write('<param name="movie" value="' + file + '"/>');
  document.write('<param name="quality" value="high"/>');
  document.write('<param name="scale" value="exactfit"/>');
  document.write('<embed src="' + file + '" height="' + height + '" width="' + width + '" menu="false" pluginspage="https://www.macromedia.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" quality="high" scale="exactfit" swLiveConnect="false" type="application/x-shockwave-flash">');
  document.write('</embed>');
  document.write('</object>');
}

function modifyBox(id, width, height, left, top) {
  document.getElementById(id).style.width = width + "px";
  document.getElementById(id).style.height = height + "px";
  document.getElementById(id).style.left = left + "px";
  document.getElementById(id).style.top = top + "px";
}

function openerwindow(link)
{
  openerWindow = opener.window.location.href = link;
  self.close();
  return false;
};

function featurepopup(link)
{
  featwindow = window.open(link, "f1", "width=665,height=595,scrollbars=yes,resizable=yes");
  featwindow.focus();
  return false;
};

function setMinimumWindowSize() {
	// from: http://www.quirksmode.org/viewport/compatibility.html#link2
	var x,y;
	if (self.innerHeight) // all except Explorer
	{
		x = self.innerWidth;
		y = self.innerHeight;
	}
	else if (document.documentElement && document.documentElement.clientHeight)
		// Explorer 6 Strict Mode
	{
		x = document.documentElement.clientWidth;
		y = document.documentElement.clientHeight;
	}
	else if (document.body) // other Explorers
	{
		x = document.body.clientWidth;
		y = document.body.clientHeight;
	}

	if (x < 1024) {
		window.resizeTo(1024, 768);
	}

}

function changeFontsize(size)
{
    document.cookie = "flexibleFontsize" + "=" + size + ";";

    markFontsize();

    setFontsize();

    requestPerImage("http://wms.1und1.de/fontsize/?" + pfx_sid + "&size=" + size);
    
    return false;
};

function requestPerImage (source) {

    var httpStatus = window.location.protocol.substring(0, 5);

    if (httpStatus != "https") {
      var requestImage = new Image();
      requestImage.src = source;
    }
    
    return false;
}
    
function setFontsize() {

    var size;

    begin = document.cookie.indexOf("flexibleFontsize=");

    if (begin != -1) {
        begin += 17; /* Anfang des Wertes */
        end = document.cookie.indexOf(";", begin);
        if (end != -1) {
          size = document.cookie.substring(begin, end);
        } else {
            size = 12;
        }
    } else {
        size = 12;
    }

    document.getElementsByTagName("body")[0].style.fontSize = size + "px";

    return false;
}

function markFontsize() {

    var size;

    begin = document.cookie.indexOf("flexibleFontsize=");

    if (begin != -1) {
        begin += 17; /* Anfang des Wertes */
        end = document.cookie.indexOf(";", begin);
        if (end != -1) {
          size = document.cookie.substring(begin, end);
        } else {
            size = 12;
        }
    } else {
        size = 12;
    }

    document.getElementById("fs12").style.textDecoration = "none";
    document.getElementById("fs17").style.textDecoration = "none";
    document.getElementById("fs20").style.textDecoration = "none";

    document.getElementById("fs" + size).style.textDecoration = "underline";

    return false;
}

function openNewWindow(winurl, winname, winfeatures)
{ 
  flashwindow = window.open(winurl, winname, winfeatures);
  flashwindow.focus();
  return false;
};

      function writeFlash() {
        var jetzt = new Date();
        var dann = new Date(2005, 12, 01);
      
        var sdiff = Math.floor((dann-jetzt)/1000);
        var ddiff = Math.ceil(sdiff / (60*60*24));

        if (ddiff < 0) ddiff = 0;
        
        document.write('<object id="counterLayer" style="position: absolute; top: -50px; left: 0; z-index: 20;" classid="CLSID:D27CDB6E-AE6D-11cf-96B8-444553540000" height="300" id="banner" width="820">');
        document.write('<param name="movie" value="../../oneandone_de/img/swf/countdown/counter_produktseite_hosting.swf?days=' + ddiff + '"></param>');
        document.write('<param name="allowScriptAccess" value="sameDomain"/>');
        document.write('<param name="quality" value="high"/>');
        document.write('<param name="menu" value="false"/>');
        document.write('<param name="wmode" value="transparent"/>');
        document.write('<embed wmode="transparent" width="820" height="300" menu="false" pluginspage="https://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash" quality="high" type="application/x-shockwave-flash" src="../../oneandone_de/img/swf/countdown/counter_produktseite_hosting.swf?days=' + ddiff + '">');
        document.write('</embed>');
        document.write('</object>');
      
      }

      function hide_counterLayer() {
        document.getElementById("counterLayer").style.display = "none";
      }

  function daysLeft(jahr, monat, tag)
  {
      var jetzt = new Date();
      var dann = new Date(jahr, monat - 1, tag);
      
      var sdiff = Math.floor((dann-jetzt) / 1000);
      var ddiff = Math.ceil(sdiff / (60*60*24));

      return ddiff;
  }

  function setImage(name, prefix, days)
  {
      if (days <= 0) days = 0;
      var fname = prefix + days + ".gif";
      document.getElementById(name).src= fname;
  }

  function browserCheck()
  {
    /*
    checks the browser version to ensure only Firefox 1.x
    and IE 6 are allowed to open Webfix

    the __client__ var is available through __core__.require("client/browser")
    */
    var ep = __client__.getPlatform();
    var en = __client__.getEngine();
    var ev = __client__.getBrowserMajorVersion();
    var ew = __client__.getBrowserMinorVersion();

    switch(en)
    {
      case "mshtml":
        if (ep == "mac") {
          return false;
        };
        return ev >= 6 || ( ev == 5 && ew >= 5 );

      case "gecko":
        return ev >= 1 && (ev != 1 || ew > 4);

      default:
        return false;
    };

    return false;
  }

  //  var factory = new XmlHttpRequestFactory();
  //  var request = factory.create();
  //  if (request) request.open("GET", "http://oneandone-de.stage25.pem2.schlund.de/xml/order/hgf=" + size);

  function XmlHttpRequestFactory() { }

    /**
     * Create a suitable XMLHttpRequest object
     *
     * @model   static
     * @access  public
     * @return  &XMLHttpRequest
     */
    XmlHttpRequestFactory.prototype.create= function() {
      var request= null;
      var success= false;
      var MSXML_XMLHTTP_PROGIDS= new Array(
        'MSXML2.XMLHTTP.5.0',
        'MSXML2.XMLHTTP.4.0',
        'MSXML2.XMLHTTP.3.0',
        'MSXML2.XMLHTTP',
        'Microsoft.XMLHTTP'
      );

      for (var i=0;i < MSXML_XMLHTTP_PROGIDS.length && !success; i++) {
        try {
          request= new ActiveXObject(MSXML_XMLHTTP_PROGIDS[i]);
          success = true;
        } catch (e) {
          request= null; 
        }
      }

      if (!request && typeof XMLHttpRequest != 'undefined') {
        request= new XMLHttpRequest();
      }

      return request;
    }
