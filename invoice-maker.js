// ===== Paper Sizes =====
var paperSizes = {
  a7: {name:'A7', w:74,  h:105, px:220},
  a6: {name:'A6', w:105, h:148, px:290},
  a5: {name:'A5', w:148, h:210, px:380}
};

// ===== State =====
var state = {
  type: 'dining',
  logo: null,
  storeName: '小满食堂',
  date: today(),
  time: nowTime(),
  rcptNo: genRcptNo(),
  remark: '',
  shopNo: '',
  cashier: '',
  branch: '',
  member: '',
  paperSize: 'a6',
  items: [
    {name: '招牌菜', qty: 1, price: 38, disc: 0},
    {name: '例汤', qty: 2, price: 12, disc: 10},
  ]
};

function today(){
  var d=new Date();
  return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());
}
function nowTime(){
  var d=new Date();
  return pad(d.getHours())+':'+pad(d.getMinutes());
}
function pad(n){return n<10?'0'+n:''+n}
function rndNo(){return Math.floor(Math.random()*90000+10000)+''}
function genRcptNo(){return 'NO.'+Math.floor(Math.random()*9000000+1000000)}
function fmtDate(s){
  if(!s) return '';
  var p=s.split('-');
  if(p.length<3) return s;
  return p[0]+'年'+p[1]+'月'+p[2]+'日';
}
function fmtMoney(n){return '¥'+parseFloat(n||0).toFixed(2)}

