function createHourTicks(clockElem, clockRadius, gap) {
  const tickADistance = clockRadius - gap;
  for (let i = 0; i < 12; i++) {
    const pivot = document.createElement('div');
    pivot.className = 'pivot';
    pivot.style.transform = `translate(-50%, -50%) rotate(${i * 30}deg)`;

    const tick = document.createElement('div');
    tick.className = 'tick';
    tick.style.top = `-${tickADistance}px`;
    pivot.appendChild(tick);
    clockElem.appendChild(pivot);
  }
}

function createMinuteTicks(clockElem, clockRadius, gap) {
  const tickBDistance = clockRadius - gap;
  for (let i = 0; i < 60; i++) {
    if (i % 5 === 0) continue; // A와 겹치는 곳은 건너뜀
    const pivotB = document.createElement('div');
    pivotB.className = 'pivot';
    pivotB.style.transform = `translate(-50%, -50%) rotate(${i * 6}deg)`;

    const tickB = document.createElement('div');
    tickB.className = 'tickB';
    tickB.style.top = `-${tickBDistance}px`;
    pivotB.appendChild(tickB);
    clockElem.appendChild(pivotB);
  }
}

function createEquationLabels(clockElem, clockRadius, labelGap) {
  const eqLabelDistance = clockRadius - labelGap;
  for (let i = 0; i < 60; i++) {
    const pivotEq = document.createElement('div');
    pivotEq.className = 'pivot';
    pivotEq.style.transform = `translate(-50%, -50%) rotate(${i * 6}deg)`;

    const eqPivot = document.createElement('div');
    eqPivot.className = 'eq-pivot';
    eqPivot.style.top = `-${eqLabelDistance}px`;
    if (i < 30)
      eqPivot.style.rotate = '270deg';
    else
      eqPivot.style.rotate = '90deg';

    const eqLabel = document.createElement('div');
    eqLabel.className = 'eq-label';
    eqLabel.textContent = typeof mathEquationGenerator === 'function'
      ? mathEquationGenerator(i)
      : i;

    // 호버 효과 및 클릭 복사 기능 추가
    eqLabel.style.pointerEvents = 'auto';
    eqLabel.style.transition = 'background 0.2s, color 0.2s';
    const isKorean = navigator.language && navigator.language.startsWith('ko');
    eqLabel.title = isKorean ? '클릭하면 복사됩니다' : 'Click to copy';

    eqLabel.addEventListener('mouseenter', function () {
      eqLabel.style.color = '#ff0';
      eqLabel.style.fontSize = '1.2em';
    });
    eqLabel.addEventListener('mouseleave', function () {
      eqLabel.style.color = '';
      eqLabel.style.fontSize = '';
    });
    eqLabel.addEventListener('click', function (e) {
      e.stopPropagation();
      // 복사
      if (navigator.clipboard) {
        navigator.clipboard.writeText(eqLabel.textContent);
      } else {
        // fallback
        const textarea = document.createElement('textarea');
        textarea.value = eqLabel.textContent;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      eqLabel.style.background = '#444';
      setTimeout(() => {
        eqLabel.style.background = '';
      }, 300);
    });

    if (i >= 30)
      eqLabel.style.transform = 'translate(0%, -50%)';

    eqPivot.appendChild(eqLabel);
    pivotEq.appendChild(eqPivot);
    clockElem.appendChild(pivotEq);
  }
}

// 실행부
(function () {
  document.querySelectorAll('.pivot').forEach(e => e.remove());
  const clockElem = document.querySelector('.clock');
  const clockRadius = 300;
  const gap = 10;
  const labelGap = 30;

  createHourTicks(clockElem, clockRadius, gap);
  createMinuteTicks(clockElem, clockRadius, gap);
  createEquationLabels(clockElem, clockRadius, labelGap);
})();