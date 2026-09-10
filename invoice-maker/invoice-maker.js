// ===== Paper Sizes =====
var paperSizes = {
  a7:  {name:'A7',    w:74,  h:105, px:220},
  a7sp:{name:'A7-sp', w:80,  h:120, px:245},
  a6:  {name:'A6',    w:105, h:148, px:290},
  a5:  {name:'A5',    w:148, h:210, px:380}
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
  ],
  discounts: [],
  extras: []
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
    {id:'yidian',  name:'一点点', url:'https://www.yicha.tw/apple-touch-icon.png',          fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="50" cy="50" r="50" fill="#f07800"/><text x="50" y="44" font-family="serif" font-size="22" fill="white" text-anchor="middle" font-weight="bold">一点点</text><circle cx="32" cy="62" r="6" fill="white" opacity=".85"/><circle cx="50" cy="66" r="6" fill="white" opacity=".85"/><circle cx="68" cy="62" r="6" fill="white" opacity=".85"/></svg>'},
    {id:'manner',  name:'Manner', url:'https://www.manner.com/apple-touch-icon.png',         fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#1a1a1a"/><text x="50" y="46" font-family="Arial,sans-serif" font-size="14" fill="white" text-anchor="middle" font-weight="bold" letter-spacing="1">MANNER</text><text x="50" y="61" font-family="Arial,sans-serif" font-size="9" fill="#aaa" text-anchor="middle" letter-spacing="3">COFFEE</text></svg>'},
    {id:'luckin',  name:'瑞幸',   url:'https://www.lkcoffee.com/apple-touch-icon.png',       fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#0046be" rx="8"/><text x="50" y="48" font-family="serif" font-size="26" fill="white" text-anchor="middle" font-weight="bold">瑞幸</text><text x="50" y="64" font-family="Arial,sans-serif" font-size="8" fill="#80aaff" text-anchor="middle" letter-spacing="2">luckin coffee</text></svg>'},
    {id:'heytea',  name:'喜茶',   url:'https://www.heytea.com/apple-touch-icon.png',         fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#0d0d0d"/><text x="50" y="55" font-family="serif" font-size="32" fill="white" text-anchor="middle" font-weight="bold">喜茶</text><text x="50" y="70" font-family="Arial,sans-serif" font-size="7" fill="#555" text-anchor="middle" letter-spacing="4">HEYTEA</text></svg>'},
    {id:'nayuki',  name:'奈雪',   url:'https://www.nayuki.im/apple-touch-icon.png',          fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#e8f0d8"/><text x="50" y="46" font-family="serif" font-size="26" fill="#3a6b35" text-anchor="middle" font-weight="bold">奈雪</text><text x="50" y="62" font-family="serif" font-size="10" fill="#5a8a55" text-anchor="middle">の茶</text></svg>'},
    {id:'mixue',   name:'蜜雪',   url:'https://www.mixueglobal.com/apple-touch-icon.png',    fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#e8001c"/><text x="50" y="46" font-family="serif" font-size="22" fill="white" text-anchor="middle" font-weight="bold">蜜雪冰城</text><text x="50" y="64" font-family="Arial,sans-serif" font-size="8" fill="rgba(255,255,255,.7)" text-anchor="middle" letter-spacing="2">MIXUE</text></svg>'},
    {id:'tiam',    name:'淡马茶坊',url:'https://www.tiamtea.com/apple-touch-icon.png',        fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#f5e6c8"/><text x="50" y="40" font-family="serif" font-size="16" fill="#6b3d0e" text-anchor="middle" font-weight="bold">淡马茶坊</text><text x="50" y="58" font-family="Arial,sans-serif" font-size="9" fill="#9a6b3a" text-anchor="middle" letter-spacing="1">TIAM TEA</text><rect x="25" y="65" width="50" height="1.5" fill="#9a6b3a" opacity=".4"/></svg>'},
    {id:'bawang',  name:'霸王茶姬',url:'https://www.bawangchaji.com/apple-touch-icon.png',   fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#1a3a2a"/><text x="50" y="38" font-family="serif" font-size="15" fill="#c9a96e" text-anchor="middle" font-weight="bold">霸王茶姬</text><text x="50" y="56" font-family="Arial,sans-serif" font-size="8" fill="#c9a96e" text-anchor="middle" letter-spacing="2" opacity=".8">BAWANG CHAJI</text><rect x="20" y="64" width="60" height="1" fill="#c9a96e" opacity=".3"/></svg>'}
  ],
  dining: [
    {id:'hema',   name:'盒马',   url:'https://www.freshippo.com/apple-touch-icon.png',    fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#00b2b2" rx="8"/><text x="50" y="52" font-family="serif" font-size="30" fill="white" text-anchor="middle" font-weight="bold">盒马</text><text x="50" y="66" font-family="Arial,sans-serif" font-size="8" fill="rgba(255,255,255,.75)" text-anchor="middle" letter-spacing="2">FRESHIPPO</text></svg>'},
    {id:'aldi',   name:'奥乐齐',  url:'https://www.aldi.cn/apple-touch-icon.png',          fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#003a8c"/><text x="50" y="44" font-family="Arial,sans-serif" font-size="26" fill="#f5c800" text-anchor="middle" font-weight="bold">ALDI</text><text x="50" y="62" font-family="serif" font-size="14" fill="white" text-anchor="middle" font-weight="bold">奥乐齐</text></svg>'},
    {id:'sams',  name:'山姆',    url:'https://www.samsclub.com/apple-touch-icon.png',     fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#003087"/><text x="50" y="42" font-family="Arial,sans-serif" font-size="11" fill="white" text-anchor="middle" font-weight="bold">SAM\'S CLUB</text><text x="50" y="60" font-family="serif" font-size="20" fill="#f5c800" text-anchor="middle" font-weight="bold">山姆</text></svg>'},
    {id:'dushu', name:'读酥世家', url:'https://www.dushushijia.com/apple-touch-icon.png', fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#2d1a08"/><text x="50" y="40" font-family="serif" font-size="15" fill="#d4a843" text-anchor="middle" font-weight="bold">读酥世家</text><rect x="18" y="47" width="64" height="1" fill="#d4a843" opacity=".5"/><text x="50" y="62" font-family="Arial,sans-serif" font-size="8" fill="#c49530" text-anchor="middle" letter-spacing="2">PASTRY HOUSE</text></svg>'}
  ],
  digital: [
    {id:'apple',    name:'Apple',  url:'https://www.apple.com/apple-touch-icon.png',  fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#1d1d1f"/><path d="M50,73 C38,73 26,61 26,46 C26,32 35,25 44,25 C48,25 50,27 50,27 C50,27 52,25 56,25 C65,25 74,32 74,46 C74,61 62,73 50,73 Z" fill="white" opacity=".9"/><ellipse cx="66" cy="32" rx="13" ry="13" fill="#1d1d1f"/><path d="M50,26 C52,17 60,14 64,17" stroke="white" stroke-width="3" fill="none" stroke-linecap="round"/></svg>'},
    {id:'huawei',   name:'华为',   url:'https://www.huawei.com/apple-touch-icon.png',        fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#cf0a2c"/><text x="50" y="48" font-family="serif" font-size="22" fill="white" text-anchor="middle" font-weight="bold">华为</text><text x="50" y="64" font-family="Arial,sans-serif" font-size="9" fill="rgba(255,255,255,.8)" text-anchor="middle" letter-spacing="2">HUAWEI</text></svg>'},
    {id:'xiaomi',   name:'小米',   url:'https://www.mi.com/apple-touch-icon.png',            fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#ff6900"/><text x="50" y="58" font-family="Arial,sans-serif" font-size="36" fill="white" text-anchor="middle" font-weight="bold">mi</text></svg>'},
    {id:'insta360', name:'影石',   url:'https://www.insta360.com/apple-touch-icon.png', fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#FFD100"/><text x="50" y="44" font-family="Arial,sans-serif" font-size="11" fill="#111" text-anchor="middle" font-weight="bold" letter-spacing="1">INSTA360</text><text x="50" y="62" font-family="serif" font-size="18" fill="#111" text-anchor="middle" font-weight="bold">影石</text></svg>'},
    {id:'dji',      name:'大疆',   url:'https://www.dji.com/apple-touch-icon.png',   fb:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="#1e1e1e"/><text x="50" y="48" font-family="Arial,sans-serif" font-size="26" fill="white" text-anchor="middle" font-weight="bold" letter-spacing="2">DJI</text><text x="50" y="65" font-family="serif" font-size="16" fill="rgba(255,255,255,.75)" text-anchor="middle" font-weight="bold">大疆</text></svg>'}
  ]
};

function svgToDataUrl(svg){
  return 'data:image/svg+xml,' + encodeURIComponent(svg);
}

// Convert any image URL to data URL via canvas (for html2canvas compatibility)
// 同时将图片缩放到最大显示尺寸，避免 html2canvas 高倍率渲染时 Logo 溢出容器
// 注意：canvas 绘制失败（CORS 跨域）时返回 null，触发 SVG 兜底，而不是返回原始 URL
function imgToDataUrl(src, callback){
  var MAX_W = 360, MAX_H = 120; // 2× 显示尺寸，保证清晰
  var img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = function(){
    try {
      var nw = img.naturalWidth  || MAX_W;
      var nh = img.naturalHeight || MAX_H;
      // 按比例缩放，不超过 MAX_W × MAX_H
      var scale = Math.min(MAX_W / nw, MAX_H / nh, 1);
      var cw = Math.round(nw * scale);
      var ch = Math.round(nh * scale);
      var c = document.createElement('canvas');
      c.width = cw; c.height = ch;
      c.getContext('2d').drawImage(img, 0, 0, cw, ch);
      callback(c.toDataURL('image/png'));
    } catch(e){
      // CORS 导致 canvas 被污染（tainted）无法导出时，
      // 若 src 本身已是 data URL（用户上传）则直接返回，否则降级使用 SVG 兜底
      callback(src && src.startsWith('data:') ? src : null);
    }
  };
  img.onerror = function(){ callback(null); };
  img.src = src;
}

function applyLogo(dataUrl){
  state.logo = dataUrl;
  var prev = document.getElementById('logo-prev');
  if(prev){ prev.src = dataUrl; prev.style.display = 'block'; }
  document.getElementById('logo-ico').style.display = 'none';
  document.getElementById('logo-hint').style.display = 'none';
  document.getElementById('logo-clear').style.display = 'flex';
  render();
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
  document.querySelectorAll('.preset-btn').forEach(function(b){
    b.classList.toggle('sel', b.getAttribute('data-pid')===id);
  });
  var fbUrl = svgToDataUrl(p.fb);
  imgToDataUrl(p.url, function(dataUrl){
    state.storeName = p.name;
    var storeInput = document.getElementById('storeName');
    if(storeInput) storeInput.value = p.name;
    applyLogo(dataUrl || fbUrl);
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
    imgToDataUrl(ev.target.result, function(resized){
      applyLogo(resized || ev.target.result);
    });
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
  var extraDisc = 0;
  (state.discounts||[]).forEach(function(d){
    extraDisc += (parseFloat(d.amount)||0);
  });
  var extraCharge = 0;
  (state.extras||[]).forEach(function(e){
    extraCharge += (parseFloat(e.amount)||0);
  });
  return {
    subtotal: subtotal,
    saved: saved,
    extraDisc: extraDisc,
    extraCharge: extraCharge,
    finalTotal: Math.max(0, subtotal - extraDisc + extraCharge)
  };
}

// ===== Extras (额外收费) =====
window.addExtra = function(){
  state.extras.push({name:'', amount:0});
  renderExtras();
  render();
};
window.delExtra = function(i){
  state.extras.splice(i,1);
  renderExtras();
  render();
};
window.updateExtra = function(i, field, val){
  state.extras[i][field] = (field==='name') ? val : parseFloat(val)||0;
  render();
};

function renderExtras(){
  var list = document.getElementById('extra-list');
  if(!list) return;
  list.innerHTML = '';
  (state.extras||[]).forEach(function(e, i){
    var row = document.createElement('div');
    row.className = 'drow';
    row.innerHTML =
      '<input type="text" value="'+escHtml(e.name)+'" placeholder="如：运费" oninput="updateExtra('+i+',\'name\',this.value)"/>'+
      '<input type="number" class="nr" value="'+(e.amount||'')+'" min="0" step="0.01" placeholder="0.00" oninput="updateExtra('+i+',\'amount\',this.value)"/>'+
      '<button class="bdel" onclick="delExtra('+i+')" title="删除">×</button>';
    list.appendChild(row);
  });
}

// ===== Discounts =====
window.addDiscount = function(){
  state.discounts.push({name:'', amount:0});
  renderDiscounts();
  render();
};
window.delDiscount = function(i){
  state.discounts.splice(i,1);
  renderDiscounts();
  render();
};
window.updateDiscount = function(i, field, val){
  state.discounts[i][field] = (field==='name') ? val : parseFloat(val)||0;
  render();
};

function renderDiscounts(){
  var list = document.getElementById('discount-list');
  if(!list) return;
  list.innerHTML = '';
  (state.discounts||[]).forEach(function(d, i){
    var row = document.createElement('div');
    row.className = 'drow';
    row.innerHTML =
      '<input type="text" value="'+escHtml(d.name)+'" placeholder="如：会员折扣" oninput="updateDiscount('+i+',\'name\',this.value)"/>'+
      '<input type="number" class="nr" value="'+(d.amount||'')+'" min="0" step="0.01" placeholder="0.00" oninput="updateDiscount('+i+',\'amount\',this.value)"/>'+
      '<button class="bdel" onclick="delDiscount('+i+')" title="删除">×</button>';
    list.appendChild(row);
  });
}

// ===== Auto-save (localStorage) =====
var _skipSave = false; // 恢复草稿期间暂停保存

function saveState(){
  if(_skipSave) return;
  // 收集所有额外表单字段
  var extraIds = ['platform','tableNo','server','shopNo','cashier',
                  'shopNo2','cashier2','orderNo','warranty','branch','member'];
  var formVals = {};
  extraIds.forEach(function(id){
    var el = document.getElementById(id);
    if(el) formVals[id] = el.value;
  });
  var draft = {
    type:      state.type,
    storeName: state.storeName,
    date:      state.date,
    time:      state.time,
    remark:    state.remark,
    logo:      state.logo,
    paperSize: state.paperSize,
    rcptNo:    state.rcptNo,
    items:     JSON.parse(JSON.stringify(state.items)),
    discounts: JSON.parse(JSON.stringify(state.discounts||[])),
    extras:    JSON.parse(JSON.stringify(state.extras||[])),
    formVals:  formVals
  };
  try {
    localStorage.setItem('invoice-draft', JSON.stringify(draft));
  } catch(e){
    // 空间不足时不存 logo 重试
    try { draft.logo = null; localStorage.setItem('invoice-draft', JSON.stringify(draft)); } catch(e2){}
  }
  var el = document.getElementById('save-status');
  if(el){ el.textContent = '✓ 草稿已保存'; el.className = 'save-status saved'; }
}

function debounce(fn, delay){
  var t;
  return function(){ clearTimeout(t); t = setTimeout(fn, delay); };
}
var debouncedSave = debounce(saveState, 600);

function loadSavedDraft(){
  try {
    var raw = localStorage.getItem('invoice-draft');
    return raw ? JSON.parse(raw) : null;
  } catch(e){ return null; }
}

window.clearDraft = function(){
  if(!confirm('清除草稿将重置所有当前编辑内容，确认吗？')) return;
  localStorage.removeItem('invoice-draft');
  // 重置为初始状态
  location.reload();
};

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

  // 是否有任何优惠或额外费用
  var hasAnyAdj = totals.saved > 0 || totals.extraDisc > 0 || totals.extraCharge > 0;

  // 小计行（有调整时才显示商品小计）
  var subtotalLineHtml = hasAnyAdj
    ? '<div class="inv-trow"><span>小计</span><span>'+fmtMoney(totals.subtotal)+'</span></div>'
    : '';

  // 商品优惠减免行
  var savedHtml = totals.saved > 0
    ? '<div class="inv-trow"><span>商品优惠</span><span style="color:var(--ic)">-'+fmtMoney(totals.saved)+'</span></div>'
    : '';

  // 命名优惠条目
  var namedDiscHtml = '';
  (state.discounts||[]).forEach(function(d){
    if(d.name || d.amount > 0){
      namedDiscHtml += '<div class="inv-trow">'
        +'<span>'+(escHtml(d.name)||'优惠')+'</span>'
        +'<span style="color:var(--ic)">-'+fmtMoney(d.amount)+'</span>'
        +'</div>';
    }
  });

  // 额外收费条目
  var extraChargeHtml = '';
  (state.extras||[]).forEach(function(e){
    if(e.name || e.amount > 0){
      extraChargeHtml += '<div class="inv-trow">'
        +'<span>'+(escHtml(e.name)||'附加费')+'</span>'
        +'<span>+'+fmtMoney(e.amount)+'</span>'
        +'</div>';
    }
  });

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
    +subtotalLineHtml
    +savedHtml
    +namedDiscHtml
    +extraChargeHtml
    +'<div class="inv-trow total"><span>合计</span><span>'+fmtMoney(hasAnyAdj ? totals.finalTotal : totals.subtotal)+'</span></div>'
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
  // 每次渲染后自动保存（防抖 600ms）
  debouncedSave();
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

// ===== Copy to Clipboard =====
window.copyInvoice = function(){
  var inv = document.getElementById('invoice');
  var btn = document.getElementById('btn-copy');
  if(!navigator.clipboard || !window.ClipboardItem){
    alert('当前浏览器不支持复制图片，请使用"保存图片"'); return;
  }
  if(btn){ btn.textContent='生成中…'; btn.disabled=true; }
  var ps = paperSizes[state.paperSize] || paperSizes.a6;
  var physW = Math.round(ps.w * 300 / 25.4);
  var scale = physW / (inv.offsetWidth || ps.px);
  html2canvas(inv,{scale:scale,backgroundColor:'#f2ede7',useCORS:true,allowTaint:true,logging:false})
  .then(function(canvas){
    canvas.toBlob(function(blob){
      navigator.clipboard.write([new ClipboardItem({'image/png':blob})])
      .then(function(){
        if(btn){ btn.textContent='✓ 已复制'; btn.disabled=false; }
        setTimeout(function(){ if(btn) btn.textContent='📋 复制'; }, 2000);
      })
      .catch(function(){ if(btn){ btn.textContent='📋 复制'; btn.disabled=false; } });
    },'image/png');
  }).catch(function(){ if(btn){ btn.textContent='📋 复制'; btn.disabled=false; } });
};

// ===== Print =====
window.printInvoice = function(){
  var inv = document.getElementById('invoice');
  var ps = paperSizes[state.paperSize] || paperSizes.a6;
  // 基础页面样式（纸张尺寸、去阴影）
  var pageStyle = '@page{size:'+ps.w+'mm '+ps.h+'mm;margin:0}'
    +'body{margin:0;background:white;display:flex;justify-content:center;align-items:flex-start;'
    +'print-color-adjust:exact;-webkit-print-color-adjust:exact}'
    +'#invoice{width:'+ps.w+'mm!important;box-shadow:none!important}'
    // 黑白覆盖：将各类型彩色变量统一为深黑
    +'#invoice,#invoice.dining,#invoice.clothing,#invoice.daily,#invoice.digital,#invoice.tea{'
    +'--ic:#1a1a1a!important;background:white!important;background-image:none!important}'
    // 文字 & 边框
    +'#invoice .inv-name{color:#000!important}'
    +'#invoice .inv-badge{border-color:#444!important;color:#444!important}'
    +'#invoice .inv-disc{color:#000!important;font-weight:700!important}'
    +'#invoice .inv-trow.total{color:#000!important}'
    +'#invoice .inv-logo-ph{border-color:#444!important;opacity:.5!important}'
    // 提升低 opacity 元素可读性
    +'#invoice .inv-tagline{opacity:.6!important}'
    +'#invoice .inv-meta{opacity:.7!important}'
    +'#invoice .inv-info{opacity:.85!important}'
    +'#invoice .inv-tbl th{opacity:.65!important}'
    +'#invoice .inv-footer .thanks{opacity:.6!important}'
    +'#invoice .inv-barcode-num{opacity:.5!important}'
    +'#invoice .inv-dd{opacity:.35!important}'
    +'#invoice .inv-ds{opacity:.2!important}'
    // 条形码 & 印章
    +'#invoice .inv-barcode span{background:#000!important;opacity:.55!important}'
    +'#invoice .inv-stamp{border-color:#000!important;color:#000!important;opacity:.22!important}'
    // 锯齿撕边填充改为白色
    +'#invoice .inv-tear path{fill:white!important}';
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
  var draft = loadSavedDraft();

  if(draft){
    // ── 恢复草稿 ──
    _skipSave = true;
    state.type      = draft.type      || 'dining';
    state.storeName = draft.storeName || '小满食堂';
    state.date      = draft.date      || today();
    state.time      = draft.time      || nowTime();
    state.remark    = draft.remark    || '';
    state.logo      = draft.logo      || null;
    state.paperSize = draft.paperSize || 'a6';
    state.rcptNo    = draft.rcptNo    || genRcptNo();
    if(draft.items    && draft.items.length)   state.items     = draft.items;
    if(draft.discounts)                         state.discounts = draft.discounts;
    if(draft.extras)                            state.extras    = draft.extras;

    // 恢复表单输入值
    document.getElementById('storeName').value = state.storeName;
    document.getElementById('invDate').value   = state.date;
    document.getElementById('invTime').value   = state.time;
    if(document.getElementById('remark')) document.getElementById('remark').value = state.remark;

    // 恢复额外字段
    var fv = draft.formVals || {};
    ['platform','tableNo','server','shopNo','cashier',
     'shopNo2','cashier2','orderNo','warranty','branch','member'].forEach(function(id){
      var el = document.getElementById(id);
      if(el && fv[id] !== undefined) el.value = fv[id];
    });

    // 恢复发票类型 tab & 额外字段面板
    document.querySelectorAll('.ttab').forEach(function(el){
      el.classList.remove('act-dining','act-clothing','act-daily','act-digital','act-tea');
    });
    var tab = document.querySelector('.ttab[data-type="'+state.type+'"]');
    if(tab) tab.classList.add('act-'+state.type);
    document.querySelectorAll('.xfld').forEach(function(el){el.classList.remove('on')});
    var xf = document.getElementById('xfld-'+state.type);
    if(xf) xf.classList.add('on');

    // 恢复纸张尺寸 tab
    document.querySelectorAll('.stab').forEach(function(b){ b.classList.remove('act-size'); });
    var sBtn = document.querySelector('.stab[data-size="'+state.paperSize+'"]');
    if(sBtn) sBtn.classList.add('act-size');

    // 恢复 Logo 预览
    if(state.logo){
      var prev = document.getElementById('logo-prev');
      if(prev){ prev.src = state.logo; prev.style.display = 'block'; }
      document.getElementById('logo-ico').style.display  = 'none';
      document.getElementById('logo-hint').style.display = 'none';
      document.getElementById('logo-clear').style.display = 'block';
    }

    renderPresets(state.type);
    renderItems();
    renderDiscounts();
    renderExtras();

    var inv = document.getElementById('invoice');
    if(inv) inv.style.width = paperSizes[state.paperSize].px + 'px';

    render();
    _skipSave = false;

    // 显示恢复提示
    var statusEl = document.getElementById('save-status');
    if(statusEl){ statusEl.textContent = '↩ 已恢复上次编辑'; statusEl.className = 'save-status saved'; }

  } else {
    // ── 全新初始化 ──
    document.getElementById('invDate').value = today();
    document.getElementById('invTime').value = nowTime();
    renderItems();
    renderDiscounts();
    renderExtras();
    var xf = document.getElementById('xfld-dining');
    if(xf) xf.classList.add('on');
    renderPresets('dining');
    var inv = document.getElementById('invoice');
    if(inv) inv.style.width = paperSizes[state.paperSize].px + 'px';
    render();
  }

  // 移动端默认显示编辑面板
  if(window.innerWidth <= 768){
    var prev = document.getElementById('preview-section');
    var acts = document.getElementById('action-bar');
    if(prev) prev.classList.add('mob-hide');
    if(acts) acts.classList.add('mob-hide');
  }

  // 拖放上传 Logo
  var logoArea = document.querySelector('.logo-area');
  if(logoArea){
    logoArea.addEventListener('dragover', function(e){ e.preventDefault(); logoArea.classList.add('drag-over'); });
    logoArea.addEventListener('dragleave', function(){ logoArea.classList.remove('drag-over'); });
    logoArea.addEventListener('drop', function(e){
      e.preventDefault(); logoArea.classList.remove('drag-over');
      var file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
      if(file && file.type.indexOf('image/')===0){
        var r = new FileReader();
        r.onload = function(ev){ imgToDataUrl(ev.target.result, function(res){ applyLogo(res||ev.target.result); }); };
        r.readAsDataURL(file);
      }
    });
  }

  // Ctrl+V 粘贴图片作为 Logo
  document.addEventListener('paste', function(e){
    var items = e.clipboardData && e.clipboardData.items;
    if(!items) return;
    for(var i=0;i<items.length;i++){
      if(items[i].type.indexOf('image/')===0){
        var file = items[i].getAsFile();
        var r = new FileReader();
        r.onload = function(ev){ imgToDataUrl(ev.target.result, function(res){ applyLogo(res||ev.target.result); }); };
        r.readAsDataURL(file);
        e.preventDefault(); return;
      }
    }
  });

  // 键盘快捷键：Ctrl/Cmd+S 保存图片
  document.addEventListener('keydown', function(e){
    if((e.ctrlKey||e.metaKey) && e.key==='s'){ e.preventDefault(); downloadInvoice(); }
  });

  // 修复草稿恢复时 logo-clear 按钮 display
  var clearBtn = document.getElementById('logo-clear');
  if(clearBtn && clearBtn.style.display === 'block') clearBtn.style.display = 'flex';
});
