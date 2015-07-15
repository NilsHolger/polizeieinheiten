
(function () {
    function PoliceUnitListController($scope) {
        $scope.adding_policeunit = {};
        $scope.add_policeunit_error = "";
        $scope.policeUnits = [{ name: 'Schutzpolizei', title: 'Schutzpolizei', date: '2015-07-13', description: 'Polizisten in Uniform und in Streifenwagen sind Teil des alltäglichen Straßenbildes in Deutschland.' },
     { name: 'Verkehrspolizei', title: 'Verkehrspolizei', date: '2015-07-14', description: 'Im Fokus steht dabei die Überwachung des Verkehrs, egal ob ruhend oder stehend.' },
     { name: 'Kriminalpolizei', title: 'Kriminalpolizei', date: '2015-07-15', description: 'Mord-, und in besonders schweren Fällen, Sonderkommissionen, kümmern sich um Kapitaldelikte. Darunter fallen Tötungsdelikte, Ermittlungen nach Bränden, Erpressungen oder Raub.' },
     { name: 'Wasserschutzpolizei', title: 'Wasserschutzpolizei', date: '2015-07-16', description: 'Die Wasserschutzpolizei überprüft im Rahmen ihrer Aufgaben die Einhaltung von See- und Binnenschifffahrtsvorschriften.' },
     { name: 'Bereitschaftspolizei', title: 'Bereitschaftspolizei', date: '2015-07-17', description: 'Demonstrationen, Volksfeste oder Fußballspiele – Bei manchen Veranstaltungen ist der massive Einsatz von Polizeikräften erforderlich, um die Sicherheit und den ordnungsgemäßen Ablauf zu garantieren. Dies ist in der Regel Aufgabe der Bereitschaftspolizei.' },
     { name: 'Sondereinheiten', title: 'Sondereinheiten', date: '2015-07-18', description: 'Vornehmliche Aufgabe des SEK ist die Festnahme von Straftätern, die als gefährlich eingestuft werden.' }
        ];

        $scope.addPoliceUnit = function (new_policeunit) {

            if (!new_policeunit.title)
                $scope.add_policeunit_error = "Der Titel fehlt.";
            else if (!new_policeunit.date || !is_valid_date(new_policeunit.date))
                $scope.add_policeunit_error = "Datum fehlt oder zu kurz.";
            else if (!new_policeunit.description)
                $scope.add_policeunit_error = "Die Beschreibung fehlt.";
            else if (!new_policeunit.name)
                $scope.add_policeunit_error = "Der Name fehlt.";
            else {
                $scope.policeUnits.push(new_policeunit);
                $scope.adding_policeunit = {};
                $scope.add_policeunit_error = "";
            }
        };
    }

    policeApp.controller("PoliceUnitListController", PoliceUnitListController);

    function is_valid_date(the_date) {
        if (the_date.match(/^[0-9]{2,4}[\-\/\. ,][0-9]{1,2}[\-\/\. ,][0-9]{1,2}$/)) {
            //var d = new Date(the_date);
            //return !isNaN(d.getTime());
            return true
        } else {
            return false;
        }
    }

})();