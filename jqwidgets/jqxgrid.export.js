/*
jQWidgets v2.8.1 (2013-Apr-12)
Copyright (c) 2011-2013 jQWidgets.
License: http://jqwidgets.com/license/
*/

(function(a){a.extend(a.jqx._jqxGrid.prototype,{exportdata:function(l,s,r,j,m,o,d){if(!a.jqx.dataAdapter.ArrayExporter){throw"jqxdata.export.js is not loaded."}if(r==undefined){r=true}var y=this;if(j==undefined){var j=this.getrows();if(j.length==0){throw"No data to export."}}var w=m!=undefined?m:false;var v={};var i={};var p=[];var h=this.host.find(".jqx-grid-cell:first");var q=this.host.find(".jqx-grid-cell-alt:first");h.removeClass(this.toThemeProperty("jqx-grid-cell-selected"));h.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));q.removeClass(this.toThemeProperty("jqx-grid-cell-selected"));q.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));h.removeClass(this.toThemeProperty("jqx-grid-cell-hover"));h.removeClass(this.toThemeProperty("jqx-fill-state-hover"));q.removeClass(this.toThemeProperty("jqx-grid-cell-hover"));q.removeClass(this.toThemeProperty("jqx-fill-state-hover"));var e="cell";var c=1;var x="column";var b=1;var f=[];a.each(this.columns.records,function(B){var F=a(y.table[0].rows[0].cells[B]);if(y.table[0].rows.length>1){var C=a(y.table[0].rows[1].cells[B])}var E=function(G){G.removeClass(y.toThemeProperty("jqx-grid-cell-selected"));G.removeClass(y.toThemeProperty("jqx-fill-state-pressed"));G.removeClass(y.toThemeProperty("jqx-grid-cell-hover"));G.removeClass(y.toThemeProperty("jqx-fill-state-hover"))};E(F);if(C){E(C)}if(this.datafield==null){return true}if(y.showaggregates){if(y.getcolumnaggregateddata){f.push(y.getcolumnaggregateddata(this.datafield,this.aggregates,true,j))}}var D=y._getexportcolumntype(this);if(this.exportable&&(!this.hidden||w)){v[this.datafield]={};v[this.datafield].text=this.text;v[this.datafield].width=parseInt(this.width);if(isNaN(v[this.datafield].width)){v[this.datafield].width=60}v[this.datafield].formatString=this.cellsformat;v[this.datafield].localization=y.gridlocalization;v[this.datafield].type=D;v[this.datafield].cellsAlign=this.cellsalign;v[this.datafield].hidden=!r}e="cell"+c;var z=a(this.element);if(this.element==undefined){z=a(this.uielement)}x="column"+b;if(l=="html"||l=="xls"||l=="pdf"){var A=function(K,H,I,G,M,L,J){i[K]={};i[K]["font-size"]=H.css("font-size");i[K]["font-weight"]=H.css("font-weight");i[K]["font-style"]=H.css("font-style");i[K]["background-color"]=L._getexportcolor(H.css("background-color"));i[K]["color"]=L._getexportcolor(H.css("color"));i[K]["border-color"]=L._getexportcolor(H.css("border-top-color"));if(I){i[K]["text-align"]=M.align}else{i[K]["text-align"]=M.cellsalign;i[K]["formatString"]=M.cellsformat;i[K]["dataType"]=D}if(l=="html"||l=="pdf"){i[K]["border-top-width"]=H.css("border-top-width");i[K]["border-left-width"]=H.css("border-left-width");i[K]["border-right-width"]=H.css("border-right-width");i[K]["border-bottom-width"]=H.css("border-bottom-width");i[K]["border-top-style"]=H.css("border-top-style");i[K]["border-left-style"]=H.css("border-left-style");i[K]["border-right-style"]=H.css("border-right-style");i[K]["border-bottom-style"]=H.css("border-bottom-style");if(I){if(J==0){i[K]["border-left-width"]=H.css("border-right-width")}i[K]["border-top-width"]=H.css("border-right-width");i[K]["border-bottom-width"]=H.css("border-bottom-width")}else{if(J==0){i[K]["border-left-width"]=H.css("border-right-width")}}i[K]["height"]=H.css("height")}if(M.exportable&&(!M.hidden||w)){if(I){v[M.datafield].style=K}else{if(!G){v[M.datafield].cellStyle=K}else{v[M.datafield].cellAltStyle=K}}}};A(x,z,true,false,this,y,B);b++;A(e,F,false,false,this,y,B);if(y.altrows){e="cellalt"+c;A(e,C,false,true,this,y,B)}c++}});if(this.showaggregates){var u=[];var t=l=="xls"?"AG":"";var g=this.groupable?this.groups.length:0;if(this.rowdetails){g++}if(f.length>0){a.each(this.columns.records,function(z){if(this.aggregates){for(var B=0;B<this.aggregates.length;B++){if(!u[B]){u[B]={}}if(u[B]){var C=y._getaggregatename(this.aggregates[B]);var D=y._getaggregatetype(this.aggregates[B]);var A=f[z-g];if(A){u[B][this.datafield]=t+C+": "+A[D]}}}}});a.each(this.columns.records,function(z){for(var A=0;A<u.length;A++){if(u[A][this.datafield]==undefined){u[A][this.datafield]=t}}})}a.each(u,function(){j.push(this)})}var n=a.jqx.dataAdapter.ArrayExporter(j,v,i);if(s==undefined){this._renderrows(this.virtualsizeinfo);var k=n.exportTo(l);if(this.showaggregates){a.each(u,function(){j.pop(this)})}return k}else{n.exportToFile(l,s,o,d)}if(this.showaggregates){a.each(u,function(){j.pop(this)})}this._renderrows(this.virtualsizeinfo)},_getexportcolor:function(k){var f=k;if(k=="transparent"){f="#FFFFFF"}if(!f||!f.toString()){f="#FFFFFF"}if(f.toString().indexOf("rgb")!=-1){var i=f.split(",");var d=parseInt(i[0].substring(4));var h=parseInt(i[1]);var j=parseInt(i[2].substring(1,4));var l={r:d,g:h,b:j};var e=this._rgbToHex(l);return"#"+e}else{if(f.toString().indexOf("#")!=-1){if(f.toString().length==4){var c=f.toString().substring(1,4);f+=c}}}return f},_rgbToHex:function(b){return this._intToHex(b.r)+this._intToHex(b.g)+this._intToHex(b.b)},_intToHex:function(c){var b=(parseInt(c).toString(16));if(b.length==1){b=("0"+b)}return b.toUpperCase()},_getexportcolumntype:function(f){var g=this;var e="string";var d=g.source.datafields||((g.source._source)?g.source._source.datafields:null);if(d){var i="";a.each(d,function(){if(this.name==f.datafield){if(this.type){i=this.type}return false}});if(i){return i}}if(f!=null){if(this.dataview.cachedrecords==undefined){return e}var b=null;if(!this.virtualmode){if(this.dataview.cachedrecords.length==0){return e}b=this.dataview.cachedrecords[0][f.datafield];if(b!=null&&b.toString()==""){return"string"}}else{a.each(this.dataview.cachedrecords,function(){b=this[f.datafield];return false})}if(b!=null){if(f.cellsformat.indexOf("c")!=-1){return"number"}if(f.cellsformat.indexOf("n")!=-1){return"number"}if(f.cellsformat.indexOf("p")!=-1){return"number"}if(f.cellsformat.indexOf("d")!=-1){return"date"}if(f.cellsformat.indexOf("y")!=-1){return"date"}if(f.cellsformat.indexOf("M")!=-1){return"date"}if(f.cellsformat.indexOf("m")!=-1){return"date"}if(f.cellsformat.indexOf("t")!=-1){return"date"}if(typeof b=="boolean"){e="boolean"}else{if(a.jqx.dataFormat.isNumber(b)){e="number"}else{var h=new Date(b);if(h.toString()=="NaN"||h.toString()=="Invalid Date"){if(a.jqx.dataFormat){h=a.jqx.dataFormat.tryparsedate(b);if(h!=null){if(h&&h.getFullYear()){if(h.getFullYear()==1970&&h.getMonth()==0&&h.getDate()==1){var c=new Number(b);if(!isNaN(c)){return"number"}return"string"}}return"date"}else{e="string"}}else{e="string"}}else{e="date"}}}}}return e}})})(jQuery);