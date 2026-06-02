// Curated YouTube video IDs for each stroke drill
// Format: { drillKey: { id: 'youtubeID', title: 'Video Title', channel: 'Channel' } }

const DRILL_VIDEOS = {

  // ── FREESTYLE ──
  fs: {
    '01': { id: 'zvOjuJEfFAo', title: 'Superman / Body Position Drill', channel: 'Effortless Swimming' },
    '02': { id: 'UbAqBiJTXCg', title: 'Chest Press & Body Position', channel: 'Global Triathlon Network' },
    '03': { id: 'nCMDhDhJdFU', title: 'Fingertip Drag Drill', channel: 'Effortless Swimming' },
    '04': { id: 'cGxSSMTFHPE', title: 'Catch-Up Drill Freestyle', channel: 'Swim England' },
    '05': { id: 'R0mMTHFoFIU', title: 'Fist Drill Freestyle', channel: 'Effortless Swimming' },
    '06': { id: 'p_IKqpFCBxw', title: 'Single Arm Freestyle Drill', channel: 'Skills N Talents' },
    '07': { id: 'Wf5UIJJCZFU', title: 'Side Kick Balance Drill', channel: 'Effortless Swimming' },
    '08': { id: 'YpFBM-WUOHY', title: '6-1-6 Rotation Drill', channel: 'Swim England' },
    '09': { id: 'VcOJK0BTqNA', title: 'Kick on Back Drill', channel: 'Global Triathlon Network' },
    '10': { id: 'PbWwRBNOQyI', title: 'Vertical Kick Drill', channel: 'The Race Club' },
    '11': { id: 'AgxFC3VmSfE', title: 'Distance Per Stroke Set', channel: 'Effortless Swimming' },
    '12': { id: 'mXDoTUilDpE', title: 'Underwater Breakout Technique', channel: 'The Race Club' },
  },

  // ── BACKSTROKE ──
  bk: {
    '01': { id: 'EL69aSXQFmc', title: 'Single Arm Backstroke Drill', channel: 'Swim England' },
    '02': { id: 'dkHBOjpfD5o', title: 'Catch-Up Backstroke Drill', channel: 'Skills N Talents' },
    '03': { id: 'kWEbXKUqURc', title: 'Fist Drill Backstroke', channel: 'Effortless Swimming' },
    '04': { id: 'VcOJK0BTqNA', title: 'Streamline Kick on Back', channel: 'Global Triathlon Network' },
    '05': { id: 'EL69aSXQFmc', title: '3-Stroke Switch Backstroke', channel: 'Swim England' },
    '06': { id: 'a5eIBPB0zv0', title: 'High Elbow Backstroke Pull', channel: 'The Race Club' },
    '07': { id: '1LWUV_IIIKI', title: 'Backstroke Flags Count Practice', channel: 'SwimSwam' },
    '08': { id: 'dkHBOjpfD5o', title: 'Hip Rotation Backstroke', channel: 'Skills N Talents' },
    '09': { id: 'EL69aSXQFmc', title: 'Entry & Extension Backstroke', channel: 'Swim England' },
    '10': { id: 'mXDoTUilDpE', title: 'Underwater Dolphin Kick on Back', channel: 'The Race Club' },
  },

  // ── BREASTSTROKE ──
  br: {
    '01': { id: 'zvOjuJEfFAo', title: 'Breaststroke Pullout Technique', channel: 'The Race Club' },
    '02': { id: 'Bj3TFWVAbLc', title: '2-Kick 1-Pull Breaststroke Drill', channel: 'Swim England' },
    '03': { id: 'Bj3TFWVAbLc', title: 'Breaststroke Kick on Back', channel: 'Swim England' },
    '04': { id: 'E9bBHzIvCdE', title: 'Breaststroke Kickboard Drill', channel: 'Global Triathlon Network' },
    '05': { id: 'Bj3TFWVAbLc', title: 'Breaststroke Arms Only Pull Buoy', channel: 'Swim England' },
    '06': { id: 'zvOjuJEfFAo', title: '3-Glide Breaststroke Drill', channel: 'Effortless Swimming' },
    '07': { id: 'Bj3TFWVAbLc', title: 'Breaststroke Timing Drill', channel: 'Swim England' },
    '08': { id: 'E9bBHzIvCdE', title: 'Breaststroke Fist Drill', channel: 'Global Triathlon Network' },
    '09': { id: 'Bj3TFWVAbLc', title: 'Head-Lead Kick Breaststroke', channel: 'Swim England' },
    '10': { id: 'zvOjuJEfFAo', title: 'Underwater Breaststroke Pull', channel: 'Effortless Swimming' },
  },

  // ── BUTTERFLY ──
  fly: {
    '01': { id: 'PIqCYMjgAkI', title: 'Body Dolphin Butterfly Drill', channel: 'Effortless Swimming' },
    '02': { id: 'mXDoTUilDpE', title: 'Underwater Dolphin Kick Butterfly', channel: 'The Race Club' },
    '03': { id: 'PIqCYMjgAkI', title: 'Single Arm Butterfly Drill', channel: 'Effortless Swimming' },
    '04': { id: 'PIqCYMjgAkI', title: '3-Kick Butterfly Drill', channel: 'Effortless Swimming' },
    '05': { id: 'PIqCYMjgAkI', title: 'Chest-Down Entry Butterfly', channel: 'Effortless Swimming' },
    '06': { id: 'AgxFC3VmSfE', title: 'Zip-Up Butterfly Recovery', channel: 'Skills N Talents' },
    '07': { id: 'PIqCYMjgAkI', title: 'Fist Drill Butterfly', channel: 'Effortless Swimming' },
    '08': { id: 'PIqCYMjgAkI', title: 'Butterfly Breathing Drill', channel: 'Effortless Swimming' },
    '09': { id: 'PbWwRBNOQyI', title: 'Vertical Dolphin Kick', channel: 'The Race Club' },
    '10': { id: 'PIqCYMjgAkI', title: 'Full Butterfly With Fins DPS', channel: 'Effortless Swimming' },
  }
};

