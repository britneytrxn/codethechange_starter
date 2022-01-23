export function calculateWinner(squares) {
  // TODO: Given a game board, calculate the winner.
  // If there is no winner, you can return null.

  // all possible solutions
  const lines = [[0,1,2], [3,4,5], [6,7,8], [0,4,8], [2,4,6], [0,3,6], [1,4,7], [2,5,8]]; 
  for (let i = 0; i < lines.length; i++){
    const [a,b,c] = lines[i]; 
      if (squares[a] === squares[b] && (squares[b] === squares[c]) && squares[a]){
        return squares[a];
      }
    }
  return null; 
}
