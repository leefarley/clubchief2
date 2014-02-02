requirejs.config({
    paths: {
        'text': '../lib/text',
        'durandal': '../lib/durandal',
        'plugins': '../lib/durandal/plugins',
        'transitions': '../lib/durandal/transitions',
        'knockout': '../lib/knockout-3.0.0',
        'jquery': '../lib/jquery-2.1.0'
    }
});


define(['durandal/system', 'durandal/app', 'durandal/viewLocator'], function (system, app, viewLocator) {

    system.debug(true);

    app.title = 'Club Chief';

    app.configurePlugins({
        router: true,
        dialog: true
    });

    app.start().then(function () {
        //Replace 'viewmodels' in the moduleId with 'views' to locate the view.
        //Look for partial views in a 'views' folder in the root.
        viewLocator.useConvention();

        app.setRoot('shell');
    });
});