// ===== Preset Logos =====
// Official logos via Clearbit; SVG fallback if network unavailable
var svgPresets = {
  tea: [
    {id:'yidian',  name:'一点点', url:'https://logo.clearbit.com/yicha.tw',          fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#f07800"/><text x="50" y="44" font-family="serif" font-size="22" fill="white" text-anchor="middle" font-weight="bold">一点点</text><circle cx="32" cy="62" r="6" fill="white" opacity=".85"/><circle cx="50" cy="66" r="6" fill="white" opacity=".85"/><circle cx="68" cy="62" r="6" fill="white" opacity=".85"/></svg>'},
    {id:'manner',  name:'Manner', url:'https://logo.clearbit.com/manner.com',         fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#1a1a1a"/><text x="50" y="46" font-family="Arial,sans-serif" font-size="14" fill="white" text-anchor="middle" font-weight="bold" letter-spacing="1">MANNER</text><text x="50" y="61" font-family="Arial,sans-serif" font-size="9" fill="#aaa" text-anchor="middle" letter-spacing="3">COFFEE</text></svg>'},
    {id:'luckin',  name:'瑞幸',   url:'https://logo.clearbit.com/lkcoffee.com',       fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#0046be" rx="8"/><text x="50" y="48" font-family="serif" font-size="26" fill="white" text-anchor="middle" font-weight="bold">瑞幸</text><text x="50" y="64" font-family="Arial,sans-serif" font-size="8" fill="#80aaff" text-anchor="middle" letter-spacing="2">luckin coffee</text></svg>'},
    {id:'heytea',  name:'喜茶',   url:'https://logo.clearbit.com/heytea.com',         fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#0d0d0d"/><text x="50" y="55" font-family="serif" font-size="32" fill="white" text-anchor="middle" font-weight="bold">喜茶</text><text x="50" y="70" font-family="Arial,sans-serif" font-size="7" fill="#555" text-anchor="middle" letter-spacing="4">HEYTEA</text></svg>'},
    {id:'nayuki',  name:'奈雪',   url:'https://logo.clearbit.com/nayuki.im',          fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#e8f0d8"/><text x="50" y="46" font-family="serif" font-size="26" fill="#3a6b35" text-anchor="middle" font-weight="bold">奈雪</text><text x="50" y="62" font-family="serif" font-size="10" fill="#5a8a55" text-anchor="middle">の茶</text></svg>'},
    {id:'mixue',   name:'蜜雪',   url:'https://logo.clearbit.com/mixueglobal.com',    fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#e8001c"/><text x="50" y="46" font-family="serif" font-size="22" fill="white" text-anchor="middle" font-weight="bold">蜜雪冰城</text><text x="50" y="64" font-family="Arial,sans-serif" font-size="8" fill="rgba(255,255,255,.7)" text-anchor="middle" letter-spacing="2">MIXUE</text></svg>'},
    {id:'tiam',    name:'淡马茶坊',url:'https://logo.clearbit.com/tiamtea.com',        fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#f5e6c8"/><text x="50" y="40" font-family="serif" font-size="16" fill="#6b3d0e" text-anchor="middle" font-weight="bold">淡马茶坊</text><text x="50" y="58" font-family="Arial,sans-serif" font-size="9" fill="#9a6b3a" text-anchor="middle" letter-spacing="1">TIAM TEA</text><rect x="25" y="65" width="50" height="1.5" fill="#9a6b3a" opacity=".4"/></svg>'},
    {id:'bawang',  name:'霸王茶姬',url:'https://logo.clearbit.com/bawangchaji.com',   fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#1a3a2a"/><text x="50" y="38" font-family="serif" font-size="15" fill="#c9a96e" text-anchor="middle" font-weight="bold">霸王茶姬</text><text x="50" y="56" font-family="Arial,sans-serif" font-size="8" fill="#c9a96e" text-anchor="middle" letter-spacing="2" opacity=".8">BAWANG CHAJI</text><rect x="20" y="64" width="60" height="1" fill="#c9a96e" opacity=".3"/></svg>'}
  ],
  dining: [
    {id:'hema',   name:'盒马',   url:'https://logo.clearbit.com/freshippo.com',    fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#00b2b2" rx="8"/><text x="50" y="52" font-family="serif" font-size="30" fill="white" text-anchor="middle" font-weight="bold">盒马</text><text x="50" y="66" font-family="Arial,sans-serif" font-size="8" fill="rgba(255,255,255,.75)" text-anchor="middle" letter-spacing="2">FRESHIPPO</text></svg>'},
    {id:'aldi',   name:'奥乐齐',  url:'https://logo.clearbit.com/aldi.cn',          fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#003a8c"/><text x="50" y="44" font-family="Arial,sans-serif" font-size="26" fill="#f5c800" text-anchor="middle" font-weight="bold">ALDI</text><text x="50" y="62" font-family="serif" font-size="14" fill="white" text-anchor="middle" font-weight="bold">奥乐齐</text></svg>'},
    {id:'sams',  name:'山姆',    url:'https://logo.clearbit.com/samsclub.com',     fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#003087"/><text x="50" y="42" font-family="Arial,sans-serif" font-size="11" fill="white" text-anchor="middle" font-weight="bold">SAM\'S CLUB</text><text x="50" y="60" font-family="serif" font-size="20" fill="#f5c800" text-anchor="middle" font-weight="bold">山姆</text></svg>'},
    {id:'dushu', name:'读酥世家', url:'https://logo.clearbit.com/dushushijia.com', fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#2d1a08"/><text x="50" y="40" font-family="serif" font-size="15" fill="#d4a843" text-anchor="middle" font-weight="bold">读酥世家</text><rect x="18" y="47" width="64" height="1" fill="#d4a843" opacity=".5"/><text x="50" y="62" font-family="Arial,sans-serif" font-size="8" fill="#c49530" text-anchor="middle" letter-spacing="2">PASTRY HOUSE</text></svg>'}
  ],
  digital: [
    {id:'apple',  name:'Apple',   url:'https://logo.clearbit.com/apple.com',        fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#1d1d1f"/><text x="50" y="58" font-family="Arial,sans-serif" font-size="44" fill="white" text-anchor="middle"></text></svg>'},
    {id:'huawei', name:'华为',    url:'https://logo.clearbit.com/huawei.com',        fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#cf0a2c"/><text x="50" y="48" font-family="serif" font-size="22" fill="white" text-anchor="middle" font-weight="bold">华为</text><text x="50" y="64" font-family="Arial,sans-serif" font-size="9" fill="rgba(255,255,255,.8)" text-anchor="middle" letter-spacing="2">HUAWEI</text></svg>'},
    {id:'xiaomi', name:'小米',    url:'https://logo.clearbit.com/mi.com',            fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#ff6900"/><text x="50" y="58" font-family="Arial,sans-serif" font-size="36" fill="white" text-anchor="middle" font-weight="bold">mi</text></svg>'},
    {id:'lenovo', name:'联想',    url:'https://logo.clearbit.com/lenovo.com',        fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#e2231a"/><text x="50" y="48" font-family="serif" font-size="20" fill="white" text-anchor="middle" font-weight="bold">联想</text><text x="50" y="64" font-family="Arial,sans-serif" font-size="9" fill="rgba(255,255,255,.8)" text-anchor="middle" letter-spacing="2">LENOVO</text></svg>'}
  ]
};

function svgToDataUrl(svg){
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

// Convert any image URL to data URL via canvas (for html2canvas compatibility)
function imgToDataUrl(src, callback){
  var img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = function(){
    try {
      var c = document.createElement('canvas');
      c.width = img.naturalWidth || 128; c.height = img.naturalHeight || 128;
      c.getContext('2d').drawImage(img, 0, 0);
      callback(c.toDataURL('image/png'));
    } catch(e){ callback(src); }
  };
  img.onerror = function(){ callback(null); };
  img.src = src;
}

function renderPresets(type){
  var section = document.getElementById('preset-logos');
  var grid = document.getElementById('preset-grid');
  if(!section || !grid) return;
  var list = svgPresets[type] || [];
  if(!list.length){ section.classList.remove('on'); return; }
  section.classList.add('on');
  grid.innerHTML = list.map(function(p){
    var fb = svgToDataUrl(p.fb);
    return '<button class="preset-btn" data-pid="'+p.id+'" data-url="'+p.url+'" data-fb="'+fb+'" onclick="selectPreset(\''+p.id+'\')" title="'+p.name+'">'
      +'<img src="'+p.url+'" alt="'+p.name+'" onerror="this.src=this.parentNode.getAttribute(\'data-fb\')"/>'
      +'<span>'+p.name+'</span>'
      +'</button>';
  }).join('');
}

window.selectPreset = function(id){
  var t = state.type;
  var list = svgPresets[t] || [];
  var p = null;
  for(var i=0;i<list.length;i++){ if(list[i].id===id){ p=list[i]; break; } }
  if(!p) return;
  // Highlight button immediately
  document.querySelectorAll('.preset-btn').forEach(function(b){
    b.classList.toggle('sel', b.getAttribute('data-pid')===id);
  });
  // Show loading state in logo area
  var prev = document.getElementById('logo-prev');
  var fbUrl = svgToDataUrl(p.fb);
  // Try to load official logo → convert to data URL for html2canvas
  imgToDataUrl(p.url, function(dataUrl){
    var finalUrl = dataUrl || fbUrl;
    state.logo = finalUrl;
    if(prev){ prev.src = finalUrl; prev.style.display = 'block'; }
    document.getElementById('logo-ico').style.display = 'none';
    document.getElementById('logo-hint').style.display = 'none';
    document.getElementById('logo-clear').style.display = 'block';
    render();
  });
};

// ===== Type =====
window.setType = function(t){
  state.type = t;
  document.querySelectorAll('.ttab').forEach(function(el){
    el.classList.remove('act-dining','act-clothing','act-daily','act-digital','act-tea');
  });
  var tab = document.querySelector('.ttab[data-type="'+t+'"]');
  if(tab) tab.classList.add('act-'+t);
  // show/hide extra fields
  document.querySelectorAll('.xfld').forEach(function(el){el.classList.remove('on')});
  var xf = document.getElementById('xfld-'+t);
  if(xf) xf.classList.add('on');
  // render preset logos for this type
  renderPresets(t);
  // reset logo when switching type
  state.logo = null;
  document.getElementById('logo-prev').style.display='none';
  document.getElementById('logo-ico').style.display='';
  document.getElementById('logo-hint').style.display='';
  document.getElementById('logo-clear').style.display='none';
  // update default store name & items hint
  var defaults = {
    dining:   {name:'小满食堂',    items:[{name:'招牌菜',qty:1,price:38,disc:0},{name:'例汤',qty:2,price:12,disc:10}]},
    clothing: {name:'衣时尚服饰',  items:[{name:'连衣裙 M码',qty:1,price:299,disc:199},{name:'棉袜 5双装',qty:2,price:29,disc:0}]},
    daily:    {name:'生活好物馆',  items:[{name:'洗发水 500ml',qty:1,price:49,disc:39},{name:'抽纸 3包装',qty:2,price:19,disc:0}]},
    digital:  {name:'数码旗舰店',  items:[{name:'无线耳机 Pro',qty:1,price:1299,disc:999},{name:'充电宝 20000mAh',qty:1,price:199,disc:0}]},
    tea:      {name:'茉莉时光茶饮',items:[{name:'芝士乌龙',qty:2,price:22,disc:0},{name:'霸气芒果',qty:1,price:19,disc:16}]},
  };
  var def = defaults[t];
  state.storeName = def.name;
  state.items = def.items.map(function(i){return Object.assign({},i)});
  state.rcptNo = genRcptNo();
  document.getElementById('storeName').value = state.storeName;
  renderItems();
  render();
};

// ===== Logo =====
window.loadLogo = function(e){
  var f = e.target.files[0];
  if(!f) return;
  var r = new FileReader();
  r.onload = function(ev){
    state.logo = ev.target.result;
    document.getElementById('logo-prev').src = state.logo;
    document.getElementById('logo-prev').style.display = 'block';
    document.getElementById('logo-ico').style.display = 'none';
    document.getElementById('logo-hint').style.display = 'none';
    document.getElementById('logo-clear').style.display = 'block';
    render();
  };
  r.readAsDataURL(f);
};
window.clearLogo = function(e){
  e.preventDefault(); e.stopPropagation();
  state.logo = null;
  document.getElementById('logo-prev').style.display='none';
  document.getElementById('logo-ico').style.display='';
  document.getElementById('logo-hint').style.display='';
  document.getElementById('logo-clear').style.display='none';
  document.getElementById('logo-input').value='';
  document.querySelectorAll('.preset-btn').forEach(function(b){ b.classList.remove('sel'); });
  render();
};

// ===== Items =====
window.addItem = function(){
  state.items.push({name:'', qty:1, price:0, disc:0});
  renderItems();
  render();
};
window.delItem = function(i){
  state.items.splice(i,1);
  if(state.items.length===0) state.items.push({name:'商品',qty:1,price:0,disc:0});
  renderItems();
  render();
};
window.updateItem = function(i, field, val){
  state.items[i][field] = (field==='name') ? val : parseFloat(val)||0;
  render();
};

function renderItems(){
  var list = document.getElementById('item-list');
  if(!list) return;
  list.innerHTML = '';
  state.items.forEach(function(item, i){
    var row = document.createElement('div');
    row.className = 'irow';
    row.innerHTML =
      '<input type="text" value="'+escHtml(item.name)+'" placeholder="商品名" oninput="updateItem('+i+',\'name\',this.value)"/>'+
      '<input type="number" class="nr" value="'+item.qty+'" min="1" step="1" oninput="updateItem('+i+',\'qty\',this.value)"/>'+
      '<input type="number" class="nr" value="'+item.price+'" min="0" step="0.01" placeholder="原价" oninput="updateItem('+i+',\'price\',this.value)"/>'+
      '<input type="number" class="nr" value="'+(item.disc||'')+'" min="0" step="0.01" placeholder="优惠价" oninput="updateItem('+i+',\'disc\',this.value)"/>'+
      '<button class="bdel" onclick="delItem('+i+')" title="删除">×</button>';
    list.appendChild(row);
  });
}

function calcTotals(){
  var subtotal = 0, saved = 0;
  state.items.forEach(function(item){
    var qty = item.qty || 1;
    var orig = (item.price||0) * qty;
    var disc = item.disc > 0 ? item.disc * qty : orig;
    subtotal += disc;
    saved += (orig - disc);
  });
  return {subtotal: subtotal, saved: saved};
}

function escHtml(s){
  return (s||'').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function genBarcode(){
  var bars = '';
  var pattern = [3,1,2,1,4,1,2,3,1,2,1,1,3,2,1,4,1,2,1,3,2,1,1,4,2,1,3,1,2,1];
  pattern.forEach(function(h){
    bars += '<span style="height:'+h*5+'px"></span>';
  });
  return bars;
}

function genReceiptNo(){
  return 'NO.'+Math.floor(Math.random()*9000000+1000000);
}

// ===== Main Render =====
window.render = function(){
  // read all form inputs
  state.storeName = document.getElementById('storeName').value || '店铺名称';
  state.date = document.getElementById('invDate').value;
  state.time = document.getElementById('invTime').value;

  var typeLabels = {dining:'餐饮美食',clothing:'服装购物',daily:'日化百货',digital:'数码电子',tea:'茶饮饮品'};
  var typeIcons = {dining:'🍜',clothing:'👗',daily:'🧴',digital:'💻',tea:'🧋'};
  var typeTaglines = {
    dining:'感谢光临，慢慢享用',
    clothing:'品质穿搭，从这里开始',
    daily:'优质日化，生活更美好',
    digital:'科技改变生活',
    tea:'一杯好茶，一段好时光'
  };

  var t = state.type;
  var totals = calcTotals();

  // Helper: build info row, hiding empty values
  function infoRow(pairs){
    var parts = pairs.filter(function(p){return p[1];}).map(function(p){
      return '<span>'+p[0]+'：'+escHtml(p[1])+'</span>';
    });
    return parts.length ? '<div class="inv-info">'+parts.join('')+'</div>' : '';
  }

  // Extra info by type (only show filled fields)
  var extraInfoHtml = '';
  if(t==='dining'){
    var tn = (document.getElementById('tableNo')||{}).value||'';
    var sv = (document.getElementById('server')||{}).value||'';
    extraInfoHtml = infoRow([['桌号',tn],['服务员',sv]]);
  } else if(t==='clothing'){
    var sn = (document.getElementById('shopNo')||{}).value||'';
    var ca = (document.getElementById('cashier')||{}).value||'';
    extraInfoHtml = infoRow([['门店',sn],['收银员',ca]]);
  } else if(t==='daily'){
    var sn2 = (document.getElementById('shopNo2')||{}).value||'';
    var ca2 = (document.getElementById('cashier2')||{}).value||'';
    extraInfoHtml = infoRow([['门店',sn2],['收银员',ca2]]);
  } else if(t==='digital'){
    var on = (document.getElementById('orderNo')||{}).value||'';
    var wt = (document.getElementById('warranty')||{}).value||'';
    extraInfoHtml = infoRow([['订单号',on],['保修期',wt]]);
  } else if(t==='tea'){
    var br = (document.getElementById('branch')||{}).value||'';
    var mb = (document.getElementById('member')||{}).value||'';
    extraInfoHtml = infoRow([['门店',br],['会员',mb]]);
  }

  // Platform
  var pf = (document.getElementById('platform')||{}).value||'';
  if(pf) extraInfoHtml += infoRow([['平台',pf]]);

  // Remark
  var rmk = document.getElementById('remark') ? document.getElementById('remark').value : '';

  // Items rows
  var itemsHtml = '';
  state.items.forEach(function(item){
    var qty = item.qty||1;
    var hasDisc = item.disc > 0 && item.disc < item.price;
    var displayPrice = hasDisc ? item.disc : item.price;
    var lineTotal = displayPrice * qty;
    var priceCell = hasDisc
      ? '<span class="inv-orig">'+fmtMoney(item.price)+'</span> <span class="inv-disc">'+fmtMoney(item.disc)+'</span>'
      : fmtMoney(item.price);
    itemsHtml += '<tr>'
      +'<td>'+escHtml(item.name||'—')+'</td>'
      +'<td style="text-align:center">'+qty+'</td>'
      +'<td style="text-align:right">'+priceCell+'</td>'
      +'<td>'+fmtMoney(lineTotal)+'</td>'
      +'</tr>';
  });

  // Logo
  var logoHtml = state.logo
    ? '<div class="inv-logo"><img src="'+state.logo+'" alt="logo"/></div>'
    : '<div class="inv-logo"><div class="inv-logo-ph">'+typeIcons[t]+'</div></div>';

  // Saved row
  var savedHtml = totals.saved > 0
    ? '<div class="inv-trow"><span>优惠减免</span><span style="color:var(--ic)">-'+fmtMoney(totals.saved)+'</span></div>'
    : '';

  // Remark line
  var rmkHtml = rmk
    ? '<div style="font-size:9px;opacity:.45;margin-top:6px;letter-spacing:.5px">备注：'+escHtml(rmk)+'</div>'
    : '';

  // Stamp text
  var stampTexts = {dining:'已出餐\n已结清',clothing:'已付款\n感谢惠顾',daily:'已结算\n感谢惠顾',digital:'已付款\n已发货',tea:'已取餐\n请慢用'};

  var rcptNo = state.rcptNo;

  var inv = document.getElementById('invoice');
  inv.className = t;
  inv.innerHTML =
    // Top tear
    '<svg class="inv-tear" viewBox="0 0 290 8" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">'
    +'<path d="M0,0 '+zigzag(290,8,18)+' L290,0 Z" fill="#f2ede7"/>'
    +'</svg>'
    +'<div class="inv-body">'
    // Header
    +'<div class="inv-hdr">'
    +logoHtml
    +'<div class="inv-name">'+escHtml(state.storeName)+'</div>'
    +'<div class="inv-badge">'+typeLabels[t]+'</div><br>'
    +'<div class="inv-tagline">'+typeTaglines[t]+'</div>'
    +'</div>'
    +'<hr class="inv-dd"/>'
    // Meta
    +'<div class="inv-meta">'
    +'<span>'+fmtDate(state.date)+(state.time?' '+state.time:'')+'</span>'
    +'<span>单号：'+rcptNo+'</span>'
    +'</div>'
    +extraInfoHtml
    +'<hr class="inv-dd"/>'
    // Items table
    +'<table class="inv-tbl">'
    +'<thead><tr><th>品名</th><th style="text-align:center">数量</th><th style="text-align:right">单价</th><th style="text-align:right">小计</th></tr></thead>'
    +'<tbody>'+itemsHtml+'</tbody>'
    +'</table>'
    +'<hr class="inv-ds"/>'
    // Totals
    +'<div class="inv-totals">'
    +savedHtml
    +'<div class="inv-trow total"><span>合计</span><span>'+fmtMoney(totals.subtotal)+'</span></div>'
    +'</div>'
    +rmkHtml
    +'<hr class="inv-dd"/>'
    // Footer
    +'<div class="inv-footer">'
    +'<div class="thanks">感谢惠顾 欢迎再次光临</div>'
    +'<div class="inv-barcode">'+genBarcode()+'</div>'
    +'<div class="inv-barcode-num">'+rcptNo+'</div>'
    +'</div>'
    // Stamp
    +'<div class="inv-stamp">'+stampTexts[t].replace('\n','<br>')+'</div>'
    +'</div>'
    // Bottom tear
    +'<svg class="inv-tear" viewBox="0 0 290 8" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" style="transform:rotate(180deg)">'
    +'<path d="M0,0 '+zigzag(290,8,18)+' L290,0 Z" fill="#f2ede7"/>'
    +'</svg>';
};

// Generate zigzag SVG path points
function zigzag(w, h, steps){
  var pts = '';
  var sw = w / steps;
  for(var i=0; i<=steps; i++){
    var x = i * sw;
    var y = (i%2===0) ? h : 0;
    pts += 'L'+x.toFixed(1)+','+y.toFixed(1)+' ';
  }
  return pts;
}

// ===== Paper Size =====
window.changePaperSize = function(size){
  state.paperSize = size;
  document.querySelectorAll('.stab').forEach(function(b){ b.classList.remove('act-size'); });
  var btn = document.querySelector('.stab[data-size="'+size+'"]');
  if(btn) btn.classList.add('act-size');
  var inv = document.getElementById('invoice');
  if(inv) inv.style.width = paperSizes[size].px + 'px';
};

// ===== Download =====
window.downloadInvoice = function(){
  var inv = document.getElementById('invoice');
  var btn = document.getElementById('btn-dl');
  if(btn){ btn.textContent='生成中…'; btn.disabled=true; }
  // Calculate scale to match physical paper size at 300 DPI
  var ps = paperSizes[state.paperSize] || paperSizes.a6;
  var DPI = 300;
  var physW = Math.round(ps.w * DPI / 25.4); // mm → pixels at 300dpi
  var previewW = inv.offsetWidth || ps.px;
  var scale = physW / previewW;
  html2canvas(inv, {
    scale: scale,
    backgroundColor: '#f2ede7',
    useCORS: true,
    allowTaint: true,
    logging: false
  }).then(function(canvas){
    var a = document.createElement('a');
    a.download = '发票-'+state.storeName+'-'+(ps.name||'A6')+'-'+state.date+'.png';
    a.href = canvas.toDataURL('image/png');
    a.click();
    if(btn){ btn.textContent='⬇ 保存图片'; btn.disabled=false; }
  }).catch(function(){
    if(btn){ btn.textContent='⬇ 保存图片'; btn.disabled=false; }
  });
};

// ===== Print =====
window.printInvoice = function(){
  var inv = document.getElementById('invoice');
  var ps = paperSizes[state.paperSize] || paperSizes.a6;
  var pageStyle = '@page{size:'+ps.w+'mm '+ps.h+'mm;margin:0}'
    +'body{margin:0;background:#fff;display:flex;justify-content:center;align-items:flex-start}'
    +'#invoice{width:'+ps.w+'mm!important;box-shadow:none!important}';
  var w = window.open('','_blank','width=500,height=800');
  w.document.write('<html><head><title>打印 '+ps.name+'</title>'
    +'<style>'+pageStyle+'</style>'
    +'</head><body>'+inv.outerHTML+'</body></html>');
  var styles = document.querySelectorAll('style,link[rel=stylesheet]');
  styles.forEach(function(s){ w.document.head.appendChild(s.cloneNode(true)); });
  w.document.close();
  setTimeout(function(){ w.print(); }, 800);
};

// ===== Mobile View Toggle =====
window.mobView = function(v){
  var panel = document.getElementById('panel-section');
  var prev  = document.getElementById('preview-section');
  var acts  = document.getElementById('action-bar');
  var fb = document.getElementById('mob-form-btn');
  var pb = document.getElementById('mob-prev-btn');
  if(!panel) return;
  if(v === 'preview'){
    panel.classList.add('mob-hide');
    prev.classList.remove('mob-hide');
    if(acts) acts.classList.remove('mob-hide');
    if(fb) fb.classList.remove('active');
    if(pb) pb.classList.add('active');
  } else {
    prev.classList.add('mob-hide');
    panel.classList.remove('mob-hide');
    if(acts) acts.classList.add('mob-hide');
    if(fb) fb.classList.add('active');
    if(pb) pb.classList.remove('active');
  }
};

// ===== Init =====
window.addEventListener('DOMContentLoaded', function(){
  // Set default date/time
  document.getElementById('invDate').value = today();
  document.getElementById('invTime').value = nowTime();
  // Init items
  renderItems();
  // Show dining extra fields
  var xf = document.getElementById('xfld-dining');
  if(xf) xf.classList.add('on');
  // Init preset logos (dining has none, hides section)
  renderPresets('dining');
  // Apply default paper size to invoice element
  var inv = document.getElementById('invoice');
  if(inv) inv.style.width = paperSizes[state.paperSize].px + 'px';
  // Initial render
  render();
  // Mobile: default to form view, hide preview
  if(window.innerWidth <= 768){
    var prev = document.getElementById('preview-section');
    var acts = document.getElementById('action-bar');
    if(prev) prev.classList.add('mob-hide');
    if(acts) acts.classList.add('mob-hide');
  }
});
