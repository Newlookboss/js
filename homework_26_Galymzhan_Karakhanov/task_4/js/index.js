function creatbox(size) {
  const board = document.createElement("div");
  board.style.display = "grid";
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  board.style.width = `${size * 20}px`;
  board.style.margin = "0 auto";
	board.style.height = `${size * 20}px`;
	board.style.border = '1px solid #000'
	


  for (let i = 0; i < size * size; i++) {
    const colorBord = document.createElement("div");
    colorBord.style.backgroundColor =
      (Math.floor(i / size) + i) % 2 === 0 ? "white" : "black";
			
    board.appendChild(colorBord);
  }
  return board;
}
