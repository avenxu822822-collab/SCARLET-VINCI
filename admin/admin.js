const SUPABASE_URL = 'https://vfttvexwainoespbpjen.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_Ou0QR-P4aQ_5Qsl0MFAgeA_L-tLHy4I';
const SESSION_KEY = 'sv_reservation_admin_session_v1';

const loginScreen = document.querySelector('#loginScreen');
const adminScreen = document.querySelector('#adminScreen');
const loginForm = document.querySelector('#loginForm');
const loginMessage = document.querySelector('#loginMessage');
const reservationList = document.querySelector('#reservationList');
const emptyState = document.querySelector('#emptyState');
const summary = document.querySelector('#summary');
const statusFilter = document.querySelector('#statusFilter');
const productFilter = document.querySelector('#productFilter');
const dateFilter = document.querySelector('#dateFilter');
const detailDialog = document.querySelector('#detailDialog');
const detailBody = document.querySelector('#detailBody');
const statusSelect = document.querySelector('#statusSelect');
let session = null;
let reservations = [];
let activeReservation = null;

const labels = { pending:'待联系', contacted:'已联系', paid:'已付款', shipped:'已发货', cancelled:'已取消' };
const esc = value => String(value ?? '').replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#039;', '"':'&quot;' }[char]));
const localTime = value => new Intl.DateTimeFormat('zh-CN', { dateStyle:'medium', timeStyle:'short', hour12:false }).format(new Date(value));
const requestHeaders = () => ({ apikey:SUPABASE_PUBLISHABLE_KEY, Authorization:`Bearer ${session.access_token}`, 'Content-Type':'application/json' });

