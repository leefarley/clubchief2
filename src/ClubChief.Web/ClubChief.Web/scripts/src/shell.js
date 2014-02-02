define('shell',
    ['plugins/router'],
    function (router) {

        var activate = function () {
            return router.map([
                    { route: '', moduleId: 'viewmodels/home/index', title: 'Home', nav: true },
                    { route: 'clubs', moduleId: 'views/club/index', title: 'Clubs', nav: false }
                    //{ route: 'register', moduleId: 'account/register', title: 'Register', nav: false },
                    //{ route: 'view-composition', moduleId: 'viewComposition/index', title: 'View Composition', nav: true },
                    //{ route: 'modal', moduleId: 'modal/index', title: 'Modal Dialogs', nav: true },
                    //{ route: 'event-aggregator', moduleId: 'eventAggregator/index', title: 'Events', nav: true },
                    //{ route: 'widgets', moduleId: 'widgets/index', title: 'Widgets', nav: true },
                    //{ route: 'master-detail', moduleId: 'masterDetail/index', title: 'Master Detail', nav: true },
                    //{ route: 'knockout-samples*details', moduleId: 'ko/index', title: 'Knockout Samples', nav: true, hash: '#knockout-samples' }
            ]).buildNavigationModel()
                //.mapUnknownRoutes('hello/index', 'not-found')
                .activate();
        },

            logout = function () {
                $.post('/api/account/logout')
                 .done(window.location = location.href);
            };

        return {
            router: router,
            activate: activate,
            logout: logout
        };
    });