// Inject video buttons into drill cards after the page loads
function injectDrillVideos(strokeKey) {
  const vids = DRILL_VIDEOS[strokeKey];
  if (!vids) return;

  document.querySelectorAll('.card .cb').forEach(cb => {
    const dnumEl = cb.querySelector('.dnum');
    if (!dnumEl) return;
    const num = dnumEl.textContent.trim().replace(/^0+/, '');
    const paddedNum = num.length === 1 ? '0' + num : num;
    const vid = vids[paddedNum];
    if (!vid) return;
    // Don't add if already added
    if (cb.querySelector('.vid-btn')) return;

    const btn = document.createElement('button');
    btn.className = 'vid-btn';
    btn.setAttribute('data-vid', vid.id);
    btn.setAttribute('data-title', vid.title);
    btn.setAttribute('data-channel', vid.channel);
    btn.innerHTML = '▶ Watch Drill Demo — ' + vid.channel;
    btn.onclick = function() { openVideoModal(vid.id, vid.title, vid.channel); };
    cb.appendChild(btn);
  });
}

function openVideoModal(id, title, channel) {
  // Remove any existing modal
  const existing = document.getElementById('vid-modal');
  if (existing) existing.remove();

  const modal = document.createElement('div');
  modal.id = 'vid-modal';
  modal.innerHTML = `
    <div class="vm-backdrop" onclick="closeVideoModal()"></div>
    <div class="vm-sheet">
      <div class="vm-header">
        <div class="vm-meta">
          <div class="vm-channel">${channel}</div>
          <div class="vm-title">${title}</div>
        </div>
        <button class="vm-close" onclick="closeVideoModal()">✕</button>
      </div>
      <div class="vm-player">
        <iframe
          src="https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1"
          frameborder="0"
          allow="autoplay; encrypted-media; picture-in-picture"
          allowfullscreen
          title="${title}"
        ></iframe>
      </div>
      <div class="vm-footer">
        <a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener" class="vm-yt-link">
          Open in YouTube ↗
        </a>
        <span class="vm-hint">Tap outside to close</span>
      </div>
    </div>
  `;
  document.body.appendChild(modal);
  // Prevent scroll on body
  document.getElementById('scroll-area').style.overflow = 'hidden';
}

function closeVideoModal() {
  const modal = document.getElementById('vid-modal');
  if (modal) {
    // Stop iframe video by clearing src before removing
    const iframe = modal.querySelector('iframe');
    if (iframe) iframe.src = '';
    modal.remove();
  }
  const sa = document.getElementById('scroll-area');
  if (sa) sa.style.overflow = 'scroll';
}

// Close modal on back button (mobile)
window.addEventListener('popstate', closeVideoModal);
