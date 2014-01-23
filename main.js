function ticTacCtrl ($scope) {
	//blank gameboard array
	$scope.cells = [['','',''],['','',''],['','','']]; 
	$scope.xTurn={val:false};

	$scope.takeTurn = function(i, j) {
		$scope.cells[i][j] = ($scope.cells[i][j]=='' ? (($scope.xTurn.val = !$scope.xTurn.val) ? 'x' : 'o'): $scope.cells[i][j]);
		for (var x = 0; x < $scope.cells.length; x++) {
			console.log($scope.cells[x]);
			if ( checkWin(row(x)) || checkWin(col(x)) ) {
				console.log($scope.cells[i][j] + " wins!");
				break;
			} else if ( checkWin(diagOne()) ) {
				console.log($scope.cells[i][j] + " wins!");
				break;
			} else if ( checkWin(diagTwo()) ) {
				console.log($scope.cells[i][j] + " wins!");
				break;
			}
		};
	}; //close takeTurn function





	function checkWin(triplet) {
			return (triplet[0] == triplet[1] && triplet[0] == triplet[2] && triplet[0] != "");
	};
	function row(r) {
		return( $scope.cells[r] );
	};
	function col(c) {
		return ([$scope.cells[0][c], $scope.cells[1][c], $scope.cells[2][c]]);
	};
	function diagOne() {
		return ([$scope.cells[0][0], $scope.cells[1][1], $scope.cells[2][2]]);
	};
	function diagTwo() {
		return ([$scope.cells[0][2], $scope.cells[1][1], $scope.cells[2][0]]);
	};







	// $scope.checkWin = function() {
			
	// 	for(var i=0; i<3; i++) {
	// 		var row = 0;
	// 		var col = 0;
	// 		var diag1 = 0;
	// 		var diag2 = 0;
			

	// 		for(var j=0; j<3; j++) {

	// 			if($scope.cells[i][j] == 'x') {row++};
	// 			if($scope.cells[j][i] == 'x') {col++};
	// 			if($scope.cells[j][j] == 'x') {diag1++};
	// 			if($scope.cells[j][2-j] == 'x') {diag2++};
	// 			console.log ("row: " + row + "; col: " + col + "; diag1: " + diag1 + "; diag2: " + diag2)
	// 			if (row == 3 || col == 3 || diag1 == 3 || diag2 == 3) {
	// 				console.log('x WINS!')
	// 				break;
	// 		}

	// 	}
		
	// 	}
	// }; //close checkWin function




// $scope.checkWin = function () {
// 		// $scope.winAry = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]
// 		for (var i = 0; i < 8; i++) {
// 			if ($scope.cells[i][0]] == $scope.cells[i][1]] && $scope.cells[i][0]] == $scope.cells[i][2]] && $scope.cells[i][0]] !== "") {
// 					$scope.winner = "winner!";
// 					break;
// 				}
// 			 
// 			// };
// 		}

// 	};






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


}; 