function CardCtrl($scope) {
	$scope.card = {
		player: { id: 1, name: "Bill" },
		question: { id: 2, text: "To live a healthy life, #PLAYER# likes to" },
		answers: [
			{ id: 3, text: "Kayak"},
			{ id: 4, text: "Run"},
			{ id: 5, text: "Climb Mountains" }
		]
	};

	$scope.question = function() {
		var q = $scope.card.question;
		var p = $scope.card.player;
		return q.text.replace(/#PLAYER#/,p.name);
	};

	$scope.guess = function(answer) {
		alert("For " + $scope.card.player.name + ", you guessed '" + answer.text + "'");
	};
}