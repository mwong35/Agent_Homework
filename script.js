const progress = document.querySelector('.progress span');
window.addEventListener('scroll', () => {
  const top = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  progress.style.width = `${(top / height) * 100}%`;
});

const modal = document.getElementById('prototypeModal');
const openModal = () => { modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); document.body.style.overflow = 'hidden'; };
const closeModal = () => { modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); document.body.style.overflow = ''; };
document.getElementById('prototypeBtn').addEventListener('click', openModal);
document.querySelector('.close-modal').addEventListener('click', closeModal);
document.querySelector('.modal-backdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.querySelectorAll('.iter-item').forEach(item => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.iter-item').forEach(el => el.classList.remove('active'));
    item.classList.add('active');
    document.getElementById('iterText').textContent = item.dataset.text;
    document.getElementById('iterTitle').textContent = `${item.querySelector('span').textContent} / ${item.dataset.title}`;
  });
});

document.querySelector('.menu-btn').addEventListener('click', e => {
  const btn = e.currentTarget;
  const open = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!open));
  document.querySelector('.topbar-meta').style.display = open ? '' : 'flex';
});
