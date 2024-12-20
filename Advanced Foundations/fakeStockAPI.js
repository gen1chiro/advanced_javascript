export function getStockData() {
    const time = new Date();
    
    return {
        name: 'QtechAI',
        sym: 'QTA',
        price: (Math.random() * 3).toFixed(2), 
        time: `${time.getHours()}/${time.getHours()}/${time.getSeconds()}`
    }
}
