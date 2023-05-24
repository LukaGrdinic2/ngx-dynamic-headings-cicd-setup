export function extractNumberFromString(word: string): number {
  const regex = /\d+/;
  const matches = word.match(regex);

  if (matches && matches.length > 0) {
    const extractedNumber = parseInt(matches[0], 10);

    if (!isNaN(extractedNumber)) {
      return extractedNumber;
    }
  }

  return 0; // Return 0 if no number was found or if the extracted value is NaN
}

export function getSortedHeadings(): Element[] {
  const headings = Array.from(
    document.querySelectorAll('h1, h2, h3, h4, h5, h6')
  );

  return headings.sort((a, b) => {
    const aLevel = parseInt(a.tagName.substring(1), 10);
    const bLevel = parseInt(b.tagName.substring(1), 10);

    return aLevel > bLevel ? -1 : 1;
  });
}
