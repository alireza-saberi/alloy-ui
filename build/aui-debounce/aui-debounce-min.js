YUI.add("aui-debounce",function(e,t){var n=e.Lang,r=e.Array,i=n.isString,s=n.isUndefined,o=[],u=function(e,t,n,i){return s(e)?t:r(e,n||0,i!==!1)};e.debounce=function(t,n,r,a){var f,l;i(t)&&r&&(t=e.bind(t,r)),n=n||0,a=u(arguments,o,3);var c=function(){clearInterval(f),f=null},h=function(){c();var e=t.apply(r,l||a||o);return l=null,e},p=function(e,i,c,p){m.cancel(),e=s(e)?n:e,t=p||t,r=c||r,i!==a&&(l=u(i,o,0,!1).concat(a));if(!(e>0))return h();f=setInterval(h,e)},d=function(){f&&c()},v=function(e){d(),e=e||0},m=function(){var e=arguments.length?arguments:a;return m.delay(n,e,r||this)};return m.cancel=d,m.delay=p,m.setDelay=v,m}},"3.0.3-deprecated.4");
