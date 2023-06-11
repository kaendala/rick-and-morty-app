import { render,screen} from '@testing-library/react'
import  Detail  from './Detail'
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import characters from '../../data/data.json'


describe('Detail test', () => {
    it('should  whitout info', async () => {
        const mockStore = configureMockStore();
        const store = mockStore({
            characters: {
                currentSelect: null,
            },
        });
         render( <Provider store={store}>
        <Detail />
        </Provider>);
        expect(screen.getByText("No Selected Character")).toBeInTheDocument();
    });
    it('should  whit info', async () => {
        const mockStore = configureMockStore();
        const store = mockStore({
            characters: {
                currentSelect: characters.results[0],
            },
        });
         render( <Provider store={store}>
        <Detail />
        </Provider>);
        expect(screen.getByText("Morty Smith")).toBeInTheDocument();
    });
})
    
