function firstWord(s) {

	  s = s.trim();

    // Find the index of the first space
    const spaceIndex = s.indexOf(' ');

    // If no space is found, return the entire string
    if (spaceIndex === -1) {
        return s;
    }

    // Otherwise, return the substring before the first space
    return s.slice(0, spaceIndex);
  // your code here
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
