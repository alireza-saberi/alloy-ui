/*
Copyright (c) 2010, Yahoo! Inc. All rights reserved.
Code licensed under the BSD License:
http://developer.yahoo.com/yui/license.html
version: 3.2.0PR1
build: nightly
*/
YUI.add("selection",function(B){var A="textContent",D="innerHTML",C="fontFamily";B.Selection=function(){var J,I,E,G,F,H;if(B.config.win.getSelection){J=B.config.win.getSelection();}else{if(B.config.doc.selection){J=B.config.doc.selection.createRange();}}this._selection=J;if(J.pasteHTML){A="nodeValue";this.isCollapsed=(J.compareEndPoints("StartToEnd",J))?false:true;if(this.isCollapsed){this.anchorNode=this.focusNode=B.one(J.parentElement());I=J.parentElement();G=I.childNodes;F=J.duplicate();for(H=0;H<G.length;H++){F.select(G[H]);if(F.inRange(J)){E=G[H];}}this.ieNode=E;if(E){if(E.nodeType!==3){if(E.firstChild){E=E.firstChild;}}this.anchorNode=this.focusNode=B.Selection.resolve(E);this.anchorOffset=this.focusOffset=(this.anchorNode.nodeValue)?this.anchorNode.nodeValue.length:0;this.anchorTextNode=this.focusTextNode=B.one(E);}}}else{this.isCollapsed=J.isCollapsed;this.anchorNode=B.Selection.resolve(J.anchorNode);this.focusNode=B.Selection.resolve(J.focusNode);this.anchorOffset=J.anchorOffset;this.focusOffset=J.focusOffset;this.anchorTextNode=B.one(J.anchorNode);this.focusTextNode=B.one(J.focusNode);}if(B.Lang.isString(J.text)){this.text=J.text;}else{this.text=J.toString();}};B.Selection.filter=function(G){var F=B.all(B.Selection.ALL),H=B.all("strong,em"),E;F.each(function(J){if(J.getStyle(C)){var I=new B.StyleSheet("editor");I.set("."+J._yuid,{fontFamily:J.getStyle(C)});J.addClass(J._yuid);J.removeAttribute("face");J.setStyle(C,"");if(J.getAttribute("style")===""){J.removeAttribute("style");}if(J.getAttribute("style").toLowerCase()==="font-family: "){J.removeAttribute("style");}}});H.each(function(L,I){var J=L.get("tagName").toLowerCase(),K="i";if(J==="strong"){K="b";}B.Selection.prototype._swap(H.item(I),K);});E=B.all("ol,ul");E.each(function(J,I){var K=J.all("li");if(!K.size()){J.remove();}});if(G){B.Selection.filterBlocks();}};B.Selection.filterBlocks=function(){var J=B.config.doc.body.childNodes,G,F,K=false,I=true,E,L,M;if(J){for(G=0;G<J.length;G++){F=B.one(J[G]);if(!F.test(B.Selection.BLOCKS)){I=true;if(J[G].nodeType==3){if(J[G].textContent=="\n"){I=false;}}if(I){if(!K){K=[];}K.push(J[G]);}}else{K=B.Selection._wrapBlock(K);}}K=B.Selection._wrapBlock(K);}L=B.all("p");if(L.size()===1){M=L.item(0).all("br");if(M.size()===1){M.item(0).remove();var H=L.item(0).get("innerHTML");if(H==""||H==" "){L.set("innerHTML",B.Selection.CURSOR);E=new B.Selection();E.focusCursor(true,false);}}}};B.Selection._wrapBlock=function(F){if(F){var E=B.Node.create("<p></p>"),H=B.one(F[0]),G;for(G=1;G<F.length;G++){E.append(F[G]);}H.replace(E);E.prepend(H);}return false;};B.Selection.unfilter=function(){var F=B.all("body [class]"),G="",E,H;F.each(function(I){if(I.hasClass(I._yuid)){I.setStyle(C,I.getStyle(C));I.removeClass(I._yuid);if(I.getAttribute("class")===""){I.removeAttribute("class");}}});E=B.all(".yui-non");E.each(function(I){if(I.get("innerHTML")===""){I.remove();}else{I.removeClass("yui-non");}});H=B.all("body [id]");H.each(function(I){if(I.get("id").indexOf("yui_3_")===0){I.removeAttribute("id");I.removeAttribute("_yuid");}});G=B.one("body").get("innerHTML");F.each(function(I){I.addClass(I._yuid);I.setStyle(C,"");if(I.getAttribute("style")===""){I.removeAttribute("style");}});return G;};B.Selection.resolve=function(E){if(E&&E.nodeType===3){E=E.parentNode;}return B.one(E);};B.Selection.getText=function(E){return E.get("innerHTML").replace(B.Selection.STRIP_HTML,"");};B.Selection.ALL="[style],font[face]";B.Selection.STRIP_HTML=/<\S[^><]*>/g;B.Selection.BLOCKS="p,div,ul,ol,table,style";B.Selection.TMP="yui-tmp";B.Selection.DEFAULT_TAG="span";B.Selection.CURID="yui-cursor";B.Selection.CURSOR='<span id="'+B.Selection.CURID+'">&nbsp;</span>';B.Selection.prototype={text:null,isCollapsed:null,anchorNode:null,anchorOffset:null,anchorTextNode:null,focusNode:null,focusOffset:null,focusTextNode:null,_selection:null,_wrap:function(G,E){var F=B.Node.create("<"+E+"></"+E+">");F.set(D,G.get(D));G.set(D,"");G.append(F);return B.Node.getDOMNode(F);},_swap:function(G,E){var F=B.Node.create("<"+E+"></"+E+">");F.set(D,G.get(D));G.replace(F,G);return B.Node.getDOMNode(F);},getSelected:function(){B.Selection.filter();B.config.doc.execCommand("fontname",null,B.Selection.TMP);var F=B.all(B.Selection.ALL),E=[];F.each(function(H,G){if(H.getStyle(C,B.Selection.TMP)){H.setStyle(C,"");H.removeAttribute("face");if(H.getAttribute("style")===""){H.removeAttribute("style");}E.push(B.Node.getDOMNode(F.item(G)));}});return B.all(E);},insertContent:function(E){return this.insertAtCursor(E,this.anchorTextNode,this.anchorOffset,true);},insertAtCursor:function(K,F,H,M){var O=B.Node.create("<"+B.Selection.DEFAULT_TAG+' class="yui-non"></'+B.Selection.DEFAULT_TAG+">"),E,I,G,N,J=this.createRange(),L;if(F&&F.test("body")){L=B.Node.create("<span></span>");F.append(L);F=L;}if(J.pasteHTML){N=B.Node.create(K);J.pasteHTML('<span id="rte-insert"></span>');E=B.one("#rte-insert");if(E){E.set("id","");E.replace(N);return N;}else{B.on("available",function(){E.set("id","");E.replace(N);},"#rte-insert");}}else{if(H>0){E=F.get(A);I=B.one(B.config.doc.createTextNode(E.substr(0,H)));G=B.one(B.config.doc.createTextNode(E.substr(H)));F.replace(I,F);N=B.Node.create(K);I.insert(N,"after");if(G&&G.get("length")){N.insert(O,"after");O.insert(G,"after");this.selectNode(O,M);}}else{N=B.Node.create(K);F.append(N);}}return N;},wrapContent:function(F){F=(F)?F:B.Selection.DEFAULT_TAG;if(!this.isCollapsed){var H=this.getSelected(),K=[],G,I,J,E;H.each(function(N,L){var M=N.get("tagName").toLowerCase();if(M==="font"){K.push(this._swap(H.item(L),F));}else{K.push(this._wrap(H.item(L),F));}},this);G=this.createRange();J=K[0];I=K[K.length-1];if(this._selection.removeAllRanges){G.setStart(K[0],0);G.setEnd(I,I.childNodes.length);this._selection.removeAllRanges();this._selection.addRange(G);}else{G.moveToElementText(B.Node.getDOMNode(J));E=this.createRange();E.moveToElementText(B.Node.getDOMNode(I));G.setEndPoint("EndToEnd",E);G.select();}K=B.all(K);return K;}else{return B.all([]);}},replace:function(K,I){var F=this.createRange(),J,E,G,H;
if(F.getBookmark){G=F.getBookmark();E=this.anchorNode.get("innerHTML").replace(K,I);this.anchorNode.set("innerHTML",E);F.moveToBookmark(G);H=B.one(F.parentElement());}else{J=this.anchorTextNode;E=J.get(A);G=E.indexOf(K);E=E.replace(K,"");J.set(A,E);H=this.insertAtCursor(I,J,G,true);}return H;},remove:function(){this._selection.removeAllRanges();return this;},createRange:function(){if(B.config.doc.selection){return B.config.doc.selection.createRange();}else{return B.config.doc.createRange();}},selectNode:function(G,I,E){E=E||0;G=B.Node.getDOMNode(G);var F=this.createRange();if(F.selectNode){F.selectNode(G);this._selection.removeAllRanges();this._selection.addRange(F);if(I){try{this._selection.collapse(G,E);}catch(H){this._selection.collapse(G,0);}}}else{if(G.nodeType===3){G=G.parentNode;}try{F.moveToElementText(G);}catch(H){}if(I){F.collapse(((E)?false:true));}F.select();}return this;},setCursor:function(){return this.insertContent(B.Selection.CURSOR);},getCursor:function(){return B.one("#"+B.Selection.CURID);},removeCursor:function(E){var F=this.getCursor();if(F){if(E){F.removeAttribute("id");F.set("innerHTML","&nbsp;");}else{F.remove();}}return F;},focusCursor:function(G,E){if(G!==false){G=true;}if(E!==false){E=true;}var F=this.removeCursor(true);if(F){this.selectNode(F,G,E);}},toString:function(){return"Selection Object";}};},"3.2.0PR1",{requires:["node"],skinnable:false});