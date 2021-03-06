import { createElement } from 'react';
import { hydrate, render } from 'react-dom';
import { DataSource } from 'relaks-django-data-source';
import { RouteManager } from 'relaks-route-manager';
import { harvest } from 'relaks-harvest';
import { plant } from 'relaks';
import { FrontEnd } from './front-end.jsx';
import { routes } from './routing.js';

window.addEventListener('load', initialize);

const basePath = '/starwars';

async function initialize(evt) {
    // create data source
    const host = `${location.protocol}//${location.host}`;
    const dataSource = new DataSource({
        baseURL: `${host}${basePath}/api`,
    });
    dataSource.activate();

    // create route manager
    const routeManager = new RouteManager({
        routes,
        basePath,
    });
    routeManager.activate();
    await routeManager.start();

    const container = document.getElementById('react-container');
    const ssrElement = createElement(FrontEnd, { dataSource, routeManager, ssr: 'hydrate' });
    const seeds = await harvest(ssrElement, { seeds: true });
    plant(seeds);
    hydrate(ssrElement, container);

    const csrElement = createElement(FrontEnd, { dataSource, routeManager });
    render(csrElement, container);
}
