(function() {
    var currentPlayer = "player1";
    var endingRow = 0;

    (function() {
        $(".finn").addClass("now");
    })();

    $(".column").on("click", function(e) {
        var slotsInColumn = $(e.currentTarget).find(".slot");
        // loop throug the column and for both players and ocuppy the lowest empty slotsInColumn
        for (var i = 5; i >= 0; i--) {
            if (
                !slotsInColumn.eq(i).hasClass("player1") &&
                !slotsInColumn.eq(i).hasClass("player2")
            ) {
                slotsInColumn.eq(i).addClass(currentPlayer);
                endingRow = i + 1;
                break;
            }
        }
        if (i == -1) {
            return;
        }

        checkForVictory(slotsInColumn);
        checkForVictory($(".row" + endingRow));
        checkForDictory();

        function checkForVictory(slots) {
            var count = 0;
            for (var i = 0; i < slots.length; i++) {
                if (slots.eq(i).hasClass(currentPlayer)) {
                    count++;
                } else {
                    count = 0;
                }
                if (count == 4) {
                    Victory();
                }
            }
        }

        function checkForDictory() {
            for (var i = 0; i < diagonalArray.length; i++) {
                var count = 0;
                for (var j = 0; j < diagonalArray[i].length; j++) {
                    if (
                        $(".slot")
                            .eq(diagonalArray[i][j])
                            .hasClass(currentPlayer)
                    ) {
                        count++;
                    }
                }
                if (count == 4) {
                    Victory();
                }
            }
        }

        switchPlayers();
        console.log("playerschanged");
        console.log("Ending row is" + endingRow);
    });

    function switchPlayers() {
        if (currentPlayer == "player1") {
            currentPlayer = "player2";
            $(".jake").addClass("now");
            $(".finn").removeClass("now");
        } else {
            currentPlayer = "player1";
            $(".finn").addClass("now");
            $(".jake").removeClass("now");
        }
    }

    var diagonalArray = [
        [0, 7, 14, 21],
        [1, 8, 15, 22],
        [2, 9, 16, 23],
        [3, 8, 13, 18],
        [4, 9, 14, 19],
        [5, 10, 15, 20],
        [6, 13, 20, 27],
        [7, 14, 21, 28],
        [8, 15, 22, 29],
        [9, 14, 19, 24],
        [10, 15, 20, 25],
        [11, 16, 21, 26],
        [12, 19, 26, 33],
        [13, 20, 27, 34],
        [14, 21, 28, 35],
        [15, 20, 25, 30],
        [16, 21, 26, 31],
        [17, 22, 27, 32],
        [18, 25, 32, 39],
        [19, 26, 33, 40],
        [20, 27, 34, 41],
        [21, 26, 31, 36],
        [22, 27, 32, 37],
        [23, 28, 33, 38]
    ];

    function Victory() {
        $(".finn").addClass("off");
        $(".jake").addClass("off");

        if (currentPlayer == "player1") {
            $("#victoryScreenA").addClass("on");
            $("#victoryF").addClass("on");
        } else {
            $("#victoryScreenB").addClass("on");
            $("#victoryJ").addClass("on");
        }

        $(".player1").removeClass("player1");
        $(".player2").removeClass("player2");
    }

    $(".playAgain").on("click", function() {
        $("#victoryScreenA").removeClass("on");
        $("#victoryScreenB").removeClass("on");
        $("#victoryF").removeClass("on");
        $("#victoryJ").removeClass("on");
        $(".finn").removeClass("off");
        $(".jake").removeClass("off");
    });
})();
