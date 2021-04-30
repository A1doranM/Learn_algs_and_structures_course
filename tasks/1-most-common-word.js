function mostCommonWord(paragraph, banned) {
    let commonWord = new Map();
    let bannedSet = new Set(banned);
    if (paragraph) {
        for (let word in paragraph) {
            if (commonWord.has(word) && !bannedSet.has(word)) {
                let count = commonWord.get(word);
                commonWord.set(word, count++);
            } else {
                commonWord.set(word, 0);
            }
        }
    }

}