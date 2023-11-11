document.addEventListener('DOMContentLoaded', function () {
    const changeTheme = document.getElementById('changeTheme');
    let clickCount = 0;
    changeTheme.addEventListener('click', function () {
        if(clickCount % 2 === 0) {
            document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color-dark');
            document.body.style.color = getComputedStyle(document.documentElement).getPropertyValue('--font-color-dark');
        } else {
            document.body.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--bg-color-light');
            document.body.style.color = getComputedStyle(document.documentElement).getPropertyValue('--font-color-light');
        }

        clickCount++;
    });
});