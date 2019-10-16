import { StageComponent } from 'aurelia-testing';
import { bootstrap } from 'aurelia-bootstrapper';

describe('CategoryListComponent', () => {
    let component;

    beforeEach(() => {
        component = StageComponent
            .withResources('../../src/components/category-list/category-list-component')
            .inView('<category-list-component></category-list-component>')
            .boundTo({ firstName: 'Bob' });
    });

    it('should render first name', done => {
        component.create(bootstrap).then(() => {
            const nameElement = document.getElementById('category-list');
            expect(nameElement.innerHTML).toBe('Hello from category list');

            done();
        }).catch(e => { console.log(e.toString()) });
    });

    afterEach(() => {
        component.dispose();
    });
});

