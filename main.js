function ticTacCtrl ($scope) {
	//blank gameboard array
	$scope.cells = [['','',''],['','',''],['','','']]; 
	$scope.xTurn={val:false};

	$scope.takeTurn = function(i, j) {
		$scope.cells[i][j] = ($scope.cells[i][j]=='' ? (($scope.xTurn.val = !$scope.xTurn.val) ? 'x' : 'o'): $scope.cells[i][j]);
		$scope.checkWin()
	}; //close takeTurn function

	$scope.checkWin = function() {
		for(var i=0; i<3; i++) {
			var row = 0;
			var col = 0;
			var diag1 = 0;
			var diag2 = 0;

			for(var j=0; j<3; j++) {

				if($scope.cells[i][j] == 'x') {row++};
				if($scope.cells[j][i] == 'x') {col++};
				if($scope.cells[j][j] == 'x') {diag1++};
				if($scope.cells[j][2-j] == 'x') {diag2++};
			}
			if (row == 3 || col == 3 || diag1 == 3 || diag2 == 3) {
					console.log('x WINS!')
			}
				// else {console.log('O WINS');}
		};














	}; //close checkWin function

	$scope.rightBorder = function(i,j) {
		if ((i==0 && j==0) || (i==0 && j==1) || (i==1 && j==0) || (i==1 && j==1) || (i==2 && j==0) || (i==2 && j==1)){
			return true; //assign rightBorder class
		}; 
	}; //close rightBorder

	$scope.bottomBorder = function(i,j) {
		if ((i==0 && j==0) || (i==0 && j==1) || (i==0 && j==2) || (i==1 && j==0) || (i==1 && j==1) || (i==1 && j==2)) {
			return true; //assign bottomBorder class
		};
		
	}; // close bottomBorder function


}; //close  ticTacCtrl function


// old javascript from week one
// var turn = 0;


// function init() {
// 	var cells = document.getElementsByClassName("cell");
// 	for (i in cells) {
// 		cells[i].onclick = takeTurn;
// 	}
// }


//  function takeTurn() {
//  	if (this.innerHTML == "&nbsp;"){
// 	 	if (turn%2 == 0) {
// 	 		this.innerHTML = "x";
// 	 	} else {
// 	 		this.innerHTML = "o";
// 	 	}
// 	 	turn++;
// 	 }
//  }