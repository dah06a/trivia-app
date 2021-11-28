export const decodeQuestions = dataArray => {
    dataArray.forEach(entry => {
        const decodedEntry = new DOMParser().parseFromString(entry.question, 'text/html');
        const decodedQuestion = decodedEntry.documentElement.textContent;
        entry.question = decodedQuestion;
    });
    return dataArray;
}