function setLoginMessage(text, kind = '') { loginMessage.textContent = text; loginMessage.className = `message ${kind}`; }
function saveSession(nextSession) { session = nextSession; localStorage.setItem(SESSION_KEY, JSON.stringify(nextSession)); }
function clearSession() { session = null; localStorage.removeItem(SESSION_KEY); }
async function refreshSession() {
  const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=refresh_token`, { method:'POST', headers:{ apikey:SUPABASE_PUBLISHABLE_KEY, 'Content-Type':'application/json' }, body:JSON.stringify({ refresh_token:session.refresh_token }) });
  if (!response.ok) throw new Error('Session refresh failed');
  saveSession(await response.json());
}
async function ensureSession() {
  const stored = localStorage.getItem(SESSION_KEY);
  if (!stored) return false;
  try {
    session = JSON.parse(stored);
    if (!session.access_token) return false;
    if (session.expires_at && session.expires_at < Math.floor(Date.now() / 1000) + 60) await refreshSession();
    const response = await fetch(`${SUPABASE_URL}/auth/v1/user`, { headers:requestHeaders() });
    if (!response.ok) throw new Error('No active user');
    return await verifyStaffAccess();
  } catch (error) { clearSession(); return false; }
}
async function verifyStaffAccess() {
  const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/is_active_sv_staff`, { method:'POST', headers:requestHeaders(), body:'{}' });
  if (!response.ok) return false;
  return response.json();
}
function showLogin() { adminScreen.hidden = true; loginScreen.hidden = false; loginForm.reset(); setLoginMessage('仅限已授权的内部账号。忘记密码请联系管理员。'); }
function showAdmin() { loginScreen.hidden = true; adminScreen.hidden = false; }
function dateMatches(value, filter) { if (!filter) return true; const age = Date.now() - new Date(value).getTime(); if (filter === 'today') return new Date(value).toDateString() === new Date().toDateString(); const days = filter === 'week' ? 7 : 30; return age <= days * 86400000; }
function filteredReservations() { return reservations.filter(item => (!statusFilter.value || item.status === statusFilter.value) && (!productFilter.value || item.product_code === productFilter.value) && dateMatches(item.created_at, dateFilter.value)); }
function renderList() {
  const rows = filteredReservations();
  const productOptions = [...new Map(reservations.map(item => [item.product_code, `${item.product_code} / ${item.product_name}`])).entries()];
  const current = productFilter.value;
  productFilter.innerHTML = '<option value="">所有产品</option>' + productOptions.map(([code, name]) => `<option value="${esc(code)}">${esc(name)}</option>`).join('');
  productFilter.value = current;
  summary.innerHTML = `预约单<small>${rows.length} 条显示 / 共 ${reservations.length} 条</small>`;
  reservationList.innerHTML = rows.map(item => `<button class="reservation" type="button" data-id="${item.id}"><span><strong>${esc(item.customer_name)}</strong><small>${esc(item.phone)}</small></span><span><strong>${esc(item.product_name)}</strong><small>${esc(item.product_code)} / ${esc(item.product_size)} / ${esc(item.product_price)}</small></span><span><small>${esc(item.shipping_address)}</small></span><span class="status ${esc(item.status)}">${labels[item.status] || item.status}</span><span class="arrow">›</span></button>`).join('');
  emptyState.hidden = rows.length !== 0;
}
async function loadReservations() {
  summary.innerHTML = '预约单<small>正在读取...</small>';
  const response = await fetch(`${SUPABASE_URL}/rest/v1/reservations?select=*&order=created_at.desc`, { headers:requestHeaders() });
  if (response.status === 401) { clearSession(); showLogin(); setLoginMessage('登录已过期，请重新登录。', 'error'); return; }
  if (!response.ok) throw new Error(`Load failed: ${response.status}`);
  reservations = await response.json();
  renderList();
}
function openDetail(id) {
  activeReservation = reservations.find(item => item.id === id);
  if (!activeReservation) return;
  document.querySelector('#detailCode').textContent = `${activeReservation.product_code} / RESERVATION`;
  document.querySelector('#detailName').textContent = activeReservation.product_name;
  const values = [ ['CUSTOMER / 客户', activeReservation.customer_name], ['PHONE / 手机', activeReservation.phone], ['WECHAT / 微信号', activeReservation.wechat_id || '未填写'], ['SUBMITTED / 提交时间', localTime(activeReservation.created_at)], ['ADDRESS / 收货地址', activeReservation.shipping_address], ['NOTE / 备注', activeReservation.note || '无'] ];
  detailBody.innerHTML = values.map(([label, value], index) => `<p class="detail-item ${index > 3 ? 'full' : ''}"><b>${label}</b>${esc(value)}</p>`).join('');
  statusSelect.value = activeReservation.status;
  detailDialog.showModal();
}
async function saveStatus() {
  if (!activeReservation) return;
  const nextStatus = statusSelect.value;
  const button = document.querySelector('#saveStatus');
  button.disabled = true; button.textContent = 'SAVING / 保存中';
  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/reservations?id=eq.${encodeURIComponent(activeReservation.id)}`, { method:'PATCH', headers:{ ...requestHeaders(), Prefer:'return=representation' }, body:JSON.stringify({ status:nextStatus }) });
    if (!response.ok) throw new Error(`Update failed: ${response.status}`);
    const [updated] = await response.json();
    reservations = reservations.map(item => item.id === updated.id ? updated : item);
    detailDialog.close(); renderList();
  } catch (error) { alert('状态保存失败，请稍后重试。'); }
  finally { button.disabled = false; button.textContent = 'SAVE STATUS / 保存状态'; }
}

loginForm.addEventListener('submit', async event => {
  event.preventDefault();
  const button = loginForm.querySelector('button'); button.disabled = true; button.textContent = 'CHECKING / 验证中';
  setLoginMessage('正在验证内部账号...');
  try {
    const response = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=password`, { method:'POST', headers:{ apikey:SUPABASE_PUBLISHABLE_KEY, 'Content-Type':'application/json' }, body:JSON.stringify({ email:document.querySelector('#email').value.trim(), password:document.querySelector('#password').value }) });
    if (!response.ok) throw new Error('Invalid credentials');
    saveSession(await response.json());
    if (!await verifyStaffAccess()) throw new Error('Unauthorized');
    showAdmin(); await loadReservations();
  } catch (error) { clearSession(); setLoginMessage('邮箱、密码错误，或该账号尚未获授权使用管理台。', 'error'); }
  finally { button.disabled = false; button.textContent = 'ENTER DESK / 进入管理台'; }
});
document.querySelector('#refresh').addEventListener('click', () => loadReservations().catch(() => alert('刷新失败，请稍后重试。')));
document.querySelector('#logout').addEventListener('click', () => { clearSession(); showLogin(); });
[statusFilter, productFilter, dateFilter].forEach(control => control.addEventListener('change', renderList));
reservationList.addEventListener('click', event => { const row = event.target.closest('[data-id]'); if (row) openDetail(row.dataset.id); });
document.querySelector('#closeDetail').addEventListener('click', () => detailDialog.close());
detailDialog.addEventListener('click', event => { if (event.target === detailDialog) detailDialog.close(); });
document.querySelector('#saveStatus').addEventListener('click', saveStatus);
(async () => { if (await ensureSession()) { showAdmin(); await loadReservations(); } else showLogin(); })();
