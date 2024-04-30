// 获取音频元素
var audio = document.querySelector('.music-player audio');

// 设置默认音量为20%
audio.volume = 0.2;

// 当音频播放完毕时，等待4秒后重新播放
audio.addEventListener('ended', function() {
    setTimeout(function() {
        audio.currentTime = 0; // 重置播放时间到开始
        audio.play(); // 重新播放
    }, 4000); // 4秒后重新播放
}, 4000);
