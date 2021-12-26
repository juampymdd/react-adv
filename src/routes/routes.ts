import { lazy, LazyExoticComponent } from 'react'
import NoLazy from '../01-lazyload/pages/NoLazy';

type JSXComponent = () => JSX.Element

interface Route {
    to: string;
    path: string;
    Component: LazyExoticComponent<JSXComponent> | JSXComponent;
    name: string;
}

const LazyLayout = lazy(() => import(/* webpackChunkName: LazyLayout */'../01-lazyload/layout/LazyLayout'))
//const NoLazy = lazy(() => import(/* webpackChunkName: Lazy2 */'../01-lazyload/pages/NoLazy'))
//const Lazy3 = lazy(() => import(/* webpackChunkName: Lazy3 */'../01-lazyload/pages/LazyPage3'))

export const routes: Route[] = [
    {
        path: '/LazyLayout/*',
        to: '/LazyLayout/',
        Component: LazyLayout,
        name: 'LazzyLayout - Dash'
    },
    {
        path: 'no-lazy',
        to: '/no-lazy',
        Component: NoLazy,
        name: 'No Lazy'
    },
]