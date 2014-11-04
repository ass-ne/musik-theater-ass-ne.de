
if(typeof UNOUNO=="undefined"){var UNOUNO={};}
UNOUNO.namespace=function(){var a=arguments,o=null,i,j,d;for(i=0;i<a.length;++i){d=a[i].split(".");o=UNOUNO;for(j=(d[0] =="UNOUNO") ?1:0;j<d.length;++j){o[d[j]]=o[d[j]] ||{};o=o[d[j]];}
}
return o;};UNOUNO.params={siteModus:null,userAgent:null,siteId:null,ucuoId:null,sessionId:null,variant:null,project:null,page:null
};UNOUNO.error={internalErrorMessage:function(message){if(UNOUNO.params.siteModus=='stage'){if(typeof console!='undefined'){if(typeof console.error!='undefined'){console.error(message);}else{alert(message);}
}else{alert(message);}
}else{UNOUNO.error.internalErrorLogging('[internal] '+message,'n/a','n/a');}
},internalErrorLogging:function(message,url,line){var imgSrc='//wms.1und1.de/statserver/?__shopId='+encodeURIComponent(UNOUNO.params.siteId) +'&__ucuoId='+encodeURIComponent(UNOUNO.params.ucuoId) +'&__session='+encodeURIComponent(UNOUNO.params.sessionId) +'&__variant='+encodeURIComponent(UNOUNO.params.variant) +'&__type=jserror&message='+encodeURIComponent(message) +'&url='+encodeURIComponent(url) +'&page='+encodeURIComponent(UNOUNO.params.page) +'&userAgent='+encodeURIComponent(UNOUNO.params.userAgent) +'&line='+encodeURIComponent(line);var imgElement=new Image();imgElement.src=imgSrc;}
};window.onerror=function(sMsg,sUrl,sLine){if(UNOUNO.params.siteModus!='stage'){UNOUNO.error.internalErrorLogging(sMsg,sUrl,sLine);return true;}else{return false;}
};UNOUNO.namespace("util");UNOUNO.namespace("ajax");