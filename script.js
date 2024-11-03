// 处理导航菜单切换
document.querySelector('.nav-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
});

// 处理作品集筛选
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', function() {
        // 移除所有按钮的 active 类
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        // 给当前点击的按钮添加 active 类
        this.classList.add('active');
        
        const filter = this.getAttribute('data-filter');
        const items = document.querySelectorAll('.photo-item');
        
        items.forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
}); 