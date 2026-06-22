document.addEventListener('DOMContentLoaded', function() {
    
    // 1. تنظیم چارت اصلی (Ethereum - Candle style simulation with Line)
    const ctxMain = document.getElementById('mainChart').getContext('2d');
    const gradient = ctxMain.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(74, 144, 226, 0.3)');
    gradient.addColorStop(1, 'rgba(74, 144, 226, 0)');

    new Chart(ctxMain, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'ETH Price',
                data: [180, 190, 220, 210, 240, 235, 260, 250, 280, 270, 300, 254],
                borderColor: '#4a90e2',
                backgroundColor: gradient,
                borderWidth: 2,
                pointRadius: 0,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#666' }
                },
                y: {
                    grid: { color: 'rgba(255,255,255,0.05)' },
                    ticks: { color: '#666', callback: function(value) { return '$' + value; } }
                }
            }
        }
    });

    // 2. تنظیم چارت کوچک (Your Assets)
    const ctxAssets = document.getElementById('assetsChart').getContext('2d');
    new Chart(ctxAssets, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Assets',
                data: [12, 19, 13, 22, 18, 26],
                backgroundColor: '#4a90e2',
                borderRadius: 5,
                barThickness: 12
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: {
                x: { grid: { display: false }, ticks: { color: '#666' } },
                y: { grid: { display: false }, ticks: { display: false } }
            }
        }
    });
});
