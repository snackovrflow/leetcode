function reverseWords(message) {

    // Decode the message by reversing the words
    reverseCharacters(message, 0, message.length - 1)
    
    let startIndex = 0;
    for (var i=0; i<=message.length; i++) {
      if (i === message.length || message[i] === ' ') {
        reverseCharacters(message, startIndex, i-1);
        startIndex = i+1;
      }
    }
  
}

function reverseCharacters(chars, leftIndex, rightIndex) {
    while (leftIndex < rightIndex) {
      let temp = chars[leftIndex];
      chars[leftIndex] = chars[rightIndex];
      chars[rightIndex] = temp;
      
      leftIndex++;
      rightIndex--;
    }
}