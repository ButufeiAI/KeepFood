<?php
use Cake\Routing\RouteBuilder;
use Cake\Routing\Route\DashedRoute;

return function (RouteBuilder $routes): void {
    $routes->setRouteClass(DashedRoute::class);

    $routes->scope('/', function (RouteBuilder $builder): void {
        // Home page (base path)
        $builder->connect('/', ['controller' => 'Pages', 'action' => 'display', 'index']);

        // Dynamic page routes: /index, /about, /contact
        $builder->connect('/*', ['controller' => 'Pages', 'action' => 'display']);

        // Optional fallback
        $builder->fallbacks();
    });
};
