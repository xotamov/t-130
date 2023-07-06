function romain(rom) {
    const map = [
      { arab: 1000, rim: 'M' },
      { arab: 900, rim: 'CM' },
      { arab: 500, rim: 'D' },
      { arab: 400, rim: 'CD' },
      { arab: 100, rim: 'C' },
      { arab: 90, rim: 'XC' },
      { arab: 50, rim: 'L' },
      { arab: 40, rim: 'XL' },
      { arab: 10, rim: 'X' },
      { arab: 9, rim: 'IX' },
      { arab: 5, rim: 'V' },
      { arab: 4, rim: 'IV' },
      { arab: 1, rim: 'I' }
    ];
  
    let result = '';
  
    for (let i = 0; i < map.length; i++) {
      while (rom >= map[i].arab) {
        result += map[i].rim;
        rom -= map[i].arab;
      }
    }
    alert('Ответ!'+ '  ' + result) 
  }
  
console.log(
    romain(prompt('Введите арабское число:').toUpperCase()),
);
