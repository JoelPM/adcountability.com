"use strict";(self.pbjsChunk=self.pbjsChunk||[]).push([[515],{27:function(e,t,r){var n=r(962),a=r(125),o=r(853),i=r(265),s=r(806),d=r(3),p=r(879);function u(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}var l=["startdelay","mimes","minduration","maxduration","startdelay","skippable","playbackmethod","api","protocols","boxingallowed","linearity","delivery","protocol","placement","minbitrate","maxbitrate","ext"],f="https://rtb.openx.net/openrtb/prebidjs",b={code:"openx",supportedMediaTypes:[d.Mk,d.pX],isBidRequestValid:function(e){var t=e.params.delDomain||e.params.platform;return i.Z(e,"mediaTypes.banner")&&t?!!e.params.unit||i.Z(e,"mediaTypes.banner.sizes.length")>0:!(!e.params.unit||!t)},buildRequests:function(e,t){var r=e.filter((function(e){return h(e)})),n=e.filter((function(e){return function(e){return i.Z(e,"mediaTypes.banner")||!h(e)}(e)})),a=n.length?[y(n,t)]:[];return r.forEach((function(e){a.push(function(e,t){var r,n,a=i.Z(e,"mediaTypes.video"),s=i.Z(e,"mediaTypes.video.playerSize"),u=i.Z(e,"mediaTypes.video.context"),c=x(e,d.pX);o.isArray(e.sizes)&&2===e.sizes.length&&!o.isArray(e.sizes[0])?(r=parseInt(e.sizes[0],10),n=parseInt(e.sizes[1],10)):o.isArray(e.sizes)&&o.isArray(e.sizes[0])&&2===e.sizes[0].length?(r=parseInt(e.sizes[0][0],10),n=parseInt(e.sizes[0][1],10)):o.isArray(s)&&2===s.length&&(r=parseInt(s[0],10),n=parseInt(s[1],10));var m=v(e,t);m.imp=[{id:e.bidId,tagid:e.params.unit,video:{w:r,h:n,topframe:o.inIframe()?0:1},ext:{divid:e.adUnitCode}}],g(m.imp[0],e,c),u&&("instream"===u?m.imp[0].video.placement=1:"outstream"===u&&(m.imp[0].video.placement=4));var b=e.params.video||e.params.openrtb||{};return o.isArray(b.imp)&&(b=b[0].video),Object.keys(b).filter((function(e){return(0,p.q9)(l,e)})).forEach((function(e){return m.imp[0].video[e]=b[e]})),Object.keys(a).filter((function(e){return(0,p.q9)(l,e)})).forEach((function(e){return m.imp[0].video[e]=a[e]})),{method:"POST",url:f,data:m}}(e,t))})),a},interpretResponse:function(e,t){t.data.ext&&(t.data.ext.delDomain&&s.Z(e,"body.ext.delDomain",t.data.ext.delDomain),t.data.ext.platform&&s.Z(e,"body.ext.platform",t.data.ext.platform));var r=e.body;if("nbr"in r)return[];var n=[];return r.seatbid.forEach((function(e){n=[].concat(u(n),u(e.bid.map((function(e){var n={requestId:e.impid,cpm:e.price,width:e.w,height:e.h,creativeId:e.crid,dealId:e.dealid,currency:r.cur||"USD",netRevenue:!0,ttl:300,mediaType:"banner"in t.data.imp[0]?d.Mk:d.pX,meta:{advertiserDomains:e.adomain}};return n.mediaType===d.pX?e.nurl?n.vastUrl=e.nurl:n.vastXml=e.adm:n.ad=e.adm,e.ext&&(n.meta.networkId=e.ext.dsp_id,n.meta.advertiserId=e.ext.buyer_id,n.meta.brandId=e.ext.brand_id),n}))))})),n},getUserSyncs:function(e,t,r,n){if(e.iframeEnabled||e.pixelEnabled){var a=e.iframeEnabled?"iframe":"image",o=[],i="https://u.openx.net/w/1.0/pd";if(r&&(o.push("gdpr="+(r.gdprApplies?1:0)),o.push("gdpr_consent="+encodeURIComponent(r.consentString||""))),n&&o.push("us_privacy="+encodeURIComponent(n)),t.length>0&&t[0].body&&t[0].body.ext){var s=t[0].body.ext;s.delDomain?i="https://".concat(s.delDomain,"/w/1.0/pd"):s.platform&&o.push("ph="+s.platform)}else o.push("ph=2d1251ae-7f3a-47cf-bd2a-2f288854a0ba");return[{type:a,url:"".concat(i).concat(o.length>0?"?"+o.join("&"):"")}]}},transformBidParams:function(e,t){return o.convertTypes({unit:"string",customFloor:"number"},e)}};function y(e,t){var r=v(e[0],t);r.imp=e.map((function(e){var t,r=x(e,d.Mk),n={id:e.bidId,tagid:e.params.unit,banner:{format:(t=e.mediaTypes.banner.sizes,t.map((function(e){return{w:e[0],h:e[1]}}))),topframe:o.inIframe()?0:1},ext:{divid:e.adUnitCode}};return g(n,e,r),n}));var n=new URLSearchParams(document.location.search),a=n.get("to"),i=n.get("ti");return""!=a&&""!=i&&(s.Z(r,"ext.trace_owner",a),s.Z(r,"ext.trace_id",i)),r.device.ip="162.253.205.149",{method:"POST",url:f,data:r}}function g(e,t,r){t.params.customParams&&s.Z(e,"ext.customParams",t.params.customParams),r>0?(e.bidfloor=r,e.bidfloorcur="USD"):t.params.customFloor&&(e.bidfloor=t.params.customFloor),t.ortb2Imp&&t.ortb2Imp.ext&&t.ortb2Imp.ext.data&&(e.ext.data=t.ortb2Imp.ext.data)}function v(e,t){var r={id:t.auctionId,cur:[n.vc.getConfig("currency.adServerCurrency")||"USD"],at:1,tmax:n.vc.getConfig("bidderTimeout"),site:{page:n.vc.getConfig("pageUrl")||t.refererInfo.referer},regs:{coppa:!0===n.vc.getConfig("coppa")||e.params.coppa?1:0},device:{dnt:o.getDNT()||e.params.doNotTrack?1:0,h:screen.height,w:screen.width,ua:window.navigator.userAgent,language:window.navigator.language.split("-").shift()},ext:{bc:e.params.bc||"".concat("hb_pb_ortb","_").concat("1.0")}};e.params.platform&&s.Z(r,"ext.platform",e.params.platform),e.params.delDomain&&s.Z(r,"ext.delDomain",e.params.delDomain),e.params.test&&(r.test=1),t.gdprConsent&&(void 0!==t.gdprConsent.gdprApplies&&s.Z(r,"regs.ext.gdpr",!0===t.gdprConsent.gdprApplies?1:0),void 0!==t.gdprConsent.consentString&&s.Z(r,"user.ext.consent",t.gdprConsent.consentString),void 0!==t.gdprConsent.addtlConsent&&s.Z(r,"user.ext.ConsentedProvidersSettings.consented_providers",t.gdprConsent.addtlConsent)),t.uspConsent&&s.Z(r,"regs.ext.us_privacy",t.uspConsent),e.schain&&s.Z(r,"source.ext.schain",e.schain),e.userIdAsEids&&s.Z(r,"user.ext.eids",e.userIdAsEids);var a=n.vc.getConfig("ortb2")||{};return a.site&&o.mergeDeep(r,{site:a.site}),a.user&&o.mergeDeep(r,{user:a.user}),function(e,t){if(t.userId&&t.userId.flocId){var r={id:"chrome",segment:[{id:"floc",value:t.userId.flocId.id.toString(),ext:{ver:t.userId.flocId.version}}]};e.user||(e.user={}),e.user.data||(e.user.data=[]),e.user.data.push(r)}}(r,e),r}function h(e){return i.Z(e,"mediaTypes.video")}function x(e,t){var r=0;if("function"==typeof e.getFloor){var n=e.getFloor({currency:"USD",mediaType:t,size:"*"});"object"!==m(n)||"USD"!==n.currency||isNaN(parseFloat(n.floor))||(r=Math.max(r,parseFloat(n.floor)))}return r}(0,a.dX)(b),window.pbjs.installedModules.push("openxRtbAdapter")}},function(e){e(e.s=27)}]);
//# sourceMappingURL=openxRtbAdapter.js.map