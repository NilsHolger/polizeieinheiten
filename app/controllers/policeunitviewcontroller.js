(function () {

    function PoliceUnitViewController($scope, $routeParams) {
        $scope.load_error_text = "";
        $scope.policeunit_name = $routeParams.policeunit_name;

        var photos = {
            "Bereitschaftspolizei": [
            {
                filename: "bereitschaftspolizei-01.png",
                description: "Demonstrationen, Volksfeste oder Fußballspiele – Bei manchen Veranstaltungen ist der massive Einsatz von Polizeikräften erforderlich, um die Sicherheit und den ordnungsgemäßen Ablauf zu garantieren. Dies ist in der Regel Aufgabe der Bereitschaftspolizei."
            },
                {
                    filename: "bereitschaftspolizei-02.jpg",
                    description: " Ihre ureigenste Aufgabe ist die Unterstützung der Landespolizei. Insbesondere bei Großlagen und Großveranstaltungen greift sie der Landespolizei unter die Arme und hilft mit der Bereitstellung von Personal, sowie von Führungs- und Einsatzmittel aus. Auch bei der Kriminalitätsbekämpfung, bspw. Razzien, und bei der Gewährleistung der Verkehrssicherheit leistet sie mit ihren speziell ausgestatteten und ausgebildeten Einheiten wertvolle Unterstützung."
                }
            ],
            "Kriminalpolizei": [
            {
                filename: "kriminalpolizei-01.png",
                description: "Die Kriminalpolizei ist grundsätzlich für die Verfolgung von Straftaten zuständig."
            },
                {
                    filename: "kriminalpolizei-02.jpg",
                    description: "Sexuelle Straftaten, Vermisstenfälle, Bandendelikte (Drogenhandel, Glücksspiel, organisierte Kriminalität), Delikte von und zum Nachteil von Kindern und Jugendlichen, Wirtschaftskriminalität (Betrug, Korruption) weitere Schwerpunkte bei der Arbeit der Kriminalpolizei."
                }
            ],
            "Schutzpolizei": [
            {
                filename: "schutzpolizei-01.png",
                description: "Die Schutzpolizisten haben wahrscheinlich den abwechslungsreichsten Arbeitsalltag unter den Polizisten und müssen immer wieder auf neue Situationen angemessen reagieren."
            },
                {
                    filename: "schutzpolizei-02.jpg",
                    description: "Eine der wichtigsten Aufgaben ist die Gewährleistung der öffentlichen Sicherheit und Ordnung. Dies erreicht die Schutzpolizei schon durch präventive Maßnahmen wie den Streifendienst."
                }
            ],
            "Sondereinheiten": [
            {
                filename: "sondereinheiten-01.png",
                description: "Trotz aller Sicherheitsanstrengungen können auch Situationen entstehen, in denen eigens geschulte Kräfte zum Einsatz kommen, besonders wenn heikle Gefahrensituationen zu meistern sind. Dann wird auf ein Spezialeinsatzkommando (SEK) zurückgegriffen."
            },
                {
                    filename: "sondereinheiten-02.jpg",
                    description: " Das in der öffentlichen Wahrnehmung bekannteste SEK ist die GSG9. Sie ist jedoch abweichend in die Bundespolizei integriert.Vornehmliche Aufgabe des SEK ist die Festnahme von Straftätern, die als gefährlich eingestuft werden."
                }
            ],
            "Verkehrspolizei": [
            {
                filename: "verkehrspolizei-01.png",
                description: "Der Aufgabenbereich des Verkehrspolizisten hat sich auch durch die moderne Technik in den letzten 100 Jahren stark gewandelt."
            },
                {
                    filename: "verkehrspolizei-02.jpg",
                    description: "Im Fokus steht dabei die Überwachung des Verkehrs, egal ob ruhend oder stehend. Dazu zählen die Kontrolle der Fahrzeuge, der Fahrzeugführer und der Beladung. Hier werden die Verkehrssicherheit der Fahrzeuge, die Ordnungsmäßigkeit der Fahrzeugpapiere von Fahrzeug und Fahrzeugführer, die Fahrtüchtigkeit des Fahrers und die ordnungsgemäße Sicherung der Ladung unter die Lupe genommen."
                }
            ],
            "Wasserschutzpolizei": [
            {
                filename: "wasserschutzpolizei-01.png",
                description: "Nicht nur auf dem Lande gilt es Gesetze zu beachten, auch auf dem Wasser ist dies notwendig. Dazu gibt es die Wasserschutzpolizei."
            },
                {
                    filename: "wasserschutzpolizei-02.jpg",
                    description: "Der Zuständigkeitsbereich erstreckt sich dabei auf schiffbare Wasserstraßen und deren Uferbereich, sowie auf Häfen und Schleusen. In den norddeutschen Bundesländern operiert die Wasserschutzpolizei zusätzlich bis an den Rand der 12-Meilen-Zone auf der Nordsee, der Außengrenze der Bundesrepublik."
                }
            ]
        };

        if (photos[$scope.policeunit_name]) {
            $scope.photos = photos[$scope.policeunit_name];
        } else {
            $scope.load_error_text = "Eine Einheit dieses Namens konnte nicht gefunden werden.";
        }


    }

    policeApp.controller("PoliceUnitViewController", PoliceUnitViewController);
})();



