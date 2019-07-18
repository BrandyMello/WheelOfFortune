class Puzzle {
  constructor(puzzle) {
    this.puzzle = puzzle;
    this.category = puzzle['category'];
    this.numberOfWords = puzzle['number_of_words'];
    this.firstWord = puzzle['first_word'];
    this.description = puzzle['description'];
    this.correctAnswer = puzzle['correct_answer'];
  }
}

export default Puzzle;
