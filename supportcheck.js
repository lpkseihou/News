"use strict";!function(){var e,t,r,n,o=!!document.querySelector('script[src*="kaspersky"]'),s=[];document.createElement("canvas").getContext("webgl")||s.push("WebGL"),"undefined"==typeof WebAssembly&&s.push("WebAssembly"),"noModule"in HTMLScriptElement.prototype||s.push("JavaScript Modules"),window["Intl"]&&window["Intl"]["Segmenter"]||s.push("Internationalization support (Intl.Segmenter)"),window["C3_ModernJSSupport_OK"]||s.push("Modern JavaScript support"),0!==s.length||o?((e=document.createElement("div")).id="notSupportedWrap",document.body.appendChild(e),(t=document.createElement("h2")).id="notSupportedTitle",t.textContent=o?"Kaspersky Internet Security broke this export":"Software update needed",e.appendChild(t),(t=document.createElement("p")).className="notSupportedMessage",r="This content is not supported because your device's software appears to be out-of-date. ",n=navigator.userAgent,/android/i.test(n)?r+='<br><br>On Android, fix this by making sure the <a href="https://play.google.com/store/apps/details?id=com.google.android.webview">Android System Webview</a> app has updates enabled and is up-to-date.':/iphone|ipad|ipod/i.test(n)?r+="Alternatively if <strong>Lockdown mode</strong> is enabled, try turning it off to view this content.":/msie/i.test(n)||/trident/i.test(n)||/edge\//i.test(n)?r+="<br><br>Note: <strong>Internet Explorer</strong> and the <strong>legacy Edge browser</strong> are not supported. Try using <a href='https://www.google.com/chrome'>Chrome</a> or <a href='https://www.mozilla.org/firefox'>Firefox</a> instead.":o?r="It appears a script was added to this export by Kaspersky software. This prevents the exported project from working. Try disabling Kaspersky and exporting again.":r+="Try installing any available software updates. Alternatively try on a different device.",r+="<br><br><em>Missing features: "+s.join(", ")+"<br>User agent: "+navigator.userAgent+"</em>",t.innerHTML=r,e.appendChild(t),document.addEventListener("deviceready",()=>{navigator["splashscreen"]&&navigator["splashscreen"]["hide"]&&navigator["splashscreen"]["hide"]()})):window["C3_Is_Supported"]=!0}();
