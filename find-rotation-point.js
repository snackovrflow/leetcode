

function findRotationPoint(words) {

    // Find the rotation point in the vector
    const firstWord = words[0];
    
    let floorIndex = 0;
    let ceilingIndex = words.length - 1;
    
    while (floorIndex < ceilingIndex) {
      let halfwayIndex = Math.floor((ceilingIndex-floorIndex)/2)
      const guessIndex = floorIndex + halfwayIndex;
      
      if (words[guessIndex] >= words[floorIndex]) {
        floorIndex = guessIndex;
      } else {
        ceilingIndex = guessIndex;
      }
      if (floorIndex + 1 === ceilingIndex) {
        break
      }
    }
    
  
  
    return ceilingIndex;
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // Tests
  
  let desc = 'small array';
  let actual = findRotationPoint(['cape', 'cake']);
  let expected = 1;
  assertEquals(actual, expected, desc);
  
  desc = 'medium array';
  actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
  expected = 4;
  assertEquals(actual, expected, desc);
  
  desc = 'large array';
  actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
    'undulate', 'xenoepist', 'asymptote',
    'babka', 'banoffee', 'engender',
    'karpatka', 'othellolagkage']);
  expected = 5;
  assertEquals(actual, expected, desc);
  
  function assertEquals(a, b, desc) {
    if (a === b) {
      console.log(`${desc} ... PASS`);
    } else {
      console.log(`${desc} ... FAIL: ${a} != ${b}`);
    }
  }