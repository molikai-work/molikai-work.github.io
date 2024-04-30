// 获取音频元素
var audio = document.querySelector('.music-player audio');

// 设置默认音量为20%
audio.volume = 0.2;

// 检查是否存在隐藏音频的Cookie
var hideAudio = getCookie('hideAudio');
if (hideAudio === 'true') {
    audio.style.display = 'none'; // 隐藏音频元素
}

// 当音频播放完毕时，等待4秒后重新播放
audio.addEventListener('ended', function() {
    setTimeout(function() {
        audio.currentTime = 0; // 重置播放时间到开始
        audio.play(); // 重新播放
    }, 4000); // 4秒后重新播放
}, 4000);

// 鼠标右键点击事件监听
document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // 阻止默认的右键菜单行为
    toggleAudioVisibility(); // 切换音频元素的显示状态
});

// 切换音频元素的显示状态
function toggleAudioVisibility() {
    if (audio.style.display === 'none') {
        audio.style.display = 'block'; // 显示音频元素
        setCookie('hideAudio', 'false', 365); // 记录Cookie，显示音频元素
    } else {
        audio.style.display = 'none'; // 隐藏音频元素
        setCookie('hideAudio', 'true', 365); // 记录Cookie，隐藏音频元素
    }
}

// 设置Cookie
function setCookie(name, value, days) {
    var expires = '';
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = '; expires=' + date.toUTCString();
    }
    document.cookie = name + '=' + (value || '') + expires + '; path=/';
}

// 获取Cookie
function getCookie(name) {
    var nameEQ = name + '=';
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
}
