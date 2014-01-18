function ticTacCtrl ($scope) {
	//blank gameboard array
	$scope.cells = [['','',''],['','',''],['','','']]; 
	$scope.xTurn={val:false};

	$scope.takeTurn = function(i, j) {
		// angular.forEach($scope.cells)
		$scope.cells[i][j] = ($scope.cells[i][j]=='' ? (($scope.xTurn.val = !$scope.xTurn.val) ? 'X' : 'O'): $scope.cells[i][j]);
	}; //close takeTurn function

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