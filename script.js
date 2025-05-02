// 커스텀 커서
const cursor = document.querySelector('.cursor');
const imgSelected = document.querySelector('.img-selected');

document.addEventListener('DOMContentLoaded', function() {
    // 마우스 이동 시 커서 위치 업데이트
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // img-selected 영역에 마우스가 들어올 때
    imgSelected.addEventListener('mouseenter', () => {
        cursor.style.display = 'flex';
        cursor.innerHTML = 'GET INTO<br>DETAIL';
        cursor.classList.add('expanded');
    });

    // img-selected 영역에서 마우스가 나갈 때
    imgSelected.addEventListener('mouseleave', () => {
        cursor.classList.remove('expanded');
    });
});


// 서울 시간
function updateSeoulTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    
    document.querySelector('.hours').textContent = hours;
    document.querySelector('.minutes').textContent = minutes;
    document.querySelector('.seconds').textContent = seconds;
}

// 1초마다 updateSeoulTime 함수 호출
setInterval(updateSeoulTime, 1000);

// 페이지 로드 시 즉시 시간 표시
updateSeoulTime();


// 페이지 로드 완료 후 실행
window.onload = function() {

    // 서울 시간 초기화 및 업데이트
    updateSeoulTime();
    setInterval(updateSeoulTime, 1000);
};


// Quick Scroll 기능 구현
document.addEventListener('DOMContentLoaded', function() {
    // Quick Scroll 기능 구현
    const scrollText = document.querySelector('.scroll-text');
    
    if (scrollText) {
        scrollText.addEventListener('click', function() {
            // 부드러운 스크롤 효과로 페이지 최상단으로 이동
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});

// works detail 페이지 네비게이션
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.getElementById('prev-button-text');
    const nextButton = document.getElementById('next-button-text');

    if (prevButton && nextButton) {
        // URL에서 현재 페이지 번호 추출
        const currentPageNumber = parseInt(window.location.pathname.match(/(\d+)/)?.[1]) || 1;
        
        // 버튼 상태 업데이트
        function updateButtonStates() {
            // 첫 페이지에서는 prev 버튼 비활성화 (예: 총 36페이지)
            prevButton.disabled = currentPageNumber === 36;
            prevButton.style.opacity = currentPageNumber === 36 ? '0.2' : '1';
            prevButton.style.cursor = currentPageNumber === 36 ? 'default' : 'pointer';
            
            // 마지막 페이지에서는 next 버튼 비활성화
            nextButton.disabled = currentPageNumber === 1;
            nextButton.style.opacity = currentPageNumber === 1 ? '0.2' : '1';
            nextButton.style.cursor = currentPageNumber === 1 ? 'default' : 'pointer';
        }

        // 초기 버튼 상태 설정
        updateButtonStates();

        // next 버튼 클릭 이벤트
        nextButton.addEventListener('click', () => {
            if (currentPageNumber > 1) {
                window.location.href = `${currentPageNumber - 1}.html`;
            }
        });

        // prev 버튼 클릭 이벤트
        prevButton.addEventListener('click', () => {
            if (currentPageNumber < 36) {
                window.location.href = `${currentPageNumber + 1}.html`;
            }
        });
    }
});




