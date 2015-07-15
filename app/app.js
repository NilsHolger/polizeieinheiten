var policeApp = angular.module("policeSharingApp", ["ngRoute"]);
policeApp.config(function ($routeProvider) {
    $routeProvider
    .when("/policeunits", { controller: "PoliceUnitListController", templateUrl: "app/partials/police_unit_list_partial.html" })
    .when("/policeunit/:policeunit_name", { controller: "PoliceUnitViewController", templateUrl: "app/partials/police_unit_view_partial.html" })
    .when("/", { redirectTo: "/policeunits" })
    .when("/404_page", { controller: "FOFPageController", templateUrl: "app/partials/404_page_partial.html" })
    .otherwise({ redirectTo: "/404_page" });
});